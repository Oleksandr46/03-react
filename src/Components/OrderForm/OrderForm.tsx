// interface OrderFormProps{
//     onSubmit: (value: string) => void;
// }
//==========================================================================

// export default function OrderForm({ onSubmit }: OrderFormProps) {
//     const handeleSubmit = (formData: FormData) => {
//         const username = formData.get("username") as string;
//         onSubmit(username)
//     };
//   return (
//       <form action={handeleSubmit}>
//           <input type="text" name="username" />
//           <button type="submit">Place order</button>
//     </form>
//   );
// }


//==========================================================================


// import { useId } from 'react';
// export default function OrderForm() {
//     const filedId = useId();
//     return (
//     <form>
//             <label htmlFor={`${filedId}-username`}>Name</label>
//             <input type="text" name="username" id={`${filedId}-username`} />


//              <label htmlFor={`${filedId}-email`}>Email</label>
//             <input type="email" name="email" id={`${filedId}-email`} />
//             <button type='submit'>Place order</button>
//     </form>
//     );
// }
//==========================================================================

import { useId } from "react";

export default function OrderForm() {
    const selectId= useId();
    const handleOrder = (formData: FormData) => {
        const delyveryTime = formData.get("delyveryTime")as string;
        console.log("Preferred delivery time: ", delyveryTime)
//==========================================================================

//         const delivery = formData.get("delivery") as string;
//         console.log("🚀 ~ handleOrder ~ delivery:", delivery)
//         const restrictions = formData.getAll("restrictions") as string[];
//         console.log("🚀 ~ handleOrder ~ restrictions:", restrictions)
};
//   return (
     
//       <form action={handleOrder}>
//           <fieldset>
//               <legend>Delivery method:</legend>
//               <label htmlFor="">
//                   <input type="radio" name="delivery" value="pickup" defaultChecked />
//                   Pickup
//               </label>
//               <label htmlFor="">
//                   <input type="radio" name="delivery" value="courier"  />
//                   Courier
//               </label>
//               <label htmlFor="">
//                   <input type="radio" name="delivery" value="drone"  />
//                   Drone delivery
//               </label>
//           </fieldset>
//           <button type="submit">Pleace order</button>
//           </form>
    //       );
//==========================================================================
    
    // return (
    //     <form action={handleOrder}>
    //         <fieldset>
    //             <legend>Dietary restrictions:</legend>
    //             <label>
    //                 <input type="checkbox" name="restrictions" value="vegan" />
    //                 Vegan
    //             </label>
    //             <label>
    //                 <input type="checkbox" name="restrictions" value="gluten-free" />
    //                 Gluten-free
    //             </label>
    //             <label>
    //                 <input type="checkbox" name="restrictions" value="nut-free" />
    //                 Nut-free
    //             </label>
    //         </fieldset>
    //         <button type="submit">Submit</button>
    
    // </form>
    // );
//==========================================================================

    return (
        <form action={handleOrder}>
            <label htmlFor={selectId}>Preferred delivery time</label>
            <select name="delyveryTime" id={selectId} defaultValue="">
                <option value="">-- Choose delivery time --</option>
                <option value="morning">Morning (8:00–12:00)</option>
                <option value="afternoon">Afternoon (12:00–16:00)</option>
                <option value="evening">Evening (16:00–20:00)</option>

            </select>
            <button type="submit">Pleace order</button>
    </form>
    );
}
//==========================================================================
