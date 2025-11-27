import type {Meta, StoryObj} from '@storybook/react-vite';

import {TextInput} from "@repo/ui/atoms";

const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
  component: TextInput,
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
    error: {
      control: {type: 'text'},
    },
    withAsterisk: {
      control: {type: 'boolean'},
    },
    disabled: {
      control: {type: 'boolean'},
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Your Label',
    placeholder: 'Type here...',
    description: 'This is a description',
  },
};

