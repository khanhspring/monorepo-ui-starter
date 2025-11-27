import { Menu, Button } from '@repo/ui/atoms';
import {useLingui} from "@lingui/react/macro";

export default function LanguageMenu() {
  const { i18n } = useLingui();

  return (
    <Menu width={150} shadow="md" position="bottom-end">
      <Menu.Target>
        <Button size="xs">{i18n.locale}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => i18n.activate('en')}>
          English
        </Menu.Item>
        <Menu.Item onClick={() => i18n.activate('vi')}>
          Tiếng Việt
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}