import { Unit } from '../types/content';

export const unit06: Unit = {
  id: 'unit6',
  number: 6,
  title: '6 Statistical investigations',
  codes: ['9Ss.01', '9Ss.02'],
  accentColor: '#0D9488', // Teal
  subtopics: [
    // =========================================================================
    // 6.1 DATA COLLECTION AND SAMPLING
    // =========================================================================
    {
      id: 'sub_6_1',
      title: '6.1 Data collection and sampling',
      codes: ['9Ss.01'],
      steps: [
        {
          id: 's_6_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.01',
              text: 'Select, trial and justify data collection and sampling methods to investigate predictions, considering data types (qualitative/quantitative, discrete/continuous).',
            },
          ],
        },
        {
          id: 's_6_1_c1',
          title: 'Types of Data and Sampling Methods',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Population vs Sample',
              definition:
                'The population is the entire group being studied. A sample is a smaller subset chosen to represent the population without surveying everyone.',
            },
            {
              type: 'formula',
              math: '\\text{Data: } \\begin{cases} \\text{Qualitative (words / categories)} \\\\ \\text{Quantitative (numerical)} \\begin{cases} \\text{Discrete (counted, distinct values)} \\\\ \\text{Continuous (measured on a scale)} \\end{cases} \\end{cases}',
              label: 'Classification of Data Types',
            },
            {
              type: 'figure',
              figure: {
                component: 'DataTable',
                props: {
                  pairs: [
                    { label: 'Shoe Size', val: 'Discrete' },
                    { label: 'Running Time (s)', val: 'Continuous' },
                    { label: 'Number of Pets', val: 'Discrete' },
                    { label: 'Height (cm)', val: 'Continuous' },
                    { label: 'Eye Colour', val: 'Qualitative' },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_6_1_worked',
          title: 'Worked Example: Designing a Stratified Sample',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A school has 400 boys and 600 girls (total 1000 students). A sample of 50 students is required. How many boys and girls should be chosen?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate the fraction of boys and girls in the whole population.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Fraction of boys} = \\frac{400}{1000} = 0.40, \\quad \\text{Fraction of girls} = \\frac{600}{1000} = 0.60',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply each fraction by sample size 50.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Boys} = 0.40 \\times 50 = 20, \\quad \\text{Girls} = 0.60 \\times 50 = 30',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Check total: 20 + 30 = 50 students.',
                  },
                  {
                    type: 'formula',
                    math: '20 \\text{ boys and } 30 \\text{ girls}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_6_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Confusing discrete and continuous: categorising foot length as discrete because shoe sizes are discrete. Fact: Length is measured, making it continuous.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Believing a sample must include every single person to be reliable. Fact: A well-chosen representative sample provides accurate inferences.',
            },
          ],
        },
        {
          id: 's_6_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Sampling Technique', 'How It Operates', 'Key Advantage'],
              rows: [
                ['Random Sampling', 'Every member has an equal chance of being selected', 'Eliminates selection bias'],
                ['Stratified Sampling', 'Sample reflects the proportions of sub-groups in population', 'Ensures accurate representation of minorities'],
                ['Systematic Sampling', 'Select every kth member from a list', 'Simple and evenly spaced'],
                ['Opportunity Sampling', 'Selecting people who are convenient to survey', 'Quick, but high risk of bias'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_6_1_1',
          level: 1,
          text: 'Classify as discrete or continuous: The number of pages in a textbook.',
          background: 'lined',
        },
        {
          id: 'p_6_1_2',
          level: 1,
          text: 'Classify as discrete or continuous: The mass of an apple in grams.',
          background: 'lined',
        },
        {
          id: 'p_6_1_3',
          level: 1,
          text: 'State whether "favourite sports team" is qualitative or quantitative.',
          background: 'lined',
        },
        {
          id: 'p_6_1_4',
          level: 2,
          text: 'A factory produces 800 red bikes and 1200 blue bikes. In a representative sample of 60 bikes, how many of each colour should be tested?',
          background: 'lined',
        },
        {
          id: 'p_6_1_5',
          level: 2,
          text: 'Explain why surveying only people arriving at a gym on Saturday morning does NOT give a random sample of the town population.',
          background: 'lined',
        },
        {
          id: 'p_6_1_6',
          level: 2,
          text: 'Give two examples of continuous numerical data that could be recorded about students in a classroom.',
          background: 'lined',
        },
        {
          id: 'p_6_1_7',
          level: 3,
          text: 'A town has 3 districts: North (5000 residents), Central (15000), and South (10000). Design a stratified sample of 120 people.',
          background: 'lined',
        },
        {
          id: 'p_6_1_8',
          level: 3,
          text: 'Design a two-way data collection tally table to record gender and whether students walk, cycle, or take the bus to school.',
          background: 'lined',
        },
        {
          id: 'p_6_1_9',
          level: 3,
          text: 'Critique this survey question: "Do you agree that our school library needs better books?" Suggest an improved, neutral question.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 6.2 BIAS
    // =========================================================================
    {
      id: 'sub_6_2',
      title: '6.2 Bias',
      codes: ['9Ss.02'],
      steps: [
        {
          id: 's_6_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.02',
              text: 'Explain potential issues and sources of bias with data collection and sampling methods, identifying further questions to ask.',
            },
          ],
        },
        {
          id: 's_6_2_c1',
          title: 'Sources of Bias and Questionnaire Flaws',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Bias',
              definition:
                'Any systematic unfairness in data collection, question design, or sampling that skews findings away from the true picture.',
            },
            {
              type: 'formula',
              math: '\\text{Biased Sample} \\implies \\text{Invalid inferences about the population}',
              label: 'Fundamental rule of statistical validity',
            },
            {
              type: 'figure',
              figure: {
                component: 'BarChart',
                props: {
                  data: [
                    { label: 'Biased Sample', value: 85 },
                    { label: 'Unbiased Sample', value: 52 },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_6_2_worked',
          title: 'Worked Example: Critiquing a Questionnaire Question',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Identify two major flaws with this survey question: "How much TV do you watch? [ ] 0 - 2 hours  [ ] 2 - 4 hours  [ ] 4+ hours"',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Flaw 1: No timeframe specified (per day, per week, or per month?).',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Flaw 2: Overlapping response boxes (someone who watches 2 hours could check either box 1 or box 2).',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Improvement: "How many hours of TV do you watch per week? [ ] 0 to 2 [ ] 3 to 5 [ ] 6 or more".',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_6_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Writing leading questions like "Do you agree that football is the best sport?". Fact: Neutral questions must be used: "Which sport do you prefer?".',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming a large sample guarantees zero bias. Fact: A huge sample taken exclusively outside a sweet shop remains biased for dietary studies.',
            },
          ],
        },
        {
          id: 's_6_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Issue', 'Explanation', 'Solution'],
              rows: [
                ['Leading question', 'Pushes the respondent toward a desired response', 'Rephrase with neutral wording'],
                ['Overlapping categories', 'Boundary values fit into more than one choice', 'Use distinct non-overlapping ranges (e.g. 1-2, 3-4)'],
                ['Non-response bias', 'People who refuse or ignore survey hold different views', 'Follow-up or adjust sampling frame'],
                ['Unrepresentative location', 'Location favours specific demographic', 'Randomize location and collection times'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_6_2_1',
          level: 1,
          text: 'Explain why asking "How old are you? [ ] Under 20  [ ] 20-30  [ ] 30-40" is flawed.',
          background: 'lined',
        },
        {
          id: 'p_6_2_2',
          level: 1,
          text: 'Why would surveying students at 8:00 AM outside the library produce bias about study habits?',
          background: 'lined',
        },
        {
          id: 'p_6_2_3',
          level: 1,
          text: 'What is meant by a "leading question"? Give one example.',
          background: 'lined',
        },
        {
          id: 'p_6_2_4',
          level: 2,
          text: 'A survey asks: "Don\'t you think homework should be banned?". Rewrite this question to remove bias.',
          background: 'lined',
        },
        {
          id: 'p_6_2_5',
          level: 2,
          text: 'An online poll on a gaming website asks: "What is your favourite leisure activity?". State two reasons why results are biased.',
          background: 'lined',
        },
        {
          id: 'p_6_2_6',
          level: 2,
          text: 'Write three non-overlapping response boxes for the question: "How many books did you read last month?".',
          background: 'lined',
        },
        {
          id: 'p_6_2_7',
          level: 3,
          text: 'A company wants to know employee satisfaction. The CEO interviews 20 employees face-to-face in the executive office. Explain why this collection method introduces response bias.',
          background: 'lined',
        },
        {
          id: 'p_6_2_8',
          level: 3,
          text: 'Describe how a researcher could trial a questionnaire with a pilot group before launching a full survey.',
          background: 'lined',
        },
        {
          id: 'p_6_2_9',
          level: 3,
          text: 'A council wants to decide whether to build a skate park. Compare conducting a telephone survey at 2:00 PM on Tuesday versus a door-to-door survey on Saturday morning.',
          background: 'lined',
        },
      ],
    },
  ],
};
