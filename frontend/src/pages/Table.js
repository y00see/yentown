import React from 'react';
import { useTable } from "react-table";

const Table = props => {
    console.log(props.orders);
    const data = React.useMemo(
        () => props.orders,
        [props.orders]
      )

    console.log(data);  
    const columns = React.useMemo(
        () => [
          {
            Header: 'Order ID',
            accessor: 'id', // accessor is the "key" in the data
          },
          {
            Header: 'Created at',
            accessor: 'datetime',
          },
          {
            Header: 'Product URL',
            accessor: 'product_url',
          },
          {
            Header: 'Product price',
            accessor: 'product_price'
          },
          {
            Header: 'Shipping cost',
            accessor: 'shipping_cost'
          },
          {
            Header: 'Grouporder ID',
            accessor: 'grouporder_id'
          }
        ],
        []
      )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return(
        <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
    )
}

export default Table;