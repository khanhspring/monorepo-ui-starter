import {Link} from "@tanstack/react-router";
import {Page, User} from "@repo/types";
import {ActionIcon, Icon, Table} from "@repo/ui/atoms";

type Props = {
  userPage?: Page<User>;
}

export default function Users({ userPage }: Props) {

  const rows = userPage?.data.map((user, index) => (
    <Table.Tr key={user.id}>
      <Table.Td className="text-center">{index + 1}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.first_name}</Table.Td>
      <Table.Td>{user.last_name}</Table.Td>
      <Table.Td className="text-center">
        <Link key={user.id} to="/users/$userId" params={{ userId: `${user.id}` }}>
          <ActionIcon>
            <Icon name="Info" />
          </ActionIcon>
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <h2 className="font-semibold text-lg">Users</h2>
      <div className="py-5 grid gap-3">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="!text-center w-10">#</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>First name</Table.Th>
              <Table.Th>Last name</Table.Th>
              <Table.Th className="!text-center w-20">##</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
}