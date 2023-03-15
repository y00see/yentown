import React from 'react';
import { useTable } from "react-table";
import DataService from "../services/data.service";

const Table = props => {
    console.log(props.orders);
    const data = React.useMemo(
        () => props.orders,
        [props.orders]
      )
    
    const handleClick = (e, order_id) => {
        e.preventDefault();
        DataService.groupOrder(order_id);
    }

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
          },
          {
            Header: 'Join Grouporder',
            Cell: ( original ) => (
                !original.row.original.grouporder_id ? (
                <button value="Join Grouporder" onClick={(e) => handleClick(e, original.row.original.id)}>
                  Join Grouporder
                </button>) : (
                    <>
                    Joined
                    </>
                )
            )    
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