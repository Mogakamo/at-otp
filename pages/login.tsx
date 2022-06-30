import React from "react";
import { phone } from "phone";
import Link from "next/link";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(phoneNumber){
    let pn = phone(phoneNumber,{country: 'KE'});
    console.log({pn,phoneNumber})

    if (pn.isValid) {
      // phone is valid;
      let validPhoneNumber = pn.phoneNumber;
      // you can send the phone number to your server for verification
      alert(`Phone number is valid: ${validPhoneNumber}`);  
    } else {
      alert("Invalid phone number");
    }}
  };

  const handleChange = () => {};

  return (
    <div className=" flex items-center justify-center bg-slate-100 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-10 flex-col bg-white rounded-md items-center shadow-lg h-96 w-96"
      >
        <h1>Input your phone number</h1>
        <div className="border-black border-2">
          <div>

          </div>
          <input
            onChange={(element) => {
              let tel = element.target.value;
              setPhoneNumber(tel);
            }}
            type="tel"
            name="phone_number"
            id=""
            className=""
          />
        </div>
        <input type="password" name="password" id="" />
        <button
          className="px-10 py-6 rounded-lg border-black text-white bg-green-500"
          onClick={handleChange}
        >
         <Link href="/request"> Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;

const getServerSideProps = async () => {
  const data = await fetch("https://api.github.com/users/zeit/repos");
}
