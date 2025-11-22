import type {Meta, StoryObj} from '@storybook/react-vite';

import {Button} from "@repo/ui/atoms";

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: {type: 'select'},
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: {
      control: {type: 'boolean'},
    }
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
