import type {Meta, StoryObj} from '@storybook/react-vite';

import { Button, EmptyState, Icon } from '@repo/ui/atoms';

const meta: Meta<typeof EmptyState> = {
  title: 'Example/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "No projects found",
    description: "Your search “Landing page design” did not match any projects. Please try again.",
    children: (
      <>
        <Button variant="default">
          Clear search
        </Button>
        <Button leftSection={<Icon name="Plus" size={20} />}>
          New project
        </Button>
      </>
    )
  },
};

