import { MainButton } from "../../components/MainButton";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import emptyBanner from "../../assets/img/funcionarios.png";
import { IoMdTrash } from "react-icons/io";

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

  return (
    <div className="h-full relative">
      <div className="absolute top-0 left-10 pr-3 bg-[#121212] w-[900px] h-14 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-[20px] ml-20 text-white">Tabela de Funcionários</p>
        </div>
        <div className="flex gap-2">
          <MainButton className="h-8 bg-[#FDFB00] text-[#121212] flex justify-center items-center p-4">
            <MdOutlinePersonAddAlt size={20} />
          </MainButton>
          <MainButton className="h-8 bg-[#dedede] text-[#121212] flex justify-center items-center p-4">
            <IoMdTrash size={20} />
          </MainButton>
        </div>
      </div>
      <div className="h-full pt-8 overflow-hidden">
        <div className="h-full bg-white rounded-lg pt-16 px-3 ">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={emptyBanner} className="w-[350px] mt-8" />
            <div className="text-center">
              <h2 className="font-bold text-2xl">Nenhum funcionário foi cadastrado</h2>
              <p>Clique em <span className="underline hover:text-blue-500 cursor-pointer">Adicionar funcionário</span> e monte sua equipe</p>
            </div>
          </div>
          {/* <table className="w-full text-sm text-left rtl:text-right">
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
          </div> */}
        </div>
      </div>      
    </div>
  );
};
