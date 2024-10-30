// import { IoEyeOutline } from "react-icons/io5";
// import { IoEyeOffOutline } from "react-icons/io5";

import { FormEvent } from 'react'
import logo from '../assets/img/logo-bookhub.png'
import { MainButton } from '../components/MainButton'

export const Login = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const teste = () => {
    alert('Teste')
  }
  
  return (
    <div className="flex w-full h-screen">
      <div className="w-[70%] bg-[url('src/assets/img/banner-login.jpg')] bg-cover bg-no-repeat"></div>
      <div className="w-[500px] flex mt-36"> 
        <div className="flex flex-col items-center w-full">
          <img 
            src={logo} 
            alt="Logo BookHub" 
            className="w-56"
          />
          <form onSubmit={handleSubmit} className="w-[60%] mt-20">
            <div className='flex flex-col gap-5'>
              <input type="text" placeholder='Email' className="border-2 border-primary h-10 rounded-lg px-2" />
              <input type="text" placeholder='Senha' className="border-2 border-primary h-10 rounded-lg px-2" />
              <div className='text-center'>
                <MainButton type="submit" onClick={teste}>
                  Login
                </MainButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
