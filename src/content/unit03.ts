import { Unit } from '../types/content';

export const unit03: Unit = {
  id: 'unit3',
  number: 3,
  title: '3 Decimals, percentages and rounding',
  codes: ['9Np.01', '9Np.02', '9Nf.05', '9Nf.06'],
  accentColor: '#D97706', // Amber
  subtopics: [
    // =========================================================================
    // 3.1 MULTIPLYING AND DIVIDING BY POWERS OF 10
    // =========================================================================
    {
      id: 'sub_3_1',
      title: '3.1 Multiplying and dividing by powers of 10',
      codes: ['9Np.01'],
      steps: [
        {
          id: 's_3_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Np.01',
              text: 'Multiply and divide integers and decimals by 10 to the power of any positive or negative number.',
            },
          ],
        },
        {
          id: 's_3_1_c1',
          title: 'Powers of 10 and Place Value Shifts',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Negative Power of 10',
              definition:
                '10⁻ⁿ = 1 / 10ⁿ. Multiplying by 10⁻¹ is mathematically identical to dividing by 10.',
            },
            {
              type: 'formula',
              math: '4.8 \\times 10^3 = 4800, \\quad 4.8 \\times 10^{-2} = 0.048',
              label: 'Digits shift left for positive powers and right for negative powers',
            },
            {
              type: 'figure',
              figure: {
                component: 'PlaceValueChart',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_3_1_worked',
          title: 'Worked Example: Dividing by a Negative Power of 10',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Calculate: 3.75 ÷ 10⁻³',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Recognise that 10⁻³ = 1 / 10³ = 1 / 1000 = 0.001.',
                  },
                  {
                    type: 'formula',
                    math: '10^{-3} = \\frac{1}{1000}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Dividing by 10⁻³ is equivalent to multiplying by 10³ (+1000).',
                  },
                  {
                    type: 'formula',
                    math: '3.75 \\div 10^{-3} = 3.75 \\times 10^3',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Shift digits 3 places to the left: 3.75 × 1000 = 3750.',
                  },
                  {
                    type: 'formula',
                    math: '3750',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_3_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking that 10⁻² produces a negative number: 5 × 10⁻² = -500. Fact: Powers of 10 are always positive; 5 × 10⁻² = 0.05.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Thinking dividing by 10⁻² makes a number smaller. Fact: Dividing by a fraction less than 1 makes the number larger!',
            },
          ],
        },
        {
          id: 's_3_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Power of 10', 'Fractional Value', 'Decimal Value', 'Effect when Multiplying'],
              rows: [
                ['10³', '1000', '1000', 'Digits shift 3 places left'],
                ['10²', '100', '100', 'Digits shift 2 places left'],
                ['10¹', '10', '10', 'Digits shift 1 place left'],
                ['10⁰', '1', '1', 'Value unchanged'],
                ['10⁻¹', '1/10', '0.1', 'Digits shift 1 place right'],
                ['10⁻²', '1/100', '0.01', 'Digits shift 2 places right'],
                ['10⁻³', '1/1000', '0.001', 'Digits shift 3 places right'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_3_1_1',
          level: 1,
          text: 'Calculate: 5.4 × 10².',
          background: 'square',
        },
        {
          id: 'p_3_1_2',
          level: 1,
          text: 'Calculate: 820 ÷ 10².',
          background: 'square',
        },
        {
          id: 'p_3_1_3',
          level: 1,
          text: 'Calculate: 6.9 × 10⁻¹.',
          background: 'square',
        },
        {
          id: 'p_3_1_4',
          level: 2,
          text: 'Calculate: 45.8 × 10⁻³.',
          background: 'square',
        },
        {
          id: 'p_3_1_5',
          level: 2,
          text: 'Calculate: 0.072 ÷ 10⁻².',
          background: 'square',
        },
        {
          id: 'p_3_1_6',
          level: 2,
          text: 'Find the missing power: 0.043 × 10ⁿ = 430. What is n?',
          background: 'square',
        },
        {
          id: 'p_3_1_7',
          level: 3,
          text: 'Evaluate: (3.6 × 10⁴) ÷ (1.2 × 10⁻²).',
          background: 'square',
        },
        {
          id: 'p_3_1_8',
          level: 3,
          text: 'Calculate: 0.0085 ÷ 10⁻⁴ and express your answer as an integer.',
          background: 'square',
        },
        {
          id: 'p_3_1_9',
          level: 3,
          text: 'A computer processor completes a cycle in 4 × 10⁻¹⁰ seconds. How many cycles does it complete in 2 × 10⁻² seconds?',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 3.2 MULTIPLYING AND DIVIDING DECIMALS
    // =========================================================================
    {
      id: 'sub_3_2',
      title: '3.2 Multiplying and dividing decimals',
      codes: ['9Nf.06'],
      steps: [
        {
          id: 's_3_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.06',
              text: 'Estimate, multiply and divide decimals by integers and decimals.',
            },
          ],
        },
        {
          id: 's_3_2_c1',
          title: 'Decimal Multiplication and Division Principles',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Estimation Check',
              definition:
                'Round numbers to 1 significant figure before calculating to predict the scale of the answer.',
            },
            {
              type: 'formula',
              math: '0.4 \\times 0.07 = \\frac{4}{10} \\times \\frac{7}{100} = \\frac{28}{1000} = 0.028',
              label: 'Total decimal places in factors equals decimal places in product',
            },
            {
              type: 'figure',
              figure: {
                component: 'ArithmeticLayout',
                props: {
                  operation: 'multiply',
                  operands: ['4.2', '0.35'],
                },
              },
            },
          ],
        },
        {
          id: 's_3_2_worked',
          title: 'Worked Example: Dividing by a Decimal',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Calculate: 14.76 ÷ 0.6',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Estimate first: 15 ÷ 0.5 = 30.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply both dividend and divisor by 10 to make the divisor an integer.',
                  },
                  {
                    type: 'formula',
                    math: '\\frac{14.76 \\times 10}{0.6 \\times 10} = \\frac{147.6}{6}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Carry out short division: 147.6 ÷ 6 = 24.6.',
                  },
                  {
                    type: 'formula',
                    math: '24.6 \\quad (\\text{close to estimate } 30)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_3_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Misplacing the decimal point in 0.3 × 0.2 = 0.6. Fact: (1 d.p.) + (1 d.p.) = 2 decimal places, so 0.3 × 0.2 = 0.06.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Attempting long division with a decimal divisor without multiplying divisor and dividend by powers of 10 first.',
            },
          ],
        },
        {
          id: 's_3_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Definition', 'Example'],
              rows: [
                ['Dividend', 'The number being divided', 'In 14.76 ÷ 0.6, 14.76 is dividend'],
                ['Divisor', 'The number by which another is divided', 'In 14.76 ÷ 0.6, 0.6 is divisor'],
                ['Quotient', 'The result of a division', '24.6 is the quotient'],
                ['Significant Figure', 'First non-zero digit and following digits', '0.0405 has 3 sig. figs.'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_3_2_1',
          level: 1,
          text: 'Calculate: 0.6 × 0.7.',
          background: 'square',
        },
        {
          id: 'p_3_2_2',
          level: 1,
          text: 'Calculate: 3.4 × 6.',
          background: 'square',
        },
        {
          id: 'p_3_2_3',
          level: 1,
          text: 'Estimate: 4.82 × 19.1 by rounding each number to 1 significant figure.',
          background: 'square',
        },
        {
          id: 'p_3_2_4',
          level: 2,
          text: 'Calculate: 2.45 × 0.8.',
          background: 'square',
        },
        {
          id: 'p_3_2_5',
          level: 2,
          text: 'Calculate: 21.6 ÷ 0.04.',
          background: 'square',
        },
        {
          id: 'p_3_2_6',
          level: 2,
          text: 'Given that 47 × 38 = 1786, write down the value of 0.47 × 3.8.',
          background: 'square',
        },
        {
          id: 'p_3_2_7',
          level: 3,
          text: 'Calculate: 1.872 ÷ 0.12.',
          background: 'square',
        },
        {
          id: 'p_3_2_8',
          level: 3,
          text: 'Petrol costs £1.45 per litre. A driver fills their tank with 38.6 litres. Calculate the total cost to 2 decimal places.',
          background: 'square',
        },
        {
          id: 'p_3_2_9',
          level: 3,
          text: 'Given that 528 ÷ 24 = 22, evaluate: 5.28 ÷ 0.024.',
          background: 'square',
        },
      ],
    },

    // =========================================================================
    // 3.3 UNDERSTANDING COMPOUND PERCENTAGES
    // =========================================================================
    {
      id: 'sub_3_3',
      title: '3.3 Understanding compound percentages',
      codes: ['9Nf.05'],
      steps: [
        {
          id: 's_3_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Nf.05',
              text: 'Understand compound percentages and calculate repeated percentage changes (compound interest and depreciation).',
            },
          ],
        },
        {
          id: 's_3_3_c1',
          title: 'Compound Percentage Multipliers',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Compound Change',
              definition:
                'Percentage change applied successively to each new total, rather than to the original amount.',
            },
            {
              type: 'formula',
              math: 'A = P \\left(1 \\pm \\frac{r}{100}\\right)^n',
              label: 'General Compound Change Formula (P = Principal, r = Rate %, n = Periods)',
            },
            {
              type: 'figure',
              figure: {
                component: 'CompoundPercentTool',
                props: {
                  principal: 1000,
                  rate: 5,
                  years: 3,
                },
              },
            },
          ],
        },
        {
          id: 's_3_3_worked',
          title: 'Worked Example: Compound Interest Calculation',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: '£2500 is invested at 4% compound interest per year for 3 years. Find the total amount.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify multiplier for 4% increase: 1 + 0.04 = 1.04.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Multiplier} = 1.04',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Apply the multiplier for 3 periods: 1.04³.',
                  },
                  {
                    type: 'formula',
                    math: 'A = 2500 \\times (1.04)^3',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Calculate: 2500 × 1.124864 = £2812.16.',
                  },
                  {
                    type: 'formula',
                    math: 'A = £2812.16',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_3_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing simple and compound interest: 4% for 3 years is NOT just 12% total. Compound interest earns interest on interest!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: For depreciation at 10%, using multiplier 1.10 instead of 1 - 0.10 = 0.90.',
            },
          ],
        },
        {
          id: 's_3_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Type of Change', 'Rate', 'Multiplier', 'Example Calculation'],
              rows: [
                ['Increase / Interest', '+5%', '1 + 0.05 = 1.05', '£500 × 1.05² = £551.25'],
                ['Decrease / Depreciation', '-8%', '1 - 0.08 = 0.92', '£8000 × 0.92³ = £6229.50'],
                ['Simple Interest', 'Fixed on principal only', 'P × r × t / 100', 'Does not compound'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_3_3_1',
          level: 1,
          text: 'State the decimal multiplier for an increase of 6%.',
          background: 'lined',
        },
        {
          id: 'p_3_3_2',
          level: 1,
          text: 'State the decimal multiplier for a decrease of 15%.',
          background: 'lined',
        },
        {
          id: 'p_3_3_3',
          level: 1,
          text: 'A bank account with £400 earns 5% compound interest annually. How much is in the account after 1 year?',
          background: 'lined',
        },
        {
          id: 'p_3_3_4',
          level: 2,
          text: '£1200 is invested at 3% compound interest per year for 2 years. Calculate the final balance.',
          background: 'lined',
        },
        {
          id: 'p_3_3_5',
          level: 2,
          text: 'A car purchased for £15,000 depreciates by 12% each year. Find its value after 2 years.',
          background: 'lined',
        },
        {
          id: 'p_3_3_6',
          level: 2,
          text: 'A population of bacteria of 5000 increases by 8% every hour. Calculate the population after 3 hours to the nearest whole number.',
          background: 'lined',
        },
        {
          id: 'p_3_3_7',
          level: 3,
          text: '£5000 is invested for 4 years at 4.5% compound interest per year. Calculate the total interest earned.',
          background: 'lined',
        },
        {
          id: 'p_3_3_8',
          level: 3,
          text: 'A rare painting increases in value by 10% in year 1 and then decreases by 10% in year 2. Is its final value equal to, more than, or less than the original value? Explain.',
          background: 'lined',
        },
        {
          id: 'p_3_3_9',
          level: 3,
          text: 'Compare £2000 invested at 5% compound interest for 3 years versus 5.2% simple interest for 3 years. Which gives more return and by how much?',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 3.4 UNDERSTANDING UPPER AND LOWER BOUNDS
    // =========================================================================
    {
      id: 'sub_3_4',
      title: '3.4 Understanding upper and lower bounds',
      codes: ['9Np.02'],
      steps: [
        {
          id: 's_3_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Np.02',
              text: 'Understand that when a number is rounded there are upper and lower limits for the original number.',
            },
          ],
        },
        {
          id: 's_3_4_c1',
          title: 'Error Intervals and Limits of Accuracy',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Upper and Lower Bounds',
              definition:
                'The maximum and minimum possible values that could round to the given value.',
            },
            {
              type: 'formula',
              math: '\\text{Lower Bound} \\le x < \\text{Upper Bound}',
              label: 'Standard Error Interval Notation',
            },
            {
              type: 'figure',
              figure: {
                component: 'InequalityNumberLine',
                props: {
                  minVal: 20,
                  maxVal: 30,
                  leftBound: 24.5,
                  rightBound: 25.5,
                  leftClosed: true,
                  rightClosed: false,
                },
              },
            },
          ],
        },
        {
          id: 's_3_4_worked',
          title: 'Worked Example: Finding the Error Interval',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'The length of a table is measured as 140 cm correct to the nearest 10 cm. Find its upper and lower bounds, and write the error interval.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify degree of accuracy: 10 cm. Halve it: 10 ÷ 2 = 5 cm.',
                  },
                  {
                    type: 'formula',
                    math: '\\pm 5 \\text{ cm}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Subtract 5 for lower bound and add 5 for upper bound: 140 - 5 = 135 cm, 140 + 5 = 145 cm.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{LB} = 135\\text{ cm}, \\quad \\text{UB} = 145\\text{ cm}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: State the error interval with inequalities.',
                  },
                  {
                    type: 'formula',
                    math: '135 \\le \\text{length} < 145',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_3_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing the upper bound of 140 cm (to nearest 10) as 144.9 cm. Fact: In mathematics, the upper bound is written exactly as 145 cm with a strict inequality (< 145).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting to halve the unit of measurement when finding the tolerance bounds.',
            },
          ],
        },
        {
          id: 's_3_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Rounding Degree', 'Half Unit (±)', 'Example (x = 8)', 'Error Interval'],
              rows: [
                ['Nearest integer', '0.5', '8 ± 0.5', '7.5 ≤ x < 8.5'],
                ['Nearest 10', '5', '80 ± 5', '75 ≤ x < 85'],
                ['1 decimal place', '0.05', '8.4 ± 0.05', '8.35 ≤ x < 8.45'],
                ['2 decimal places', '0.005', '8.46 ± 0.005', '8.455 ≤ x < 8.465'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_3_4_1',
          level: 1,
          text: 'A mass is 48 kg correct to the nearest kg. Write down its lower bound and upper bound.',
          background: 'lined',
        },
        {
          id: 'p_3_4_2',
          level: 1,
          text: 'A distance is 70 m correct to the nearest 10 m. Write down its error interval.',
          background: 'lined',
        },
        {
          id: 'p_3_4_3',
          level: 1,
          text: 'A time is recorded as 12.4 seconds correct to 1 decimal place. State the lower bound.',
          background: 'lined',
        },
        {
          id: 'p_3_4_4',
          level: 2,
          text: 'The width of a screen is 65 cm correct to 2 significant figures. Write the inequality representing the possible width w.',
          background: 'lined',
        },
        {
          id: 'p_3_4_5',
          level: 2,
          text: 'A rope of length 15 m (to nearest metre) is cut into 4 equal pieces. Find the lower bound for the length of one piece.',
          background: 'lined',
        },
        {
          id: 'p_3_4_6',
          level: 2,
          text: 'The length and width of a rectangle are 8 cm and 5 cm, both correct to the nearest cm. Calculate the upper bound for the perimeter.',
          background: 'lined',
        },
        {
          id: 'p_3_4_7',
          level: 3,
          text: 'A rectangular field has length 80 m (to nearest 10 m) and width 45 m (to nearest 5 m). Calculate the lower bound for its area.',
          background: 'lined',
        },
        {
          id: 'p_3_4_8',
          level: 3,
          text: 'Speed = Distance / Time. Distance is 120 km (nearest 10 km) and Time is 2.5 hours (1 d.p.). Calculate the upper bound for speed.',
          background: 'lined',
        },
        {
          id: 'p_3_4_9',
          level: 3,
          text: 'Explain why to find the upper bound of a fraction a/b, you must divide the upper bound of a by the lower bound of b.',
          background: 'lined',
        },
      ],
    },
  ],
};
