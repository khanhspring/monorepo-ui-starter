import type {Meta, StoryObj} from '@storybook/react-vite';
import TableExample from "../examples/table";

const meta: Meta<typeof TableExample> = {
  title: 'Example/Table',
  component: TableExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

