import React, { useState } from 'react'
import axios from 'axios'



const Contact = () => {

  // const Contactform = () => {
    
  // }
  const [formData, setformData] = useState(
      {
        email:"",
        fullName:"",
        message:"",
      
      }
    )

  const handleChange = (e) => {
    const {name, value} = e.target;
    setformData({...formData, [name]:value})
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/contact',formData);
      alert('Message sent successfully ' );
      console.log(`Message Sent: ${+ response.data}`)

      
    } catch (error) {
      
      alert("Error: "+ error.message)
    }
  }

  return (
    <div className="container-custom px-4">
     <div className="max-w-xl mx-auto bg-white dark:bg-gray-800/80 p-8 rounded shadow">
       <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Contact</h2>
       <p className="text-gray-700 dark:text-gray-300 mb-4">Interested in working together? Drop a message or email me at <span className="font-medium">you@domain.com</span>.</p>
       <form className="space-y-3" onSubmit={handleSubmit}>
         <input className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Your name" type='text' name='fullName' onChange={handleChange} value={formData.fullName}/>
         <input className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Email" type='email' name='email' onChange={handleChange} value={formData.email}  />
         <textarea className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Message" rows="4" name='message' onChange={handleChange} value={formData.message} />
         <div className="flex justify-end">
           <button className="px-4 py-2 rounded-md cta-primary text-white" type='submit'>Send message</button>
         </div>
       </form>
     </div>
   </div>
  )
}

export default Contact





// import React from 'react'

// const Contact = () => (
//   <div className="container-custom px-4">
//     <div className="max-w-xl mx-auto bg-white dark:bg-gray-800/80 p-8 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Contact</h2>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">Interested in working together? Drop a message or email me at <span className="font-medium">you@domain.com</span>.</p>
//       <form className="space-y-3" onSubmit="">
//         <input className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Your name" />
//         <input className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Email" />
//         <textarea className="w-full p-3 border rounded focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" placeholder="Message" rows="4" />
//         <div className="flex justify-end">
//           <button className="px-4 py-2 rounded-md cta-primary text-white">Send message</button>
//         </div>
//       </form>
//     </div>
//   </div>
// )

// export default Contact


