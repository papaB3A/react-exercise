// import items from "./items"

// //Create a Table row component..import it
// import TableRowComponent from "./TableRowComponent"
// import "./index.css"

// function ShopKeeperApp(){
//     return <div>
//         <table>
//             <thead>
//                 <th>no</th>
//                 <th>Name</th>
//                 <th>unit_price</th>
//                 <th>qty</th>
//             </thead>
//             <tbody>
//                 {items.map((item)=>{
//                     return <td></td>
//                 })}
//             </tbody>
//         </table>
//     </div>
// }


// export default ShopKeeperApp

// index.jsx
import items from "./items";
import TableRowComponent from "./TableRowComponent";
import "./index.css";

function ShopKeeperApp() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <TableRowComponent  key={index} item={item} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShopKeeperApp;
