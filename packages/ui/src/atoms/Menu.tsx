import {createPolymorphicComponent, Menu as MMenu, type MenuProps as MMenuProps,} from '@mantine/core';

type MenuProps = Omit<MMenuProps, 'classNames'>;

const Menu = createPolymorphicComponent<'menu', MenuProps>(({ ...props }: MenuProps) => (
    <MMenu
      {...props}
    />
  )
) as any;

Menu.Dropdown = MMenu.Dropdown;
Menu.Target = MMenu.Target;
Menu.Label = MMenu.Label;
Menu.Item  = MMenu.Item ;

export default Menu;
