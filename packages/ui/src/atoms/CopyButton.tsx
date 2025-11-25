import { CopyButton as MCopyButton, type CopyButtonProps as MCopyButtonProps } from '@mantine/core';

type CopyButtonProps = Omit<MCopyButtonProps, 'classNames'>;

export default function CopyButton(props: CopyButtonProps) {
  return <MCopyButton {...props} />;
}
