import { tv } from 'tailwind-variants';
import { ReactNode } from 'react';
import emptyImage from '../assets/images/empty.svg';

const item = tv({
  slots: {
    imgSlot: '',
    contentSlot: 'flex flex-col items-center justify-center max-w-[352px]',
    titleSlot: 'font-semibold text-center',
    descriptionSlot: 'text-center text-gray-600',
    actionsSlot: 'flex items-center justify-center gap-3',
  },
  variants: {
    size: {
      sm: {
        imgSlot: 'w-[152px]',
        contentSlot: 'gap-1 mt-4',
        titleSlot: 'text-base',
        descriptionSlot: 'text-sm',
        actionsSlot: 'mt-6',
      },
      md: {
        imgSlot: 'w-[172px]',
        contentSlot: 'gap-2 mt-5',
        titleSlot: 'text-lg',
        descriptionSlot: 'text-sm',
        actionsSlot: 'mt-8',
      },
      lg: {
        imgSlot: 'w-[220px]',
        contentSlot: 'gap-3 mt-6',
        titleSlot: 'text-xl',
        descriptionSlot: 'text-base',
        actionsSlot: 'mt-8',
      },
    },
  },
});

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export default function EmptyState({ title, description, children, size = 'md' }: Props) {
  const { imgSlot, contentSlot, titleSlot, descriptionSlot, actionsSlot } = item({ size });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img src={emptyImage} alt="empty-state" className={imgSlot()} />
      </div>
      <div className={contentSlot()}>
        <h3 className={titleSlot()}>{title}</h3>
        <p className={descriptionSlot()}>{description}</p>
      </div>
      {children && <div className={actionsSlot()}>{children}</div>}
    </div>
  );
}
