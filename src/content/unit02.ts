import { Unit } from '../types/content';

export const unit02: Unit = {
  id: 'unit2',
  number: 2,
  title: '2 Expressions and formulae',
  codes: ['9Ae.01', '9Ae.02', '9Ae.03', '9Ae.04'],
  accentColor: '#059669', // Emerald
  subtopics: [
    // =========================================================================
    // 2.1 SUBSTITUTING INTO EXPRESSIONS
    // =========================================================================
    {
      id: 'sub_2_1',
      title: '2.1 Substituting into expressions',
      codes: ['9Ae.01'],
      steps: [
        {
          id: 's_2_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.01',
              text: 'Understand that the laws of arithmetic and order of operations apply to algebraic terms and expressions (four operations and integer powers).',
            },
          ],
        },
        {
          id: 's_2_1_c1',
          title: 'Substitution and Order of Operations',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Substitution',
              definition:
                'Replacing algebraic letters with specific numerical values, following BIDMAS/BODMAS strictly.',
            },
            {
              type: 'formula',
              math: '3x^2 \\neq (3x)^2 \\quad \\text{when } x = 4: \\quad 3(4^2) = 48 \\quad \\text{vs} \\quad (3 \\times 4)^2 = 144',
              label: 'Powers take precedence over multiplication',
            },
            {
              type: 'figure',
              figure: {
                component: 'FunctionMachine',
                props: {
                  initialInput: 4,
                  operation1: 'square (x²)',
                  operation2: '× 3',
                },
              },
            },
          ],
        },
        {
          id: 's_2_1_worked',
          title: 'Worked Example: Negative Substitution',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate 5 - 2x² when x = -3.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Replace x with (-3) inside parentheses.',
                  },
                  {
                    type: 'formula',
                    math: '5 - 2(-3)^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Evaluate the index first: (-3)² = +9.',
                  },
                  {
                    type: 'formula',
                    math: '5 - 2(9)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Multiply, then subtract: 5 - 18 = -13.',
                  },
                  {
                    type: 'formula',
                    math: '5 - 18 = -13',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing (-3)² = -9. Fact: A negative number multiplied by itself is always positive: (-3) × (-3) = +9.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Calculating 5 - 2 first to get 3(-3)². Fact: Multiplication and powers MUST be evaluated before subtraction.',
            },
          ],
        },
        {
          id: 's_2_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Definition', 'Example'],
              rows: [
                ['Substitute', 'Replace a variable with a numerical value', 'If a = 5, 2a + 1 = 11'],
                ['Coefficient', 'The number multiplying a variable', 'In 7x, 7 is the coefficient'],
                ['Variable', 'A symbol representing an unknown or changing quantity', 'x, y, t'],
                ['Index / Power', 'The exponent indicating repeated multiplication', 'In x³, 3 is the index'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_1_1',
          level: 1,
          text: 'Evaluate 4a + 7 when a = 5.',
          background: 'square',
        },
        {
          id: 'p_2_1_2',
          level: 1,
          text: 'Evaluate 3p - 2q when p = 6 and q = 4.',
          background: 'square',
        },
        {
          id: 'p_2_1_3',
          level: 1,
          text: 'Evaluate 10 - 2m when m = 3.',
          background: 'square',
        },
        {
          id: 'p_2_1_4',
          level: 2,
          text: 'Evaluate 2x² when x = -4.',
          background: 'square',
        },
        {
          id: 'p_2_1_5',
          level: 2,
          text: 'Evaluate (2x)² when x = -4.',
          background: 'square',
        },
        {
          id: 'p_2_1_6',
          level: 2,
          text: 'Evaluate 4a² - 3b when a = -2 and b = 5.',
          background: 'square',
        },
        {
          id: 'p_2_1_7',
          level: 3,
          text: 'Evaluate (a + 2b) / (3a - b) when a = 4 and b = -2.',
          background: 'square',
        },
        {
          id: 'p_2_1_8',
          level: 3,
          text: 'Evaluate √[b² - 4ac] when b = 7, a = 2, and c = 3.',
          background: 'square',
        },
        {
          id: 'p_2_1_9',
          level: 3,
          text: 'If s = ut + ½at², calculate s when u = 12, t = 4, and a = -3.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 2.2 CONSTRUCTING EXPRESSIONS
    // =========================================================================
    {
      id: 'sub_2_2',
      title: '2.2 Constructing expressions',
      codes: ['9Ae.03'],
      steps: [
        {
          id: 's_2_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.03',
              text: 'Understand that a situation can be represented either in words or as an algebraic expression and move between the two representations (including squares, cubes and roots).',
            },
          ],
        },
        {
          id: 's_2_2_c1',
          title: 'From Words to Algebra',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Algebraic Expression',
              definition:
                'A mathematical phrase containing letters, numbers, and arithmetic operations, without an equals sign.',
            },
            {
              type: 'formula',
              math: '\\text{"Add 4 to } x \\text{ then square the result"} \\implies (x + 4)^2',
              label: 'Parentheses govern operation order in words',
            },
            {
              type: 'figure',
              figure: {
                component: 'ExpressionBuilder',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_2_2_worked',
          title: 'Worked Example: Multi-step Word Problem',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A rectangle has length (2x + 3) cm and width (x - 1) cm. Write an expression for the perimeter in its simplest form.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Recall perimeter formula: P = 2(length) + 2(width).',
                  },
                  {
                    type: 'formula',
                    math: 'P = 2(2x + 3) + 2(x - 1)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Expand brackets: 4x + 6 + 2x - 2.',
                  },
                  {
                    type: 'formula',
                    math: '4x + 6 + 2x - 2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Collect like terms: (4x + 2x) + (6 - 2) = 6x + 4 cm.',
                  },
                  {
                    type: 'formula',
                    math: '6x + 4',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing "the square of 3 times n" as 3n². Fact: The whole quantity is squared: (3n)² = 9n².',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing "divide the sum of x and 2 by 5" as x + 2/5. Fact: The sum is grouped: (x + 2)/5.',
            },
          ],
        },
        {
          id: 's_2_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Word Phrase', 'Algebraic Form', 'Note'],
              rows: [
                ['k more than twice m', '2m + k', 'Multiplication precedes addition'],
                ['The cube root of the sum of x and y', '∛(x + y)', 'Radical covers both terms'],
                ['Half the square of p', '½p² or p²/2', 'Square p first, then halve'],
                ['Five less than three times w', '3w - 5', 'Subtraction order is reversed in English'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_2_1',
          level: 1,
          text: 'Write an algebraic expression for: "7 more than 4 times n".',
          background: 'lined',
        },
        {
          id: 'p_2_2_2',
          level: 1,
          text: 'Write an algebraic expression for: "3 less than half of y".',
          background: 'lined',
        },
        {
          id: 'p_2_2_3',
          level: 1,
          text: 'Write an expression for the total cost of x adult tickets at £12 each and y child tickets at £7 each.',
          background: 'lined',
        },
        {
          id: 'p_2_2_4',
          level: 2,
          text: 'Write an expression for: "The square root of the quantity (5a - b)".',
          background: 'lined',
        },
        {
          id: 'p_2_2_5',
          level: 2,
          text: 'Three consecutive integers are n, n+1, n+2. Write an expression for the sum of their squares.',
          background: 'lined',
        },
        {
          id: 'p_2_2_6',
          level: 2,
          text: 'A taxi charges £4 standing charge plus £2.50 per kilometre. Write an expression for the cost of a trip of d kilometres.',
          background: 'lined',
        },
        {
          id: 'p_2_2_7',
          level: 3,
          text: 'A cuboid has length (x + 2) cm, width x cm, and height (x - 1) cm. Write an expression for its total surface area.',
          background: 'lined',
        },
        {
          id: 'p_2_2_8',
          level: 3,
          text: 'Express in words the meaning of the algebraic expression: 4(x² - 9).',
          background: 'lined',
        },
        {
          id: 'p_2_2_9',
          level: 3,
          text: 'Write an expression for: "Twice the cube of x divided by the sum of y and 3".',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 2.3 EXPRESSIONS AND INDICES
    // =========================================================================
    {
      id: 'sub_2_3',
      title: '2.3 Expressions and indices',
      codes: ['9Ae.02'],
      steps: [
        {
          id: 's_2_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.02',
              text: 'Understand how to manipulate algebraic expressions including: applying the laws of indices to terms with positive, negative and zero powers.',
            },
          ],
        },
        {
          id: 's_2_3_c1',
          title: 'Index Laws in Algebra',
          kind: 'concept',
          blocks: [
            {
              type: 'formula',
              math: 'a^m \\times a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}, \\quad a^0 = 1',
              label: 'Fundamental Index Laws',
            },
            {
              type: 'figure',
              figure: {
                component: 'IndexLawsTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_2_3_worked',
          title: 'Worked Example: Multiplying and Dividing Coefficients and Powers',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Simplify: (6x⁴y³) × (3x²y⁻¹)',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Multiply numerical coefficients: 6 × 3 = 18.',
                  },
                  {
                    type: 'formula',
                    math: '18',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Apply multiplication law to powers of x: x⁴ × x² = x⁴⁺² = x⁶.',
                  },
                  {
                    type: 'formula',
                    math: '18x^6',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Apply multiplication law to powers of y: y³ × y⁻¹ = y³⁻¹ = y².',
                  },
                  {
                    type: 'formula',
                    math: '18x^6y^2',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing (2x³)² = 2x⁶. Fact: The coefficient 2 must also be squared: 2² × x⁶ = 4x⁶.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding coefficients instead of multiplying them: 3a² × 4a³ = 7a⁵. Fact: 3 × 4 = 12, so 12a⁵.',
            },
          ],
        },
        {
          id: 's_2_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Law', 'Formula', 'Worked Algebraic Example'],
              rows: [
                ['Product of powers', 'xᵃ · xᵇ = xᵃ⁺ᵇ', '(4x³)(2x⁵) = 8x⁸'],
                ['Quotient of powers', 'xᵃ / xᵇ = xᵃ⁻ᵇ', '15y⁷ / 3y² = 5y⁵'],
                ['Power of a power', '(xᵃ)ᵇ = xᵃᵇ', '(3x⁴)² = 9x⁸'],
                ['Zero index', 'x⁰ = 1 (x ≠ 0)', '5x⁰ = 5 × 1 = 5'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_3_1',
          level: 1,
          text: 'Simplify: 3x⁴ × 5x³.',
          background: 'square',
        },
        {
          id: 'p_2_3_2',
          level: 1,
          text: 'Simplify: 18y⁶ ÷ 3y².',
          background: 'square',
        },
        {
          id: 'p_2_3_3',
          level: 1,
          text: 'Simplify: (x⁴)³.',
          background: 'square',
        },
        {
          id: 'p_2_3_4',
          level: 2,
          text: 'Simplify: (3m²)³.',
          background: 'square',
        },
        {
          id: 'p_2_3_5',
          level: 2,
          text: 'Simplify: 20a⁵b³ ÷ 4a²b.',
          background: 'square',
        },
        {
          id: 'p_2_3_6',
          level: 2,
          text: 'Simplify: 4p³q⁻² × 3p⁻¹q⁵.',
          background: 'square',
        },
        {
          id: 'p_2_3_7',
          level: 3,
          text: 'Simplify: (2a³b⁴)³ ÷ (4a²b⁵).',
          background: 'square',
        },
        {
          id: 'p_2_3_8',
          level: 3,
          text: 'Simplify: (9x⁶y⁻⁴)^(1/2) or evaluate when expressed with positive powers.',
          background: 'square',
        },
        {
          id: 'p_2_3_9',
          level: 3,
          text: 'Show that (3x²y)³ / (9xy²) simplifies to 3x⁵y.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 2.4 EXPANDING THE PRODUCT OF TWO LINEAR EXPRESSIONS
    // =========================================================================
    {
      id: 'sub_2_4',
      title: '2.4 Expanding the product of two linear expressions',
      codes: ['9Ae.02'],
      steps: [
        {
          id: 's_2_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.02',
              text: 'Understand how to manipulate algebraic expressions including: expanding the product of two algebraic expressions.',
            },
          ],
        },
        {
          id: 's_2_4_c1',
          title: 'The Grid / Area Model for Expanding Brackets',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Expanding Brackets',
              definition:
                'Multiplying every term in the first bracket by every term in the second bracket.',
            },
            {
              type: 'formula',
              math: '(x + a)(x + b) = x^2 + (a + b)x + ab',
              label: 'General Quadratic Expansion',
            },
            {
              type: 'figure',
              figure: {
                component: 'AreaModel',
                props: {
                  topTerms: ['x', '+ 3'],
                  sideTerms: ['x', '+ 2'],
                  cellExpressions: ['x²', '3x', '2x', '6'],
                },
              },
            },
          ],
        },
        {
          id: 's_2_4_worked',
          title: 'Worked Example: Expanding with Negative Terms',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Expand and simplify: (2x - 3)(x + 4)',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Multiply first terms and outer terms: 2x(x) = 2x², 2x(4) = +8x.',
                  },
                  {
                    type: 'formula',
                    math: '2x^2 + 8x',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply inner terms and last terms: -3(x) = -3x, -3(4) = -12.',
                  },
                  {
                    type: 'formula',
                    math: '2x^2 + 8x - 3x - 12',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Combine like terms (+8x - 3x = +5x): 2x² + 5x - 12.',
                  },
                  {
                    type: 'formula',
                    math: '2x^2 + 5x - 12',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing (x + 5)² = x² + 25. Fact: (x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25. Do not forget the middle term!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Sign error when multiplying negative terms: (-3) × (-4) = -12. Fact: Negative × Negative = Positive (+12).',
            },
          ],
        },
        {
          id: 's_2_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Method', 'Explanation', 'Visual Representation'],
              rows: [
                ['Area Model', 'Splits rectangle into 4 sub-areas', 'Grid table with row & column headers'],
                ['FOIL', 'First, Outer, Inner, Last terms multiplied', 'Systematic pair multiplication'],
                ['Difference of two squares', '(a + b)(a - b) = a² - b²', 'Middle terms (+ab and -ab) cancel out'],
                ['Quadratic expression', 'An expression where highest power is 2', 'ax² + bx + c'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_4_1',
          level: 1,
          text: 'Expand and simplify: (x + 4)(x + 3).',
          background: 'square',
        },
        {
          id: 'p_2_4_2',
          level: 1,
          text: 'Expand and simplify: (y + 6)(y + 2).',
          background: 'square',
        },
        {
          id: 'p_2_4_3',
          level: 1,
          text: 'Expand and simplify: (x + 5)(x - 2).',
          background: 'square',
        },
        {
          id: 'p_2_4_4',
          level: 2,
          text: 'Expand and simplify: (2x + 1)(x + 3).',
          background: 'square',
        },
        {
          id: 'p_2_4_5',
          level: 2,
          text: 'Expand and simplify: (3x - 2)(2x - 5).',
          background: 'square',
        },
        {
          id: 'p_2_4_6',
          level: 2,
          text: 'Expand and simplify: (x - 7)²',
          background: 'square',
        },
        {
          id: 'p_2_4_7',
          level: 3,
          text: 'Expand and simplify: (4x - 3)(4x + 3).',
          background: 'square',
        },
        {
          id: 'p_2_4_8',
          level: 3,
          text: 'Expand and simplify: (2x + 5)² - (x - 3)²',
          background: 'square',
        },
        {
          id: 'p_2_4_9',
          level: 3,
          text: 'A square has side length (x + 3). If its length is increased by 2 and its width is decreased by 1, write an expression for the new area in expanded form.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 2.5 SIMPLIFYING ALGEBRAIC FRACTIONS
    // =========================================================================
    {
      id: 'sub_2_5',
      title: '2.5 Simplifying algebraic fractions',
      codes: ['9Ae.02'],
      steps: [
        {
          id: 's_2_5_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.02',
              text: 'Understand how to manipulate algebraic expressions including: simplifying algebraic fractions by factorising and cancelling common factors.',
            },
          ],
        },
        {
          id: 's_2_5_c1',
          title: 'Cancelling Common Factors and Operations',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Algebraic Fraction',
              definition:
                'A fraction where the numerator, denominator, or both contain algebraic expressions.',
            },
            {
              type: 'formula',
              math: '\\frac{ax}{bx} = \\frac{a}{b} \\quad (x \\neq 0)',
              label: 'Only common FACTORS can be cancelled, never added terms',
            },
            {
              type: 'figure',
              figure: {
                component: 'AlgebraicFractionTool',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_2_5_worked',
          title: 'Worked Example: Factorise Before Cancelling',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Simplify: (4x + 12) / 8',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Factorise the numerator by taking out the highest common factor 4.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{4(x + 3)}{8}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Divide both numerator and denominator by 4.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{1(x + 3)}{2} = \\frac{x + 3}{2}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_5_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Cancelling individual terms across addition: (x + 4) / 4 = x + 1. Fact: 4 is not a common factor of the whole numerator; (x + 4) / 4 cannot be simplified to x + 1.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to find a common denominator before adding algebraic fractions like x/3 + x/4.',
            },
          ],
        },
        {
          id: 's_2_5_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Concept', 'Rule', 'Example'],
              rows: [
                ['Factorising', 'Writing as a product of factors', '6x + 9 = 3(2x + 3)'],
                ['Cancelling', 'Dividing numerator and denominator by identical non-zero factor', '3(2x + 1) / 3 = 2x + 1'],
                ['Common Denominator', 'LCM of denominators to allow addition or subtraction', 'x/2 + x/5 = 5x/10 + 2x/10 = 7x/10'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_5_1',
          level: 1,
          text: 'Simplify: 12x / 18.',
          background: 'square',
        },
        {
          id: 'p_2_5_2',
          level: 1,
          text: 'Simplify: (6x + 9) / 3.',
          background: 'square',
        },
        {
          id: 'p_2_5_3',
          level: 1,
          text: 'Simplify: 15a² / (5a).',
          background: 'square',
        },
        {
          id: 'p_2_5_4',
          level: 2,
          text: 'Simplify: (x + 2)/3 + (x + 1)/4 as a single fraction.',
          background: 'square',
        },
        {
          id: 'p_2_5_5',
          level: 2,
          text: 'Simplify: (2x - 1)/5 - (x - 3)/2 as a single fraction.',
          background: 'square',
        },
        {
          id: 'p_2_5_6',
          level: 2,
          text: 'Simplify: (10x² - 15x) / (5x).',
          background: 'square',
        },
        {
          id: 'p_2_5_7',
          level: 3,
          text: 'Simplify: (3/x) + (4/y) as a single fraction.',
          background: 'square',
        },
        {
          id: 'p_2_5_8',
          level: 3,
          text: 'Simplify: (x² + 5x) / (x² - 25) by factorising numerator and denominator.',
          background: 'square',
        },
        {
          id: 'p_2_5_9',
          level: 3,
          text: 'Solve: x/3 + x/4 = 7 by combining the algebraic fractions first.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 2.6 DERIVING AND USING FORMULAE
    // =========================================================================
    {
      id: 'sub_2_6',
      title: '2.6 Deriving and using formulae',
      codes: ['9Ae.04'],
      steps: [
        {
          id: 's_2_6_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ae.04',
              text: 'Understand that a situation can be represented either in words or as a formula (including squares and cubes) and manipulate using knowledge of inverse operations to change the subject of a formula.',
            },
          ],
        },
        {
          id: 's_2_6_c1',
          title: 'Changing the Subject of a Formula',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Subject of a Formula',
              definition:
                'The single variable isolated on one side of the equals sign with a coefficient of +1.',
            },
            {
              type: 'formula',
              math: 'v = u + at \\iff t = \\frac{v - u}{a}',
              label: 'Using inverse operations step-by-step',
            },
            {
              type: 'figure',
              figure: {
                component: 'FormulaRearranger',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_2_6_worked',
          title: 'Worked Example: Formula with Powers and Roots',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Make r the subject of the formula for the area of a circle: A = πr².',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Divide both sides by π to isolate r².',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{A}{\\pi} = r^2',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Take the square root of both sides.',
                  },
                  {
                    type: 'formula',
                    math: 'r = \\sqrt{\\frac{A}{\\pi}}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_2_6_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Taking the square root before dividing in y = 3x² to get √y = 3x. Fact: The square only applies to x, so divide by 3 first: x = √(y/3).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting that an inverse operation must be applied to the ENTIRE side of the equation.',
            },
          ],
        },
        {
          id: 's_2_6_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Original Operation', 'Inverse Operation', 'Example'],
              rows: [
                ['+ addition', '- subtraction', 'x + 5 = y \\implies x = y - 5'],
                ['× multiplication', '÷ division', 'ax = b \\implies x = b/a'],
                ['² squaring', '√ square root', 'x² = k \\implies x = √k (for positive quantities)'],
                ['³ cubing', '∛ cube root', 'x³ = V \\implies x = ∛V'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_2_6_1',
          level: 1,
          text: 'Make x the subject of the formula: y = x + 8.',
          background: 'lined',
        },
        {
          id: 'p_2_6_2',
          level: 1,
          text: 'Make m the subject of the formula: y = mx.',
          background: 'lined',
        },
        {
          id: 'p_2_6_3',
          level: 1,
          text: 'Make p the subject of the formula: C = 2p - 7.',
          background: 'lined',
        },
        {
          id: 'p_2_6_4',
          level: 2,
          text: 'Make h the subject of the cylinder volume formula: V = πr²h.',
          background: 'lined',
        },
        {
          id: 'p_2_6_5',
          level: 2,
          text: 'Make x the subject of the formula: y = 3x².',
          background: 'lined',
        },
        {
          id: 'p_2_6_6',
          level: 2,
          text: 'Make a the subject of the kinetic energy formula: E = ½mv².',
          background: 'lined',
        },
        {
          id: 'p_2_6_7',
          level: 3,
          text: 'Make x the subject of the formula: y = (2x + 1) / (x - 3).',
          background: 'lined',
        },
        {
          id: 'p_2_6_8',
          level: 3,
          text: 'Make r the subject of the sphere volume formula: V = (4/3)πr³.',
          background: 'lined',
        },
        {
          id: 'p_2_6_9',
          level: 3,
          text: 'The period of a pendulum is T = 2π√(L/g). Rearrange to make L the subject.',
          background: 'lined',
        },
      ],
    },
  ],
};
