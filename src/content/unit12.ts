import { Unit } from '../types/content';

export const unit12: Unit = {
  id: 'unit12',
  number: 12,
  title: '12 Probability',
  codes: ['9Sp.01', '9Sp.02', '9Sp.03', '9Sp.04'],
  accentColor: '#9333EA', // Purple
  subtopics: [
    // =========================================================================
    // 12.1 MUTUALLY EXCLUSIVE EVENTS
    // =========================================================================
    {
      id: 'sub_12_1',
      title: '12.1 Mutually exclusive events',
      codes: ['9Sp.01'],
      steps: [
        {
          id: 's_12_1_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Sp.01',
              text: 'Understand that the probability of multiple mutually exclusive events can be found by summation and all mutually exclusive events have a total probability of 1.',
            },
          ],
        },
        {
          id: 's_12_1_c1',
          title: 'Addition Rule for Mutually Exclusive Outcomes',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Mutually Exclusive',
              definition:
                'Events that cannot happen at the same time. If events A and B are mutually exclusive, P(A or B) = P(A) + P(B).',
            },
            {
              type: 'formula',
              math: 'P(A \\text{ or } B) = P(A) + P(B), \\quad \\sum P(\\text{all outcomes}) = 1, \\quad P(\\text{not } A) = 1 - P(A)',
              label: 'Addition Rule and Complementary Events',
            },
            {
              type: 'figure',
              figure: {
                component: 'Spinner',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_12_1_worked',
          title: 'Worked Example: Missing Probability in Exhaustive Table',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A bag contains red, blue, green, and yellow counters. P(red) = 0.35, P(blue) = 0.20, and P(green) = 0.15. Find P(yellow) and P(red or green).',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: All probabilities in exhaustive set must sum to 1.',
                  },
                  {
                    type: 'formula',
                    math: '0.35 + 0.20 + 0.15 + P(\\text{yellow}) = 1',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Add known probabilities: 0.70. Subtract from 1: P(yellow) = 1 - 0.70 = 0.30.',
                  },
                  {
                    type: 'formula',
                    math: 'P(\\text{yellow}) = 0.30',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Red and green are mutually exclusive: P(red or green) = 0.35 + 0.15 = 0.50.',
                  },
                  {
                    type: 'formula',
                    math: 'P(\\text{red or green}) = 0.50',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_12_1_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding probabilities for non-mutually exclusive events (e.g. rolling an even number or a prime number on a die). 2 is both even and prime!',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Giving a probability answer greater than 1 or as a negative number.',
            },
          ],
        },
        {
          id: 's_12_1_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Definition', 'Example'],
              rows: [
                ['Mutually exclusive', 'Cannot occur simultaneously', 'Rolling a 2 and rolling a 5 on one die'],
                ['Exhaustive', 'Covers all possible outcomes', 'Heads or Tails when flipping a coin'],
                ['Complementary', 'The event NOT happening: P(A′) = 1 - P(A)', 'P(not raining) = 1 - P(raining)'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_12_1_1',
          level: 1,
          text: 'P(rain) = 0.28. Find the probability that it does NOT rain.',
          background: 'lined',
        },
        {
          id: 'p_12_1_2',
          level: 1,
          text: 'A spinner has 4 colours. P(Red) = 0.4, P(Blue) = 0.3, P(Green) = 0.1. Find P(Yellow).',
          background: 'lined',
        },
        {
          id: 'p_12_1_3',
          level: 1,
          text: 'On a fair 6-sided die, find P(rolling a 1 or a 6).',
          background: 'lined',
        },
        {
          id: 'p_12_1_4',
          level: 2,
          text: 'A bias die has probabilities: P(1)=0.1, P(2)=0.15, P(3)=0.2, P(4)=0.25, P(5)=0.1. Calculate P(6).',
          background: 'lined',
        },
        {
          id: 'p_12_1_5',
          level: 2,
          text: 'Explain whether "drawing an ace" and "drawing a heart" from a standard pack of cards are mutually exclusive.',
          background: 'lined',
        },
        {
          id: 'p_12_1_6',
          level: 2,
          text: 'The probability of a train being late is 3/20 and cancelled is 1/20. Find the probability it is on time.',
          background: 'lined',
        },
        {
          id: 'p_12_1_7',
          level: 3,
          text: 'A bag has red, green and blue balls. P(red) = 2 × P(blue) and P(green) = 0.4. Calculate P(red) and P(blue).',
          background: 'lined',
        },
        {
          id: 'p_12_1_8',
          level: 3,
          text: 'In a lottery game, P(win $10) = 0.05, P(win $50) = 0.01, and P(win $500) = 0.002. What is the probability of winning any prize?',
          background: 'lined',
        },
        {
          id: 'p_12_1_9',
          level: 3,
          text: 'Prove that if A, B, and C form an exhaustive set of mutually exclusive events, then P(A) = 1 - P(B) - P(C).',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 12.2 INDEPENDENT EVENTS
    // =========================================================================
    {
      id: 'sub_12_2',
      title: '12.2 Independent events',
      codes: ['9Sp.02'],
      steps: [
        {
          id: 's_12_2_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Sp.02',
              text: 'Identify when successive and combined events are independent and when they are not (replacement vs non-replacement).',
            },
          ],
        },
        {
          id: 's_12_2_c1',
          title: 'Independence and Multiplication Rule',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Independent Events',
              definition:
                'Two events are independent if the outcome of the first event has no effect on the probability of the second event.',
            },
            {
              type: 'formula',
              math: 'P(A \\text{ and } B) = P(A) \\times P(B)',
              label: 'Multiplication Rule for Independent Events',
            },
            {
              type: 'figure',
              figure: {
                component: 'DiceRoller',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_12_2_worked',
          title: 'Worked Example: Successive Independent Outcomes',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A fair coin is tossed and a fair 6-sided die is rolled. Find the probability of getting Heads and rolling a 5.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: The coin and die are independent: P(Heads) = ½, P(5) = ⅙.',
                  },
                  {
                    type: 'formula',
                    math: 'P(H) = \\frac{1}{2}, \\quad P(5) = \\frac{1}{6}',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Multiply the independent probabilities: ½ × ⅙ = 1/12.',
                  },
                  {
                    type: 'formula',
                    math: 'P(H \\text{ and } 5) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_12_2_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Believing past events affect future independent events ("Gambler\'s Fallacy": coin landed Heads 4 times so Tails is "due"). Each flip is still ½.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Assuming sampling WITHOUT replacement is independent. Drawing without replacement changes the total and composition for the next draw!',
            },
          ],
        },
        {
          id: 's_12_2_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Scenario', 'Independent?', 'Reason'],
              rows: [
                ['Rolling two separate dice', 'Yes', 'Outcome of die 1 does not alter die 2'],
                ['Pick a card, replace it, pick another', 'Yes', 'Deck is restored to 52 cards'],
                ['Pick a card, keep it, pick another', 'No (Dependent)', 'Total cards drops to 51, altering probabilities'],
                ['Weather on Saturday and Sunday', 'No', 'Atmospheric conditions carry over'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_12_2_1',
          level: 1,
          text: 'A coin is flipped twice. Are the two flips independent? Find P(Heads then Heads).',
          background: 'lined',
        },
        {
          id: 'p_12_2_2',
          level: 1,
          text: 'A die is rolled and a spinner spun. P(6) = 1/6, P(Red) = 1/4. Calculate P(6 and Red).',
          background: 'lined',
        },
        {
          id: 'p_12_2_3',
          level: 1,
          text: 'If P(A) = 0.3 and P(B) = 0.5, and A and B are independent, calculate P(A and B).',
          background: 'lined',
        },
        {
          id: 'p_12_2_4',
          level: 2,
          text: 'Two dice are rolled. Find the probability of rolling a double six.',
          background: 'lined',
        },
        {
          id: 'p_12_2_5',
          level: 2,
          text: 'A bag contains 5 red and 3 blue beads. A bead is taken, replaced, and a second bead is taken. Find P(both are red).',
          background: 'lined',
        },
        {
          id: 'p_12_2_6',
          level: 2,
          text: 'The probability of hitting a target is 0.8. If an archer shoots three independent arrows, find the probability that all three hit.',
          background: 'lined',
        },
        {
          id: 'p_12_2_7',
          level: 3,
          text: 'A test has two independent multiple-choice questions with 4 choices each. A student guesses randomly. Find P(getting at least one question right).',
          background: 'lined',
        },
        {
          id: 'p_12_2_8',
          level: 3,
          text: 'A machine has two independent components with failure probabilities 0.02 and 0.05. Find the probability that the machine does not fail.',
          background: 'lined',
        },
        {
          id: 'p_12_2_9',
          level: 3,
          text: 'Explain why P(at least one 6 in three rolls of a die) is NOT 1/6 + 1/6 + 1/6 = 3/6.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 12.3 COMBINED EVENTS
    // =========================================================================
    {
      id: 'sub_12_3',
      title: '12.3 Combined events',
      codes: ['9Sp.03'],
      steps: [
        {
          id: 's_12_3_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Sp.03',
              text: 'Understand how to find the theoretical probabilities of combined events using tree diagrams and sample space grids.',
            },
          ],
        },
        {
          id: 's_12_3_c1',
          title: 'Probability Tree Diagrams and Sample Space Diagrams',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Tree Diagram',
              definition:
                'A branching diagram where branches represent outcomes. Multiply probabilities along connected branches; add probabilities of distinct final outcome branches.',
            },
            {
              type: 'formula',
              math: '\\text{Along branches: Multiply } (\\times), \\quad \\text{Down outcomes: Add } (+)',
              label: 'Tree Diagram Rules',
            },
            {
              type: 'figure',
              figure: {
                component: 'ProbabilityTree',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_12_3_worked',
          title: 'Worked Example: Two Successive Independent Events',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'The probability that Sara passes Math is 0.8 and passes Science is 0.7. Calculate the probability that she passes exactly one subject.',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Case 1: Passes Math (0.8) and Fails Science (1 - 0.7 = 0.3): 0.8 × 0.3 = 0.24.',
                  },
                  {
                    type: 'formula',
                    math: 'P(M \\text{ and not } S) = 0.8 \\times 0.3 = 0.24',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Case 2: Fails Math (1 - 0.8 = 0.2) and Passes Science (0.7): 0.2 × 0.7 = 0.14.',
                  },
                  {
                    type: 'formula',
                    math: 'P(\\text{not } M \\text{ and } S) = 0.2 \\times 0.7 = 0.14',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: Add the mutually exclusive successful branch probabilities: 0.24 + 0.14 = 0.38.',
                  },
                  {
                    type: 'formula',
                    math: 'P(\\text{exactly one}) = 0.24 + 0.14 = 0.38',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_12_3_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Adding probabilities along branches instead of multiplying them.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Calculating only one branch (e.g. HT) when the question asks for "one Head and one Tail" (both HT and TH must be included).',
            },
          ],
        },
        {
          id: 's_12_3_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Tool', 'When Best Used', 'Features'],
              rows: [
                ['Sample space grid', 'Two simultaneous events (e.g. rolling two dice)', '2D coordinate table showing all 36 outcomes'],
                ['Tree diagram', 'Sequential stages / successive trials', 'Branches labeled with probabilities; leaves show outcomes'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_12_3_1',
          level: 1,
          text: 'List the 4 outcomes when flipping two coins in a sample space list.',
          background: 'lined',
        },
        {
          id: 'p_12_3_2',
          level: 1,
          text: 'Two dice are rolled. How many total outcomes are in the sample space grid?',
          background: 'lined',
        },
        {
          id: 'p_12_3_3',
          level: 1,
          text: 'Two fair coins are flipped. What is the probability of getting two Heads?',
          background: 'lined',
        },
        {
          id: 'p_12_3_4',
          level: 2,
          text: 'Two dice are rolled and their scores added. Using a sample space grid, find the probability that the total score is 7.',
          background: 'lined',
        },
        {
          id: 'p_12_3_5',
          level: 2,
          text: 'P(rain on Saturday) = 0.6, P(rain on Sunday) = 0.4. Assuming independence, find P(it rains on both days).',
          background: 'lined',
        },
        {
          id: 'p_12_3_6',
          level: 2,
          text: 'From the same Saturday/Sunday scenario, find P(it rains on at least one day).',
          background: 'lined',
        },
        {
          id: 'p_12_3_7',
          level: 3,
          text: 'A bag contains 4 red and 6 blue marbles. A marble is drawn, NOT replaced, and a second marble is drawn. Draw a tree diagram and calculate P(both marbles are the same colour).',
          background: 'lined',
        },
        {
          id: 'p_12_3_8',
          level: 3,
          text: 'Two spinners are spun: Spinner 1 (numbers 1, 2, 3) and Spinner 2 (numbers 2, 4, 6). The scores are multiplied. Find P(product is greater than 10).',
          background: 'lined',
        },
        {
          id: 'p_12_3_9',
          level: 3,
          text: 'In a game, you roll two dice. You win if the difference between the two numbers is 3 or more. Calculate the probability of winning.',
          background: 'lined',
        },
      ],
    },

    // =========================================================================
    // 12.4 CHANCE EXPERIMENTS
    // =========================================================================
    {
      id: 'sub_12_4',
      title: '12.4 Chance experiments',
      codes: ['9Sp.04'],
      steps: [
        {
          id: 's_12_4_obj',
          title: 'Learning Objectives',
          kind: 'objectives',
          blocks: [
            {
              type: 'objective_item',
              code: '9Sp.04',
              text: 'Design and conduct chance experiments using small and large numbers of trials. Calculate expected frequency and compare with observed outcomes (Law of Large Numbers).',
            },
          ],
        },
        {
          id: 's_12_4_c1',
          title: 'Experimental Probability and Expected Frequency',
          kind: 'concept',
          blocks: [
            {
              type: 'keyterm',
              term: 'Expected Frequency',
              definition:
                'The number of times an event is predicted to happen: Expected Frequency = Probability × Number of Trials (n × p).',
            },
            {
              type: 'formula',
              math: '\\text{Expected Frequency} = n \\times P(E), \\quad \\text{Relative Frequency} = \\frac{\\text{Observed Frequency}}{\\text{Total Trials}}',
              label: 'As n becomes very large, Relative Frequency approaches Theoretical Probability',
            },
            {
              type: 'figure',
              figure: {
                component: 'ProbabilityScale',
                props: {},
              },
            },
          ],
        },
        {
          id: 's_12_4_worked',
          title: 'Worked Example: Expected Frequency vs Experimental Observation',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A fair 6-sided die is rolled 300 times. How many sixes are expected? If 65 sixes were rolled, is the die necessarily biased?',
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Theoretical probability P(6) = ⅙. Expected frequency = 300 × ⅙ = 50.',
                  },
                  {
                    type: 'formula',
                    math: '\\text{Expected} = 300 \\times \\frac{1}{6} = 50',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Compare observed (65) with expected (50). Natural experimental variation occurs in random trials.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 3: 65 is close enough to 50 in 300 trials that it could easily be chance variation. More trials (e.g. 3000) are needed to prove bias.',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 's_12_4_mistakes',
          title: 'Common Mistakes',
          kind: 'mistake',
          blocks: [
            {
              type: 'sentence_frame',
              template:
                'Mistake: Expecting an exact match: thinking a coin MUST show exactly 5 Heads in 10 flips. Random variation is normal in small samples.',
            },
            {
              type: 'sentence_frame',
              template:
                'Mistake: Making claims about bias based on only 10 or 20 trials. Large trial counts are necessary for reliable relative frequencies.',
            },
          ],
        },
        {
          id: 's_12_4_vocab',
          title: 'Mathematical Vocabulary',
          kind: 'vocab',
          blocks: [
            {
              type: 'table',
              headers: ['Term', 'Definition', 'Formula'],
              rows: [
                ['Theoretical Probability', 'Calculated by logic / symmetry', 'Favourable outcomes / Total outcomes'],
                ['Relative Frequency', 'Calculated from experiment', 'Frequency / Total trials'],
                ['Expected Frequency', 'Predicted occurrence', 'n × p'],
                ['Law of Large Numbers', 'Relative frequency tends to theoretical as trials increase', 'Large n reduces sampling fluctuation'],
              ],
            },
          ],
        },
      ],
      practice: [
        {
          id: 'p_12_4_1',
          level: 1,
          text: 'A coin is tossed 80 times. Calculate the expected frequency of Heads.',
          background: 'lined',
        },
        {
          id: 'p_12_4_2',
          level: 1,
          text: 'A drawing pin is dropped 50 times and lands point up 32 times. Calculate its relative frequency as a decimal.',
          background: 'lined',
        },
        {
          id: 'p_12_4_3',
          level: 1,
          text: 'If P(win) = 0.15, how many wins do you expect in 200 games?',
          background: 'lined',
        },
        {
          id: 'p_12_4_4',
          level: 2,
          text: 'A factory tests 500 light bulbs and finds 15 defective. What is the experimental probability of a defective bulb?',
          background: 'lined',
        },
        {
          id: 'p_12_4_5',
          level: 2,
          text: 'A spinner with 5 equal sections (1 to 5) is spun 600 times. How many times would you expect it to land on an odd number?',
          background: 'lined',
        },
        {
          id: 'p_12_4_6',
          level: 2,
          text: 'Explain why an experiment with 1000 trials gives a more reliable estimate of probability than one with 20 trials.',
          background: 'lined',
        },
        {
          id: 'p_12_4_7',
          level: 3,
          text: 'In a simulation, a dice is rolled 1200 times. Number 1 appears 250 times. Calculate relative frequency and test whether the dice appears fair.',
          background: 'lined',
        },
        {
          id: 'p_12_4_8',
          level: 3,
          text: 'Capture-recapture experiment: 40 fish are tagged and released into a pond. Later, 50 fish are caught and 8 have tags. Estimate total fish in the pond.',
          background: 'lined',
        },
        {
          id: 'p_12_4_9',
          level: 3,
          text: 'Design a simulation using random numbers from 1 to 10 to model a basketball player with an 80% free-throw success rate taking 5 shots.',
          background: 'lined',
        },
      ],
    },
  ],
};
