import { useState } from "react";
import { FiX } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { IoAlertCircle } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MainButton } from "../../components/MainButton";
import { CardModalAction } from "../../components/CardAction";
import { Overlay } from "../../components/Overlay";
import { BaseInput } from "../../components/BaseInput";
import { useStyles } from "../../hooks/useStyles";
import emptyBanner from "../../assets/img/funcionarios.png";


export const Employees = () => {
  const employees = [
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    {
      name: "John Doe",
      email: "email.teste@example.com",
      status: "ativo",
      admissionDate: "08/12/2014",
      imageUrl: "https://placehold.co/400",
    },
    // Adicione mais funcionários aqui
  ];

  const [isRemoveAllBaseOpen, setIsRemoveAllBaseOpen] = useState(false);
  const [showInputPassword, setShowInputPassword] = useState(false);

  const classes = useStyles();

  const handleRemoveAllBaseModal = () => {
    if (showInputPassword) {
      setShowInputPassword(false);
      setIsRemoveAllBaseOpen(!isRemoveAllBaseOpen);
      return;
    }
    setIsRemoveAllBaseOpen(!isRemoveAllBaseOpen);
  }

  const chooseAction = () => {
    if (!showInputPassword) {
      setShowInputPassword(true);
      return;
    }
    alert('Base excluída com sucesso');
  }

  return (
    <div className="h-full relative">
      <div className="absolute top-0 left-10 pr-3 bg-[#121212] w-[900px] h-14 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-[20px] ml-20 text-white">Tabela de Funcionários</p>
        </div>
        <div className="flex gap-2">
          {/* tem que colocar uma label dizendo o que faz cada botão */}
          <MainButton className="h-8 bg-[#FDFB00] text-[#121212] flex justify-center items-center p-4">
            <MdOutlinePersonAddAlt size={20} />
          </MainButton>
          <MainButton 
            disabled={!employees.length} 
            onClick={handleRemoveAllBaseModal}
            className="h-8 bg-[#dedede] text-[#121212] flex justify-center items-center p-4"
          >
            <IoMdTrash size={20} className={`${!employees.length && 'text-gray-400'}`}/>
          </MainButton>
        </div>
      </div>
      <div className="h-full pt-8 overflow-hidden">
        <div className="h-full bg-white rounded-lg pt-16 px-3 ">
          {employees && employees.length ? (
            <>
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-[#121212] capitalize bg-[#eaeaea]">
                  <tr>
                    <th scope="col" className="px-4 py-2">Funcionário</th>
                    <th scope="col" className="px-4 py-2">Email</th>
                    <th scope="col" className="px-4 py-2">Status</th>
                    <th scope="col" className="px-4 py-2">Admissão</th>
                    <th scope="col" className="px-4 py-2">Ações</th>
                  </tr>
                </thead>
              </table>
              <div className="overflow-y-auto h-[400px]">
                <table className="w-full text-sm text-left rtl:text-right">
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={employee.imageUrl} alt="Employee" className="size-10 rounded-full mr-2" />
                            <p className="ml-4">{employee.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-2">{employee.email}</td>
                        <td className="px-4 py-2">
                          <div className="bg-green-600 w-fit rounded-md">
                            <p className="px-4 py-[3px] text-xs text-white">{employee.status}</p>
                          </div>
                        </td>
                        <td className="px-4 py-2">{employee.admissionDate}</td>
                        <td className="px-4 py-2">Ações</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <div className="bg-red-400">
                  Aqui ficará um paginador
                </div>
              </div>
            </>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <img src={emptyBanner} className="w-[350px] mt-8" />
              <div className="text-center">
                <h2 className="font-bold text-2xl">Nenhum funcionário foi cadastrado</h2>
                <p>Clique em <span className="underline hover:text-blue-500 cursor-pointer">Adicionar funcionário</span> e monte sua equipe</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {isRemoveAllBaseOpen && (
        <Overlay>
          <CardModalAction.Root>
            <CardModalAction.Icon 
              icon={FiX} 
              onClick={handleRemoveAllBaseModal}
              className="absolute top-4 right-4 cursor-pointer" 
            />
            <CardModalAction.Icon 
              icon={IoAlertCircle}
              size={100} 
              color="#FDFB00"
              className="w-full my-6" 
            />
            <CardModalAction.Title className="flex flex-col items-center justify-center">
              <h2 className="text-3xl">Deseja excluir a base?</h2>
              <p className="mb-3 text-[14px]">Ao confirmar você excluirá toda a base!</p>
            </CardModalAction.Title>
            <div className="border-t-2"></div>
            <div className={`mt-8 ${
              showInputPassword 
                ? classes.sofitShowVisibility
                : classes.sofitHideVisibility
              }`}>
              <BaseInput 
                type="password"
                placeholder="Digite sua senha para confirmar"
              />
            </div>
            <CardModalAction.Actions className="pt-8">
              <MainButton onClick={handleRemoveAllBaseModal}>
                Cancelar
              </MainButton>
              <MainButton 
                onClick={chooseAction}
                className="bg-[#FDFB00] text-[#121212] h-10 flex items-center font-semibold"
              >
                {showInputPassword ? 'Confirmar' : 'Sim'}
              </MainButton>
            </CardModalAction.Actions>
          </CardModalAction.Root>      
        </Overlay>
      )}
    </div>
  );
};
