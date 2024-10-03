import './App.css';
import { useState } from 'react';

function App() {

  const[formData , setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country:"",
    address: "",
    city: "",
    state: "",
    Pincode: "",
    comments: "",
    condidate: "",
    offers: "",
    status: ""
  });

  // console.log(formData);

  function changehandler(event){
    const {type,value,name,checked} = event.target
   setFormData(prevFormData =>{
     return{
       ...prevFormData,
       [name]: type ==="checkbox" ? checked : value
     }
   });
 }

 function formSubmitHandler(event){
  event.preventDefault(formData);
  console.log("Entire complete formData:");
  console.log(formData);
 }

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form  className='form' onSubmit={formSubmitHandler}>
         <label htmlFor='firstname'>Firstname</label>
         <input type='text'
         placeholder='firstname'
         className='input-fields'
         onChange={changehandler}
         name='firstname'
         value={formData.firstname}
         id='firstname'></input>

         <label htmlFor='lastname'>Lastname</label>
         <input type='text'
         placeholder='lastname'
         className='input-fields'
         onChange={changehandler}
         name='lastname'
         id='lastname'
         value={formData.lastname}></input>

         <label htmlFor='email'>Email</label>
         <input type='email'
         placeholder='@gmail.com'
         className='input-fields'
         onChange={changehandler}
         name='email'
         id='email'
         value={formData.email}></input>

         <label htmlFor='country'>Country</label>
         <select 
         onChange={changehandler}
         value={formData.country}
         name='country'
         id='country'>
          <option>India</option>
          <option>United States</option>
          <option>Maxico</option>
          <option>Canada</option>
         </select>

         <label htmlFor='address'>Street Address</label>
         <input type='text'
         placeholder='enter your address'
         className='input-fields'
         onChange={changehandler}
         name='address'
         id='address'
         value={formData.address}></input>

         <label htmlFor='city'>City</label>
         <input type='text'
         placeholder='enter your city name'
         className='input-fields'
         onChange={changehandler}
         name='city'
         id='city'
         value={formData.city}></input>

         <label htmlFor='state'>State/province</label>
         <input type='text'
         placeholder='enter your state name'
         className='input-fields'
         onChange={changehandler}
         name='state'
         id='state'
         value={formData.state}></input>

         <label htmlFor='Pincode'>ZIP/Postalcode</label>
         <input type='text'
         placeholder='enter your Postal code'
         className='input-fields'
         onChange={changehandler}
         name='Pincode'
         id='Pincode'
         value={formData.Pincode}></input>


         <label >ByEmail</label>
         <div className='check-inpt'>
          <div className='checkboxs'>
            <input
             type='checkbox'
             onChange={changehandler}
             name='comments'
             checked={formData.comments}></input>
             <label htmlFor='comments'>Comments</label>
          </div> 
         </div>

         <div className='check-inpt'>
          <div className='checkboxs'>
            <input
             type='checkbox'
             onChange={changehandler}
             name='condidate'
             checked={formData.condidate}></input>
             <label htmlFor='condidate'>candidates</label>
          </div> 
         </div>  

         <div className='check-inpt'>
          <div className='checkboxs'>
            <input
             type='checkbox'
             onChange={changehandler}
             name='offers'
             checked={formData.offers}></input>
             <label htmlFor='offers'>offers</label>
          </div>
         </div>

         <h3>Push notifictaion</h3>
         <div className='radio-btn'>
           <input type='radio'
           onChange={changehandler}
           name='status'
           value="Everything"
           id='notify'></input>
           <label htmlFor='notify'>Everything</label>
         </div>

         <div className='radio-btn'>
           <input type='radio'
           onChange={changehandler}
           name='status'
           value="Same as email"
           id='notify'></input>
           <label htmlFor='notify'>Same as email</label>
         </div>

         <div className='radio-btn'>
           <input type='radio'
           onChange={changehandler}
           name='status'
           value="no notification"
           id='notify'></input>
           <label htmlFor='notify'>No push notification</label>
         </div>

         <input type='submit' value="Save" className='save-btn'></input>
      </form>
    </div>
  );
}

export default App;
