import {createTheme, MantineProvider} from "@mantine/core";
import type {ReactNode} from "react";
import {Toaster} from "react-hot-toast";

const theme = createTheme({
    colors: {
        brand: [
            "#EFF0FD",
            "#DEE1FB",
            "#C1C6F7",
            "#A0A9F3",
            "#828EEF",
            "#5E71E9",
            "#3857E3",
            "#2742B3",
            "#1B2F86",
            "#0D1A52",
            "#060F38"
        ],
    },
    radius: {
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
    },
    primaryColor: 'brand',
    defaultRadius: 'md',
    fontFamily: '"Inter", sans-serif',
});

type Props = {
    children: ReactNode;
    withToaster?: boolean;
};

export default function UIProvider({children, withToaster}: Props) {
    return (
        <MantineProvider theme={theme}>
            {children}
            {withToaster && (
              <Toaster
                  toastOptions={{
                      className: '!px-2.5 !py-1.5 !rounded-xl text-base dark:!bg-zinc-800 dark:!text-white shadow-lg',
                  }}
                  containerClassName="hello"
              />
            )}
        </MantineProvider>
    );
}

