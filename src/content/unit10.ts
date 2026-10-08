import { Unit } from '../types/content';

export const unit10: Unit = {
  id: 'unit10',
  number: 10,
  title: '10 Graphs',
  codes: ['9As.03', '9As.05', '9As.06', '9As.07'],
  accentColor: '#0284C7', // Sky
  subtopics: [
    // =========================================================================
    // 10.1 FUNCTIONS
    // =========================================================================
    {
      id: 'sub_10_1',
      title: '10.1 Functions',
      codes: ['9As.03'],
      steps: [
        {
          id: 's_10_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.03',
              text: 'Understand that a function is a relationship where each input has a single output. Generate outputs and identify inputs using inverse operations (including indices).',
            },
          ],
        },
        {
          id: 's_10_1_c1',
          title: 'Inputs, Outputs, and Inverse Functions',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Function & Inverse',
              definition:
                'A mapping f(x) assigns exactly one output to each input. The inverse function f⁻¹(x) reverses the operation to return the original input.',
            },
            {
              type: 'formula',
              math: 'f(x) = 2x^2 + 5 \\implies f^{-1}(y) = \\sqrt{\\frac{y - 5}{2}} \\quad (x \\ge 0)',
              label: 'Reversing operations in reverse order',
            },
            {
              type: 'figure',
              figure: {
                component: 'FunctionMachine',
                props: {
                  initialInput: 3,
                  operation1: 'square (x²)',
                  operation2: '+ 4',
                },
              },
            },
          ],
        },
        {
          id: 's_10_1_worked',
          title: 'Worked Example: Finding the Input from an Output',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'The function rule is f(x) = 3x² - 7. If the output is 41, find the positive input x.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Set up the equation: 3x² - 7 = 41.',
                  },
                  {
                    type: 'formula',
                    math: '3x^2 - 7 = 41',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Add 7: 3x² = 48. Divide by 3: x² = 16.',
                  },
                  {
                    type: 'formula',
                    math: 'x^2 = 16',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Take positive square root: x = √16 = 4.',
                  },
                  {
                    type: 'formula',
                    math: 'x = 4',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_10_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: When inverting a function like f(x) = 2(x + 3), inverting the operations without reversing their order. You must divide by 2 FIRST, then subtract 3.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming f⁻¹(x) means 1 / f(x). The notation f⁻¹ denotes the inverse function, not a reciprocal power.',
            },
          ],
        },
        {
          id: 's_10_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Function Component', 'Meaning', 'Notation'],
              rows: [
                ['Input', 'The independent variable chosen', 'x'],
                ['Output', 'The value produced by rule', 'f(x) or y'],
                ['Mapping', 'The rule connecting input to output', 'x ↦ 2x + 1'],
                ['Inverse function', 'Reverses the function rule', 'f⁻¹(x)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_10_1_1',
          level: 1,
          text: 'If f(x) = 4x - 5, find f(3).',
          background: 'lined',
        },
        {
          id: 'p_10_1_2',
          level: 1,
          text: 'If g(x) = x² + 2, find g(5).',
          background: 'lined',
        },
        {
          id: 'p_10_1_3',
          level: 1,
          text: 'If h(x) = 2x + 8, find the input that gives an output of 20.',
          background: 'lined',
        },
        {
          id: 'p_10_1_4',
          level: 2,
          text: 'Find an expression for the inverse function f⁻¹(x) when f(x) = (x + 7) / 3.',
          background: 'lined',
        },
        {
          id: 'p_10_1_5',
          level: 2,
          text: 'Given f(x) = 5x² - 3, find x when f(x) = 77 (x > 0).',
          background: 'lined',
        },
        {
          id: 'p_10_1_6',
          level: 2,
          text: 'A function machine performs: [Input] → [ - 4 ] → [ × 5 ] → [Output]. Write the inverse rule.',
          background: 'lined',
        },
        {
          id: 'p_10_1_7',
          level: 3,
          text: 'If f(x) = 2x + 1 and g(x) = x², find f(g(3)) and g(f(3)).',
          background: 'lined',
        },
        {
          id: 'p_10_1_8',
          level: 3,
          text: 'Find the value of x such that f(x) = f⁻¹(x) where f(x) = 3x - 4.',
          background: 'lined',
        },
        {
          id: 'p_10_1_9',
          level: 3,
          text: 'Explain why f(x) = x² does not have a single inverse unless the domain is restricted (e.g. x ≥ 0).',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 10.2 PLOTTING GRAPHS
    // =========================================================================
    {
      id: 'sub_10_2',
      title: '10.2 Plotting graphs',
      codes: ['9As.05'],
      steps: [
        {
          id: 's_10_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.05',
              text: 'Use knowledge of coordinate pairs to construct tables of values and plot graphs of linear functions (including ax+by=c) and quadratic functions (y=x² ± a).',
            },
          ],
        },
        {
          id: 's_10_2_c1',
          title: 'Quadratic Graphs and Parabolic Symmetry',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Parabola',
              definition:
                'The U-shaped symmetrical curve formed by plotting a quadratic function y = x² ± a. The turning point is called the vertex.',
            },
            {
              type: 'formula',
              math: 'y = x^2 - 4 \\implies \\text{Line of symmetry is the } y\\text{-axis } (x = 0), \\quad \\text{Vertex at } (0, -4)',
              label: 'Quadratic curve with vertical shift',
            },
            {
              type: 'figure',
              figure: {
                component: 'QuadraticGraph',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_10_2_worked',
          title: 'Worked Example: Table of Values for Quadratic Curve',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Construct a table of values for y = x² - 3 for integer values of x from -3 to 3.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Compute negative x values: (-3)² - 3 = 6; (-2)² - 3 = 1; (-1)² - 3 = -2.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Compute vertex at x = 0: 0² - 3 = -3.',
                  },
                  {
                    type: 'formula',
                    math: '(0, -3)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Compute positive x values using symmetry: (1, -2), (2, 1), (3, 6). Plot points and join with a smooth curve.',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_10_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Joining quadratic points with straight lines using a ruler. Fact: Quadratics MUST be joined with a smooth continuous curve.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Calculating (-2)² as -4 instead of +4, corrupting the negative half of the table.',
            },
          ],
        },
        {
          id: 's_10_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Graph Feature', 'Description', 'Characteristic on y = x² - 3'],
              rows: [
                ['Vertex', 'The lowest point (minimum)', '(0, -3)'],
                ['Line of symmetry', 'Vertical axis splitting parabola', 'x = 0 (y-axis)'],
                ['x-intercepts (roots)', 'Where curve crosses x-axis (y = 0)', 'x = ±√3 ≈ ±1.73'],
                ['y-intercept', 'Where curve crosses y-axis (x = 0)', '(0, -3)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_10_2_1',
          level: 1,
          text: 'Complete coordinates for y = 2x + 1: x = -1, 0, 1, 2.',
          background: 'axes',
        },
        {
          id: 'p_10_2_2',
          level: 1,
          text: 'Find the coordinates of the vertex of y = x² + 5.',
          background: 'axes',
        },
        {
          id: 'p_10_2_3',
          level: 1,
          text: 'State the line of symmetry for y = x² - 9.',
          background: 'axes',
        },
        {
          id: 'p_10_2_4',
          level: 2,
          text: 'Plot the graph of 3x + 2y = 12 by finding the intercepts when x = 0 and when y = 0.',
          background: 'axes',
        },
        {
          id: 'p_10_2_5',
          level: 2,
          text: 'Draw the graph of y = x² - 4 for -3 ≤ x ≤ 3 and state the coordinates where it crosses the x-axis.',
          background: 'axes',
        },
        {
          id: 'p_10_2_6',
          level: 2,
          text: 'Which of the following points lies on the line 2x - 3y = 7: (5, 1), (2, -1), (8, 3)?',
          background: 'axes',
        },
        {
          id: 'p_10_2_7',
          level: 3,
          text: 'Use your graph of y = x² - 2 to estimate the solution to x² - 2 = 3.',
          background: 'axes',
        },
        {
          id: 'p_10_2_8',
          level: 3,
          text: 'Plot y = -x² + 4 for -3 ≤ x ≤ 3. Describe the orientation of this parabola compared to y = x² - 4.',
          background: 'axes',
        },
        {
          id: 'p_10_2_9',
          level: 3,
          text: 'Find the points of intersection between the line y = x + 2 and the curve y = x².',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 10.3 GRADIENT AND INTERCEPT
    // =========================================================================
    {
      id: 'sub_10_3',
      title: '10.3 Gradient and intercept',
      codes: ['9As.06'],
      steps: [
        {
          id: 's_10_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.06',
              text: 'Understand that straight-line graphs can be represented by equations. Find the equation in the form y=mx+c or where y is given implicitly in terms of x.',
            },
          ],
        },
        {
          id: 's_10_3_c1',
          title: 'Calculating Gradient (m) and y-Intercept (c)',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Gradient (m)',
              definition:
                'The measure of steepness of a line: vertical change divided by horizontal change (rise over run). Parallel lines have equal gradients.',
            },
            {
              type: 'formula',
              math: 'm = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad y = mx + c',
              label: 'Gradient formula between two points (x₁, y₁) and (x₂, y₂)',
            },
            {
              type: 'figure',
              figure: {
                component: 'CoordinateGrid',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_10_3_worked',
          title: 'Worked Example: Finding the Equation of a Line',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Find the equation of the line passing through points A(2, 3) and B(6, 11).',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate gradient m = (y₂ - y₁) / (x₂ - x₁) = (11 - 3) / (6 - 2) = 8 / 4 = 2.',
                  },
                  {
                    type: 'formula',
                    math: 'm = 2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Substitute m = 2 and point (2, 3) into y = mx + c: 3 = 2(2) + c.',
                  },
                  {
                    type: 'formula',
                    math: '3 = 4 + c \\implies c = -1',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: State the equation: y = 2x - 1.',
                  },
                  {
                    type: 'formula',
                    math: 'y = 2x - 1',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_10_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Inverting the gradient formula to run / rise (change in x over change in y). Gradient is ALWAYS Δy / Δx.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Reading m directly from 2y = 6x + 8 as 6 without dividing throughout by 2 first (m = 3).',
            },
          ],
        },
        {
          id: 's_10_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Line Property', 'Algebraic Condition', 'Visual Appearance'],
              rows: [
                ['Positive gradient', 'm > 0', 'Slopes upwards from left to right'],
                ['Negative gradient', 'm < 0', 'Slopes downwards from left to right'],
                ['Zero gradient', 'm = 0 (y = c)', 'Horizontal line'],
                ['Undefined gradient', 'x = k', 'Vertical line'],
                ['Parallel lines', 'm₁ = m₂', 'Equal steepness, never meet'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_10_3_1',
          level: 1,
          text: 'Find the gradient of the line passing through (0, 0) and (3, 6).',
          background: 'axes',
        },
        {
          id: 'p_10_3_2',
          level: 1,
          text: 'Write down the gradient and y-intercept of: y = -4x + 9.',
          background: 'axes',
        },
        {
          id: 'p_10_3_3',
          level: 1,
          text: 'Which line is parallel to y = 3x - 5: (A) y = 2x + 3, (B) y = 3x + 8, or (C) y = -3x - 5?',
          background: 'axes',
        },
        {
          id: 'p_10_3_4',
          level: 2,
          text: 'Find the equation of the line with gradient 4 passing through (2, 5).',
          background: 'axes',
        },
        {
          id: 'p_10_3_5',
          level: 2,
          text: 'Find the gradient of the line 4x + 2y = 10.',
          background: 'axes',
        },
        {
          id: 'p_10_3_6',
          level: 2,
          text: 'Find the equation of the line passing through (1, 4) and (5, 16).',
          background: 'axes',
        },
        {
          id: 'p_10_3_7',
          level: 3,
          text: 'Line L passes through (2, -3) and (6, 5). Find the equation of the line parallel to L passing through (0, 4).',
          background: 'axes',
        },
        {
          id: 'p_10_3_8',
          level: 3,
          text: 'Find the equation of the line passing through (-2, 7) and (4, -5).',
          background: 'axes',
        },
        {
          id: 'p_10_3_9',
          level: 3,
          text: 'Points A(1, 2), B(3, k), and C(7, 14) are collinear (lie on the same straight line). Calculate the value of k.',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 10.4 INTERPRETING GRAPHS
    // =========================================================================
    {
      id: 'sub_10_4',
      title: '10.4 Interpreting graphs',
      codes: ['9As.07'],
      steps: [
        {
          id: 's_10_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.07',
              text: 'Read, draw and interpret graphs and use compound measures (speed, density, currency rates) to compare graphs.',
            },
          ],
        },
        {
          id: 's_10_4_c1',
          title: 'Distance-Time Graphs and Rates of Change',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Distance-Time Graph',
              definition:
                'Gradient represents speed. A horizontal section indicates stationary (stopped). Steeper gradients indicate faster speed.',
            },
            {
              type: 'formula',
              math: '\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}} = \\text{Gradient of Distance-Time Graph}',
              label: 'Rate of change interpretation',
            },
            {
              type: 'figure',
              figure: {
                component: 'ConversionGraph',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_10_4_worked',
          title: 'Worked Example: Calculating Speed from Graph',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A cyclist travels 30 km in 1.5 hours, rests for 30 minutes, then travels another 20 km in 1 hour. Calculate the average speed for the whole journey.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate total distance: 30 km + 20 km = 50 km.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Total Distance} = 50\\text{ km}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Calculate total time elapsed: 1.5 h + 0.5 h + 1.0 h = 3.0 hours.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Total Time} = 3\\text{ hours}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Average speed = 50 ÷ 3 = 16.7 km/h.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Average Speed} = 16.7\\text{ km/h}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_10_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Averaging speeds directly without weighting by time. You must divide total distance by total time.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Misinterpreting minutes as decimals of hours: 30 minutes is 0.5 hours, not 0.3 hours!',
            },
          ],
        },
        {
          id: 's_10_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Graph Type', 'Horizontal Axis', 'Vertical Axis', 'Gradient Meaning'],
              rows: [
                ['Distance-Time', 'Time (h or s)', 'Distance (km or m)', 'Speed (km/h or m/s)'],
                ['Conversion graph', 'Currency A (£)', 'Currency B ($)', 'Exchange rate'],
                ['Depth-Time', 'Time (s)', 'Liquid depth (cm)', 'Rate of filling'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_10_4_1',
          level: 1,
          text: 'On a distance-time graph, what does a horizontal line segment represent?',
          background: 'axes',
        },
        {
          id: 'p_10_4_2',
          level: 1,
          text: 'A runner covers 12 km in 1.5 hours. Calculate their speed in km/h.',
          background: 'axes',
        },
        {
          id: 'p_10_4_3',
          level: 1,
          text: 'A conversion graph shows £10 = $13. Convert £50 into dollars.',
          background: 'axes',
        },
        {
          id: 'p_10_4_4',
          level: 2,
          text: 'A car travels 90 km in 1 hour 15 minutes. Calculate its average speed in km/h.',
          background: 'axes',
        },
        {
          id: 'p_10_4_5',
          level: 2,
          text: 'A container of uniform cross-section fills with water at constant rate. Describe the shape of its depth-time graph.',
          background: 'axes',
        },
        {
          id: 'p_10_4_6',
          level: 2,
          text: 'Between t = 2 h and t = 5 h, a train travels from km marker 80 to km marker 320. Find its speed during this interval.',
          background: 'axes',
        },
        {
          id: 'p_10_4_7',
          level: 3,
          text: 'Two runners start at the same time: Runner A at 8 km/h and Runner B at 10 km/h. On a distance-time graph, find the time when Runner B is 3 km ahead.',
          background: 'axes',
        },
        {
          id: 'p_10_4_8',
          level: 3,
          text: 'A conical vase is filled with water at a constant rate. Sketch and explain why the depth-time graph gets steeper or shallower.',
          background: 'axes',
        },
        {
          id: 'p_10_4_9',
          level: 3,
          text: 'Convert a speed of 72 km/h into metres per second (m/s).',
          background: 'axes',
        },
      ],
    },
  ],
};
