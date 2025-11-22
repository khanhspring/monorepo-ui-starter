import {Input as MInput, type InputProps as MInputProps, createPolymorphicComponent} from '@mantine/core';
import {forwardRef} from "react";

type InputProps = Omit<MInputProps, 'classNames'>

const Input = createPolymorphicComponent<'input', InputProps>(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <MInput
      {...props}
      ref={ref}
      classNames={{
        input: "focus:border-brand-500 focus:ring-1 focus:ring-brand-500 data-[error=true]:ring-red-500",
      }}
    />
  ))
);

export default Input;
