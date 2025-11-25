import type { Meta, StoryObj } from '@storybook/react-vite';

import Icons from '../examples/Icons';

const meta: Meta<typeof Icons> = {
  title: 'Example/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 30,
  },
};
