import { FormEvent } from 'react'
import { MainButton } from '../components/MainButton'
import { BaseInput } from '../components/BaseInput'
import logo from '../assets/img/logo-bookhub.png'

export const Login = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex w-full h-screen">
      <div className="w-[70%] bg-[url('src/assets/img/banner-login.jpg')] bg-cover bg-no-repeat"></div>
      <div className="w-[30%] flex mt-36"> 
        <div className="flex flex-col items-center w-full">
          <img 
            src={logo} 
            alt="Logo BookHub" 
            className="w-56"
          />
          <form onSubmit={handleSubmit} className="w-[60%] mt-20">
            <div className='flex flex-col gap-5'>
              <BaseInput 
                type='email'
                placeholder="Email"
              />
              <BaseInput 
                type='password'
                placeholder="Senha"
              />
              <div className="flex items-center">
                <input type="checkbox" className="mr-2"/>
                <label htmlFor="connected" className="text-gray-500">
                  Continuar conectado
                </label>
              </div>
              <div className='text-center'>
                <MainButton type="submit">
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
