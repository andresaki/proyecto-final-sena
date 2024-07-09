import React from "react";

// iconos
import { GoHistory } from "react-icons/go";
import { GoChevronLeft , GoChevronRight} from "react-icons/go";
// Keep react
import { Button , Pagination  } from "keep-react";

// data
import { clientes } from "../../Data/Clientes";
import { DropdownAccionesComponent } from "./components/DropdownAccionesComponent";
import { DropdownFilterComponent } from "./components/DropdownFilterComponent";
import { ModalNewComponent } from "./components/ModalNewComponent";

function Clientes() {
    const listaClientes = clientes.map((cliente) => (
        <tr
            key={cliente.id}
            className="  bg-white border-b cursor-default  h-9 hover:bg-gray-50 font-light text-xs text-neutral-600 "
        >
            <td className="min-w-24 text-center">{cliente.id} </td>
            <td className="min-w-60 pl-6 text-primario font-medium cursor-pointer">
                {" "}
                {cliente.nombre}{" "}
            </td>
            <td className="min-w-48 pl-2 ">{cliente.telefono1}</td>
            <td className="min-w-48 pl-2 ">{cliente.telefono2}</td>
            <td className="min-w-72 text-center">
                <DropdownAccionesComponent clienteId={cliente.id} />
            </td>
        </tr>
    ));

    return (
        <main className="container mx-auto px-10 pt-10   self-center  lg:px-32 lg:pt-16  xl:px-24 xl:  2xl:px-32 2xl:pt-28 mt-20">
            <div className="w-full flex justify-between items-center ">
                <div className=" flex items-center gap-4">
                    {/* Input Buscar */}
                    <div>
                        <input
                            className="outline-none border-b-2 pl-1 pb-[1px] border-primario w-48 h-7 font-light md:w-56  md:h-10  md:font-normal  lg:text-sm lg:pb-0 text-slate-600"
                            type="search "
                            placeholder="Buscar"
                        />
                    </div>

                    {/* Menu filtro */}
                    <DropdownFilterComponent />

                    <Button
                        shape="circle"
                        className="bg-transparent -ml-3 hover:bg-blue-100 transition-all duration-300 "
                    >
                        <GoHistory
                            size={32}
                            className="h-5 w-5  lg:w-5 lg:h-5   fill-zinc-500"
                        />
                    </Button>
                </div>

                {/* Btn y modal de Nuevo cliente */}
                <ModalNewComponent />
            </div>

            <div className=" overflow-x-auto mt-16 lg:mx-8 xl:mx-7 border-x 2xl:mx-16 2xl:mt-20">
                <table className="w-full text-sm  text-left border text-gray-500 font-light">
                    <thead className="bg-white border-b">
                        <tr className=" text-sm  text-black h-12 ">
                            <th
                                scope="col"
                                className=" min-w-24 text-center  font-medium"
                            >
                                Id
                            </th>
                            <th
                                scope="col"
                                className="min-w-60 pl-6  font-medium"
                            >
                                Nombre
                            </th>
                            <th
                                scope="col"
                                className="min-w-48 pl-2 font-medium "
                            >
                                Telefono 1
                            </th>
                            <th
                                scope="col"
                                className="min-w-48 pl-2 whitespace-nowrap   font-medium "
                            >
                                Telefono 2
                            </th>
                            <th
                                scope="col"
                                className=" min-w-72 text-center font-medium"
                            >
                                Modificaion
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">{listaClientes}</tbody>
                </table>
            </div>

            <Pagination shape="circle" className="flex justify-center mt-10">
                <Pagination.Navigator shape="circle">
                    <GoChevronLeft size={18} />
                </Pagination.Navigator>
                <Pagination.List>
                    <Pagination.Item >1</Pagination.Item>
                    <Pagination.Item active className="bg-primario w-7 h-7">
                        2
                    </Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Item>4</Pagination.Item>
                    <Pagination.Item>
                        {/* <DotsThree size={20} /> */}
                    </Pagination.Item>
                    <Pagination.Item>10</Pagination.Item>
                </Pagination.List>
                <Pagination.Navigator shape="circle">
                    <GoChevronRight size={18} />
                </Pagination.Navigator>
            </Pagination>
        </main>
    );
}

export default Clientes;
