import { Unit } from '../types/content';

export const unit11: Unit = {
  id: 'unit11',
  number: 11,
  title: '11 Ratio and proportion',
  codes: ['9Nf.07', '9Nf.08'],
  accentColor: '#16A34A', // Green
  subtopics: [
    // =========================================================================
    // 11.1 USING RATIOS
    // =========================================================================
    {
      id: 'sub_11_1',
      title: '11.1 Using ratios',
      codes: ['9Nf.08'],
      steps: [
        {
          id: 's_11_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.08',
              text: 'Use knowledge of ratios, equivalence, sharing in a given ratio, and comparing ratios in the form 1 : n or n : 1.',
            },
          ],
        },
        {
          id: 's_11_1_c1',
          title: 'Unitary Ratios (1 : n) and Multi-part Sharing',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Unitary Ratio',
              definition:
                'A ratio written in the form 1 : n or n : 1 to allow direct comparison of mixtures, scales, and value for money.',
            },
            {
              type: 'formula',
              math: 'a : b = 1 : \\frac{b}{a} \\quad \\text{e.g. } 4 : 14 = 1 : 3.5',
              label: 'Divide all terms by the first part',
            },
            {
              type: 'figure',
              figure: {
                component: 'BarModel',
                props: {
                  total: 45,
                  ratio: [2, 3],
                  labels: ['Part A', 'Part B'],
                },
              },
            },
          ],
        },
        {
          id: 's_11_1_worked',
          title: 'Worked Example: Difference Given in Ratio',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A sum of money is shared between Alex and Ben in the ratio 3 : 7. Ben receives £36 more than Alex. Calculate the total money shared.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Find the difference in parts: 7 parts - 3 parts = 4 parts.',
                  },
                  {
                    type: 'formula',
                    math: '4 \\text{ parts} = £36',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Value of 1 part = 36 ÷ 4 = £9.',
                  },
                  {
                    type: 'formula',
                    math: '1 \\text{ part} = £9',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Total parts = 3 + 7 = 10 parts. Total money = 10 × 9 = £90.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Total} = 10 \\times £9 = £90',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_11_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Dividing the given amount £36 by the total parts 10 instead of reading that £36 is the DIFFERENCE between the two shares.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Comparing 2 : 5 and 3 : 7 without converting both into 1 : n form.',
            },
          ],
        },
        {
          id: 's_11_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Ratio Form', 'Method', 'Use Case'],
              rows: [
                ['Simplest form', 'Divide by HCF of all terms', 'Standard presentation (e.g. 12:18 = 2:3)'],
                ['1 : n', 'Divide all terms by first number', 'Map scales, paint mixing, unit rates'],
                ['n : 1', 'Divide all terms by second number', 'Exchange rates, concentration comparisons'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_11_1_1',
          level: 1,
          text: 'Simplify the ratio 24 : 36 to its simplest integer form.',
          background: 'lined',
        },
        {
          id: 'p_11_1_2',
          level: 1,
          text: 'Express the ratio 5 : 12 in the form 1 : n.',
          background: 'lined',
        },
        {
          id: 'p_11_1_3',
          level: 1,
          text: 'Share $80 in the ratio 3 : 5.',
          background: 'lined',
        },
        {
          id: 'p_11_1_4',
          level: 2,
          text: 'Paint mix A has blue:white ratio 2:7. Paint mix B has ratio 3:10. By writing each in form 1:n, determine which paint is darker blue.',
          background: 'lined',
        },
        {
          id: 'p_11_1_5',
          level: 2,
          text: 'Angles of a triangle are in the ratio 2 : 3 : 5. Calculate the size of each angle.',
          background: 'lined',
        },
        {
          id: 'p_11_1_6',
          level: 2,
          text: 'The ratio of boys to girls in a club is 4 : 5. There are 28 boys. How many girls are there?',
          background: 'lined',
        },
        {
          id: 'p_11_1_7',
          level: 3,
          text: 'Ratio of red to blue sweets in a jar is 3 : 2. After 6 red sweets are eaten, the new ratio is 6 : 5. How many sweets were originally in the jar?',
          background: 'lined',
        },
        {
          id: 'p_11_1_8',
          level: 3,
          text: 'A map has scale 1 : 25,000. Two landmarks are 8.4 cm apart on the map. Calculate their real-world distance in kilometres.',
          background: 'lined',
        },
        {
          id: 'p_11_1_9',
          level: 3,
          text: 'If a : b = 3 : 4 and b : c = 5 : 6, find the combined ratio a : b : c in simplest integer form.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 11.2 DIRECT AND INVERSE PROPORTION
    // =========================================================================
    {
      id: 'sub_11_2',
      title: '11.2 Direct and inverse proportion',
      codes: ['9Nf.07'],
      steps: [
        {
          id: 's_11_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.07',
              text: 'Understand the relationship between two quantities when they are in direct or inverse proportion.',
            },
          ],
        },
        {
          id: 's_11_2_c1',
          title: 'Direct vs Inverse Proportion Relationships',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Direct vs Inverse Proportion',
              definition:
                'Direct: y = kx (ratio y/x is constant; straight line through origin). Inverse: y = k / x (product xy is constant; reciprocal curve).',
            },
            {
              type: 'formula',
              math: '\\text{Direct: } y = kx, \\quad \\text{Inverse: } y = \\frac{k}{x} \\iff xy = k',
              label: 'Algebraic equations with constant k',
            },
            {
              type: 'figure',
              figure: {
                component: 'DirectInverseProportionGraph',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_11_2_worked',
          title: 'Worked Example: Inverse Proportion Problem',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: '4 workers take 6 hours to paint a fence. How long will it take 8 workers at the same work rate?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Recognise that more workers mean less time (inverse proportion). Find total worker-hours k: k = 4 × 6 = 24 worker-hours.',
                  },
                  {
                    type: 'formula',
                    math: 'k = 4 \\times 6 = 24',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Formula is Time = 24 / (number of workers).',
                  },
                  {
                    type: 'formula',
                    math: 'T = \\frac{24}{W}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: For W = 8: Time = 24 ÷ 8 = 3 hours.',
                  },
                  {
                    type: 'formula',
                    math: 'T = 3\\text{ hours}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_11_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Treating inverse proportion as direct proportion (e.g. doubling workers and doubling the time to 12 hours).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking any straight line is direct proportion. Direct proportion straight lines MUST pass through the origin (0, 0).',
            },
          ],
        },
        {
          id: 's_11_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Proportion Type', 'Formula', 'Constant Property', 'Graph Shape'],
              rows: [
                ['Direct proportion', 'y = kx', 'y / x = k (constant quotient)', 'Straight line passing through (0, 0)'],
                ['Inverse proportion', 'y = k / x', 'x · y = k (constant product)', 'Hyperbola curve avoiding axes'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_11_2_1',
          level: 1,
          text: '5 pens cost £3.50. Calculate the cost of 8 pens (direct proportion).',
          background: 'lined',
        },
        {
          id: 'p_11_2_2',
          level: 1,
          text: 'If y is directly proportional to x and y = 12 when x = 3, find the constant of proportionality k.',
          background: 'lined',
        },
        {
          id: 'p_11_2_3',
          level: 1,
          text: 'Does the straight line y = 3x + 2 represent direct proportion? Explain.',
          background: 'lined',
        },
        {
          id: 'p_11_2_4',
          level: 2,
          text: 'y is inversely proportional to x. When x = 4, y = 10. Find y when x = 5.',
          background: 'lined',
        },
        {
          id: 'p_11_2_5',
          level: 2,
          text: 'A car travelling at 60 km/h completes a journey in 4 hours. How long does the same journey take at 80 km/h?',
          background: 'lined',
        },
        {
          id: 'p_11_2_6',
          level: 2,
          text: 'Table values: (x = 2, y = 18), (x = 3, y = 12), (x = 6, y = 6). Is this direct or inverse proportion? State the formula.',
          background: 'lined',
        },
        {
          id: 'p_11_2_7',
          level: 3,
          text: '6 taps fill a pool in 8 hours. How many taps are needed to fill the pool in 3 hours?',
          background: 'lined',
        },
        {
          id: 'p_11_2_8',
          level: 3,
          text: 'y is inversely proportional to x. If x is increased by 25%, by what percentage does y decrease?',
          background: 'lined',
        },
        {
          id: 'p_11_2_9',
          level: 3,
          text: 'The pressure P of a gas is inversely proportional to its volume V. If volume decreases from 120 cm³ to 80 cm³, by what factor does pressure multiply?',
          background: 'lined',
        },
      ],
    },
  ],
};
