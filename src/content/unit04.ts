import { Unit } from '../types/content';

export const unit04: Unit = {
  id: 'unit4',
  number: 4,
  title: '4 Equations and inequalities',
  codes: ['9Ae.05', '9Ae.06', '9Ae.07'],
  accentColor: '#7C3AED', // Violet
  subtopics: [
    // =========================================================================
    // 4.1 CONSTRUCTING AND SOLVING EQUATIONS
    // =========================================================================
    {
      id: 'sub_4_1',
      title: '4.1 Constructing and solving equations',
      codes: ['9Ae.05'],
      steps: [
        {
          id: 's_4_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.05',
              text: 'Understand that a situation can be represented either in words or as an equation. Move between the two representations and solve the equation (including those with an unknown in the denominator).',
            },
          ],
        },
        {
          id: 's_4_1_c1',
          title: 'Solving Equations with Fractions and Denominators',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Unknown in Denominator',
              definition:
                'An equation where the variable is divided (e.g., a / x = b). Multiply both sides by x to bring the variable to the numerator.',
            },
            {
              type: 'formula',
              math: '\\frac{24}{x} = 6 \\implies 24 = 6x \\implies x = 4',
              label: 'Multiply by the variable first',
            },
            {
              type: 'figure',
              figure: {
                component: 'BalanceScale',
                props: {
                  leftExpression: '24 / x',
                  rightExpression: '6',
                },
              },
            },
          ],
        },
        {
          id: 's_4_1_worked',
          title: 'Worked Example: Unknown in Denominator with Linear Expression',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Solve the equation: 18 / (2x - 1) = 3',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Multiply both sides by the denominator (2x - 1).',
                  },
                  {
                    type: 'formula',
                    math: '18 = 3(2x - 1)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Expand the right-hand bracket or divide both sides by 3: 6 = 2x - 1.',
                  },
                  {
                    type: 'formula',
                    math: '6 = 2x - 1',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Add 1 to both sides and divide by 2: 2x = 7, so x = 3.5.',
                  },
                  {
                    type: 'formula',
                    math: 'x = 3.5',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_4_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Inverting only one side: turning 12/x = 4 into x/12 = 4. Fact: You must invert both sides or multiply across by x.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting that a fraction bar acts as brackets: in (3x + 2)/4 = 5, multiply by 4 before subtracting 2.',
            },
          ],
        },
        {
          id: 's_4_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Equation Type', 'Key Strategy', 'Example'],
              rows: [
                ['Unknown on both sides', 'Subtract smaller unknown term first', '5x + 2 = 2x + 11 \\implies 3x = 9'],
                ['Fractional equation', 'Multiply all terms by common denominator', 'x/3 + x/2 = 5 \\implies 2x + 3x = 30'],
                ['Unknown in denominator', 'Multiply both sides by denominator', '20/x = 5 \\implies 20 = 5x \\implies x = 4'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_4_1_1',
          level: 1,
          text: 'Solve: 4x + 9 = 29.',
          background: 'square',
        },
        {
          id: 'p_4_1_2',
          level: 1,
          text: 'Solve: 15 / x = 3.',
          background: 'square',
        },
        {
          id: 'p_4_1_3',
          level: 1,
          text: 'Solve: 5(y - 2) = 25.',
          background: 'square',
        },
        {
          id: 'p_4_1_4',
          level: 2,
          text: 'Solve: 7x - 4 = 3x + 16.',
          background: 'square',
        },
        {
          id: 'p_4_1_5',
          level: 2,
          text: 'Solve: 28 / (x + 3) = 4.',
          background: 'square',
        },
        {
          id: 'p_4_1_6',
          level: 2,
          text: 'Solve: (2m + 5) / 3 = 7.',
          background: 'square',
        },
        {
          id: 'p_4_1_7',
          level: 3,
          text: 'Solve: 45 / (3x - 1) = 5.',
          background: 'square',
        },
        {
          id: 'p_4_1_8',
          level: 3,
          text: 'Solve: (x + 2)/4 + (x - 1)/3 = 5.',
          background: 'square',
        },
        {
          id: 'p_4_1_9',
          level: 3,
          text: 'A train travels 180 km at an average speed of (v + 10) km/h taking 2 hours. Form an equation with the unknown in the denominator and solve for v.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 4.2 SIMULTANEOUS EQUATIONS
    // =========================================================================
    {
      id: 'sub_4_2',
      title: '4.2 Simultaneous equations',
      codes: ['9Ae.06'],
      steps: [
        {
          id: 's_4_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.06',
              text: 'Understand that the solution of simultaneous linear equations is the pair of values that satisfy both equations; can be found algebraically (eliminating one variable); and can be found graphically (point of intersection).',
            },
          ],
        },
        {
          id: 's_4_2_c1',
          title: 'Graphical and Algebraic Solutions',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Simultaneous Equations',
              definition:
                'Two or more equations with the same variables that are satisfied simultaneously by a unique pair of values.',
            },
            {
              type: 'formula',
              math: '\\text{Intersection point } (x, y) \\text{ satisfies both straight lines at once}',
              label: 'Geometric interpretation',
            },
            {
              type: 'figure',
              figure: {
                component: 'SimultaneousEquationsGraph',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_4_2_worked',
          title: 'Worked Example: Elimination Method',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Solve simultaneously: 3x + 2y = 19 and 2x - 2y = 6.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Notice +2y and -2y have opposite signs. Add the two equations together.',
                  },
                  {
                    type: 'formula',
                    math: '(3x + 2y) + (2x - 2y) = 19 + 6 \\implies 5x = 25',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Solve for x: x = 5.',
                  },
                  {
                    type: 'formula',
                    math: 'x = 5',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Substitute x = 5 back into 3x + 2y = 19 to find y: 15 + 2y = 19, so 2y = 4, y = 2.',
                  },
                  {
                    type: 'formula',
                    math: 'x = 5, \\quad y = 2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_4_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding equations when signs of coefficients are the same (e.g. +3y and +3y). Fact: SAME signs SUBTRACT; DIFFERENT signs ADD (SSSD rule).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Stopping after finding only x. Fact: Simultaneous equations have TWO unknowns; you must find both x and y.',
            },
          ],
        },
        {
          id: 's_4_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Method', 'Strategy', 'When to Choose'],
              rows: [
                ['Elimination', 'Add or subtract equations to cancel one variable', 'Coefficients can easily be matched'],
                ['Substitution', 'Express one variable in terms of the other and plug in', 'One equation has y = mx + c or x = ...'],
                ['Graphical', 'Draw both straight lines and locate intersection', 'Visual check or when instructed to read coords'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_4_2_1',
          level: 1,
          text: 'Solve simultaneously: x + y = 10 and x - y = 4.',
          background: 'square',
        },
        {
          id: 'p_4_2_2',
          level: 1,
          text: 'Solve simultaneously: 2x + y = 11 and y = 3.',
          background: 'square',
        },
        {
          id: 'p_4_2_3',
          level: 1,
          text: 'State the coordinates of the point where lines y = x and y = 4 intersect.',
          background: 'square',
        },
        {
          id: 'p_4_2_4',
          level: 2,
          text: 'Solve simultaneously: 4x + 3y = 26 and 2x + 3y = 16.',
          background: 'square',
        },
        {
          id: 'p_4_2_5',
          level: 2,
          text: 'Solve simultaneously: 3x - y = 11 and 2x + 3y = 11.',
          background: 'square',
        },
        {
          id: 'p_4_2_6',
          level: 2,
          text: 'Two coffees and three teas cost £11. Four coffees and one tea cost £12. Find the cost of one coffee and one tea.',
          background: 'square',
        },
        {
          id: 'p_4_2_7',
          level: 3,
          text: 'Solve simultaneously: 5x + 3y = 41 and 2x + 4y = 22.',
          background: 'square',
        },
        {
          id: 'p_4_2_8',
          level: 3,
          text: 'Solve graphically or algebraically: 2x + y = 8 and y = 3x - 2.',
          background: 'square',
        },
        {
          id: 'p_4_2_9',
          level: 3,
          text: 'Line 1 passes through (0, 1) and (2, 5). Line 2 passes through (0, 7) and (4, -1). Find the intersection point.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 4.3 INEQUALITIES
    // =========================================================================
    {
      id: 'sub_4_3',
      title: '4.3 Inequalities',
      codes: ['9Ae.07'],
      steps: [
        {
          id: 's_4_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.07',
              text: 'Understand that a situation can be represented either in words or as an inequality. Move between the two representations and solve linear inequalities.',
            },
          ],
        },
        {
          id: 's_4_3_c1',
          title: 'Inequality Signs and Reversing the Direction',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Linear Inequality',
              definition:
                'A mathematical comparison stating that an expression is greater than (>), less than (<), greater than or equal to (≥), or less than or equal to (≤) another.',
            },
            {
              type: 'formula',
              math: '-2x < 10 \\implies x > -5',
              label: 'Multiplying or dividing by a negative number flips the inequality symbol',
            },
            {
              type: 'figure',
              figure: {
                component: 'InequalityNumberLine',
                props: {
                  minVal: -6,
                  maxVal: 4,
                  leftBound: -5,
                  rightBound: 2,
                  leftClosed: false,
                  rightClosed: true,
                },
              },
            },
          ],
        },
        {
          id: 's_4_3_worked',
          title: 'Worked Example: Solving a Two-step Inequality',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Solve: 3(x - 2) ≥ 5x + 4',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Expand brackets: 3x - 6 ≥ 5x + 4.',
                  },
                  {
                    type: 'formula',
                    math: '3x - 6 \\ge 5x + 4',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Collect variable terms: subtract 5x: -2x - 6 ≥ 4. Add 6: -2x ≥ 10.',
                  },
                  {
                    type: 'formula',
                    math: '-2x \\ge 10',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Divide by -2 and reverse the inequality sign: x ≤ -5.',
                  },
                  {
                    type: 'formula',
                    math: 'x \\le -5',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_4_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to flip the sign when dividing by a negative: -3x < 9 leading to x < -3 instead of x > -3.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Drawing an open circle for ≤ or ≥ on a number line. Fact: Open circle is strictly < or >; filled solid circle includes equality.',
            },
          ],
        },
        {
          id: 's_4_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Symbol', 'Meaning', 'Number Line Dot'],
              rows: [
                ['<', 'Strictly less than', 'Empty / Open circle (○)'],
                ['>', 'Strictly greater than', 'Empty / Open circle (○)'],
                ['≤', 'Less than or equal to', 'Solid / Filled circle (●)'],
                ['≥', 'Greater than or equal to', 'Solid / Filled circle (●)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_4_3_1',
          level: 1,
          text: 'Solve: x + 7 < 15.',
          background: 'axes',
        },
        {
          id: 'p_4_3_2',
          level: 1,
          text: 'Solve: 3x ≥ 18.',
          background: 'axes',
        },
        {
          id: 'p_4_3_3',
          level: 1,
          text: 'List all integer values of n such that -3 < n ≤ 2.',
          background: 'axes',
        },
        {
          id: 'p_4_3_4',
          level: 2,
          text: 'Solve: 4x - 5 > 19.',
          background: 'axes',
        },
        {
          id: 'p_4_3_5',
          level: 2,
          text: 'Solve: 12 - 2x ≤ 4.',
          background: 'axes',
        },
        {
          id: 'p_4_3_6',
          level: 2,
          text: 'Represent the solution to -1 ≤ 2x + 3 < 9 on a number line.',
          background: 'axes',
        },
        {
          id: 'p_4_3_7',
          level: 3,
          text: 'Solve: (3x + 1)/2 ≥ x - 4.',
          background: 'axes',
        },
        {
          id: 'p_4_3_8',
          level: 3,
          text: 'A rectangle has width x cm and length (x + 5) cm. Its perimeter is at most 46 cm. Find the maximum possible integer value of x.',
          background: 'axes',
        },
        {
          id: 'p_4_3_9',
          level: 3,
          text: 'Solve: 5 - 3(x + 2) < 2x - 11.',
          background: 'axes',
        },
      ],
    },
  ],
};
