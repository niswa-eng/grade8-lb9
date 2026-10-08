import { Unit } from '../types/content';

export const unit01: Unit = {
  id: 'unit1',
  number: 1,
  title: '1 Number and calculation',
  codes: ['9Ni.01', '9Ni.02', '9Ni.03', '9Ni.04'],
  accentColor: '#2563EB', // Blue
  subtopics: [
    // =========================================================================
    // 1.1 IRRATIONAL NUMBERS
    // =========================================================================
    {
      id: 'sub_1_1',
      title: '1.1 Irrational numbers',
      codes: ['9Ni.01', '9Ni.04'],
      steps: [
        {
          id: 's_1_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ni.01',
              text: 'Understand the difference between rational and irrational numbers.',
            },
            {
              type: 'objective_item',
              code: '9Ni.04',
              text: 'Use knowledge of square and cube roots to estimate surds.',
            },
          ],
        },
        {
          id: 's_1_1_c1',
          title: 'Rational and Irrational Numbers',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Rational Number',
              definition:
                'Any number that can be written as a fraction a/b where a and b are integers and b ≠ 0.',
            },
            {
              type: 'keyterm',
              term: 'Irrational Number',
              definition:
                'A number that cannot be written as a fraction of two integers. Its decimal never terminates and never repeats.',
            },
            {
              type: 'figure',
              figure: {
                component: 'RationalIrrationalTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_1_1_c2',
          title: 'Surds and Estimation',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Surd',
              definition:
                'A root of a number that cannot be written as an exact integer or fraction (for example: √2, √5, ∛10).',
            },
            {
              type: 'formula',
              math: '\\sqrt{16} = 4 < \\sqrt{20} < \\sqrt{25} = 5',
              label: 'Bounding Between Square Numbers',
            },
            {
              type: 'figure',
              figure: {
                component: 'SurdEstimator',
                props: { initialRadicand: 20 },
              },
            },
          ],
        },
        {
          id: 's_1_1_worked',
          title: 'Worked Example: Estimating a Surd',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Estimate the value of √30 to the nearest integer.',
            },
            {
              type: 'formula',
              math: '25 < 30 < 36 \\implies \\sqrt{25} < \\sqrt{30} < \\sqrt{36}',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify consecutive square numbers: 5² = 25 and 6² = 36.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Compare: 30 lies between 25 and 36, so 5 < √30 < 6.',
                  },
                  {
                    type: 'formula',
                    math: '5 < \\sqrt{30} < 6',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: 30 is closer to 25 than 36, so √30 ≈ 5 (or approximately 5.5).',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_1_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking all square roots are irrational. Fact: √4, √9, √16 and √25 are rational because they equal whole numbers.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Halving a number instead of taking the square root (e.g. √36 is not 18, it is 6).',
            },
          ],
        },
        {
          id: 's_1_1_vocab',
          title: 'Key Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Meaning', 'Example'],
              rows: [
                ['Rational (ℚ)', 'Can be written as a fraction a/b', '3/4, -5, 0.25, 0.3̇'],
                ['Irrational', 'Decimal does not terminate or recur', 'π, √2, √7, ∛20'],
                ['Surd', 'An unresolved root', '√11, ∛15'],
                ['Square Root', 'Number multiplied by itself', '√49 = 7'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_1_1_1',
          level: 1,
          text: 'Classify each number as Rational or Irrational: 3/5, √16, π, √7.',
          background: 'lined',
        },
        {
          id: 'p_1_1_2',
          level: 1,
          text: 'State the two consecutive whole numbers that √19 lies between.',
          figure: {
            component: 'SurdEstimator',
            props: { initialRadicand: 19 },
          },
          background: 'square',
        },
        {
          id: 'p_1_1_3',
          level: 1,
          text: 'Explain why 0.666... (0.6̇) is a rational number.',
          background: 'lined',
        },
        {
          id: 'p_1_1_4',
          level: 2,
          text: 'Estimate the value of √55 to one decimal place.',
          figure: {
            component: 'SurdEstimator',
            props: { initialRadicand: 55 },
          },
          background: 'square',
        },
        {
          id: 'p_1_1_5',
          level: 2,
          text: 'Which of the following numbers are surds: √30, √36, √40, √64?',
          background: 'lined',
        },
        {
          id: 'p_1_1_6',
          level: 2,
          text: 'Find an integer n such that 7 < √n < 8.',
          background: 'square',
        },
        {
          id: 'p_1_1_7',
          level: 3,
          text: 'A square has an area of 50 cm². Between which two consecutive centimetre lengths does its perimeter lie?',
          background: 'axes',
        },
        {
          id: 'p_1_1_8',
          level: 3,
          text: 'Between which two consecutive whole numbers does the cube root ∛60 lie?',
          background: 'square',
        },
        {
          id: 'p_1_1_9',
          level: 3,
          text: 'Explain why the sum of 4 and √3 must be an irrational number.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 1.2 STANDARD FORM
    // =========================================================================
    {
      id: 'sub_1_2',
      title: '1.2 Standard form',
      codes: ['9Ni.03'],
      steps: [
        {
          id: 's_1_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ni.03',
              text: 'Understand the standard form for representing large and small numbers.',
            },
          ],
        },
        {
          id: 's_1_2_c1',
          title: 'What is Standard Form?',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Standard Form',
              definition: 'Writing numbers as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.',
            },
            {
              type: 'formula',
              math: 'A \\times 10^n \\quad (1 \\le A < 10, \\, n \\in \\mathbb{Z})',
              label: 'General Rule',
            },
            {
              type: 'figure',
              figure: {
                component: 'StandardFormTool',
                props: { initialA: 3.5, initialN: 4 },
              },
            },
          ],
        },
        {
          id: 's_1_2_c2',
          title: 'Large vs Small Numbers',
          kind: 'concept',
          blocks: [
            {
              type: 'table',
              headers: ['Ordinary Form', 'Standard Form', 'Power of 10'],
              rows: [
                ['45 000', '4.5 × 10⁴', '10⁴ = 10 000'],
                ['820', '8.2 × 10²', '10² = 100'],
                ['0.006', '6.0 × 10⁻³', '10⁻³ = 1/1000'],
                ['0.000 73', '7.3 × 10⁻⁴', '10⁻⁴ = 1/10 000'],
              ],
            },
            {
              type: 'text',
              content: 'Positive index: number ≥ 10. Negative index: decimal between 0 and 1.',
            },
          ],
        },
        {
          id: 's_1_2_worked',
          title: 'Worked Example: Writing in Standard Form',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Write 520 000 and 0.000 48 in standard form.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'For 520 000: place decimal point after first non-zero digit (5.2).',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Count moves from end: 5 places left. Result: 5.2 × 10⁵.',
                  },
                  {
                    type: 'formula',
                    math: '520\\,000 = 5.2 \\times 10^5',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'For 0.000 48: move decimal point 4 places right to get 4.8. Result: 4.8 × 10⁻⁴.',
                  },
                  {
                    type: 'formula',
                    math: '0.000\\,48 = 4.8 \\times 10^{-4}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_1_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing 34 × 10³ instead of 3.4 × 10⁴. Fact: The leading number A must always be between 1 and 10.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing 0.005 as 5 × 10³. Fact: Numbers smaller than 1 have negative powers: 5 × 10⁻³.',
            },
          ],
        },
        {
          id: 's_1_2_vocab',
          title: 'Key Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Meaning', 'Example'],
              rows: [
                ['Coefficient (A)', 'Number between 1 and 10', '4.7 in 4.7 × 10³'],
                ['Index / Power (n)', 'Power of 10 indicating magnitude', '3 in 10³, -4 in 10⁻⁴'],
                ['Ordinary Number', 'Number written in full digits', '4700 or 0.0008'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_1_2_1',
          level: 1,
          text: 'Write 74 000 in standard form.',
          figure: {
            component: 'StandardFormTool',
            props: { initialA: 7.4, initialN: 4 },
          },
          background: 'lined',
        },
        {
          id: 'p_1_2_2',
          level: 1,
          text: 'Convert 3.8 × 10³ into an ordinary number.',
          background: 'square',
        },
        {
          id: 'p_1_2_3',
          level: 1,
          text: 'Explain why 15 × 10⁴ is not in standard form.',
          background: 'lined',
        },
        {
          id: 'p_1_2_4',
          level: 2,
          text: 'Write 0.000 62 in standard form.',
          figure: {
            component: 'StandardFormTool',
            props: { initialA: 6.2, initialN: -4 },
          },
          background: 'square',
        },
        {
          id: 'p_1_2_5',
          level: 2,
          text: 'Convert 9.04 × 10⁻³ into an ordinary decimal.',
          background: 'lined',
        },
        {
          id: 'p_1_2_6',
          level: 2,
          text: 'Arrange in ascending order: 4.1 × 10⁴, 8.9 × 10³, 2.5 × 10⁴.',
          background: 'square',
        },
        {
          id: 'p_1_2_7',
          level: 3,
          text: 'Calculate (3 × 10⁴) × (2 × 10³). Give your answer in standard form.',
          background: 'axes',
        },
        {
          id: 'p_1_2_8',
          level: 3,
          text: 'Light travels at 3.0 × 10⁸ metres per second. How far does it travel in 500 seconds? Write in standard form.',
          background: 'square',
        },
        {
          id: 'p_1_2_9',
          level: 3,
          text: 'Calculate (8.4 × 10⁶) ÷ (2 × 10²). Give your answer in standard form.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 1.3 INDICES
    // =========================================================================
    {
      id: 'sub_1_3',
      title: '1.3 Indices',
      codes: ['9Ni.02'],
      steps: [
        {
          id: 's_1_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ni.02',
              text: 'Use positive, negative and zero indices and the index laws for multiplication and division.',
            },
          ],
        },
        {
          id: 's_1_3_c1',
          title: 'Multiplication and Division Laws',
          kind: 'concept',
          blocks: [
            {
              type: 'formula',
              math: 'a^m \\times a^n = a^{m+n} \\quad \\text{and} \\quad a^m \\div a^n = a^{m-n}',
              label: 'Index Laws',
            },
            {
              type: 'text',
              content: 'When multiplying powers with the same base, add exponents. When dividing, subtract exponents.',
            },
            {
              type: 'figure',
              figure: {
                component: 'IndexLawsTool',
                props: { base: 'a', m: 3, n: 2, law: 'mult' },
              },
            },
          ],
        },
        {
          id: 's_1_3_c2',
          title: 'Zero and Negative Indices',
          kind: 'concept',
          blocks: [
            {
              type: 'formula',
              math: 'a^0 = 1 \\quad \\text{and} \\quad a^{-n} = \\frac{1}{a^n} \\quad (a \\ne 0)',
              label: 'Zero and Negative Powers',
            },
            {
              type: 'text',
              content: 'Any non-zero number to power 0 equals 1. A negative power represents the reciprocal.',
            },
            {
              type: 'figure',
              figure: {
                component: 'IndexLawsTool',
                props: { base: '3', m: 2, n: 2, law: 'neg' },
              },
            },
          ],
        },
        {
          id: 's_1_3_worked',
          title: 'Worked Example: Evaluating Indices',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Simplify 4⁵ × 4⁻² and evaluate 5⁻².',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'For 4⁵ × 4⁻²: add the powers 5 + (-2) = 3.',
                  },
                  {
                    type: 'formula',
                    math: '4^5 \\times 4^{-2} = 4^{5 + (-2)} = 4^3 = 64',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'For 5⁻²: use the negative index rule 1 / 5².',
                  },
                  {
                    type: 'formula',
                    math: '5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_1_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking a negative power makes the result negative, e.g. 2⁻³ = -8. Fact: A negative power means reciprocal: 2⁻³ = 1 / 2³ = 1 / 8.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Multiplying the bases, e.g. 3² × 3³ = 9⁵. Fact: Keep the base unchanged: 3² × 3³ = 3⁵.',
            },
          ],
        },
        {
          id: 's_1_3_vocab',
          title: 'Key Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Rule', 'Algebraic Form', 'Numerical Example'],
              rows: [
                ['Multiplication', 'aᵐ × aⁿ = aᵐ⁺ⁿ', '2³ × 2⁴ = 2⁷ = 128'],
                ['Division', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '5⁶ ÷ 5² = 5⁴ = 625'],
                ['Zero Power', 'a⁰ = 1', '8⁰ = 1'],
                ['Negative Index', 'a⁻ⁿ = 1 / aⁿ', '4⁻¹ = 1/4, 3⁻² = 1/9'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_1_3_1',
          level: 1,
          text: 'Simplify: 5³ × 5⁴.',
          figure: {
            component: 'IndexLawsTool',
            props: { base: '5', m: 3, n: 4, law: 'mult' },
          },
          background: 'lined',
        },
        {
          id: 'p_1_3_2',
          level: 1,
          text: 'Simplify: 7⁶ ÷ 7².',
          background: 'square',
        },
        {
          id: 'p_1_3_3',
          level: 1,
          text: 'Evaluate: 12⁰ and 4⁰.',
          background: 'lined',
        },
        {
          id: 'p_1_3_4',
          level: 2,
          text: 'Write 4⁻² as a fraction.',
          figure: {
            component: 'IndexLawsTool',
            props: { base: '4', m: 1, n: 2, law: 'neg' },
          },
          background: 'square',
        },
        {
          id: 'p_1_3_5',
          level: 2,
          text: 'Simplify: (3²)³.',
          background: 'lined',
        },
        {
          id: 'p_1_3_6',
          level: 2,
          text: 'Evaluate: 2⁵ × 2⁻².',
          background: 'square',
        },
        {
          id: 'p_1_3_7',
          level: 3,
          text: 'Simplify: (y⁷ × y⁻³) ÷ y².',
          background: 'axes',
        },
        {
          id: 'p_1_3_8',
          level: 3,
          text: 'Find the value of n if 2ⁿ = 1 / 32.',
          background: 'square',
        },
        {
          id: 'p_1_3_9',
          level: 3,
          text: 'Evaluate: (1/3)⁻³.',
          background: 'lined',
        },
      ],
    },
  ],
};
