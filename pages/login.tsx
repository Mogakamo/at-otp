import React from 'react'

const Login = () => {
  return (
    <div className=' flex items-center justify-center bg-slate-100 h-screen' >
      <form className='flex p-10 flex-col bg-white rounded-md items-center shadow-lg h-96 w-96'>
        <h1>Input your phone number</h1>
        <div className='border-black border-2'>
        <input type="tel" name="phone_number" id="" className='' />
        </div>
      </form>
    </div>
  )
}

export default Login