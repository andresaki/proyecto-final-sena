import React from "react";

// iconos
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import {Button, Modal } from "keep-react";

// data
import { clientes } from "../../../Data/Clientes";

export const ModalDetalles = ({ clienteId, showModal, handleCloseModal }) => {
    const cliente = clientes[clienteId - 1];

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[470px] rounded-sm p-6 pb-10">
                    <div>
                        <Button
                            onClick={handleCloseModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-medium mt-9 text-black font-montserrat">
                            Detalles del cliente
                        </h3>
                    </div>
                    <Modal.Content>
                        <div className="grid gap-y-12 mt-20 mx-3 px-2 gap-x-5 grid-cols-2">
                            <div className="col-span-2">
                                <h1 className="font-semibold text-xs text-primario">
                                    Nombre del cliente
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.nombre}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <h1 className="font-semibold text-xs text-primario">
                                    Telefono
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.telefono1}
                                </p>
                            </div>

                            <div className="col-span-1">
                                <h1 className="font-semibold text-xs text-primario">
                                    Telefono secundario
                                </h1>
                                <p className="font-normal text-[14px] text-secundario ml-5 mt-4">
                                    {cliente.telefono2}
                                </p>
                            </div>
                        </div>

                        <div className="mt-28 mx-3">
                            <h1 className="font-medium text-[14px] text-center mb-11"> Pedidos recientes  </h1>

                            <div className=" overflow-x-auto border-x">
                                <table className="w-full text-sm  text-left border text-gray-500 font-light">
                                    <thead className="bg-white border-b">
                                        <tr className=" text-xs  text-black h-9 w-full ">
                                            <th
                                                scope="col"
                                                className=" w-[15%] text-center  font-medium"
                                            >
                                                Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="w-[60%] pl-6  font-medium"
                                            >
                                                Nombre
                                            </th>
                                            <th
                                                scope="col"
                                                className="w-[25%] pl-2 font-medium "
                                            >
                                                Fecha 
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-light">

                                        <tr className=" text-xs font-light bg-white border-b cursor-default  h-9 hover:bg-gray-50  text-black ">
                                            <th className=" w-[15%] text-center text-xs font-light">1</th>
                                            <th className=" w-[60%] text-xs  pl-6 font-light"> 15 camisas personalizadas ...</th>
                                            <th className=" w-[25%] pl-2 text-xs font-light">1/01/2024</th>
                                        </tr>
                                        <tr className=" text-xs font-light bg-white border-b cursor-default  h-9 hover:bg-gray-50  text-black ">
                                            <th className=" w-[15%] text-center text-xs font-light">2</th>
                                            <th className=" w-[60%] text-xs  pl-6 font-light"> 15 camisas personalizadas ...</th>
                                            <th className=" w-[25%] pl-2 text-xs font-light">1/01/2024</th>
                                        </tr>
                                        <tr className=" text-xs font-light bg-white border-b cursor-default  h-9 hover:bg-gray-50  text-black ">
                                            <th className=" w-[15%] text-center text-xs font-light">3</th>
                                            <th className=" w-[60%] text-xs  pl-6 font-light"> 15 camisas personalizadas ...</th>
                                            <th className=" w-[25%] pl-2 text-xs font-light">1/01/2024</th>
                                        </tr>
                                        <tr className=" text-xs font-light bg-white border-b cursor-default  h-9 hover:bg-gray-50  text-black ">
                                            <th className=" w-[15%] text-center text-xs font-light">4</th>
                                            <th className=" w-[60%] text-xs  pl-6 font-light"> 15 camisas personalizadas ...</th>
                                            <th className=" w-[25%] pl-2 text-xs font-light">1/01/2024</th>
                                        </tr>
                                        <tr className=" text-xs font-light bg-white border-b cursor-default  h-9 hover:bg-gray-50  text-black ">
                                            <th className=" w-[15%] text-center text-xs font-light">5</th>
                                            <th className=" w-[60%] text-xs  pl-6 font-light"> 15 camisas personalizadas ...</th>
                                            <th className=" w-[25%] pl-2 text-xs font-light">1/01/2024</th>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                            <a className="text-xs font-medium text-primario cursor-pointer mt-4 ml-1 hover:scale-120"> Ver mas detalles</a>

                        </div>

                        
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
