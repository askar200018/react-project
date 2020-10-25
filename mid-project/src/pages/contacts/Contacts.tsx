import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.scss';
import _ from 'lodash/fp';
import { useForm } from 'react-hook-form';
import backgroundImg from './images/contactus.jpg';
import { isConstructSignatureDeclaration } from 'typescript';

interface Props {}
interface Information{
  id: number
  name:string,
  email:string,
  phone:string,
  message:string
}
// const Information: Information[]=[{name:"Nurai", email:"nurai@gmail.com", phone:87718449233, message:""}]
const informations: Information[]=[{id:0, name:"Nurai", email:"nurai@gmail.com", phone:"87718449233", message:""}]

export default function Contacts({}: Props): ReactElement {
  const information: Information={id:0, name:"", email:"", phone:"", message:""}
  const [informations, setForm] = useState({
                            name:'', 
                            email:'', 
                            phone:'', 
                            message:''})

  const changeName = ((event:any) => setForm({...informations, name: event.target.value}))
  const changeEmail = ((event:any) => setForm({...informations, email: event.target.value}))
  const changePhone = ((event:any) => setForm({...informations, phone: event.target.value}))
  const changeMessage = ((event:any) => setForm({...informations, message: event.target.value}))
  
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const clickHandler = (information:Information) =>{
    alert(`Thank you, ${information.name}. Your "${information.message}" has sent!`)

    // informations.push(information)
    // console.log('name',information.name)
    // console.log('email',information.email)
    // console.log('phone',information.phone)
    // console.log('QWERTYU')

  }

  return (
    <div className="q">
        <div className="wrapper">
        <form className="contact-form" >
          <div className="input-fields">
            <input type="text" onChange={(e)=>{information.name=e.target.value}} ref={inputEl} name="name" className="input" placeholder="Name" />
            <input type="text" onChange={(e)=>{information.email=e.target.value}} name="email" className="input" placeholder="Email" />
            <input type="text" onChange={(e)=>{information.phone=e.target.value}} name="phone" className="input" placeholder="Phone" />
            </div>
            <div className="msg">
            <textarea onChange={(e)=>{information.message=e.target.value}} placeholder="Message" name="message"></textarea>
            <button type="submit" className="btn" onClick={() => clickHandler(information)}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}



// export default Contacts;

// export const Contacts = (props: Props) => {
  
//   const {handleSubmit, errors } = useForm();

//   const onSubmit = (data: Information) => {
//     Information.push(data);
//     alert(
//       "Your message has sent. Thank you!"
//     );
//     return console.log(data)
//   }



//   return (
//     <div className="q">
//       <div className="wrapper">
//         <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//           <div className="input-fields">
//             <input type="text" name="name" className="input" placeholder="Name" />
//             <input type="text" name="email" className="input" placeholder="Email" />
//             <input type="text" name="phone" className="input" placeholder="Phone" />
//           </div>
//           <div className="msg">
//             <textarea placeholder="Message" name="message">Message</textarea>
//             <button type="submit" className="btn">Send</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contacts;