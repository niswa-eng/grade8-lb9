import { Unit } from '../types/content';

export const unit08: Unit = {
  id: 'unit8',
  number: 8,
  title: '8 Fractions',
  codes: ['9Nf.01', '9Nf.02', '9Nf.03', '9Nf.04'],
  accentColor: '#EA580C', // Orange
  subtopics: [
    // =========================================================================
    // 8.1 FRACTIONS AND RECURRING DECIMALS
    // =========================================================================
    {
      id: 'sub_8_1',
      title: '8.1 Fractions and recurring decimals',
      codes: ['9Nf.01'],
      steps: [
        {
          id: 's_8_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.01',
              text: 'Deduce whether fractions will have recurring or terminating decimal equivalents.',
            },
          ],
        },
        {
          id: 's_8_1_c1',
          title: 'Prime Factors of the Denominator',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Terminating vs Recurring Decimal',
              definition:
                'In simplest form, a fraction terminates if and only if the prime factors of its denominator contain ONLY 2s and/or 5s. Any other prime factor (3, 7, 11, ...) causes recurring decimals.',
            },
            {
              type: 'formula',
              math: '\\text{Denominator } d = 2^a \\times 5^b \\implies \\text{Terminating}, \\quad \\text{Any other prime factor} \\implies \\text{Recurring}',
              label: 'Criterion for fraction in simplest form',
            },
            {
              type: 'figure',
              figure: {
                component: 'RecurringDecimalTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_8_1_worked',
          title: 'Worked Example: Determining Decimal Behaviour',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Deduce whether 21/60 terminates or recurs.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Simplify the fraction to its lowest terms by dividing by HCF 3: 21/60 = 7/20.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{21}{60} = \\frac{7}{20}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Find the prime factor decomposition of the denominator 20: 20 = 2² × 5.',
                  },
                  {
                    type: 'formula',
                    math: '20 = 2^2 \\times 5',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Since the prime factors consist only of 2 and 5, the decimal TERMINATES (7/20 = 0.35).',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{7}{20} = 0.35 \\quad (\\text{Terminating})',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_8_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Checking prime factors of denominator BEFORE simplifying. In 9/15, 15 has factor 3, but 9/15 = 3/5 terminates!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing recurring dot notation incorrectly (e.g. 0.3535... is 0.̇3̇5, not 0.35̇).',
            },
          ],
        },
        {
          id: 's_8_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Fraction (Simplest)', 'Denominator Factors', 'Decimal Type', 'Decimal Value'],
              rows: [
                ['3/8', '2³', 'Terminating', '0.375'],
                ['7/25', '5²', 'Terminating', '0.28'],
                ['1/3', '3', 'Recurring', '0.̇3'],
                ['5/6', '2 × 3', 'Recurring', '0.8̇3'],
                ['4/7', '7', 'Recurring', '0.̇57142̇8'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_8_1_1',
          level: 1,
          text: 'Does 3/5 terminate or recur? Explain why.',
          background: 'lined',
        },
        {
          id: 'p_8_1_2',
          level: 1,
          text: 'Does 1/6 terminate or recur? Give its recurring decimal form.',
          background: 'lined',
        },
        {
          id: 'p_8_1_3',
          level: 1,
          text: 'Convert 4/9 into a recurring decimal using dot notation.',
          background: 'lined',
        },
        {
          id: 'p_8_1_4',
          level: 2,
          text: 'Without dividing, determine whether 33/75 terminates or recurs. Show all working.',
          background: 'lined',
        },
        {
          id: 'p_8_1_5',
          level: 2,
          text: 'Which of these fractions terminate: 7/16, 11/24, 13/40, 9/70?',
          background: 'lined',
        },
        {
          id: 'p_8_1_6',
          level: 2,
          text: 'Explain why 18/45 produces a terminating decimal even though 45 is a multiple of 9.',
          background: 'lined',
        },
        {
          id: 'p_8_1_7',
          level: 3,
          text: 'Prove algebraically that the recurring decimal 0.̇4̇5 is equal to 5/11.',
          background: 'lined',
        },
        {
          id: 'p_8_1_8',
          level: 3,
          text: 'Prove algebraically that 0.1̇6 is equal to 1/6.',
          background: 'lined',
        },
        {
          id: 'p_8_1_9',
          level: 3,
          text: 'Find all integer values of d between 11 and 20 such that 1/d is a terminating decimal.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 8.2 FRACTIONS AND THE CORRECT ORDER OF OPERATIONS
    // =========================================================================
    {
      id: 'sub_8_2',
      title: '8.2 Fractions and the correct order of operations',
      codes: ['9Nf.02'],
      steps: [
        {
          id: 's_8_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.02',
              text: 'Estimate, add and subtract proper and improper fractions and mixed numbers using the order of operations.',
            },
          ],
        },
        {
          id: 's_8_2_c1',
          title: 'Order of Operations with Fractions',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Order of Operations (BIDMAS)',
              definition:
                'Brackets, Indices, Division/Multiplication, Addition/Subtraction. Convert mixed numbers to improper fractions before performing multiplications.',
            },
            {
              type: 'formula',
              math: '\\frac{2}{3} + \\frac{1}{4} \\times \\frac{8}{3} = \\frac{2}{3} + \\left(\\frac{1}{4} \\times \\frac{8}{3}\\right) = \\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3} = 1\\frac{1}{3}',
              label: 'Multiplication takes precedence over addition',
            },
            {
              type: 'figure',
              figure: {
                component: 'FractionBar',
                props: {
                  numerator: 4,
                  denominator: 3,
                },
              },
            },
          ],
        },
        {
          id: 's_8_2_worked',
          title: 'Worked Example: Mixed Numbers and Brackets',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate: 2½ - 1⅓ × ¾',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Convert mixed numbers to improper fractions: 2½ = 5/2, 1⅓ = 4/3.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{5}{2} - \\left(\\frac{4}{3} \\times \\frac{3}{4}\\right)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Carry out multiplication first: (4/3) × (3/4) = 1.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{5}{2} - 1 = \\frac{5}{2} - \\frac{2}{2}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Subtract: 5/2 - 2/2 = 3/2 = 1½.',
                  },
                  {
                    type: 'formula',
                    math: '1\\frac{1}{2}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_8_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding before multiplying: calculating 2/3 + 1/4 = 11/12 first. Fact: BIDMAS requires multiplication before addition.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Subtracting whole numbers and fractional parts separately when borrowing is required.',
            },
          ],
        },
        {
          id: 's_8_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Meaning', 'Example'],
              rows: [
                ['Proper Fraction', 'Numerator smaller than denominator', '3/7'],
                ['Improper Fraction', 'Numerator greater than or equal to denominator', '11/4'],
                ['Mixed Number', 'Integer and proper fraction combined', '2¾'],
                ['Common Denominator', 'Multiple of both denominators', 'LCM of 4 and 6 is 12'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_8_2_1',
          level: 1,
          text: 'Calculate: 3/4 + 1/2 × 2/3.',
          background: 'square',
        },
        {
          id: 'p_8_2_2',
          level: 1,
          text: 'Calculate: (1/2 + 1/3) × 6.',
          background: 'square',
        },
        {
          id: 'p_8_2_3',
          level: 1,
          text: 'Calculate: 3 - 1¼.',
          background: 'square',
        },
        {
          id: 'p_8_2_4',
          level: 2,
          text: 'Calculate: 2⅓ + 1½ × 4/9.',
          background: 'square',
        },
        {
          id: 'p_8_2_5',
          level: 2,
          text: 'Calculate: (3¼ - 1½) ÷ 7.',
          background: 'square',
        },
        {
          id: 'p_8_2_6',
          level: 2,
          text: 'Calculate: 5/6 - (1/3)².',
          background: 'square',
        },
        {
          id: 'p_8_2_7',
          level: 3,
          text: 'Calculate: (2½)² - 1¾ ÷ 2/7.',
          background: 'square',
        },
        {
          id: 'p_8_2_8',
          level: 3,
          text: 'Insert brackets to make this calculation correct: 1/2 + 1/4 × 2/3 = 1/2.',
          background: 'square',
        },
        {
          id: 'p_8_2_9',
          level: 3,
          text: 'Evaluate: [ (4/5 - 1/2) ÷ (1/3 + 1/4) ] × 7/3.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 8.3 MULTIPLYING FRACTIONS
    // =========================================================================
    {
      id: 'sub_8_3',
      title: '8.3 Multiplying fractions',
      codes: ['9Nf.03'],
      steps: [
        {
          id: 's_8_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.03',
              text: 'Estimate, multiply and divide fractions; interpret division as a multiplicative inverse; and cancel common factors before multiplying.',
            },
          ],
        },
        {
          id: 's_8_3_c1',
          title: 'Cross-cancelling Common Factors',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Cross-Cancelling',
              definition:
                'Dividing any numerator and any denominator by their common factor before multiplying across, preventing unwieldy numbers.',
            },
            {
              type: 'formula',
              math: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
              label: 'Multiply numerators together and denominators together',
            },
            {
              type: 'figure',
              figure: {
                component: 'FractionCircle',
                props: {
                  numerator: 3,
                  denominator: 4,
                },
              },
            },
          ],
        },
        {
          id: 's_8_3_worked',
          title: 'Worked Example: Multiplying Mixed Numbers with Cancelling',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Calculate: 2⁴/₅ × 1³/₇ in simplest form.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Convert mixed numbers to improper fractions: 2⁴/₅ = 14/5, 1³/₇ = 10/7.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{14}{5} \\times \\frac{10}{7}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Cross-cancel: 14 and 7 divide by 7 (giving 2 and 1); 10 and 5 divide by 5 (giving 2 and 1).',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{2}{1} \\times \\frac{2}{1}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Multiply remaining factors: (2 × 2) / (1 × 1) = 4.',
                  },
                  {
                    type: 'formula',
                    math: '4',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_8_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Multiplying whole numbers and fractions separately in mixed numbers (e.g., 2½ × 3½ = 6¼). Fact: You MUST convert to improper fractions first!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Finding a common denominator when multiplying fractions. Common denominators are ONLY required for addition and subtraction.',
            },
          ],
        },
        {
          id: 's_8_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Action', 'Example', 'Result'],
              rows: [
                ['Fraction × Fraction', '(3/4) × (2/5)', '6/20 = 3/10'],
                ['Fraction × Whole Number', '(3/7) × 14 = (3/7) × (14/1)', '6'],
                ['Mixed Number Multiplication', '1½ × 2⅓ = (3/2) × (7/3)', '7/2 = 3½'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_8_3_1',
          level: 1,
          text: 'Calculate: 3/5 × 2/7.',
          background: 'square',
        },
        {
          id: 'p_8_3_2',
          level: 1,
          text: 'Calculate: 4/9 × 3/8 in simplest form.',
          background: 'square',
        },
        {
          id: 'p_8_3_3',
          level: 1,
          text: 'Calculate: 5 × 2/3.',
          background: 'square',
        },
        {
          id: 'p_8_3_4',
          level: 2,
          text: 'Calculate: 1½ × 3⅓.',
          background: 'square',
        },
        {
          id: 'p_8_3_5',
          level: 2,
          text: 'Calculate: 3¾ × 1³/₅.',
          background: 'square',
        },
        {
          id: 'p_8_3_6',
          level: 2,
          text: 'A bottle holds ¾ litre of water. How much water is in 6 bottles?',
          background: 'square',
        },
        {
          id: 'p_8_3_7',
          level: 3,
          text: 'Calculate: 2⁴/₇ × 1⁵/₉ × 2¼ in simplest form.',
          background: 'square',
        },
        {
          id: 'p_8_3_8',
          level: 3,
          text: 'A rectangular garden measures 4⅔ metres by 3¾ metres. Calculate its area.',
          background: 'square',
        },
        {
          id: 'p_8_3_9',
          level: 3,
          text: 'Show that (1 - 1/2)(1 - 1/3)(1 - 1/4)...(1 - 1/10) = 1/10.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 8.4 DIVIDING FRACTIONS
    // =========================================================================
    {
      id: 'sub_8_4',
      title: '8.4 Dividing fractions',
      codes: ['9Nf.03'],
      steps: [
        {
          id: 's_8_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.03',
              text: 'Estimate, multiply and divide fractions; interpret division as multiplying by the reciprocal (multiplicative inverse).',
            },
          ],
        },
        {
          id: 's_8_4_c1',
          title: 'The Multiplicative Inverse (Reciprocal)',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Reciprocal',
              definition:
                'The reciprocal of a non-zero fraction a/b is b/a. Multiplying a number by its reciprocal always gives 1.',
            },
            {
              type: 'formula',
              math: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}',
              label: 'Keep, Change, Flip rule',
            },
            {
              type: 'figure',
              figure: {
                component: 'DoubleNumberLine',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_8_4_worked',
          title: 'Worked Example: Division of Mixed Numbers',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Calculate: 3⅓ ÷ 1¼ in simplest form.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Convert to improper fractions: 3⅓ = 10/3, 1¼ = 5/4.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{10}{3} \\div \\frac{5}{4}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply by the reciprocal of the divisor (flip 5/4 to 4/5).',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{10}{3} \\times \\frac{4}{5}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Cancel 10 and 5 by dividing by 5 (giving 2 and 1): (2 × 4) / (3 × 1) = 8/3 = 2⅔.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{8}{3} = 2\\frac{2}{3}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_8_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Flipping the FIRST fraction instead of the divisor. The first fraction stays unchanged!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Flipping both fractions or trying to invert mixed numbers without converting to improper fractions first.',
            },
          ],
        },
        {
          id: 's_8_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Number', 'Reciprocal', 'Verification (Product = 1)'],
              rows: [
                ['4/7', '7/4', '(4/7) × (7/4) = 28/28 = 1'],
                ['5', '1/5', '5 × (1/5) = 1'],
                ['1/9', '9/1 = 9', '(1/9) × 9 = 1'],
                ['2½ = 5/2', '2/5', '(5/2) × (2/5) = 1'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_8_4_1',
          level: 1,
          text: 'Calculate: 3/4 ÷ 1/2.',
          background: 'square',
        },
        {
          id: 'p_8_4_2',
          level: 1,
          text: 'Calculate: 5/8 ÷ 3/4.',
          background: 'square',
        },
        {
          id: 'p_8_4_3',
          level: 1,
          text: 'Calculate: 6 ÷ 2/3.',
          background: 'square',
        },
        {
          id: 'p_8_4_4',
          level: 2,
          text: 'Calculate: 2½ ÷ 1¼.',
          background: 'square',
        },
        {
          id: 'p_8_4_5',
          level: 2,
          text: 'Calculate: 4²⁄₃ ÷ 7.',
          background: 'square',
        },
        {
          id: 'p_8_4_6',
          level: 2,
          text: 'How many pieces of ribbon of length ¾ m can be cut from a roll of 9 m?',
          background: 'square',
        },
        {
          id: 'p_8_4_7',
          level: 3,
          text: 'Calculate: 3¹/₅ ÷ 2²/₁₅.',
          background: 'square',
        },
        {
          id: 'p_8_4_8',
          level: 3,
          text: 'Solve for x: (2/3)x = 5/6 by dividing by 2/3.',
          background: 'square',
        },
        {
          id: 'p_8_4_9',
          level: 3,
          text: 'A recipe uses 2¼ cups of flour. If each portion uses ⅜ cup, how many portions can be made?',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 8.5 MAKING CALCULATIONS EASIER
    // =========================================================================
    {
      id: 'sub_8_5',
      title: '8.5 Making calculations easier',
      codes: ['9Nf.04'],
      steps: [
        {
          id: 's_8_5_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.04',
              text: 'Use knowledge of the laws of arithmetic, inverse operations, equivalence and order of operations (brackets and indices) to simplify calculations containing decimals and fractions.',
            },
          ],
        },
        {
          id: 's_8_5_c1',
          title: 'Strategic Mental Arithmetic and Distributivity',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Laws of Arithmetic',
              definition:
                'Commutative, associative, and distributive laws allow regrouping or factorising to simplify complex fraction and decimal expressions.',
            },
            {
              type: 'formula',
              math: 'a(b + c) = ab + ac, \\quad \\text{e.g. } 24 \\times 0.25 = 24 \\times \\frac{1}{4} = 6',
              label: 'Fraction-decimal equivalence shortcuts',
            },
            {
              type: 'figure',
              figure: {
                component: 'ProportionTable',
                props: {
                  pairs: [
                    { label: '× 0.5', val: '÷ 2' },
                    { label: '× 0.25', val: '÷ 4' },
                    { label: '× 0.2', val: '÷ 5' },
                    { label: '× 0.125', val: '÷ 8' },
                    { label: '÷ 0.1', val: '× 10' },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_8_5_worked',
          title: 'Worked Example: Using Common Factors to Simplify',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate mentally: (37 × 4.8) + (63 × 4.8)',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Recognise the common factor 4.8 in both terms.',
                  },
                  {
                    type: 'formula',
                    math: '4.8(37 + 63)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Add 37 + 63 = 100 inside the bracket.',
                  },
                  {
                    type: 'formula',
                    math: '4.8 \\times 100',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Multiply: 4.8 × 100 = 480.',
                  },
                  {
                    type: 'formula',
                    math: '480',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_8_5_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Carrying out two long multi-digit multiplications first rather than factoring out the common value.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Dividing by 0.5 by halving the number instead of doubling it.',
            },
          ],
        },
        {
          id: 's_8_5_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Strategy', 'Algebraic Identity', 'Arithmetic Example'],
              rows: [
                ['Distributive law', 'ab + ac = a(b + c)', '18 × 3.7 + 18 × 6.3 = 18 × 10 = 180'],
                ['Difference of squares', 'a² - b² = (a-b)(a+b)', '65² - 35² = (30)(100) = 3000'],
                ['Fraction conversion', 'x × 0.125 = x / 8', '72 × 0.125 = 72 / 8 = 9'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_8_5_1',
          level: 1,
          text: 'Evaluate: 48 × 0.25 without written column multiplication.',
          background: 'lined',
        },
        {
          id: 'p_8_5_2',
          level: 1,
          text: 'Evaluate: 35 ÷ 0.5.',
          background: 'lined',
        },
        {
          id: 'p_8_5_3',
          level: 1,
          text: 'Evaluate: (14 × 7) + (6 × 7).',
          background: 'lined',
        },
        {
          id: 'p_8_5_4',
          level: 2,
          text: 'Evaluate: 7.3 × 18 + 7.3 × 82.',
          background: 'lined',
        },
        {
          id: 'p_8_5_5',
          level: 2,
          text: 'Evaluate: 96 × 0.125.',
          background: 'lined',
        },
        {
          id: 'p_8_5_6',
          level: 2,
          text: 'Evaluate: 28 × 19 by calculating 28 × (20 - 1).',
          background: 'lined',
        },
        {
          id: 'p_8_5_7',
          level: 3,
          text: 'Evaluate: 53² - 47² using difference of two squares.',
          background: 'lined',
        },
        {
          id: 'p_8_5_8',
          level: 3,
          text: 'Evaluate: (4.75 × 16) - (0.75 × 16).',
          background: 'lined',
        },
        {
          id: 'p_8_5_9',
          level: 3,
          text: 'Show how to calculate 48 ÷ 1.5 mentally using equivalent fractions.',
          background: 'lined',
        },
      ],
    },
  ],
};
