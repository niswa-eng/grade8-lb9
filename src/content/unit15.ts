import { Unit } from '../types/content';

export const unit15: Unit = {
  id: 'unit15',
  number: 15,
  title: '15 Interpreting and discussing results',
  codes: ['9Ss.03', '9Ss.04', '9Ss.05'],
  accentColor: '#334155', // Slate Navy
  subtopics: [
    // =========================================================================
    // 15.1 INTERPRETING AND DRAWING FREQUENCY POLYGONS
    // =========================================================================
    {
      id: 'sub_15_1',
      title: '15.1 Interpreting and drawing frequency polygons',
      codes: ['9Ss.03'],
      steps: [
        {
          id: 's_15_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.03',
              text: 'Record, organise and represent continuous grouped data using frequency polygons (plotting at group midpoints).',
            },
          ],
        },
        {
          id: 's_15_1_c1',
          title: 'Plotting at Class Midpoints',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Frequency Polygon',
              definition:
                'A line graph for continuous grouped data where points are plotted at (Midpoint of Class Interval, Frequency) and connected by straight line segments.',
            },
            {
              type: 'formula',
              math: '\\text{Midpoint} = \\frac{\\text{Lower limit} + \\text{Upper limit}}{2}',
              label: 'Group midpoint formula',
            },
            {
              type: 'figure',
              figure: {
                component: 'FrequencyPolygon',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_15_1_worked',
          title: 'Worked Example: Constructing a Frequency Polygon',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Groups: 0 ≤ t < 10 (freq 4), 10 ≤ t < 20 (freq 9), 20 ≤ t < 30 (freq 15), 30 ≤ t < 40 (freq 6). Find the points to plot.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Calculate midpoints: (0+10)/2 = 5; (10+20)/2 = 15; (20+30)/2 = 25; (30+40)/2 = 35.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Pair each midpoint with its frequency.',
                  },
                  {
                    type: 'formula',
                    math: '(5, 4), \\quad (15, 9), \\quad (25, 15), \\quad (35, 6)',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Plot the points on the grid and join consecutive points with straight ruled line segments.',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_15_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Plotting at the upper bound or lower bound instead of the exact midpoint of each group.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Drawing a curved line of best fit. Frequency polygons MUST use straight ruled lines connecting consecutive points.',
            },
          ],
        },
        {
          id: 's_15_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Class Interval', 'Midpoint', 'Frequency', 'Plot Coordinate'],
              rows: [
                ['10 ≤ w < 20', '15', '6', '(15, 6)'],
                ['20 ≤ w < 30', '25', '14', '(25, 14)'],
                ['30 ≤ w < 40', '35', '11', '(35, 11)'],
                ['40 ≤ w < 50', '45', '5', '(45, 5)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_15_1_1',
          level: 1,
          text: 'Find the midpoint of class interval 40 ≤ x < 60.',
          background: 'axes',
        },
        {
          id: 'p_15_1_2',
          level: 1,
          text: 'State the x-coordinate where a group 70 ≤ x < 80 with frequency 12 should be plotted.',
          background: 'axes',
        },
        {
          id: 'p_15_1_3',
          level: 1,
          text: 'Can two distributions be compared on the same frequency polygon graph? State one advantage of doing so.',
          background: 'axes',
        },
        {
          id: 'p_15_1_4',
          level: 2,
          text: 'List the coordinates to plot for: 0-10 (freq 5), 10-20 (freq 8), 20-30 (freq 12), 30-40 (freq 3).',
          background: 'axes',
        },
        {
          id: 'p_15_1_5',
          level: 2,
          text: 'Explain why frequency polygons are suitable for continuous data but not for discrete categorical data.',
          background: 'axes',
        },
        {
          id: 'p_15_1_6',
          level: 2,
          text: 'From a frequency polygon with points (15, 4), (25, 10), (35, 18), (45, 8), identify the modal class interval.',
          background: 'axes',
        },
        {
          id: 'p_15_1_7',
          level: 3,
          text: 'Two classes took the same test. Describe how comparing the peaks and spread of their frequency polygons reveals difference in average performance and consistency.',
          background: 'axes',
        },
        {
          id: 'p_15_1_8',
          level: 3,
          text: 'A frequency table has unequal class widths: 0 ≤ x < 10, 10 ≤ x < 30. Explain why a standard frequency polygon without frequency density adjustment would be misleading.',
          background: 'axes',
        },
        {
          id: 'p_15_1_9',
          level: 3,
          text: 'Calculate the total number of data values represented by a frequency polygon passing through (5, 8), (15, 14), (25, 20), (35, 6).',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 15.2 SCATTER GRAPHS
    // =========================================================================
    {
      id: 'sub_15_2',
      title: '15.2 Scatter graphs',
      codes: ['9Ss.03'],
      steps: [
        {
          id: 's_15_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.03',
              text: 'Represent bivariate data using scatter graphs and draw lines of best fit to identify correlation, interpolate and extrapolate.',
            },
          ],
        },
        {
          id: 's_15_2_c1',
          title: 'Correlation and Line of Best Fit',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Correlation vs Causation',
              definition:
                'Positive: as x increases, y increases. Negative: as x increases, y decreases. Zero: no relationship. Correlation does not prove causation.',
            },
            {
              type: 'formula',
              math: '\\text{Line of Best Fit passes through the mean point } (\\bar{x}, \\bar{y})',
              label: 'Standard rule for drawing an accurate line of best fit',
            },
            {
              type: 'figure',
              figure: {
                component: 'ScatterGraph',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_15_2_worked',
          title: 'Worked Example: Interpolation vs Extrapolation',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A scatter graph plots revision hours (1 to 10 hours) against exam score (40% to 95%). Explain whether estimating the score for 6 hours revision vs 15 hours revision is reliable.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: '6 hours lies inside the given data range (1 to 10 h). This is INTERPOLATION and is generally reliable.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: '15 hours lies outside the given data range. This is EXTRAPOLATION and is unreliable (exam scores cannot exceed 100%, and fatigue sets in).',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_15_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forcing the line of best fit to go through the origin (0, 0). The line should follow the balance of the points, not necessarily pass through zero.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming that a strong correlation means that one variable causes the other (e.g. ice cream sales and sunburn both rise due to hot weather, not each other).',
            },
          ],
        },
        {
          id: 's_15_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Correlation Type', 'Visual Trend', 'Real-World Example'],
              rows: [
                ['Positive correlation', 'Points slope up from left to right', 'Height and shoe size'],
                ['Negative correlation', 'Points slope down from left to right', 'Car age and resale value'],
                ['No correlation', 'Points scattered randomly', 'Shoe size and math test score'],
                ['Outlier', 'Point lying far away from main trend', 'Special exceptional case or recording error'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_15_2_1',
          level: 1,
          text: 'State the type of correlation: Temperature and ice cream sales.',
          background: 'axes',
        },
        {
          id: 'p_15_2_2',
          level: 1,
          text: 'State the type of correlation: Speed of car and time to reach destination.',
          background: 'axes',
        },
        {
          id: 'p_15_2_3',
          level: 1,
          text: 'What is an outlier on a scatter graph?',
          background: 'axes',
        },
        {
          id: 'p_15_2_4',
          level: 2,
          text: 'Explain the difference between interpolation and extrapolation when reading a scatter graph.',
          background: 'axes',
        },
        {
          id: 'p_15_2_5',
          level: 2,
          text: 'Ten students have mean revision time 5 hours and mean score 70%. What coordinate must their line of best fit pass through?',
          background: 'axes',
        },
        {
          id: 'p_15_2_6',
          level: 2,
          text: 'Give an example of two variables that show strong correlation but NO causal link.',
          background: 'axes',
        },
        {
          id: 'p_15_2_7',
          level: 3,
          text: 'A scatter graph shows height and weight of 30 athletes. One athlete is 150 cm and weighs 95 kg. How does this point appear relative to the cluster?',
          background: 'axes',
        },
        {
          id: 'p_15_2_8',
          level: 3,
          text: 'Explain why extrapolating a line of best fit for a plant height over 50 years would lead to impossible predictions.',
          background: 'axes',
        },
        {
          id: 'p_15_2_9',
          level: 3,
          text: 'How does removing an obvious recording error outlier change the slope of a line of best fit?',
          background: 'axes',
        },
      ],
    },

    // =========================================================================
    // 15.3 BACK-TO-BACK STEM-AND-LEAF DIAGRAMS
    // =========================================================================
    {
      id: 'sub_15_3',
      title: '15.3 Back-to-back stem-and-leaf diagrams',
      codes: ['9Ss.03'],
      steps: [
        {
          id: 's_15_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.03',
              text: 'Record, organise and compare two sets of numerical data using back-to-back stem-and-leaf diagrams with keys.',
            },
          ],
        },
        {
          id: 's_15_3_c1',
          title: 'Back-to-Back Layout and Reversed Left Leaves',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Back-to-Back Stem-and-Leaf',
              definition:
                'Shares a central stem between two distributions. Left leaves read backwards (outward from stem, smallest to largest). Must have a dual key.',
            },
            {
              type: 'formula',
              math: '\\text{Left Key: } 4 \\mid 2 = 24, \\quad \\text{Right Key: } 2 \\mid 5 = 25',
              label: 'Dual key specification',
            },
            {
              type: 'figure',
              figure: {
                component: 'BackToBackStemLeaf',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_15_3_worked',
          title: 'Worked Example: Reading the Median from a Back-to-Back Diagram',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Distribution A has 15 values on the left. Find its median position and read the value.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Median position for n = 15 is (15 + 1) / 2 = 8th value from the smallest.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Position} = \\frac{15 + 1}{2} = 8\\text{th value}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Count 8 values starting from the smallest leaf outwards on the lowest stem.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Read the combined stem and leaf using the key.',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_15_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Ordering the left-hand leaves from left to right instead of ordered outward from the stem (smallest closest to stem).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Forgetting the key. A stem-and-leaf without a key loses communication marks.',
            },
          ],
        },
        {
          id: 's_15_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Component', 'Role', 'Example'],
              rows: [
                ['Stem', 'Tens, hundreds, or whole units shared down center', '1, 2, 3, 4'],
                ['Right Leaf', 'Units digits for Group 2 (read normally left-to-right)', '3 | 5 = 35'],
                ['Left Leaf', 'Units digits for Group 1 (read right-to-left outward)', '7 | 3 = 37'],
                ['Key', 'Defines scale and units', '3 | 2 = 32 marks'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_15_3_1',
          level: 1,
          text: 'If the stem is 4 and the right leaf is 7, what is the number if Key: 4 | 7 = 47?',
          background: 'lined',
        },
        {
          id: 'p_15_3_2',
          level: 1,
          text: 'If the stem is 3 and the left leaf is 5, write the number using Key: 5 | 3 = 35.',
          background: 'lined',
        },
        {
          id: 'p_15_3_3',
          level: 1,
          text: 'Why must leaves on both sides be aligned in uniform columns?',
          background: 'lined',
        },
        {
          id: 'p_15_3_4',
          level: 2,
          text: 'A back-to-back stem-and-leaf compares test scores for Boys (n=19) and Girls (n=19). Find the median score for each group.',
          background: 'lined',
        },
        {
          id: 'p_15_3_5',
          level: 2,
          text: 'Calculate the range for both groups from a stem-and-leaf where min and max are easily identified.',
          background: 'lined',
        },
        {
          id: 'p_15_3_6',
          level: 2,
          text: 'Construct the dual key for a diagram measuring heights in decimal metres: 1 | 4 | 6 representing 1.4 m and 1.6 m.',
          background: 'lined',
        },
        {
          id: 'p_15_3_7',
          level: 3,
          text: 'Compare the distributions of two classes using back-to-back stem-and-leaf by writing two comparative sentences: one about average (median) and one about spread (range).',
          background: 'lined',
        },
        {
          id: 'p_15_3_8',
          level: 3,
          text: 'Find the modal score for each group from a back-to-back diagram with multiple repeated leaves.',
          background: 'lined',
        },
        {
          id: 'p_15_3_9',
          level: 3,
          text: 'Explain why a stem-and-leaf diagram retains original raw data values while a grouped frequency table does not.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 15.4 CALCULATING STATISTICS FOR GROUPED DATA
    // =========================================================================
    {
      id: 'sub_15_4',
      title: '15.4 Calculating statistics for grouped data',
      codes: ['9Ss.04'],
      steps: [
        {
          id: 's_15_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.04',
              text: 'Use mode, median, mean and range to compare two distributions, including grouped data (modal class and estimated mean using midpoints).',
            },
          ],
        },
        {
          id: 's_15_4_c1',
          title: 'Estimated Mean and Modal Class',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Estimated Mean',
              definition:
                'Because exact values within grouped intervals are unknown, we represent every value in a group by its midpoint m. Estimated Mean = Σ(f × m) / Σf.',
            },
            {
              type: 'formula',
              math: '\\text{Estimated Mean} = \\frac{\\sum (f \\times m)}{\\sum f}',
              label: 'Formula for Grouped Frequency Mean',
            },
            {
              type: 'figure',
              figure: {
                component: 'DataTable',
                props: {
                  pairs: [
                    { label: 'Group 0-10 (m=5, f=4)', val: 'f×m = 20' },
                    { label: 'Group 10-20 (m=15, f=6)', val: 'f×m = 90' },
                    { label: 'Group 20-30 (m=25, f=10)', val: 'f×m = 250' },
                    { label: 'Total (Σf = 20)', val: 'Σ(f×m) = 360' },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_15_4_worked',
          title: 'Worked Example: Calculating the Estimated Mean',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'Groups: 0 ≤ x < 10 (freq 4), 10 ≤ x < 20 (freq 6), 20 ≤ x < 30 (freq 10). Calculate the estimated mean.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Find midpoints m: 5, 15, 25.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply f × m: (4×5)=20; (6×15)=90; (10×25)=250. Sum of f×m = 20 + 90 + 250 = 360.',
                  },
                  {
                    type: 'formula',
                    math: '\\sum (f \\times m) = 360',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Total frequency Σf = 4 + 6 + 10 = 20. Estimated mean = 360 / 20 = 18.',
                  },
                  {
                    type: 'formula',
                    math: '\\bar{x} = \\frac{360}{20} = 18',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_15_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Dividing Σ(f × m) by the number of rows (e.g. 3) instead of total frequency Σf (20).',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Stating that the mean calculation is exact. It is an ESTIMATE because we assume all values equal the midpoint.',
            },
          ],
        },
        {
          id: 's_15_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Measure', 'Grouped Data Equivalent', 'Meaning'],
              rows: [
                ['Mode', 'Modal class', 'The class interval with the highest frequency'],
                ['Median', 'Median group / class', 'The interval containing the (n + 1)/2 data value'],
                ['Mean', 'Estimated mean', 'Σ(fm) / Σf using class midpoints'],
                ['Range', 'Estimated range', 'Upper bound of highest group minus lower bound of lowest group'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_15_4_1',
          level: 1,
          text: 'Frequencies for groups A, B, C are 8, 15, 6. Which is the modal class?',
          background: 'lined',
        },
        {
          id: 'p_15_4_2',
          level: 1,
          text: 'Total frequency Σf = 40. Which value position represents the median?',
          background: 'lined',
        },
        {
          id: 'p_15_4_3',
          level: 1,
          text: 'Explain why the mean calculated from grouped data is called an "estimate".',
          background: 'lined',
        },
        {
          id: 'p_15_4_4',
          level: 2,
          text: 'Groups: 0-4 (freq 3), 4-8 (freq 5), 8-12 (freq 2). Calculate the estimated mean.',
          background: 'lined',
        },
        {
          id: 'p_15_4_5',
          level: 2,
          text: 'A survey records ages: 10-20 (8), 20-30 (12), 30-40 (15), 40-50 (5). Find the class containing the median.',
          background: 'lined',
        },
        {
          id: 'p_15_4_6',
          level: 2,
          text: 'Compare two classes: Class 1 has mean 62, range 18; Class 2 has mean 62, range 34. Which class was more consistent?',
          background: 'lined',
        },
        {
          id: 'p_15_4_7',
          level: 3,
          text: 'A frequency table has one missing frequency x. If the total frequency is 50 and estimated mean is known, show how to form an equation and solve for x.',
          background: 'lined',
        },
        {
          id: 'p_15_4_8',
          level: 3,
          text: 'Explain the effect on the mean and range if every score in a distribution is increased by 5 marks.',
          background: 'lined',
        },
        {
          id: 'p_15_4_9',
          level: 3,
          text: 'Explain why the median is often preferred over the mean when analysing household income distributions.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 15.5 REPRESENTING DATA
    // =========================================================================
    {
      id: 'sub_15_5',
      title: '15.5 Representing data',
      codes: ['9Ss.05'],
      steps: [
        {
          id: 's_15_5_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Ss.05',
              text: 'Interpret data identifying patterns, trends and relationships to answer statistical questions and identify misleading information (truncated axes, 3D distortions).',
            },
          ],
        },
        {
          id: 's_15_5_c1',
          title: 'Detecting Misleading Graphs and Visual Distortions',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Misleading Graph',
              definition:
                'A visual representation deliberately or accidentally drawn to exaggerate or downplay differences (e.g. truncated vertical axis, non-uniform scales, 3D pie charts).',
            },
            {
              type: 'formula',
              math: '\\text{Truncated Axis (not starting at 0)} \\implies \\text{Exaggerates relative differences dramatically}',
              label: 'Common distortion technique in media graphs',
            },
            {
              type: 'figure',
              figure: {
                component: 'BarChart',
                props: {
                  data: [
                    { label: 'Company A (98%)', value: 98 },
                    { label: 'Company B (95%)', value: 95 },
                  ],
                },
              },
            },
          ],
        },
        {
          id: 's_15_5_worked',
          title: 'Worked Example: Critiquing a Misleading Graph',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A bar chart shows Sales for Year 1 as £98,000 and Year 2 as £102,000. The vertical axis starts at £95,000 instead of 0. Why is this misleading?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: On the truncated graph, the bar for Year 2 looks more than twice as tall as Year 1 (height 7 vs height 3 units above 95).',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: In reality, £102,000 is only a modest 4% increase over £98,000.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Conclusion: The truncated vertical axis gives the false visual impression of a huge boom in sales.',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_15_5_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Doubling the width AND height of a pictogram icon to represent double the quantity. Doubling both dimensions quadruples the area (2² = 4)!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Comparing two pie charts without knowing total sample sizes: a 50% sector in a sample of 20 is only 10 people, whereas a 25% sector in 200 is 50 people.',
            },
          ],
        },
        {
          id: 's_15_5_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Misleading Technique', 'How It Distorts', 'How to Fix'],
              rows: [
                ['Truncated vertical axis', 'Omitting 0 magnifies tiny differences', 'Include 0 or clearly use break symbol //'],
                ['Pictogram area scaling', 'Scaling 2D icon changes area by k²', 'Keep icon size constant and repeat icons'],
                ['3D perspective tilt', 'Front sectors look disproportionately larger', 'Use flat 2D orthographic pie charts'],
                ['Non-uniform intervals', 'Unequal bin widths without density adjustment', 'Use proper histograms with frequency density'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_15_5_1',
          level: 1,
          text: 'What is meant by a "truncated axis" on a bar chart?',
          background: 'lined',
        },
        {
          id: 'p_15_5_2',
          level: 1,
          text: 'Why can 3D pie charts be misleading?',
          background: 'lined',
        },
        {
          id: 'p_15_5_3',
          level: 1,
          text: 'Why is it important to state the key in a pictogram?',
          background: 'lined',
        },
        {
          id: 'p_15_5_4',
          level: 2,
          text: 'A company reports profit grew from £49m to £50m. A bar chart starts at £48m. Explain how this graph misleads investors.',
          background: 'lined',
        },
        {
          id: 'p_15_5_5',
          level: 2,
          text: 'Two pie charts show favourite subjects in School A (100 students) and School B (1000 students). Explain why comparing sector angles directly is misleading.',
          background: 'lined',
        },
        {
          id: 'p_15_5_6',
          level: 2,
          text: 'A pictogram uses bags of money. To show twice as much money, the height and width of the bag are both doubled. Explain why this misleads.',
          background: 'lined',
        },
        {
          id: 'p_15_5_7',
          level: 3,
          text: 'Write three guidelines for journalists to ensure statistical graphs present honest and unbiased representations of data.',
          background: 'lined',
        },
        {
          id: 'p_15_5_8',
          level: 3,
          text: 'Compare when a box plot / stem-and-leaf is superior to a bar chart for comparing test scores across two schools.',
          background: 'lined',
        },
        {
          id: 'p_15_5_9',
          level: 3,
          text: 'A line graph shows crime rates over 5 years. The time intervals on the x-axis are 2018, 2019, 2020, 2023. Explain how the non-constant spacing creates a false impression of trends.',
          background: 'lined',
        },
      ],
    },
  ],
};
