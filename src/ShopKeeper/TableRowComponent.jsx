// function TableRowComponent({no,  name, uit_price, qty}){

// }
// //4 props...no name unit_price qty
// export default TableRowComponent;

// TableRow.jsx
function TableRowComponent({ item, index }) {
    const totalCost = item.qty * item.unit_cost;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.unit_cost}</td>
            <td>{item.qty}</td>
            <td>{formatCurrency(totalCost)}</td>
        </tr>
    );
}

export default TableRowComponent;
