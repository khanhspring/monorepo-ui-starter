import * as Icons from '@phosphor-icons/react';

type RawIconName = keyof typeof Icons;
export type IconName = RawIconName extends `${infer Base}Icon` ? Base : RawIconName;

export const IconNames = Array.from(
  (Object.keys(Icons) as RawIconName[])
    .filter(k => {
      return !k.endsWith('Icon') && k !== 'IconBase' && !k.startsWith('SSR');
    })
) as IconName[];

type Props = {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 20, ...rest }: Props) {
  const Icon = Icons[name] as any;
  if (!Icon) {
    return null;
  }

  return <Icon size={size} {...rest} />;
}

