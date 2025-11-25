import {
  Table as MTable,
  type TableProps as MTableProps,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef } from 'react';

type TableProps = Omit<MTableProps, 'classNames'>;

const Table = createPolymorphicComponent<'table', TableProps>(
  forwardRef<HTMLTableElement, TableProps>(({ withTableBorder = true, withColumnBorders = true, ...props }, ref) => (
    <MTable
      withTableBorder={withTableBorder}
      withColumnBorders={withColumnBorders}
      {...props}
      ref={ref}
    />
  ))
) as any;

Table.Tr = MTable.Tr;
Table.Thead = MTable.Thead;
Table.Tbody = MTable.Tbody;
Table.Td = MTable.Td;
Table.Th = MTable.Th;

export default Table;
