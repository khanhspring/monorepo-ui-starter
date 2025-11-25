import {
  Button as MButton,
  type ButtonProps as MButtonProps,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef } from 'react';

type ButtonProps = Omit<MButtonProps, 'classNames'>;

const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => (
    <MButton
      {...props}
      ref={ref}
      classNames={{
        root: 'focus:ring-2 focus:ring-brand-400 focus:ring-offset-2',
        section: '[&_svg]:text-brand-300',
      }}
    />
  ))
);

export default Button;
