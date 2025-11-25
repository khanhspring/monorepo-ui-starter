import {
  ActionIcon as MActionIcon,
  type ActionIconProps as MActionIconProps,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef } from 'react';

type ActionIconProps = Omit<MActionIconProps, 'classNames'>;

const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(
  forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => (
    <MActionIcon {...props} ref={ref} />
  ))
);

export default ActionIcon;
