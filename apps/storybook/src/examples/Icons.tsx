import { ActionIcon, Button, CopyButton, Icon, IconNames } from '@repo/ui/atoms';

type Props = {
  size?: number;
};

export default function Icons({ size = 30 }: Props) {
  return (
    <div className="w-full flex flex-wrap gap-2">
      {IconNames.map((name) => (
        <div
          key={name}
          className="p-3 rounded-lg border border-gray-200 flex flex-col gap-1 hover:bg-gray-200 cursor-pointer group relative"
        >
          <Icon name={name} size={size} />
          <div className="absolute w-full h-full top-0 left-0 items-center justify-center hidden group-hover:flex">
            <CopyButton value={name} timeout={2000}>
              {({ copied, copy }) => (
                <ActionIcon onClick={copy} color={copied ? 'teal' : ''} size="lg">
                  <Icon name="Copy" size={20} />
                </ActionIcon>
              )}
            </CopyButton>
          </div>
        </div>
      ))}
    </div>
  );
}
