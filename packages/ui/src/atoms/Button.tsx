import {
    Button as MButton,
    type ButtonProps as MButtonProps,
    createPolymorphicComponent,
} from '@mantine/core';
import {forwardRef} from 'react';

export type ButtonProps = Omit<MButtonProps, 'classNames'>;

const Button = createPolymorphicComponent<'button', ButtonProps>(
    forwardRef<HTMLButtonElement, ButtonProps>(({...props}, ref) => (
        <MButton
            {...props}
            ref={ref}
            classNames={{
                section: '[&_svg]:text-brand-300',
            }}
        />
    ))
);

export default Button;
