import { Unit } from '../types/content';

/**
 * DEMO UNIT: 0 Demo
 * For testing whiteboard ink, figures, build steps, and practice layout.
 * Can be deleted once full curriculum units are populated.
 */
export const demoUnit: Unit = {
  id: 'unit0',
  number: 0,
  title: '0 Demo (Testing & Visuals)',
  codes: ['9Ni.01', '9Ae.02'],
  accentColor: '#4F46E5', // Indigo
  subtopics: [
    {
      id: 'sub_demo_1',
      title: 'Demo Step & Whiteboard Testing',
      codes: ['9Ni.01', '9Ae.02'],
      steps: [
        {
          id: 'step_demo_1',
          title: 'Direct Proportion and Number Lines',
          kind: 'concept',
          blocks: [
            {
              type: 'text',
              content:
                'Two quantities are in direct proportion when multiplying one quantity multiplies the other by the same factor.',
            },
            {
              type: 'keyterm',
              term: 'Constant of Proportionality',
              definition: 'The constant ratio k between two proportional values such that y = kx.',
            },
            {
              type: 'formula',
              math: 'y = kx \\quad \\Longleftrightarrow \\quad k = \\frac{y}{x}',
              label: 'General Proportion Law',
            },
            {
              type: 'figure',
              figure: {
                component: 'NumberLine',
                props: {
                  min: -5,
                  max: 5,
                  step: 1,
                  initialValue: 2,
                  jumps: [
                    { from: 0, to: 2, label: '+2' },
                    { from: 2, to: 4, label: '+2' },
                  ],
                },
              },
            },
            {
              type: 'build_steps',
              steps: [
                [
                  {
                    type: 'text',
                    content: 'Step 1: Identify the starting position at the origin 0.',
                  },
                ],
                [
                  {
                    type: 'text',
                    content: 'Step 2: Apply equal increments of +2 to advance along the line.',
                  },
                  {
                    type: 'formula',
                    math: '0 + 2 = 2, \\quad 2 + 2 = 4',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: 'step_demo_2',
          title: 'Coordinate Axes & Straight Lines',
          kind: 'worked',
          blocks: [
            {
              type: 'text',
              content: 'A linear graph represents a constant rate of change with gradient m.',
            },
            {
              type: 'formula',
              math: 'y = mx + c',
              label: 'Slope-Intercept Form',
            },
            {
              type: 'figure',
              figure: {
                component: 'CoordinateGrid',
                props: {
                  xMin: -5,
                  xMax: 5,
                  yMin: -5,
                  yMax: 5,
                  initialM: 2,
                  initialC: 1,
                  points: [
                    { x: 0, y: 1, label: '(0,1)' },
                    { x: 2, y: 5, label: '(2,5)' },
                  ],
                },
              },
            },
          ],
        },
      ],
      practice: [
        {
          id: 'q_demo_1',
          level: 1,
          text: 'Find the coordinate of point P after jumping +3 units from -2 on the number line.',
          figure: {
            component: 'NumberLine',
            props: {
              min: -5,
              max: 5,
              initialValue: -2,
            },
          },
          background: 'lined',
        },
        {
          id: 'q_demo_2',
          level: 2,
          text: 'Solve the linear equation using inverse operations on both sides: 2x + 3 = 11.',
          figure: {
            component: 'BalanceScale',
            props: {
              leftExpression: '2x + 3',
              rightExpression: '11',
              initialLeftWeight: 11,
              initialRightWeight: 11,
            },
          },
          background: 'square',
        },
        {
          id: 'q_demo_3',
          level: 3,
          text: 'Determine the gradient and y-intercept of the line passing through points (0, -2) and (3, 4). Sketch the working.',
          figure: {
            component: 'CoordinateGrid',
            props: {
              xMin: -4,
              xMax: 4,
              yMin: -4,
              yMax: 6,
              initialM: 2,
              initialC: -2,
              points: [
                { x: 0, y: -2, label: 'A(0,-2)' },
                { x: 3, y: 4, label: 'B(3,4)' },
              ],
            },
          },
          background: 'axes',
        },
      ],
    },
  ],
};
