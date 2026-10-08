import { Unit } from '../types/content';

export const unit05: Unit = {
  id: 'unit5',
  number: 5,
  title: '5 Angles',
  codes: ['9Gg.07', '9Gg.08', '9Gg.09', '9Gg.10', '9Gg.11'],
  accentColor: '#E11D48', // Rose
  subtopics: [
    // =========================================================================
    // 5.1 CALCULATING ANGLES
    // =========================================================================
    {
      id: 'sub_5_1',
      title: '5.1 Calculating angles',
      codes: ['9Gg.09'],
      steps: [
        {
          id: 's_5_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.09',
              text: 'Use properties of angles, parallel and intersecting lines, triangles and quadrilaterals to calculate missing angles.',
            },
          ],
        },
        {
          id: 's_5_1_c1',
          title: 'Parallel Line Angle Relationships',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Alternate & Corresponding Angles',
              definition:
                'Alternate angles form a "Z" shape and are equal. Corresponding angles form an "F" shape and are equal. Co-interior ("C" shape) add up to 180°.',
            },
            {
              type: 'formula',
              math: '\\text{Alternate} = \\text{equal}, \\quad \\text{Corresponding} = \\text{equal}, \\quad \\text{Co-interior sum} = 180^\\circ',
              label: 'Parallel Lines intersected by a Transversal',
            },
            {
              type: 'figure',
              figure: {
                component: 'AnglesTool',
                props: {
                  type: 'parallel',
                },
              },
            },
          ],
        },
        {
          id: 's_5_1_worked',
          title: 'Worked Example: Multi-step Angle Calculation with Reasons',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Lines AB and CD are parallel. A transversal crosses AB at P and CD at Q. Angle APQ is 68°. Calculate angle PQD and state full geometric reasons.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify that angle APQ and angle PQD are alternate angles between parallel lines.',
                  },
                  {
                    type: 'formula',
                    math: '\\angle PQD = \\angle APQ',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Conclude that angle PQD = 68° (Alternate angles on parallel lines are equal).',
                  },
                  {
                    type: 'formula',
                    math: '\\angle PQD = 68^\\circ \\quad [\\text{alternate angles are equal}]',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_5_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing "Z angles" or "F angles" instead of using correct Cambridge terminology: "alternate angles" and "corresponding angles".',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming angles are alternate without checking whether the lines have arrow marks confirming they are parallel.',
            },
          ],
        },
        {
          id: 's_5_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Angle Property', 'Visual Pattern', 'Relationship'],
              rows: [
                ['Vertically opposite', 'X-shape intersection', 'Equal'],
                ['Alternate', 'Z-shape between parallels', 'Equal'],
                ['Corresponding', 'F-shape along parallels', 'Equal'],
                ['Co-interior (Allied)', 'C- or U-shape between parallels', 'Add up to 180°'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_5_1_1',
          level: 1,
          text: 'Two vertically opposite angles meet at a vertex. One is 54°. What is the other?',
          background: 'blank',
        },
        {
          id: 'p_5_1_2',
          level: 1,
          text: 'Angles on a straight line are 3x and 60°. Calculate the value of x.',
          background: 'blank',
        },
        {
          id: 'p_5_1_3',
          level: 1,
          text: 'In an isosceles triangle, the angle between the equal sides is 40°. Find each base angle.',
          background: 'blank',
        },
        {
          id: 'p_5_1_4',
          level: 2,
          text: 'Two co-interior angles between parallel lines are 2x and 3x + 15°. Find the value of x.',
          background: 'blank',
        },
        {
          id: 'p_5_1_5',
          level: 2,
          text: 'The angles in a quadrilateral are x, 2x, 3x, and 4x. Find the size of the largest angle.',
          background: 'blank',
        },
        {
          id: 'p_5_1_6',
          level: 2,
          text: 'An exterior angle of an isosceles triangle is 110°. Find all possible sets of three interior angles.',
          background: 'blank',
        },
        {
          id: 'p_5_1_7',
          level: 3,
          text: 'A parallelogram has one angle equal to (4x - 20)° and an adjacent angle equal to (2x + 50)°. Calculate all four angles.',
          background: 'blank',
        },
        {
          id: 'p_5_1_8',
          level: 3,
          text: 'Lines AB and CD are parallel. A point E lies between them such that angle ABE = 35° and angle CDE = 45°. Calculate reflex angle BED.',
          background: 'blank',
        },
        {
          id: 'p_5_1_9',
          level: 3,
          text: 'Prove that the angle sum of any triangle is 180° using a line drawn parallel to one base and alternate angle properties.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 5.2 INTERIOR ANGLES OF POLYGONS
    // =========================================================================
    {
      id: 'sub_5_2',
      title: '5.2 Interior angles of polygons',
      codes: ['9Gg.07'],
      steps: [
        {
          id: 's_5_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.07',
              text: 'Derive and use the formula for the sum of the interior angles of any polygon.',
            },
          ],
        },
        {
          id: 's_5_2_c1',
          title: 'Triangulation and Interior Angle Sum',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Interior Angle Sum',
              definition:
                'Any polygon with n sides can be partitioned from a single vertex into (n - 2) non-overlapping triangles.',
            },
            {
              type: 'formula',
              math: 'S = (n - 2) \\times 180^\\circ \\quad \\text{Each angle in regular polygon} = \\frac{(n - 2) \\times 180^\\circ}{n}',
              label: 'Formula for n-sided polygon',
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
          id: 's_5_2_worked',
          title: 'Worked Example: Regular Decagon (10-gon)',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Calculate: (a) the interior angle sum of a decagon, and (b) each interior angle of a regular decagon.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: For a decagon, number of sides n = 10. Triangles formed = 10 - 2 = 8.',
                  },
                  {
                    type: 'formula',
                    math: 'S = (10 - 2) \\times 180^\\circ = 8 \\times 180^\\circ',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Total interior angle sum = 1440°.',
                  },
                  {
                    type: 'formula',
                    math: 'S = 1440^\\circ',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: In a regular decagon, all 10 angles are equal: 1440° ÷ 10 = 144°.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Each angle} = 144^\\circ',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_5_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Using n × 180° instead of (n - 2) × 180°. Fact: A polygon with n sides divides into (n - 2) triangles from one vertex.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Dividing the sum by n when the polygon is NOT regular. Fact: Irregular polygons have different individual angles.',
            },
          ],
        },
        {
          id: 's_5_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Polygon', 'Sides (n)', 'Triangles (n - 2)', 'Total Angle Sum', 'Regular Interior Angle'],
              rows: [
                ['Triangle', '3', '1', '180°', '60°'],
                ['Quadrilateral', '4', '2', '360°', '90°'],
                ['Pentagon', '5', '3', '540°', '108°'],
                ['Hexagon', '6', '4', '720°', '120°'],
                ['Octagon', '8', '6', '1080°', '135°'],
                ['Decagon', '10', '8', '1440°', '144°'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_5_2_1',
          level: 1,
          text: 'Calculate the sum of the interior angles of a heptagon (7 sides).',
          background: 'blank',
        },
        {
          id: 'p_5_2_2',
          level: 1,
          text: 'Calculate each interior angle of a regular octagon.',
          background: 'blank',
        },
        {
          id: 'p_5_2_3',
          level: 1,
          text: 'Four angles of a pentagon are 110°, 95°, 120°, and 105°. Calculate the fifth angle.',
          background: 'blank',
        },
        {
          id: 'p_5_2_4',
          level: 2,
          text: 'The sum of the interior angles of a polygon is 1980°. How many sides does it have?',
          background: 'blank',
        },
        {
          id: 'p_5_2_5',
          level: 2,
          text: 'Each interior angle of a regular polygon is 156°. How many sides does the polygon have?',
          background: 'blank',
        },
        {
          id: 'p_5_2_6',
          level: 2,
          text: 'In an irregular hexagon, five of the angles are each 125°. Find the size of the sixth angle.',
          background: 'blank',
        },
        {
          id: 'p_5_2_7',
          level: 3,
          text: 'Can a regular polygon have an interior angle of 150°? Show your working clearly.',
          background: 'blank',
        },
        {
          id: 'p_5_2_8',
          level: 3,
          text: 'The interior angles of a polygon are x, (x + 10), (x + 20), (x + 30), and (x + 40). Find the value of x.',
          background: 'blank',
        },
        {
          id: 'p_5_2_9',
          level: 3,
          text: 'A regular pentagon and a regular hexagon share a common edge. Calculate the angle between their adjacent edges at that vertex.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 5.3 EXTERIOR ANGLES OF POLYGONS
    // =========================================================================
    {
      id: 'sub_5_3',
      title: '5.3 Exterior angles of polygons',
      codes: ['9Gg.08'],
      steps: [
        {
          id: 's_5_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.08',
              text: 'Know that the sum of the exterior angles of any polygon is 360° and use this to solve problems.',
            },
          ],
        },
        {
          id: 's_5_3_c1',
          title: 'The Constant 360° Exterior Angle Sum',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Exterior Angle',
              definition:
                'The angle between any side of a polygon and an extended adjacent side. Interior angle + Exterior angle = 180°.',
            },
            {
              type: 'formula',
              math: '\\sum \\text{Exterior Angles} = 360^\\circ \\quad \\text{Each exterior angle in regular polygon} = \\frac{360^\\circ}{n}',
              label: 'One complete turn around any closed convex polygon',
            },
            {
              type: 'figure',
              figure: {
                component: 'ShapeBuilder',
                props: {
                  sides: 5,
                },
              },
            },
          ],
        },
        {
          id: 's_5_3_worked',
          title: 'Worked Example: Finding Sides from Exterior Angle',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Each exterior angle of a regular polygon is 24°. How many sides does it have?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Total sum of exterior angles is always 360°.',
                  },
                  {
                    type: 'formula',
                    math: 'n \\times 24^\\circ = 360^\\circ',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Divide 360° by the individual exterior angle: n = 360 ÷ 24.',
                  },
                  {
                    type: 'formula',
                    math: 'n = 15',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Conclude that the regular polygon has 15 sides.',
                  },
                  {
                    type: 'formula',
                    math: '15 \\text{ sides}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_5_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking the exterior angle is the reflex angle outside the vertex (360° - interior). Fact: The exterior angle is formed by extending one straight line (180° - interior).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking the exterior angle sum depends on the number of sides. Fact: It is ALWAYS exactly 360° for every polygon.',
            },
          ],
        },
        {
          id: 's_5_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Regular Polygon', 'Exterior Angle (360°/n)', 'Interior Angle (180° - Ext)'],
              rows: [
                ['Equilateral Triangle', '360° ÷ 3 = 120°', '180° - 120° = 60°'],
                ['Square', '360° ÷ 4 = 90°', '180° - 90° = 90°'],
                ['Regular Pentagon', '360° ÷ 5 = 72°', '180° - 72° = 108°'],
                ['Regular Hexagon', '360° ÷ 6 = 60°', '180° - 60° = 120°'],
                ['Regular Nonagon', '360° ÷ 9 = 40°', '180° - 40° = 140°'],
                ['Regular Dodecagon (12)', '360° ÷ 12 = 30°', '180° - 30° = 150°'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_5_3_1',
          level: 1,
          text: 'Calculate each exterior angle of a regular 12-sided polygon.',
          background: 'blank',
        },
        {
          id: 'p_5_3_2',
          level: 1,
          text: 'If the exterior angle of a regular polygon is 45°, what is its interior angle?',
          background: 'blank',
        },
        {
          id: 'p_5_3_3',
          level: 1,
          text: 'Four exterior angles of a pentagon are 60°, 85°, 75°, and 90°. Find the fifth exterior angle.',
          background: 'blank',
        },
        {
          id: 'p_5_3_4',
          level: 2,
          text: 'Each exterior angle of a regular polygon is 18°. How many sides does it have?',
          background: 'blank',
        },
        {
          id: 'p_5_3_5',
          level: 2,
          text: 'Each interior angle of a regular polygon is 162°. Find its exterior angle and number of sides.',
          background: 'blank',
        },
        {
          id: 'p_5_3_6',
          level: 2,
          text: 'Is it possible for a regular polygon to have an exterior angle of 50°? Explain why or why not.',
          background: 'blank',
        },
        {
          id: 'p_5_3_7',
          level: 3,
          text: 'The ratio of the interior angle to the exterior angle of a regular polygon is 7 : 2. Find the number of sides.',
          background: 'blank',
        },
        {
          id: 'p_5_3_8',
          level: 3,
          text: 'A regular polygon has an exterior angle of (x + 2)° and an interior angle of (8x - 2)°. Find the number of sides.',
          background: 'blank',
        },
        {
          id: 'p_5_3_9',
          level: 3,
          text: 'Explain why a regular polygon with exterior angle 35° cannot exist.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 5.4 CONSTRUCTIONS
    // =========================================================================
    {
      id: 'sub_5_4',
      title: '5.4 Constructions',
      codes: ['9Gg.11'],
      steps: [
        {
          id: 's_5_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.11',
              text: 'Construct 60°, 45° and 30° angles and regular polygons using straightedge and compasses.',
            },
          ],
        },
        {
          id: 's_5_4_c1',
          title: 'Geometric Constructions with Straightedge and Compasses',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Angle Bisector',
              definition:
                'A ray that cuts an angle into two equal halves. Bisecting 60° creates 30°; bisecting 90° creates 45°.',
            },
            {
              type: 'formula',
              math: '60^\\circ \\xrightarrow{\\text{bisect}} 30^\\circ, \\quad 90^\\circ \\xrightarrow{\\text{bisect}} 45^\\circ',
              label: 'Deriving standard angles geometrically',
            },
            {
              type: 'figure',
              figure: {
                component: 'ConstructionTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_5_4_worked',
          title: 'Worked Example: Constructing a 60° Angle',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Construct an angle of 60° at point A on line segment AB.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Set compass to any comfortable radius. Place point on A and draw an arc intersecting line AB at point C.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Without changing the compass radius, place point on C and draw an arc intersecting the first arc at point D.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Draw a straight ray from A through D. Triangle ACD is equilateral, so angle CAD = 60°.',
                  },
                  {
                    type: 'formula',
                    math: '\\angle CAD = 60^\\circ',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_5_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Rubbing out construction arcs. Fact: Cambridge exams award method marks specifically for seeing compass construction arcs intact.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Allowing compass width to slip or change during arcs for equilateral triangles.',
            },
          ],
        },
        {
          id: 's_5_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Target Angle', 'Construction Strategy'],
              rows: [
                ['60°', 'Equilateral triangle vertices using identical compass radius'],
                ['30°', 'Construct 60° angle, then construct its angle bisector'],
                ['90°', 'Perpendicular bisector of a line segment'],
                ['45°', 'Construct 90° angle, then construct its angle bisector'],
                ['Regular hexagon', 'Step compass radius (equal to circumcircle radius) 6 times around perimeter'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_5_4_1',
          level: 1,
          text: 'Name the geometric instrument used to draw arcs of fixed radius.',
          background: 'blank',
        },
        {
          id: 'p_5_4_2',
          level: 1,
          text: 'How can you obtain an angle of 30° from an angle of 60°?',
          background: 'blank',
        },
        {
          id: 'p_5_4_3',
          level: 1,
          text: 'How can you obtain an angle of 45° from a perpendicular line (90°)?',
          background: 'blank',
        },
        {
          id: 'p_5_4_4',
          level: 2,
          text: 'Describe the steps to construct an angle of 120° using only compasses and a straightedge.',
          background: 'blank',
        },
        {
          id: 'p_5_4_5',
          level: 2,
          text: 'Describe how to construct an angle of 105° by combining 60° and 45°.',
          background: 'blank',
        },
        {
          id: 'p_5_4_6',
          level: 2,
          text: 'Construct a regular hexagon inscribed in a circle of radius 5 cm.',
          background: 'blank',
        },
        {
          id: 'p_5_4_7',
          level: 3,
          text: 'Construct an angle of 75° by bisecting the angle between 60° and 90°.',
          background: 'blank',
        },
        {
          id: 'p_5_4_8',
          level: 3,
          text: 'Explain why the compass method constructs an exact 60° angle using equilateral triangle properties.',
          background: 'blank',
        },
        {
          id: 'p_5_4_9',
          level: 3,
          text: 'Construct a regular octagon inside a square by drawing diagonals and perpendicular bisectors.',
          background: 'blank',
        },
      ],
    },

    // =========================================================================
    // 5.5 PYTHAGORAS' THEOREM
    // =========================================================================
    {
      id: 'sub_5_5',
      title: "5.5 Pythagoras' theorem",
      codes: ['9Gg.10'],
      steps: [
        {
          id: 's_5_5_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Gg.10',
              text: "Know and use Pythagoras' theorem to calculate hypotenuse, shorter sides, and solve practical geometric problems.",
            },
          ],
        },
        {
          id: 's_5_5_c1',
          title: 'The Relationship Between the Squares of the Sides',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Hypotenuse',
              definition:
                'The longest side of a right-angled triangle, always located opposite the 90° right angle.',
            },
            {
              type: 'formula',
              math: 'a^2 + b^2 = c^2 \\iff c = \\sqrt{a^2 + b^2}, \\quad a = \\sqrt{c^2 - b^2}',
              label: "Pythagoras' Theorem (c is hypotenuse)",
            },
            {
              type: 'figure',
              figure: {
                component: 'PythagorasTool',
                props: {
                  a: 3,
                  b: 4,
                },
              },
            },
          ],
        },
        {
          id: 's_5_5_worked',
          title: 'Worked Example: Calculating a Shorter Side',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A right-angled triangle has hypotenuse 13 cm and one side 5 cm. Calculate the third side x.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: State Pythagoras theorem: a² + b² = c² where c = 13.',
                  },
                  {
                    type: 'formula',
                    math: 'x^2 + 5^2 = 13^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Rearrange to find the square of the shorter side: subtract 5² from 13².',
                  },
                  {
                    type: 'formula',
                    math: 'x^2 = 169 - 25 = 144',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Take the square root: x = √144 = 12 cm.',
                  },
                  {
                    type: 'formula',
                    math: 'x = 12\\text{ cm}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_5_5_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding squares when finding a shorter side: writing x² = 13² + 5² = 194. Fact: Shorter sides REQUIRE subtraction: c² - b².',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to take the square root at the final step, leaving c² instead of c.',
            },
          ],
        },
        {
          id: 's_5_5_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Pythagorean Triple', 'Formula Verification', 'Common Scale Multiples'],
              rows: [
                ['3, 4, 5', '3² + 4² = 9 + 16 = 25 = 5²', '6, 8, 10 or 9, 12, 15'],
                ['5, 12, 13', '5² + 12² = 25 + 144 = 169 = 13²', '10, 24, 26'],
                ['8, 15, 17', '8² + 15² = 64 + 225 = 289 = 17²', '16, 30, 34'],
                ['7, 24, 25', '7² + 24² = 49 + 576 = 625 = 25²', '14, 48, 50'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_5_5_1',
          level: 1,
          text: 'Find the hypotenuse of a right-angled triangle with sides 6 cm and 8 cm.',
          background: 'square',
        },
        {
          id: 'p_5_5_2',
          level: 1,
          text: 'Find the hypotenuse of a right-angled triangle with sides 9 cm and 12 cm.',
          background: 'square',
        },
        {
          id: 'p_5_5_3',
          level: 1,
          text: 'A right-angled triangle has hypotenuse 10 cm and one side 6 cm. Find the remaining side.',
          background: 'square',
        },
        {
          id: 'p_5_5_4',
          level: 2,
          text: 'Calculate the length of the hypotenuse with sides 7 cm and 10 cm to 1 decimal place.',
          background: 'square',
        },
        {
          id: 'p_5_5_5',
          level: 2,
          text: 'A 5-metre ladder leans against a vertical wall with its base 1.8 metres from the wall. How high up the wall does it reach to 2 d.p.?',
          background: 'square',
        },
        {
          id: 'p_5_5_6',
          level: 2,
          text: 'Calculate the diagonal of a rectangle measuring 15 cm by 8 cm.',
          background: 'square',
        },
        {
          id: 'p_5_5_7',
          level: 3,
          text: 'An isosceles triangle has base 16 cm and equal sides 17 cm. Calculate its perpendicular height and area.',
          background: 'square',
        },
        {
          id: 'p_5_5_8',
          level: 3,
          text: 'A ship sails 28 km due North and then 45 km due East. What is its direct distance from the starting point?',
          background: 'square',
        },
        {
          id: 'p_5_5_9',
          level: 3,
          text: 'Determine whether a triangle with sides 11 cm, 60 cm, and 61 cm is right-angled. Justify your answer with calculations.',
          background: 'square',
        },
      ],
    },
  ],
};
