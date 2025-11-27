import * as Icons from '@phosphor-icons/react';
import {WarningCircleIcon} from "@phosphor-icons/react";
import {IconWeight} from "@phosphor-icons/react/dist/lib/types";

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
  weight?: IconWeight;
}

export default function Icon({ name, size = 20, ...rest }: Props) {
  const Icon = Icons[name] as any;
  if (!Icon) {
    return <WarningCircleIcon weight="fill" />;
  }

  return <Icon size={size} {...rest} />;
}

