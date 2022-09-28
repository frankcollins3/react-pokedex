import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// let navBarNavigate = useNavigate()

export default async function LocationTool (selector, newurl, navigator, link, component) {    
    console.log('link')
    console.log(link || 'nolink')
    if (typeof selector === 'string') {         
        if (link === null || link === undefined) {
            console.log('it is a string redirect tool')
            if (selector === 'Greatball')  navigator(`${newurl}`)
            
        }
        if (selector === 'Pokeball') {
            console.log("atleast we have the pokeball")
            navigator(`${newurl}`)
        }
        // if (selector === 'Pokeball') navigator(`${newurl}`)
    } 
    
    // if (selector === 'Greatball') navigator('/')

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
