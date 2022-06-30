import React from 'react'

const requestOTP = () => {
  return (
    <div className=' flex items-center justify-center bg-slate-100 h-screen' >
      <form className='flex p-10 flex-col bg-white rounded-md items-center shadow-lg h-96 w-96'>
        <h1>Choose an option to receive your OTP</h1>
        <input type="checkbox" name="" id="" />Telegram
        <input type="checkbox" name="" id="" />Whatsapp
        
      </form>
    </div>
  )
}

export default requestOTP