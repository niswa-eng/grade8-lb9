import { Unit } from '../types/content';

export const unit09: Unit = {
  id: 'unit9',
  number: 9,
  title: '9 Sequences and functions',
  codes: ['9As.01', '9As.02', '9As.04'],
  accentColor: '#C026D3', // Fuchsia
  subtopics: [
    // =========================================================================
    // 9.1 GENERATING SEQUENCES
    // =========================================================================
    {
      id: 'sub_9_1',
      title: '9.1 Generating sequences',
      codes: ['9As.01'],
      steps: [
        {
          id: 's_9_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.01',
              text: 'Generate linear and quadratic sequences from numerical patterns and from a given term-to-term rule.',
            },
          ],
        },
        {
          id: 's_9_1_c1',
          title: 'First Differences vs Second Differences',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Linear vs Quadratic Sequences',
              definition:
                'A linear sequence has a CONSTANT first difference. A quadratic sequence has changing first differences, but a CONSTANT second difference.',
            },
            {
              type: 'formula',
              math: '\\text{Quadratic: } 2a = \\text{second difference} \\implies u_n = an^2 + bn + c',
              label: 'Second Difference Principle',
            },
            {
              type: 'figure',
              figure: {
                component: 'SequenceBuilder',
                props: {
                  rule: 'quadratic',
                },
              },
            },
          ],
        },
        {
          id: 's_9_1_worked',
          title: 'Worked Example: Generating Quadratic Terms',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Generate the first 4 terms of the quadratic sequence given by uₙ = n² + 3n.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'For n = 1: (1)² + 3(1) = 1 + 3 = 4.',
                  },
                  {
                    type: 'formula',
                    math: 'u_1 = 1^2 + 3(1) = 4',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'For n = 2: (2)² + 3(2) = 4 + 6 = 10. For n = 3: (3)² + 3(3) = 9 + 9 = 18.',
                  },
                  {
                    type: 'formula',
                    math: 'u_2 = 10, \\quad u_3 = 18',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'For n = 4: (4)² + 3(4) = 16 + 12 = 28.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Sequence: } 4, 10, 18, 28, \\dots',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_9_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing term-to-term rule with position-to-term (nth term) rule. A term-to-term rule (+3) cannot directly find term 50 without calculating all previous terms.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: In n² + 2, calculating (n + 2)² instead of squaring n first.',
            },
          ],
        },
        {
          id: 's_9_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Sequence', '1st Differences', '2nd Differences', 'Type'],
              rows: [
                ['3, 7, 11, 15', '+4, +4, +4', '0', 'Linear (Arithmetic)'],
                ['1, 4, 9, 16', '+3, +5, +7', '+2, +2', 'Quadratic (Square numbers)'],
                ['2, 6, 12, 20', '+4, +6, +8', '+2, +2', 'Quadratic (Rectangular numbers)'],
                ['3, 6, 12, 24', '× 2, × 2, × 2', 'N/A', 'Geometric'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_9_1_1',
          level: 1,
          text: 'Find the next two terms: 7, 12, 17, 22, ...',
          background: 'square',
        },
        {
          id: 'p_9_1_2',
          level: 1,
          text: 'Generate the first 4 terms of sequence uₙ = 5n - 2.',
          background: 'square',
        },
        {
          id: 'p_9_1_3',
          level: 1,
          text: 'Generate the first 4 terms of sequence uₙ = n² + 1.',
          background: 'square',
        },
        {
          id: 'p_9_1_4',
          level: 2,
          text: 'Calculate the first and second differences of the sequence: 4, 11, 22, 37, 56.',
          background: 'square',
        },
        {
          id: 'p_9_1_5',
          level: 2,
          text: 'Generate the first 4 terms of the sequence uₙ = 2n² - 3.',
          background: 'square',
        },
        {
          id: 'p_9_1_6',
          level: 2,
          text: 'A sequence starts with 3. Each term is obtained by "multiply by 2 and subtract 1". Write the first 5 terms.',
          background: 'square',
        },
        {
          id: 'p_9_1_7',
          level: 3,
          text: 'A quadratic sequence has second difference +6. What is the coefficient of n² in its nth term rule?',
          background: 'square',
        },
        {
          id: 'p_9_1_8',
          level: 3,
          text: 'Find the 10th term of the sequence: 0, 3, 8, 15, 24, ...',
          background: 'square',
        },
        {
          id: 'p_9_1_9',
          level: 3,
          text: 'Investigate triangular numbers 1, 3, 6, 10, 15. Show that their nth term is ½n(n + 1).',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 9.2 USING THE NTH TERM
    // =========================================================================
    {
      id: 'sub_9_2',
      title: '9.2 Using the nth term',
      codes: ['9As.02'],
      steps: [
        {
          id: 's_9_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.02',
              text: 'Understand and describe nth term rules algebraically (in the form an ± b, and in the form n/a, n², n³ or n² ± a).',
            },
          ],
        },
        {
          id: 's_9_2_c1',
          title: 'Finding the nth Term Formula',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'nth Term (uₙ)',
              definition:
                'A general formula where substituting position n gives the corresponding value of the term.',
            },
            {
              type: 'formula',
              math: 'u_n = d \\times n + c \\quad (d = \\text{common difference}, \\quad c = \\text{zero term } u_0)',
              label: 'Linear nth term rule',
            },
            {
              type: 'figure',
              figure: {
                component: 'SequenceBuilder',
                props: {
                  rule: 'linear',
                },
              },
            },
          ],
        },
        {
          id: 's_9_2_worked',
          title: 'Worked Example: Finding nth Term of a Linear Sequence',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Find the nth term of the sequence: 5, 8, 11, 14, 17, ...',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Find the common difference: 8 - 5 = +3. This gives the term 3n.',
                  },
                  {
                    type: 'formula',
                    math: '3n',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Compare 3n values (3, 6, 9, 12) with actual sequence (5, 8, 11, 14). Notice each term is +2 greater.',
                  },
                  {
                    type: 'formula',
                    math: '5 - 3 = +2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Combine to write the nth term: uₙ = 3n + 2.',
                  },
                  {
                    type: 'formula',
                    math: 'u_n = 3n + 2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_9_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing n + 3 instead of 3n. The common difference multiplies n!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Sign error when finding decreasing sequences (e.g., 20, 16, 12 has difference -4, so rule is -4n + 24, not 4n).',
            },
          ],
        },
        {
          id: 's_9_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Sequence Family', 'nth Term Format', 'Example'],
              rows: [
                ['Arithmetic / Linear', 'an + b', '4n + 1 (5, 9, 13, 17)'],
                ['Fractional position', 'n / a', 'n / 4 (¼, ½, ¾, 1)'],
                ['Square / Shifted square', 'n² ± a', 'n² - 2 (-1, 2, 7, 14)'],
                ['Cubic sequence', 'n³', '1, 8, 27, 64, 125'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_9_2_1',
          level: 1,
          text: 'Find the nth term of: 6, 10, 14, 18, 22, ...',
          background: 'square',
        },
        {
          id: 'p_9_2_2',
          level: 1,
          text: 'Find the nth term of: 2, 7, 12, 17, 22, ...',
          background: 'square',
        },
        {
          id: 'p_9_2_3',
          level: 1,
          text: 'Calculate the 50th term of uₙ = 4n - 1.',
          background: 'square',
        },
        {
          id: 'p_9_2_4',
          level: 2,
          text: 'Find the nth term of the decreasing sequence: 25, 21, 17, 13, 9, ...',
          background: 'square',
        },
        {
          id: 'p_9_2_5',
          level: 2,
          text: 'Is 97 a term in the sequence uₙ = 6n + 1? Justify your answer.',
          background: 'square',
        },
        {
          id: 'p_9_2_6',
          level: 2,
          text: 'Find the nth term of: 3, 6, 11, 18, 27, ... (compare with n²: 1, 4, 9, 16, 25).',
          background: 'square',
        },
        {
          id: 'p_9_2_7',
          level: 3,
          text: 'Find the nth term of: 2, 9, 28, 65, 126, ...',
          background: 'square',
        },
        {
          id: 'p_9_2_8',
          level: 3,
          text: 'A sequence of fractions is: 1/2, 2/3, 3/4, 4/5, ... Write down its nth term.',
          background: 'square',
        },
        {
          id: 'p_9_2_9',
          level: 3,
          text: 'The nth term of a sequence is 2n² + 5. Find the value of n for which the term equals 133.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 9.3 REPRESENTING FUNCTIONS
    // =========================================================================
    {
      id: 'sub_9_3',
      title: '9.3 Representing functions',
      codes: ['9As.04'],
      steps: [
        {
          id: 's_9_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9As.04',
              text: 'Understand that a situation can be represented either in words or as a linear function in two variables (of the form y=mx+c or ax+by=c) and move between the two representations.',
            },
          ],
        },
        {
          id: 's_9_3_c1',
          title: 'Linear Functions in Two Variables',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Linear Function',
              definition:
                'A relationship between two variables x and y with constant rate of change m (gradient) and initial value c (y-intercept).',
            },
            {
              type: 'formula',
              math: 'y = mx + c \\quad \\text{or standard form} \\quad ax + by = c',
              label: 'Gradient-intercept and Standard forms',
            },
            {
              type: 'figure',
              figure: {
                component: 'FunctionMachine',
                props: {
                  initialInput: 5,
                  operation1: '× 2',
                  operation2: '+ 3',
                },
              },
            },
          ],
        },
        {
          id: 's_9_3_worked',
          title: 'Worked Example: Modelling Practical Situations',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A plumber charges £40 callout fee plus £30 per hour worked. Write a linear equation connecting total cost C and hours h, and calculate the cost for 4.5 hours.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify constant base charge (c = 40) and rate of change (m = 30).',
                  },
                  {
                    type: 'formula',
                    math: 'C = 30h + 40',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Substitute h = 4.5 into the function.',
                  },
                  {
                    type: 'formula',
                    math: 'C = 30(4.5) + 40 = 135 + 40',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Total cost is £175.',
                  },
                  {
                    type: 'formula',
                    math: 'C = £175',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_9_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Swapping variables in practical models: writing h = 30C + 40 instead of C = 30h + 40.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing the gradient (rate per unit) with the constant fixed start value (intercept).',
            },
          ],
        },
        {
          id: 's_9_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Form', 'Structure', 'Usage'],
              rows: [
                ['Explicit form', 'y = mx + c', 'Directly gives gradient m and y-intercept (0, c)'],
                ['Standard form', 'ax + by = c', 'Convenient for finding intercepts by setting x=0 or y=0'],
                ['Rate of change', 'Δy / Δx', 'Increase in dependent variable per unit of independent variable'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_9_3_1',
          level: 1,
          text: 'State the gradient and y-intercept of the function: y = 5x - 7.',
          background: 'lined',
        },
        {
          id: 'p_9_3_2',
          level: 1,
          text: 'A phone plan costs £15 per month plus £0.05 per text message. Write an equation for monthly cost C for n texts.',
          background: 'lined',
        },
        {
          id: 'p_9_3_3',
          level: 1,
          text: 'Find y when x = 4 for the function y = 3x + 1.',
          background: 'lined',
        },
        {
          id: 'p_9_3_4',
          level: 2,
          text: 'Convert the equation 2x + 4y = 12 into the form y = mx + c.',
          background: 'lined',
        },
        {
          id: 'p_9_3_5',
          level: 2,
          text: 'A car rental company charges $50 per day plus $0.20 per kilometre driven. Write a function for cost C in terms of km d for a 3-day rental.',
          background: 'lined',
        },
        {
          id: 'p_9_3_6',
          level: 2,
          text: 'Find the x-intercept and y-intercept of the line 3x + 2y = 18.',
          background: 'lined',
        },
        {
          id: 'p_9_3_7',
          level: 3,
          text: 'Temperature in Fahrenheit F and Celsius C are related by F = 1.8C + 32. At what temperature are Fahrenheit and Celsius numerically equal?',
          background: 'lined',
        },
        {
          id: 'p_9_3_8',
          level: 3,
          text: 'A water tank contains 500 litres. Water leaks out at 15 litres per hour. Form a linear function for volume V after t hours, and calculate when the tank empties.',
          background: 'lined',
        },
        {
          id: 'p_9_3_9',
          level: 3,
          text: 'Rearrange ax + by = c to make y the subject, identifying expressions for gradient m and intercept c in terms of a, b, and c.',
          background: 'lined',
        },
      ],
    },
  ],
};
