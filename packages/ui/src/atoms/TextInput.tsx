import {
    createPolymorphicComponent,
    TextInput as MTextInput,
    type TextInputProps as MTextInputProps,
} from '@mantine/core';
import {forwardRef} from 'react';

type TextInputProps = Omit<MTextInputProps, 'classNames'>;

const TextInput = createPolymorphicComponent<'input', TextInputProps>(
    forwardRef<HTMLInputElement, TextInputProps>((props, ref) => (
        <MTextInput
            {...props}
            ref={ref}
            classNames={{
                input:
                    'focus:border-brand-500 focus:ring-1 focus:ring-brand-500 data-[error=true]:ring-red-500',
            }}
        />
    ))
);

export default TextInput;
