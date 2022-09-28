import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// let navBarNavigate = useNavigate()

export default async function LocationTool (selector, newurl, navigator) {
    console.log(typeof navigator)
    if (typeof selector === 'string') {
        console.log('if selector = string')
        if (selector === 'Greatball') {
            navigator(`${newurl}`)
        }
        // if (selector === 'Greatball') navigator('/')
    }

}


// function Invoices() {
//   let navigate = useNavigate();
//   return (
//     <div>
//       <NewInvoiceForm
//         onSubmit={async (event) => {
//           let newInvoice = await createInvoice(
//             event.target
//           );
//           navigate(`/invoices/${newInvoice.id}`);
//         }}
//       />
//     </div>
//   );
// }
