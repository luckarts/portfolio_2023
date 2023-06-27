import React from 'react';
import { useTable } from 'react-table';
import { Button } from 'components';
function Datatable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <>
      <div className="mt-2 flex px-6 flex-col w-3/4 m-auto ">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block w-full">
            <div className="shadow overflow-hidden border-b w-full border-gray-200 sm:rounded-lg">
              <table {...getTableProps()} className="w-full divide-y divide-gray-200">
                <thead className=" bg-white w-full">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column.render('Header')}
                          <span>{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-gray-50  divide-y divide-gray-200">
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          console.log(cell.row.original);
                          return cell.column.id == 'img' ? (
                            <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                              <img src={cell.value} className="h-[100px]" />
                            </td>
                          ) : cell.column.id == 'actions' ? (
                            <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                              <Button
                                href={cell.row.original.edit}
                                variante="link"
                                className={`button text-secondary small rounded border-2 border-secondary'}`}
                              >
                                Edit
                              </Button>
                              <Button href={cell.row.original.edit}>Delete </Button>
                            </td>
                          ) : (
                            <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datatable;
// title.toLowerCase()
