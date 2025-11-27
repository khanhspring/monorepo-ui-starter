import {
  createPolymorphicComponent,
  Select as MSelect,
  type SelectProps as MSelectProps,
} from '@mantine/core';
import {forwardRef} from 'react';

export type SelectProps = Omit<MSelectProps, 'classNames'>;

const Select = createPolymorphicComponent<'input', SelectProps>(
  forwardRef<HTMLInputElement, SelectProps>((props, ref) => (
    <MSelect
      {...props}
      ref={ref}
      classNames={{
        input:
          'focus:border-brand-500 focus:ring-1 focus:ring-brand-500 data-[error=true]:ring-red-500',
      }}
    />
  ))
);

export default Select;
