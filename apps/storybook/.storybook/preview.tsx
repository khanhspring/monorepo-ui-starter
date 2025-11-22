import type { Preview } from '@storybook/react-vite';
import {UIProvider} from "@repo/ui/atoms";
import "@repo/ui/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <UIProvider>
        <Story />
      </UIProvider>
    ),
  ],
};

export default preview;

