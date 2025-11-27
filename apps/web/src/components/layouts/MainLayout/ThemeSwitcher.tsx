import {ActionIcon, Icon, useColorScheme} from '@repo/ui/atoms';

export default function ThemeSwitcher() {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <ActionIcon onClick={toggleColorScheme}>
        <Icon name={colorScheme === 'dark' ? 'MoonStars' : 'Sun'} />
    </ActionIcon>
  );
}