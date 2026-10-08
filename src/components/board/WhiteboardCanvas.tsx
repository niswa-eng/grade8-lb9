import React, { useRef, useEffect, useCallback } from 'react';
import { WhiteboardStroke, StrokePoint, ToolType } from '../../types/content';

interface WhiteboardCanvasProps {
  isDrawMode: boolean;
  tool: ToolType;
  color: string;
  width: number;
  dashed: boolean;
  strokes: WhiteboardStroke[];
  onStrokesChange: (strokes: WhiteboardStroke[]) => void;
}

export const WhiteboardCanvas: React.FC<WhiteboardCanvasProps> = ({
  isDrawMode,
  tool,
  color,
  width,
  dashed,
  strokes,
  onStrokesChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const activePointerId = useRef<number | null>(null);
  const hasSeenPen = useRef(false);
  const currentPoints = useRef<StrokePoint[]>([]);

  // Redraw entire canvas
  const redrawAll = useCallback(
    (extraStroke?: WhiteboardStroke) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      const renderStroke = (s: WhiteboardStroke) => {
        if (!s.points || s.points.length === 0) return;
        ctx.save();
        ctx.beginPath();

        if (s.dashed) {
          ctx.setLineDash([12, 8]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.strokeStyle = s.color;
        ctx.fillStyle = s.color;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const strokeWidth =
          s.tool === 'highlighter' ? s.width * 3.5 : s.width;
        ctx.lineWidth = strokeWidth;

        if (s.tool === 'highlighter') {
          ctx.globalAlpha = 0.35;
          ctx.lineCap = 'square';
        } else {
          ctx.globalAlpha = 1.0;
        }

        const pts = s.points;

        if (s.tool === 'line') {
          if (pts.length >= 2) {
            const start = pts[0];
            const end = pts[pts.length - 1];
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
          }
        } else if (s.tool === 'rect') {
          if (pts.length >= 2) {
            const start = pts[0];
            const end = pts[pts.length - 1];
            ctx.strokeRect(
              start.x,
              start.y,
              end.x - start.x,
              end.y - start.y
            );
          }
        } else if (s.tool === 'circle') {
          if (pts.length >= 2) {
            const start = pts[0];
            const end = pts[pts.length - 1];
            const rx = Math.abs(end.x - start.x) / 2;
            const ry = Math.abs(end.y - start.y) / 2;
            const cx = (start.x + end.x) / 2;
            const cy = (start.y + end.y) / 2;
            ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else {
          // Pen or highlighter (smooth curve through midpoints)
          if (pts.length === 1) {
            ctx.arc(pts[0].x, pts[0].y, strokeWidth / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length - 1; i++) {
              const midX = (pts[i].x + pts[i + 1].x) / 2;
              const midY = (pts[i].y + pts[i + 1].y) / 2;
              ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY);
            }
            ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
            ctx.stroke();
          }
        }

        ctx.restore();
      };

      for (const stroke of strokes) {
        renderStroke(stroke);
      }

      if (extraStroke) {
        renderStroke(extraStroke);
      }

      ctx.restore();
    },
    [strokes]
  );

  // Resize canvas to match display size
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.floor(rect.width * dpr);
    const height = Math.floor(rect.height * dpr);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      redrawAll();
    }
  }, [redrawAll]);

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [updateCanvasSize]);

  useEffect(() => {
    redrawAll();
  }, [strokes, redrawAll]);

  // Check distance from point to line segment
  const distToSegment = (
    px: number,
    py: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  };

  // Erase stroke if point is near
  const eraseNear = (x: number, y: number) => {
    const eraseRadius = 24;
    const remaining = strokes.filter((stroke) => {
      const pts = stroke.points;
      if (pts.length === 1) {
        return Math.hypot(pts[0].x - x, pts[0].y - y) > eraseRadius + stroke.width;
      }
      for (let i = 0; i < pts.length - 1; i++) {
        const d = distToSegment(
          x,
          y,
          pts[i].x,
          pts[i].y,
          pts[i + 1].x,
          pts[i + 1].y
        );
        if (d <= eraseRadius + stroke.width / 2) {
          return false; // Erase this stroke
        }
      }
      return true;
    });

    if (remaining.length !== strokes.length) {
      onStrokesChange(remaining);
    }
  };

  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure || 0.5,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawMode) return;

    // Palm rejection: If hardware stylus has been detected, ignore touch inputs
    if (e.pointerType === 'pen') {
      hasSeenPen.current = true;
    } else if (hasSeenPen.current && e.pointerType === 'touch') {
      return;
    }

    // Ignore large contact area (palm resting)
    if (e.width > 42 && e.height > 42) {
      return;
    }

    // Only allow single active pointer at a time
    if (activePointerId.current !== null) {
      return;
    }

    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    activePointerId.current = e.pointerId;
    isDrawing.current = true;

    const coords = getCanvasCoords(e);

    if (tool === 'eraser') {
      eraseNear(coords.x, coords.y);
      return;
    }

    currentPoints.current = [coords];
    const previewStroke: WhiteboardStroke = {
      id: `stroke_${Date.now()}`,
      tool,
      color,
      width,
      dashed,
      points: currentPoints.current,
    };
    redrawAll(previewStroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawMode || !isDrawing.current) return;
    if (e.pointerId !== activePointerId.current) return;

    e.preventDefault();
    const coords = getCanvasCoords(e);

    if (tool === 'eraser') {
      eraseNear(coords.x, coords.y);
      return;
    }

    // Snap to axis for line helper if Shift is pressed or close to horizontal/vertical
    if (tool === 'line' && currentPoints.current.length > 0) {
      const start = currentPoints.current[0];
      const dx = coords.x - start.x;
      const dy = coords.y - start.y;
      const angle = Math.atan2(Math.abs(dy), Math.abs(dx)) * (180 / Math.PI);

      let finalX = coords.x;
      let finalY = coords.y;

      // Snap if close to horizontal (0 deg) or vertical (90 deg) or 45 deg
      if (angle < 8) {
        finalY = start.y;
      } else if (angle > 82) {
        finalX = start.x;
      } else if (Math.abs(angle - 45) < 6) {
        const signX = dx >= 0 ? 1 : -1;
        const signY = dy >= 0 ? 1 : -1;
        const avg = (Math.abs(dx) + Math.abs(dy)) / 2;
        finalX = start.x + signX * avg;
        finalY = start.y + signY * avg;
      }

      currentPoints.current = [start, { x: finalX, y: finalY, pressure: coords.pressure }];
    } else if (tool === 'rect' || tool === 'circle') {
      const start = currentPoints.current[0];
      currentPoints.current = [start, coords];
    } else {
      // Freehand pen or highlighter
      currentPoints.current.push(coords);
    }

    const previewStroke: WhiteboardStroke = {
      id: `preview_${Date.now()}`,
      tool,
      color,
      width,
      dashed,
      points: currentPoints.current,
    };
    redrawAll(previewStroke);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId !== activePointerId.current) return;
    activePointerId.current = null;

    if (!isDrawing.current) return;
    isDrawing.current = false;

    if (tool !== 'eraser' && currentPoints.current.length > 0) {
      const newStroke: WhiteboardStroke = {
        id: `stroke_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        tool,
        color,
        width,
        dashed,
        points: [...currentPoints.current],
      };
      onStrokesChange([...strokes, newStroke]);
    }

    currentPoints.current = [];
    redrawAll();
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.pointerId === activePointerId.current) {
      activePointerId.current = null;
      isDrawing.current = false;
      currentPoints.current = [];
      redrawAll();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${
        isDrawMode
          ? 'cursor-crosshair pointer-events-auto touch-none'
          : 'pointer-events-none'
      }`}
      style={{
        zIndex: 40,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};
