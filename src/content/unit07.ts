import { Unit } from '../types/content';

export const unit07: Unit = {
  id: 'unit7',
  number: 7,
  title: '7 Shapes and measurements',
  codes: ['9Gg.01', '9Gg.02', '9Gg.03'],
  accentColor: '#0284C7', // Sky
  subtopics: [
    // =========================================================================
    // 7.1 CIRCUMFERENCE AND AREA OF A CIRCLE
    // =========================================================================
    {
      id: 'sub_7_1',
      title: '7.1 Circumference and area of a circle',
      codes: ['9Gg.01'],
      steps: [
        {
          id: 's_7_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.01',
              text: 'Know and use the formulae for the area and circumference of a circle, using radius and diameter.',
            },
          ],
        },
        {
          id: 's_7_1_c1',
          title: 'Circle Formulae with π',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Circumference & Area',
              definition:
                'Circumference C is the perimeter of a circle (C = πd = 2πr). Area A is the space inside (A = πr²).',
            },
            {
              type: 'formula',
              math: 'C = 2\\pi r = \\pi d, \\quad A = \\pi r^2',
              label: 'Exact values use π; approximations use 3.142 or 22/7',
            },
            {
              type: 'figure',
              figure: {
                component: 'CircleTool',
                props: {
                  radius: 7,
                },
              },
            },
          ],
        },
        {
          id: 's_7_1_worked',
          title: 'Worked Example: Area and Perimeter of a Semicircle',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A semicircle has diameter 14 cm. Calculate its perimeter and area.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Radius r = 14 ÷ 2 = 7 cm.',
                  },
                  {
                    type: 'formula',
                    math: 'r = 7\\text{ cm}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Area of semicircle = ½ × πr² = ½ × π × 7² = 24.5π ≈ 77 cm².',
                  },
                  {
                    type: 'formula',
                    math: 'A = \\frac{1}{2} \\pi (7^2) = 24.5\\pi \\approx 77.0\\text{ cm}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Perimeter of semicircle = curved arc + straight diameter: ½(πd) + d = ½(14π) + 14 = 7π + 14 ≈ 36.0 cm.',
                  },
                  {
                    type: 'formula',
                    math: 'P = 7\\pi + 14 \\approx 36.0\\text{ cm}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_7_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Using diameter directly in the area formula: π(10)² instead of π(5)². Fact: You MUST divide diameter by 2 first to find the radius.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to add the straight diameter when calculating the perimeter of a semicircle or quadrant.',
            },
          ],
        },
        {
          id: 's_7_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Part of Circle', 'Definition', 'Key Formula'],
              rows: [
                ['Radius (r)', 'Distance from center to circumference', 'r = d / 2'],
                ['Diameter (d)', 'Line segment through center connecting two points', 'd = 2r'],
                ['Circumference (C)', 'Total distance around circle', 'C = 2πr = πd'],
                ['Area (A)', 'Surface enclosed by circle', 'A = πr²'],
                ['Sector', 'Region bounded by two radii and an arc', 'Area = (θ/360) × πr²'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_7_1_1',
          level: 1,
          text: 'Calculate the circumference of a circle with diameter 10 cm in terms of π.',
          background: 'blank',
        },
        {
          id: 'p_7_1_2',
          level: 1,
          text: 'Calculate the area of a circle with radius 4 cm to 1 decimal place.',
          background: 'blank',
        },
        {
          id: 'p_7_1_3',
          level: 1,
          text: 'Find the radius of a circle whose circumference is 31.4 cm (use π ≈ 3.14).',
          background: 'blank',
        },
        {
          id: 'p_7_1_4',
          level: 2,
          text: 'A circular pizza has diameter 30 cm. Calculate its area to the nearest whole cm².',
          background: 'blank',
        },
        {
          id: 'p_7_1_5',
          level: 2,
          text: 'Calculate the perimeter of a quadrant (quarter circle) of radius 6 cm.',
          background: 'blank',
        },
        {
          id: 'p_7_1_6',
          level: 2,
          text: 'A bicycle wheel has diameter 70 cm. How many complete revolutions does it turn when travelling 1 km?',
          background: 'blank',
        },
        {
          id: 'p_7_1_7',
          level: 3,
          text: 'A circle has area 154 cm². Find its circumference (use π ≈ 22/7).',
          background: 'blank',
        },
        {
          id: 'p_7_1_8',
          level: 3,
          text: 'A metal washer has outer radius 8 cm and an inner hole of radius 5 cm. Calculate the area of the metal.',
          background: 'blank',
        },
        {
          id: 'p_7_1_9',
          level: 3,
          text: 'A running track consists of two straight sides of length 100 m and two semicircular ends of diameter 64 m. Calculate the total track perimeter.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 7.2 AREAS OF COMPOUND SHAPES
    // =========================================================================
    {
      id: 'sub_7_2',
      title: '7.2 Areas of compound shapes',
      codes: ['9Gg.03'],
      steps: [
        {
          id: 's_7_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.03',
              text: 'Estimate and calculate areas of compound 2D shapes made from rectangles, triangles, parallelograms, trapezia and circles.',
            },
          ],
        },
        {
          id: 's_7_2_c1',
          title: 'Splitting and Subtracting Compound Shapes',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Compound Shape',
              definition:
                'A composite shape formed by joining or subtracting standard polygons and circles.',
            },
            {
              type: 'formula',
              math: '\\text{Total Area} = \\text{Area}_1 + \\text{Area}_2 \\quad \\text{or} \\quad \\text{Total Area} = \\text{Bounding Box} - \\text{Cutouts}',
              label: 'Addition and Subtraction Strategies',
            },
            {
              type: 'figure',
              figure: {
                component: 'ShapeBuilder',
                props: {
                  sides: 6,
                },
              },
            },
          ],
        },
        {
          id: 's_7_2_worked',
          title: 'Worked Example: Rectangle with Semicircular End',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A garden bed consists of a rectangle 10 m by 6 m with a semicircle of diameter 6 m on one end. Calculate the total area.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate the area of the rectangle: 10 m × 6 m = 60 m².',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Area}_{\\text{rect}} = 10 \\times 6 = 60\\text{ m}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Radius of semicircle is 6 ÷ 2 = 3 m. Semicircle area = ½ × π × 3² = 4.5π ≈ 14.14 m².',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Area}_{\\text{semi}} = \\frac{1}{2} \\pi (3^2) \\approx 14.14\\text{ m}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Add the two areas together: 60 + 14.14 = 74.14 m².',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Total Area} \\approx 74.1\\text{ m}^2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_7_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Counting internal shared edges when calculating the outer perimeter of a compound shape.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to subtract cut-out sections from the outer bounding shape.',
            },
          ],
        },
        {
          id: 's_7_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Component Shape', 'Area Formula'],
              rows: [
                ['Rectangle', 'Length × Width'],
                ['Triangle', '½ × Base × Perpendicular Height'],
                ['Parallelogram', 'Base × Perpendicular Height'],
                ['Trapezium', '½ × (a + b) × Height'],
                ['Circle / Semicircle', 'πr² / ½πr²'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_7_2_1',
          level: 1,
          text: 'An L-shape is split into two rectangles: 4 cm by 3 cm, and 5 cm by 2 cm. Find total area.',
          background: 'square',
        },
        {
          id: 'p_7_2_2',
          level: 1,
          text: 'A shape is made from a square of side 6 cm with an attached triangle of base 6 cm and height 4 cm. Find its area.',
          background: 'square',
        },
        {
          id: 'p_7_2_3',
          level: 1,
          text: 'Find the area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm.',
          background: 'square',
        },
        {
          id: 'p_7_2_4',
          level: 2,
          text: 'A square of side 10 cm has a circle of diameter 6 cm cut out from its centre. Find the remaining shaded area.',
          background: 'square',
        },
        {
          id: 'p_7_2_5',
          level: 2,
          text: 'Calculate the total area of a cross shape made from 5 identical squares of side length 4 cm.',
          background: 'square',
        },
        {
          id: 'p_7_2_6',
          level: 2,
          text: 'A compound shape consists of a rectangle 8 cm by 4 cm and a right-angled triangle with legs 3 cm and 4 cm. Calculate total area.',
          background: 'square',
        },
        {
          id: 'p_7_2_7',
          level: 3,
          text: 'Calculate the area of a regular hexagon with side length 6 cm by dividing it into 6 equilateral triangles.',
          background: 'square',
        },
        {
          id: 'p_7_2_8',
          level: 3,
          text: 'A square plaque of side 20 cm has four quarter-circles of radius 5 cm cut from each corner. Find the remaining area and perimeter.',
          background: 'square',
        },
        {
          id: 'p_7_2_9',
          level: 3,
          text: 'Find the shaded area between an inscribed circle of diameter 14 cm and its circumscribed square of side 14 cm.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 7.3 LARGE AND SMALL UNITS
    // =========================================================================
    {
      id: 'sub_7_3',
      title: '7.3 Large and small units',
      codes: ['9Gg.02'],
      steps: [
        {
          id: 's_7_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.02',
              text: 'Know and recognise very small or very large units of length, capacity and mass (micrometres, nanometres, tonnes, hectares).',
            },
          ],
        },
        {
          id: 's_7_3_c1',
          title: 'Metric Prefixes and Area Conversions',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Metric Prefixes',
              definition:
                'Mega (10⁶), Kilo (10³), Centi (10⁻²), Milli (10⁻³), Micro (10⁻⁶), Nano (10⁻⁹). Hectare (1 ha = 10,000 m²).',
            },
            {
              type: 'formula',
              math: '1\\text{ ha} = 100\\text{ m} \\times 100\\text{ m} = 10\\,000\\text{ m}^2, \\quad 1\\text{ tonne} = 1000\\text{ kg} = 10^6\\text{ g}',
              label: 'Standard Large Metric Units',
            },
            {
              type: 'figure',
              figure: {
                component: 'ProportionTable',
                props: {
                  pairs: [
                    { label: '1 kilometre (km)', val: '10³ m' },
                    { label: '1 millimetre (mm)', val: '10⁻³ m' },
                    { label: '1 micrometre (μm)', val: '10⁻⁶ m' },
                    { label: '1 nanometre (nm)', val: '10⁻⁹ m' },
                    { label: '1 hectare (ha)', val: '10⁴ m²' },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_7_3_worked',
          title: 'Worked Example: Area and Unit Conversion',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A farm field measures 450 m by 800 m. Convert its area into hectares.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate area in square metres: 450 × 800 = 360,000 m².',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Area} = 360\\,000\\text{ m}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Recall that 1 hectare = 10,000 m².',
                  },
                  {
                    type: 'formula',
                    math: '1\\text{ ha} = 10\\,000\\text{ m}^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Divide by 10,000: 360,000 ÷ 10,000 = 36 hectares.',
                  },
                  {
                    type: 'formula',
                    math: '36\\text{ ha}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_7_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking 1 m² = 100 cm². Fact: Area conversions are squared: 1 m = 100 cm, so 1 m² = 100² = 10,000 cm².',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing 1 tonne (1000 kg) with imperial ton (1016 kg). Always use 1000 kg in Cambridge maths.',
            },
          ],
        },
        {
          id: 's_7_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Prefix', 'Symbol', 'Power of 10', 'Example Quantity'],
              rows: [
                ['Mega', 'M', '10⁶', 'Megawatt = 1,000,000 W'],
                ['Kilo', 'k', '10³', 'Kilometre = 1,000 m'],
                ['Milli', 'm', '10⁻³', 'Milligram = 0.001 g'],
                ['Micro', 'μ', '10⁻⁶', 'Micrometre (micron) = 10⁻⁶ m'],
                ['Nano', 'n', '10⁻⁹', 'Nanometre = 10⁻⁹ m'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_7_3_1',
          level: 1,
          text: 'How many metres are in 1 kilometre?',
          background: 'lined',
        },
        {
          id: 'p_7_3_2',
          level: 1,
          text: 'How many kilograms are in 3.5 tonnes?',
          background: 'lined',
        },
        {
          id: 'p_7_3_3',
          level: 1,
          text: 'How many square metres are in 1 hectare?',
          background: 'lined',
        },
        {
          id: 'p_7_3_4',
          level: 2,
          text: 'Convert 50,000 square metres into hectares.',
          background: 'lined',
        },
        {
          id: 'p_7_3_5',
          level: 2,
          text: 'A human red blood cell is approximately 7 micrometres (μm) wide. Express this in metres in standard form.',
          background: 'lined',
        },
        {
          id: 'p_7_3_6',
          level: 2,
          text: 'How many square millimetres (mm²) are in 1 square centimetre (cm²)?',
          background: 'lined',
        },
        {
          id: 'p_7_3_7',
          level: 3,
          text: 'Convert 2.5 m² into cm².',
          background: 'lined',
        },
        {
          id: 'p_7_3_8',
          level: 3,
          text: 'A silicon chip feature measures 14 nanometres (nm). How many such features fit side by side in 1 millimetre?',
          background: 'lined',
        },
        {
          id: 'p_7_3_9',
          level: 3,
          text: 'A forest reserve covers 12 km². Convert this area into hectares.',
          background: 'lined',
        },
      ],
    },
  ],
};
