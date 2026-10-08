import { Unit } from '../types/content';

export const unit14: Unit = {
  id: 'unit14',
  number: 14,
  title: '14 Volume, surface area and symmetry',
  codes: ['9Gg.04', '9Gg.05', '9Gg.06'],
  accentColor: '#BE123C', // Crimson
  subtopics: [
    // =========================================================================
    // 14.1 CALCULATING THE VOLUME OF PRISMS
    // =========================================================================
    {
      id: 'sub_14_1',
      title: '14.1 Calculating the volume of prisms',
      codes: ['9Gg.04'],
      steps: [
        {
          id: 's_14_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.04',
              text: 'Use knowledge of area and volume to derive and calculate the volume of prisms and cylinders.',
            },
          ],
        },
        {
          id: 's_14_1_c1',
          title: 'Prism Volume Principle (Cross-Section × Length)',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Prism',
              definition:
                'A 3D solid with uniform (constant) cross-section throughout its length. Volume = Area of Cross-Section × Length.',
            },
            {
              type: 'formula',
              math: 'V = A_{\\text{cross}} \\times l, \\quad \\text{Cylinder: } V = \\pi r^2 h',
              label: 'General Prism and Cylinder Volume Formulae',
            },
            {
              type: 'figure',
              figure: {
                component: 'Solid3D',
                props: {
                  shapeType: 'cylinder',
                },
              },
            },
          ],
        },
        {
          id: 's_14_1_worked',
          title: 'Worked Example: Triangular Prism Volume',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A triangular prism has a right-angled triangular cross-section with base 6 cm and height 8 cm. Its length is 15 cm. Calculate its volume.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate the area of the triangular cross-section: ½ × base × height = ½ × 6 × 8 = 24 cm².',
                  },
                  {
                    type: 'formula',
                    math: 'A_{\\text{cross}} = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply cross-sectional area by length (15 cm).',
                  },
                  {
                    type: 'formula',
                    math: 'V = 24 \\times 15',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Total volume = 360 cm³.',
                  },
                  {
                    type: 'formula',
                    math: 'V = 360\\text{ cm}^3',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_14_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to divide by 2 when finding the area of the triangular face: using 6 × 8 × 15 = 720 cm³.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing cylinder diameter with radius in V = πr²h.',
            },
          ],
        },
        {
          id: 's_14_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['3D Solid', 'Cross-Section Shape', 'Volume Formula'],
              rows: [
                ['Cuboid', 'Rectangle (w × h)', 'l × w × h'],
                ['Triangular Prism', 'Triangle (½bh)', '½bh × l'],
                ['Trapezoidal Prism', 'Trapezium (½(a+b)h)', '½(a+b)h × l'],
                ['Cylinder', 'Circle (πr²)', 'πr²h'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_14_1_1',
          level: 1,
          text: 'Calculate the volume of a cuboid measuring 5 cm by 4 cm by 10 cm.',
          background: 'blank',
        },
        {
          id: 'p_14_1_2',
          level: 1,
          text: 'A prism has cross-sectional area 35 cm² and length 8 cm. Calculate its volume.',
          background: 'blank',
        },
        {
          id: 'p_14_1_3',
          level: 1,
          text: 'Calculate the volume of a cylinder with radius 3 cm and height 10 cm in terms of π.',
          background: 'blank',
        },
        {
          id: 'p_14_1_4',
          level: 2,
          text: 'Calculate the volume of a cylinder with diameter 8 cm and height 12 cm to 1 decimal place.',
          background: 'blank',
        },
        {
          id: 'p_14_1_5',
          level: 2,
          text: 'A triangular prism has volume 480 cm³ and length 20 cm. Find the area of its cross-section.',
          background: 'blank',
        },
        {
          id: 'p_14_1_6',
          level: 2,
          text: 'A swimming pool has trapezoidal cross-section with depth sloping from 1 m to 2.5 m over a width of 12 m, and length 25 m. Find total water capacity in m³.',
          background: 'blank',
        },
        {
          id: 'p_14_1_7',
          level: 3,
          text: 'A cylindrical pipe has outer radius 6 cm, inner radius 4 cm, and length 50 cm. Calculate the volume of metal in the pipe.',
          background: 'blank',
        },
        {
          id: 'p_14_1_8',
          level: 3,
          text: 'A prism has regular hexagonal cross-section with side 4 cm and length 15 cm. Calculate its volume to 3 significant figures.',
          background: 'blank',
        },
        {
          id: 'p_14_1_9',
          level: 3,
          text: 'A cylinder has height equal to its diameter (h = 2r). If its volume is 54π cm³, find its radius and height.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 14.2 CALCULATING THE SURFACE AREA
    // =========================================================================
    {
      id: 'sub_14_2',
      title: '14.2 Calculating the surface area of triangular prisms, pyramids and cylinders',
      codes: ['9Gg.05'],
      steps: [
        {
          id: 's_14_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.05',
              text: 'Use knowledge of area and 2D nets to calculate the surface area of triangular prisms, pyramids and cylinders.',
            },
          ],
        },
        {
          id: 's_14_2_c1',
          title: 'Surface Area from 2D Nets',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Total Surface Area (TSA)',
              definition:
                'The sum of the areas of all external faces of a 3D solid.',
            },
            {
              type: 'formula',
              math: '\\text{Cylinder TSA} = 2\\pi r^2 + 2\\pi rh, \\quad \\text{Curved surface area} = 2\\pi rh',
              label: 'Curved area unrolls into a rectangle of width 2πr and height h',
            },
            {
              type: 'figure',
              figure: {
                component: 'Solid3D',
                props: {
                  shapeType: 'prism',
                },
              },
            },
          ],
        },
        {
          id: 's_14_2_worked',
          title: 'Worked Example: Total Surface Area of a Cylinder',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A closed cylinder has radius 5 cm and height 10 cm. Calculate its total surface area in terms of π and to 1 d.p.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Area of two circular ends = 2 × πr² = 2 × π × 5² = 50π cm².',
                  },
                  {
                    type: 'formula',
                    math: '2\\pi (5^2) = 50\\pi',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Curved surface area = 2πrh = 2 × π × 5 × 10 = 100π cm².',
                  },
                  {
                    type: 'formula',
                    math: '2\\pi (5)(10) = 100\\pi',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Total surface area = 50π + 100π = 150π ≈ 471.2 cm².',
                  },
                  {
                    type: 'formula',
                    math: '\\text{TSA} = 150\\pi \\approx 471.2\\text{ cm}^2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_14_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting one circular end when a cylinder is closed, or including both ends when a pipe or can is OPEN at the top.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: In square-based pyramids, using the vertical perpendicular height instead of the slant height of the triangular face.',
            },
          ],
        },
        {
          id: 's_14_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Solid', 'Faces in Net', 'Surface Area Breakdown'],
              rows: [
                ['Triangular Prism', '2 triangles + 3 rectangles', '2(½bh) + (s₁ + s₂ + s₃)l'],
                ['Square Pyramid', '1 square base + 4 identical triangles', 'b² + 4(½b × slant height)'],
                ['Cylinder', '2 circular disks + 1 curved rectangle', '2πr² + 2πrh'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_14_2_1',
          level: 1,
          text: 'Calculate the total surface area of a cube with side length 4 cm.',
          background: 'blank',
        },
        {
          id: 'p_14_2_2',
          level: 1,
          text: 'Find the curved surface area of a cylinder with radius 3 cm and height 8 cm in terms of π.',
          background: 'blank',
        },
        {
          id: 'p_14_2_3',
          level: 1,
          text: 'How many faces are in the net of a triangular prism?',
          background: 'blank',
        },
        {
          id: 'p_14_2_4',
          level: 2,
          text: 'A square-based pyramid has base 6 cm and triangular faces of slant height 5 cm. Calculate its total surface area.',
          background: 'blank',
        },
        {
          id: 'p_14_2_5',
          level: 2,
          text: 'A triangular prism has ends that are equilateral triangles of side 4 cm and height 3.5 cm. Its length is 10 cm. Find total surface area.',
          background: 'blank',
        },
        {
          id: 'p_14_2_6',
          level: 2,
          text: 'An open-topped cylindrical can has radius 7 cm and height 15 cm. Calculate the area of metal sheet needed.',
          background: 'blank',
        },
        {
          id: 'p_14_2_7',
          level: 3,
          text: 'A pyramid has square base of side 10 cm and vertical height 12 cm. Use Pythagoras theorem to find the slant height, then calculate total surface area.',
          background: 'blank',
        },
        {
          id: 'p_14_2_8',
          level: 3,
          text: 'A cylinder has total surface area 180π cm² and radius 6 cm. Calculate its height.',
          background: 'blank',
        },
        {
          id: 'p_14_2_9',
          level: 3,
          text: 'A solid wooden toy is made of a cylinder surmounted by a cone. Describe the components needed to calculate its exposed outer surface area.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 14.3 SYMMETRY IN THREE-DIMENSIONAL SHAPES
    // =========================================================================
    {
      id: 'sub_14_3',
      title: '14.3 Symmetry in three-dimensional shapes',
      codes: ['9Gg.06'],
      steps: [
        {
          id: 's_14_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.06',
              text: 'Identify and describe planes of reflective symmetry and axes of rotational symmetry in 3D shapes.',
            },
          ],
        },
        {
          id: 's_14_3_c1',
          title: 'Planes of Symmetry in 3D Solids',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Plane of Symmetry',
              definition:
                'A 2D flat plane that slices a 3D solid into two halves that are exact mirror images of each other.',
            },
            {
              type: 'formula',
              math: '\\text{Cube: 9 planes of symmetry (3 parallel to faces, 6 diagonal through opposite edges)}',
              label: 'Planes of symmetry in standard polyhedra',
            },
            {
              type: 'figure',
              figure: {
                component: 'SymmetryTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_14_3_worked',
          title: 'Worked Example: Planes of Symmetry in a Cuboid',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'How many planes of symmetry does a rectangular cuboid have when all three dimensions (length, width, height) are distinct?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Consider planes parallel to the faces: 1 vertical lengthwise, 1 vertical crosswise, and 1 horizontal.',
                  },
                  {
                    type: 'formula',
                    math: '3 \\text{ face-parallel planes}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Check diagonal planes: because all dimensions are different, diagonal slices do NOT reflect into each other.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: A general cuboid with unequal sides has exactly 3 planes of symmetry.',
                  },
                  {
                    type: 'formula',
                    math: '3 \\text{ planes of symmetry}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_14_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming a non-square cuboid has diagonal planes of symmetry like a cube. Opposite vertices do not align upon reflection unless faces are squares!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing a plane of symmetry (2D slice) with an axis of rotational symmetry (1D line of rotation).',
            },
          ],
        },
        {
          id: 's_14_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['3D Shape', 'Planes of Symmetry', 'Description'],
              rows: [
                ['Cube', '9', '3 parallel to faces, 6 diagonal planes'],
                ['Cuboid (all sides different)', '3', '3 planes parallel to pairs of faces'],
                ['Square-based pyramid', '4', '2 through opposite vertices, 2 through midpoints of edges'],
                ['Cylinder', 'Infinite', '1 horizontal midpoint plane, infinite vertical planes through axis'],
                ['Sphere', 'Infinite', 'Any plane passing through centre'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_14_3_1',
          level: 1,
          text: 'State the number of planes of symmetry in a cube.',
          background: 'blank',
        },
        {
          id: 'p_14_3_2',
          level: 1,
          text: 'State the number of planes of symmetry in a square-based pyramid.',
          background: 'blank',
        },
        {
          id: 'p_14_3_3',
          level: 1,
          text: 'How many planes of symmetry does a sphere possess?',
          background: 'blank',
        },
        {
          id: 'p_14_3_4',
          level: 2,
          text: 'A cuboid has a square cross-section (e.g. 5 cm by 5 cm by 12 cm). How many planes of symmetry does it have?',
          background: 'blank',
        },
        {
          id: 'p_14_3_5',
          level: 2,
          text: 'Describe the position of the planes of symmetry of an equilateral triangular prism.',
          background: 'blank',
        },
        {
          id: 'p_14_3_6',
          level: 2,
          text: 'How many planes of symmetry does a regular tetrahedron have?',
          background: 'blank',
        },
        {
          id: 'p_14_3_7',
          level: 3,
          text: 'Identify the order of rotational symmetry of a regular octahedron about an axis passing through opposite vertices.',
          background: 'blank',
        },
        {
          id: 'p_14_3_8',
          level: 3,
          text: 'A cylinder has a slot cut down one side. Explain how this affects its planes of symmetry.',
          background: 'blank',
        },
        {
          id: 'p_14_3_9',
          level: 3,
          text: 'Prove why a diagonal slice through a rectangle does not create a line of symmetry in 2D, and explain how this applies to diagonal planes in a cuboid in 3D.',
          background: 'blank',
        },
      ],
    },
  ],
};
