import { Outlet } from "react-router-dom"
import logo from '../assets/img/logo-bookhub.png'
import { MdBackupTable, MdOutlineDashboard, MdOutlineBook, MdOutlineSettings } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"

export const PageDefault = () => {
  return (
    <div className="flex w-full h-screen bg-[#dedede]">
      <aside className="w-[260px] h-full">
        <div className="bg-white h-[97%] m-2 rounded-lg px-3">
          <div className="py-3 flex justify-center">
            <img src={logo} alt="Logo Bookhub" className="w-[150px]" />
          </div>

          <div className="border-[1px]"></div>
          
          <nav>
            <ul className="py-4 flex flex-col gap-2">
              <li className="flex items-center hover:bg-[#f3f3f3] py-[4px] rounded-lg">
                <MdOutlineDashboard className="mx-2" />
                Dashboard
              </li>
              <li className="flex items-center bg-[#121212] py-[4px] rounded-lg text-white">
                <MdBackupTable className="mx-2" />
                Cad. de Funcionários
              </li>
              <li className="flex items-center py-[4px] rounded-lg">
                <MdOutlineBook className="mx-2" />
                Livros
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 flex justify-between items-center mx-6">
          <div className="h-full flex items-center ml-8">
            <h1 className="text-[18px] font-semibold">Seja bem vindo (a), Nome do usuário</h1>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineSettings size={26} />
            <FaUserCircle size={30} />
          </div>
        </header>
        <main className="flex-1 m-2 p-2 max-h-[100%] overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}