import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';

export interface IOwnProps {
  instanceType: string;
}
export interface IStateProps {
  sortBy: any;
  columnsActive: any;
  rowsActive: any;
  columnsCompleted: any;
  rowsCompleted: any;
  columnsAborted: any;
  rowsAborted: any;
  columnsInError: any;
  rowsInError: any;
}
class InstanceTable extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      columnsActive: [
        { title: 'Service ID', transforms: [sortable] },
        'Process ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsActive: [
        ['12323', '10001', 'ABC', '11:20', '5'],
        ['12324', '10002', 'DEF', '10:10', '1'],
        ['12325', '10003', 'GHI', '01:15', '10']
      ],
      columnsCompleted: [
        { title: 'Service ID', transforms: [sortable] },
        'Process ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsCompleted: [
        ['11111', '88888', 'JKL', '12:20', '2'],
        ['22222', '77777', 'MNO', '15:50', '4'],
        ['33333', '66666', 'PQR', '21:25', '6']
      ],
      columnsAborted: [
        { title: 'Service ID', transforms: [sortable] },
        'Process ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsAborted: [
        ['44444', '12345', 'STU', '19:40', '8'],
        ['55555', '67891', 'VWX', '16:50', '10'],
        ['66666', '32423', 'YZA', '22:22', '12']
      ],
      columnsInError: [
        { title: 'Service ID', transforms: [sortable] },
        'Process ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsInError: [
        ['65432', '13213', 'AABBCC', '11:20', '5'],
        ['56789', '34543543', 'DDEEFF', '10:10', '1'],
        ['34521', '435435435', 'GGHHII', '01:15', '10']
      ],
      sortBy: {}
    };
    // this.onSort = this.onSort.bind(this);
  }

  // onSort(_event, index, direction) {
  //   const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
  //   this.setState({
  //     sortBy: {
  //       index,
  //       direction
  //     },
  //     rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
  //   });
  // }

  render() {
    const {
      columnsActive,
      rowsActive,
      columnsAborted,
      rowsAborted,
      columnsCompleted,
      rowsCompleted,
      columnsInError,
      rowsInError,
      sortBy
    } = this.state;
    // <Table caption="Instance Details" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
    if (this.props.instanceType == 'ACTIVE') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsActive} rows={rowsActive}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'ABORTED') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsAborted} rows={rowsAborted}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'COMPLETED') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsCompleted} rows={rowsCompleted}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'INERROR') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsInError} rows={rowsInError}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    return (
      <Table caption="Instance Details" sortBy={sortBy} cells={columnsActive} rows={rowsActive}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default InstanceTable;
