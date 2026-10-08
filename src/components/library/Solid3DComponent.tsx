import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw } from 'lucide-react';

export interface Solid3DProps {
  initialShape?: 'cube' | 'cuboid' | 'prism' | 'cylinder' | 'pyramid' | 'cone' | 'sphere';
}

export const Solid3DComponent: React.FC<Solid3DProps> = ({
  initialShape = 'cube',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shape, setShape] = useState(initialShape);
  const [highlightMode, setHighlightMode] = useState<'none' | 'faces' | 'edges' | 'vertices'>('none');
  const [isRotatingAuto, setIsRotatingAuto] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);

  // Geometric info
  const shapeInfo = {
    cube: { name: 'Cube', f: 6, e: 12, v: 8 },
    cuboid: { name: 'Cuboid', f: 6, e: 12, v: 8 },
    prism: { name: 'Triangular Prism', f: 5, e: 9, v: 6 },
    cylinder: { name: 'Cylinder', f: 3, e: 2, v: 0 },
    pyramid: { name: 'Square-based Pyramid', f: 5, e: 8, v: 5 },
    cone: { name: 'Cone', f: 2, e: 1, v: 1 },
    sphere: { name: 'Sphere', f: 1, e: 0, v: 0 },
  }[shape];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xfaf7f2);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(3, 2.5, 4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const meshGroup = new THREE.Group();
    meshGroupRef.current = meshGroup;
    scene.add(meshGroup);

    // Build geometry based on shape
    let geom: THREE.BufferGeometry;
    if (shape === 'cube') {
      geom = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    } else if (shape === 'cuboid') {
      geom = new THREE.BoxGeometry(2.5, 1.4, 1.4);
    } else if (shape === 'prism') {
      geom = new THREE.CylinderGeometry(1.2, 1.2, 2.2, 3);
    } else if (shape === 'cylinder') {
      geom = new THREE.CylinderGeometry(1.1, 1.1, 2.4, 32);
    } else if (shape === 'pyramid') {
      geom = new THREE.ConeGeometry(1.5, 2.2, 4);
    } else if (shape === 'cone') {
      geom = new THREE.ConeGeometry(1.4, 2.4, 32);
    } else {
      geom = new THREE.SphereGeometry(1.4, 32, 24);
    }

    const faceColor = highlightMode === 'faces' ? 0x2563eb : 0x3b82f6;
    const mat = new THREE.MeshStandardMaterial({
      color: faceColor,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: highlightMode === 'edges' || highlightMode === 'vertices' ? 0.45 : 0.9,
    });
    const mainMesh = new THREE.Mesh(geom, mat);
    meshGroup.add(mainMesh);

    // Edges
    const edgesGeom = new THREE.EdgesGeometry(geom);
    const edgeColor = highlightMode === 'edges' ? 0xdc2626 : 0x0a192f;
    const edgeLineWidth = highlightMode === 'edges' ? 4 : 2;
    const edgesMat = new THREE.LineBasicMaterial({
      color: edgeColor,
      linewidth: edgeLineWidth,
    });
    const edgeLines = new THREE.LineSegments(edgesGeom, edgesMat);
    meshGroup.add(edgeLines);

    // Vertices points
    if (highlightMode === 'vertices') {
      const vertMat = new THREE.PointsMaterial({
        color: 0x16a34a,
        size: 0.18,
      });
      const points = new THREE.Points(geom, vertMat);
      meshGroup.add(points);
    }

    // Touch / Pointer rotation
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsRotatingAuto(false);
      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPointerPosition.x;
      const deltaY = e.clientY - previousPointerPosition.y;

      if (meshGroupRef.current) {
        meshGroupRef.current.rotation.y += deltaX * 0.01;
        meshGroupRef.current.rotation.x += deltaY * 0.01;
      }

      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isRotatingAuto && meshGroupRef.current) {
        meshGroupRef.current.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      edgesGeom.dispose();
      edgesMat.dispose();
    };
  }, [shape, highlightMode, isRotatingAuto]);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-2xl font-black text-navy">
          3D Solid: <span className="text-indigo-600">{shapeInfo.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xl font-extrabold text-navy flex gap-4 bg-slate-100 py-2 px-4 rounded-xl">
            <span>F: {shapeInfo.f}</span>
            <span>E: {shapeInfo.e}</span>
            <span>V: {shapeInfo.v}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              if (meshGroupRef.current) {
                meshGroupRef.current.rotation.set(0, 0, 0);
              }
              setIsRotatingAuto(true);
            }}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Box */}
      <div className="relative h-72 w-full rounded-2xl overflow-hidden border-2 border-[#0A192F] bg-[#FAF7F2]">
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      </div>

      {/* Shape Selector & Highlight Mode Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap gap-2">
          {(['cube', 'cuboid', 'prism', 'cylinder', 'pyramid', 'cone', 'sphere'] as const).map(
            (s) => (
              <button
                key={s}
                type="button"
                onClick={() => setShape(s)}
                className={`px-3 py-2 text-base font-bold rounded-xl capitalize transition-all min-h-[44px] ${
                  shape === s
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {s === 'prism' ? 'Prism' : s}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          {(['none', 'faces', 'edges', 'vertices'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setHighlightMode(mode)}
              className={`px-3 py-2 text-base font-bold rounded-xl capitalize border min-h-[44px] ${
                highlightMode === mode
                  ? 'bg-amber-100 text-amber-900 border-amber-400 font-extrabold'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
