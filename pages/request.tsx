import Link from "next/link";
import React, { useEffect, useState } from "react";

const requestOTP = () => {
  const [checked, setChecked] = useState(false);
  
  useEffect(() =>{

  });
const  submitHandler=(e: any)=>{
  e.preventDefault()
}

  return (
    <div className=' flex items-center justify-center bg-slate-100 h-screen' >
      <form onSubmit={submitHandler} className='flex p-10 flex-col bg-white rounded-md items-center shadow-lg h-96 w-96'>
        <h1>Choose an option to receive your OTP</h1>
        <div className='mx-10 flex-col space-y-5 flex  pt-4'>
        <input className='mx-15 flex-row ' type="checkbox" name="" id="" />Telegram
        <input className='mx-15' type="checkbox" name="" id="" />Whatsapp
        <input className='mx-15' type="checkbox" name="" id="" />Messenger
       </div>

       <div className='pt-10'>
       <button className='bg-green-500 p-5 rounded-md' type = "submit"> <Link href="/verify">Veri</Link> </button>
       </div>
        
        
      </form>
    </div>
  )
}

export default requestOTP;