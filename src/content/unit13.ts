import { Unit } from '../types/content';

export const unit13: Unit = {
  id: 'unit13',
  number: 13,
  title: '13 Position and transformation',
  codes: ['9Gp.01', '9Gp.02', '9Gp.03', '9Gp.04', '9Gp.05', '9Gp.06', '9Gp.07'],
  accentColor: '#3B82F6', // Blue
  subtopics: [
    // =========================================================================
    // 13.1 BEARINGS AND SCALE DRAWINGS
    // =========================================================================
    {
      id: 'sub_13_1',
      title: '13.1 Bearings and scale drawings',
      codes: ['9Gp.01'],
      steps: [
        {
          id: 's_13_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gp.01',
              text: 'Use knowledge of three-figure bearings and scaling to interpret position on maps and navigation plans.',
            },
          ],
        },
        {
          id: 's_13_1_c1',
          title: 'The Three Rules of Bearings',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Three-Figure Bearing',
              definition:
                '1. Measured from North (000°). 2. Measured CLOCKWISE. 3. Always written with THREE digits (e.g., 045°, 090°, 240°).',
            },
            {
              type: 'formula',
              math: '\\text{Back Bearing} = \\text{Forward Bearing} \\pm 180^\\circ',
              label: 'Reverse navigation bearing',
            },
            {
              type: 'figure',
              figure: {
                component: 'BearingsTool',
                props: {
                  bearing: 65,
                },
              },
            },
          ],
        },
        {
          id: 's_13_1_worked',
          title: 'Worked Example: Calculating a Back Bearing',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'The bearing of town B from town A is 072°. Calculate the bearing of town A from town B.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Draw North arrows at both A and B. Notice the North arrows are parallel lines.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Co-interior angle between parallel North lines inside AB is 180° - 72° = 108°.',
                  },
                  {
                    type: 'formula',
                    math: '180^\\circ - 72^\\circ = 108^\\circ',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Bearing of A from B is measured clockwise from North at B: 360° - 108° = 252° (or simply 72° + 180° = 252°).',
                  },
                  {
                    type: 'formula',
                    math: '072^\\circ + 180^\\circ = 252^\\circ',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_13_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing 45° instead of 045°. Bearings MUST always be written with three digits.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Measuring anticlockwise from North. Bearings are strictly clockwise.',
            },
          ],
        },
        {
          id: 's_13_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Compass Direction', 'Three-Figure Bearing', 'Opposite Direction (Back Bearing)'],
              rows: [
                ['North (N)', '000° or 360°', 'South (180°)'],
                ['North-East (NE)', '045°', 'South-West (225°)'],
                ['East (E)', '090°', 'West (270°)'],
                ['South-East (SE)', '135°', 'North-West (315°)'],
                ['South (S)', '180°', 'North (000°)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_13_1_1',
          level: 1,
          text: 'Write the bearing for due East and due South.',
          background: 'blank',
        },
        {
          id: 'p_13_1_2',
          level: 1,
          text: 'Convert an angle of 35° clockwise from North into a 3-figure bearing.',
          background: 'blank',
        },
        {
          id: 'p_13_1_3',
          level: 1,
          text: 'A map scale is 1 cm : 5 km. How far in real life is a map distance of 6.2 cm?',
          background: 'blank',
        },
        {
          id: 'p_13_1_4',
          level: 2,
          text: 'The bearing of lighthouse L from port P is 125°. Calculate the bearing of port P from lighthouse L.',
          background: 'blank',
        },
        {
          id: 'p_13_1_5',
          level: 2,
          text: 'The bearing of point X from Y is 290°. Calculate the bearing of Y from X.',
          background: 'blank',
        },
        {
          id: 'p_13_1_6',
          level: 2,
          text: 'Ship A is on bearing 060° from port. Ship B is on bearing 150° from port. What is angle ASB at the port?',
          background: 'blank',
        },
        {
          id: 'p_13_1_7',
          level: 3,
          text: 'A hiker walks 4 km on bearing 090° and then 3 km on bearing 180°. Calculate their straight-line distance from the start and their bearing home.',
          background: 'blank',
        },
        {
          id: 'p_13_1_8',
          level: 3,
          text: 'Town C is 15 km North of A. Town B is 20 km East of A. Calculate the bearing of B from C to the nearest degree.',
          background: 'blank',
        },
        {
          id: 'p_13_1_9',
          level: 3,
          text: 'Prove using alternate/co-interior angle rules why adding 180° gives the back bearing for any initial bearing less than 180°.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 13.2 POINTS ON A LINE SEGMENT
    // =========================================================================
    {
      id: 'sub_13_2',
      title: '13.2 Points on a line segment',
      codes: ['9Gp.02'],
      steps: [
        {
          id: 's_13_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gp.02',
              text: 'Use knowledge of coordinates to find midpoints and points dividing a line segment in a given ratio.',
            },
          ],
        },
        {
          id: 's_13_2_c1',
          title: 'Midpoint and Dividing Segments',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Midpoint',
              definition:
                'The point exactly halfway between two coordinates. Found by taking the average of the x-coordinates and the average of the y-coordinates.',
            },
            {
              type: 'formula',
              math: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
              label: 'Midpoint Formula',
            },
            {
              type: 'figure',
              figure: {
                component: 'MidpointGrid',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_13_2_worked',
          title: 'Worked Example: Finding the Endpoint Given the Midpoint',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'The midpoint of line segment AB is M(3, 5). Point A has coordinates (-1, 2). Find the coordinates of point B.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Set up midpoint equation for x: (-1 + x_B) / 2 = 3.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{-1 + x_B}{2} = 3 \\implies -1 + x_B = 6 \\implies x_B = 7',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Set up midpoint equation for y: (2 + y_B) / 2 = 5.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{2 + y_B}{2} = 5 \\implies 2 + y_B = 10 \\implies y_B = 8',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: State the coordinates of B: (7, 8).',
                  },
                  {
                    type: 'formula',
                    math: 'B = (7, 8)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_13_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Subtracting coordinates instead of adding them when finding midpoint: (x₂ - x₁)/2 is half the distance, not the midpoint coordinate.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Dividing by 2 when dividing a segment in a 1 : 2 ratio. A 1 : 2 ratio has 3 total parts (fraction ⅓).',
            },
          ],
        },
        {
          id: 's_13_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Task', 'Algebraic Formula', 'Example (A(0,0), B(6,12))'],
              rows: [
                ['Midpoint', '((x₁+x₂)/2, (y₁+y₂)/2)', '((0+6)/2, (0+12)/2) = (3, 6)'],
                ['Length of segment', '√[(x₂-x₁)² + (y₂-y₁)²]', '√(6² + 12²) = √180 ≈ 13.4'],
                ['Ratio 1 : 2 from A', '(x₁ + ⅓(x₂-x₁), y₁ + ⅓(y₂-y₁))', '(0 + 2, 0 + 4) = (2, 4)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_13_2_1',
          level: 1,
          text: 'Find the midpoint of the line segment joining (2, 4) and (8, 10).',
          background: 'axes',
        },
        {
          id: 'p_13_2_2',
          level: 1,
          text: 'Find the midpoint of (-3, 6) and (5, -2).',
          background: 'axes',
        },
        {
          id: 'p_13_2_3',
          level: 1,
          text: 'Calculate the length of the horizontal line segment joining (-4, 3) and (7, 3).',
          background: 'axes',
        },
        {
          id: 'p_13_2_4',
          level: 2,
          text: 'Point M(4, 7) is the midpoint of segment PQ. If P is (1, 3), find the coordinates of Q.',
          background: 'axes',
        },
        {
          id: 'p_13_2_5',
          level: 2,
          text: 'Find the coordinates of the point that lies one-quarter of the way from (0, 0) to (8, 12).',
          background: 'axes',
        },
        {
          id: 'p_13_2_6',
          level: 2,
          text: 'Calculate the exact length of the line segment joining (1, 2) and (4, 6) using Pythagoras theorem.',
          background: 'axes',
        },
        {
          id: 'p_13_2_7',
          level: 3,
          text: 'Line segment CD has endpoints C(-2, 5) and D(10, 1). Find the point P on CD that divides it in the ratio 1 : 3 from C.',
          background: 'axes',
        },
        {
          id: 'p_13_2_8',
          level: 3,
          text: 'The vertices of a triangle are A(1, 2), B(5, 4), and C(3, 8). Find the midpoint of AC and verify if it forms a median.',
          background: 'axes',
        },
        {
          id: 'p_13_2_9',
          level: 3,
          text: 'A circle has diameter with endpoints (-3, -1) and (5, 5). Find the coordinates of the center and the radius of the circle.',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 13.3 TRANSFORMATIONS
    // =========================================================================
    {
      id: 'sub_13_3',
      title: '13.3 Transformations',
      codes: ['9Gp.03', '9Gp.04', '9Gp.05'],
      steps: [
        {
          id: 's_13_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gp.03',
              text: 'Transform points and 2D shapes by combinations of reflections, translations and rotations.',
            },
            {
              type: 'objective_item',
              code: '9Gp.04',
              text: 'Identify and describe a transformation (reflections, translations, rotations and combinations of these).',
            },
            {
              type: 'objective_item',
              code: '9Gp.05',
              text: 'Recognise and explain that after any combination of reflections, translations and rotations the image is congruent to the object.',
            },
          ],
        },
        {
          id: 's_13_3_c1',
          title: 'Isometric Transformations and Congruence',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Congruence & Isometry',
              definition:
                'Translations, rotations, and reflections are ISOMETRIES: they preserve lengths and angles exactly, producing an image CONGRUENT to the object.',
            },
            {
              type: 'formula',
              math: '\\text{Translation: } \\begin{pmatrix} x \\\\ y \\end{pmatrix}, \\quad \\text{Reflection: Mirror line equation}, \\quad \\text{Rotation: Centre, Angle, Direction}',
              label: 'Full descriptions require all mathematical parameters',
            },
            {
              type: 'figure',
              figure: {
                component: 'TransformationGrid',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_13_3_worked',
          title: 'Worked Example: Full Description of a Transformation',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Triangle A with vertices (1,1), (3,1), (1,4) is transformed to Triangle B with vertices (-1,1), (-1,3), (-4,1). Fully describe the transformation.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Check orientation: the shape has rotated, not reflected.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Compare corresponding legs: horizontal leg (length 2) is now vertical (length 2). Rotation angle is 90° anticlockwise.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Test centre of rotation: (1, 1) maps to (-1, 1) and (1, 4) maps to (-4, 1). The centre of rotation is the origin (0, 0). Full description: "Rotation of 90° anticlockwise about centre (0, 0)".',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Rotation, } 90^\\circ \\text{ anticlockwise, centre } (0, 0)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_13_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Giving two transformations when asked to describe "the single transformation" (e.g. stating a reflection then translation). Cambridge awards 0 marks if more than one transformation is named!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting the centre of rotation or writing column vector as a coordinate without brackets.',
            },
          ],
        },
        {
          id: 's_13_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Transformation', 'Required Description Details', 'Effect on Congruence'],
              rows: [
                ['Translation', 'Column vector (x, y)', 'Congruent (same orientation)'],
                ['Reflection', 'Equation of mirror line (e.g. y = x, x = 2)', 'Congruent (reversed parity)'],
                ['Rotation', 'Angle, direction (cw/ccw), centre of rotation', 'Congruent (turned)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_13_3_1',
          level: 1,
          text: 'Translate the point (3, 2) by vector (4, -5).',
          background: 'axes',
        },
        {
          id: 'p_13_3_2',
          level: 1,
          text: 'Reflect the point (4, 3) in the y-axis (line x = 0).',
          background: 'axes',
        },
        {
          id: 'p_13_3_3',
          level: 1,
          text: 'Rotate the point (2, 5) by 180° about the origin (0, 0).',
          background: 'axes',
        },
        {
          id: 'p_13_3_4',
          level: 2,
          text: 'Reflect the shape with vertices (1, 2), (3, 2), (3, 5) in the line y = x.',
          background: 'axes',
        },
        {
          id: 'p_13_3_5',
          level: 2,
          text: 'Fully describe the single transformation mapping triangle at (2, 1) to (2, -1).',
          background: 'axes',
        },
        {
          id: 'p_13_3_6',
          level: 2,
          text: 'A shape is reflected in line x = 1 and then reflected in line x = 4. Describe the combined transformation as a single translation.',
          background: 'axes',
        },
        {
          id: 'p_13_3_7',
          level: 3,
          text: 'Rotate triangle with vertices (2, 3), (4, 3), (2, 5) by 90° clockwise about centre (1, 1).',
          background: 'axes',
        },
        {
          id: 'p_13_3_8',
          level: 3,
          text: 'Prove that the composition of two reflections in perpendicular lines (e.g. x-axis and y-axis) is equivalent to a rotation of 180° about their intersection.',
          background: 'axes',
        },
        {
          id: 'p_13_3_9',
          level: 3,
          text: 'Triangle T is transformed by translation vector (3, -2) followed by reflection in y = -1. Plot the final image and state if it is congruent to T.',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 13.4 ENLARGING SHAPES
    // =========================================================================
    {
      id: 'sub_13_4',
      title: '13.4 Enlarging shapes',
      codes: ['9Gp.06', '9Gp.07'],
      steps: [
        {
          id: 's_13_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gp.06',
              text: 'Enlarge 2D shapes from a centre of enlargement with a positive integer scale factor.',
            },
            {
              type: 'objective_item',
              code: '9Gp.07',
              text: 'Analyse and describe changes in perimeter and area of squares and rectangles when side lengths are enlarged by a positive integer scale factor (linear factor k vs area factor k²).',
            },
          ],
        },
        {
          id: 's_13_4_c1',
          title: 'Scale Factor and the Area Scaling Law (k vs k²)',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Scale Factor (k)',
              definition:
                'The ratio of image length to object length. Perimeter increases by scale factor k; Area increases by scale factor k².',
            },
            {
              type: 'formula',
              math: '\\text{New Perimeter} = k \\times \\text{Old Perimeter}, \\quad \\text{New Area} = k^2 \\times \\text{Old Area}',
              label: 'The Square-Area Scaling Law',
            },
            {
              type: 'figure',
              figure: {
                component: 'ShapeBuilder',
                props: {
                  sides: 4,
                },
              },
            },
          ],
        },
        {
          id: 's_13_4_worked',
          title: 'Worked Example: Area Change Under Enlargement',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A rectangle measuring 4 cm by 3 cm has area 12 cm². It is enlarged by scale factor 3. Find the new perimeter and new area.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Original perimeter = 2(4 + 3) = 14 cm. New perimeter = 14 × 3 = 42 cm.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Perimeter} = 14 \\times 3 = 42\\text{ cm}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Scale factor k = 3. Area scale factor = k² = 3² = 9.',
                  },
                  {
                    type: 'formula',
                    math: 'k^2 = 3^2 = 9',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: New area = 12 × 9 = 108 cm² (or new dimensions 12 cm by 9 cm: 12 × 9 = 108 cm²).',
                  },
                  {
                    type: 'formula',
                    math: '\\text{New Area} = 12 \\times 9 = 108\\text{ cm}^2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_13_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Multiplying the area by k instead of k². If lengths double (k = 2), area QUADRUPLES (2² = 4).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Measuring ray distances from the edge of the shape instead of starting from the centre of enlargement.',
            },
          ],
        },
        {
          id: 's_13_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Dimension', 'Scale Factor Multiplier', 'Example (k = 3)'],
              rows: [
                ['Length / Perimeter', 'k', '3× original length'],
                ['Surface / Area', 'k²', '9× original area'],
                ['Volume (3D)', 'k³', '27× original volume'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_13_4_1',
          level: 1,
          text: 'A triangle with base 5 cm is enlarged by scale factor 4. Find the new base length.',
          background: 'axes',
        },
        {
          id: 'p_13_4_2',
          level: 1,
          text: 'If the scale factor of enlargement is 5, by what factor does the perimeter increase?',
          background: 'axes',
        },
        {
          id: 'p_13_4_3',
          level: 1,
          text: 'If the scale factor of enlargement is 5, by what factor does the area increase?',
          background: 'axes',
        },
        {
          id: 'p_13_4_4',
          level: 2,
          text: 'Enlarge the triangle with vertices (1, 1), (3, 1), (1, 3) by scale factor 2 with centre of enlargement (0, 0).',
          background: 'axes',
        },
        {
          id: 'p_13_4_5',
          level: 2,
          text: 'A rectangle has area 15 cm². It is enlarged by scale factor 4. Find its new area.',
          background: 'axes',
        },
        {
          id: 'p_13_4_6',
          level: 2,
          text: 'An enlargement maps a shape of area 20 cm² to an image of area 180 cm². What is the linear scale factor k?',
          background: 'axes',
        },
        {
          id: 'p_13_4_7',
          level: 3,
          text: 'Enlarge a rectangle with vertices (2, 2), (5, 2), (5, 4), (2, 4) by scale factor 3 from centre of enlargement (1, 1).',
          background: 'axes',
        },
        {
          id: 'p_13_4_8',
          level: 3,
          text: 'Two similar rectangles have perimeters 24 cm and 72 cm. If the area of the smaller rectangle is 32 cm², calculate the area of the larger rectangle.',
          background: 'axes',
        },
        {
          id: 'p_13_4_9',
          level: 3,
          text: 'Explain using algebra why multiplying both length l and width w of a rectangle by k multiplies the area by k².',
          background: 'axes',
        },
      ],
    },
  ],
};
