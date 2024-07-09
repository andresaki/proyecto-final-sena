import React from "react";
import { useState } from "react";

// iconos
import { MdOutlineAdd} from "react-icons/md";

import { IoCloseOutline } from "react-icons/io5";

// Keep react
import { Button, Modal, Divider } from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";


export const ModalNewComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const estructura = {
        nombre: "",
        descripcion: "",
        especificacionespedido: "",
        estadoProduccion: false, //No Completado
        estadoEntrega: false, // No reclamado
        pagado: false,
        costoTotal: 0,
        cliente: "Juan Pérez",
        fechaEntregaEstimada: "",
        fechaPedido: "2024-04-25",
    };
    const { formState, onInputChange } = useForm(estructura);
    const {
        nombre,
        descripcion,
        especificacionespedido,
        costoTotal,
        fechaEntregaEstimada,
    } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <Button
                onClick={openModal}
                className="bg-primario hover:scale-110 p-0 hover:bg-primario transition-all duration-300 z-10 rounded-full w-10 h-10 text-center fixed bottom-8 right-10  lg:static  xl:w-10 xl:h-10"
                type="button"
            >
                <span>
                    {" "}
                    <MdOutlineAdd className="block text-2xl w-5 h-5  fill-white  lg:w-5" />
                </span>
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="space-y-3  w-[450px] h-screen max-h-[900px] overflow-auto rounded-md p-6">
                    <div>
                        <Button
                            onClick={closeModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-medium mt-9 text-black font-montserrat">
                            Registrar pedido
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" onSubmit={onSubmit}>
                            <div className="grid gap-y-12  gap-x-5 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="nombre"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Nombre del pedido
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="ej: estampado , confeccion , areglo . . . "
                                        required
                                        value={nombre}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="descripcion"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Descripcion del pedido
                                    </label>
                                    <textarea
                                        type="text"
                                        name="descripcion"
                                        className="outline-none border min-h-40 border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Ingrese los detalles o la descripcion del pedido"
                                        required
                                        value={descripcion}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="especificacionespedido"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Especificaciones de pedido
                                    </label>
                                    <textarea
                                        type="text"
                                        name="especificacionespedido"
                                        className="outline-none border min-h-40 border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                                        placeholder="Ingrese las especificaciones o requerimientos que tiene el pedido"
                                        value={especificacionespedido}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="fechaEntregaEstimada"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Fecha estimada de entrega
                                    </label>
                                    <input
                                        type="date"
                                        className="outline-none border min-h-10  border-bordeInput text-gray-800 text-xs rounded-md block w-2/3 p-3 focus:ring-primario focus:ring-2 "
                                        name="fechaEntregaEstimada"
                                        value={fechaEntregaEstimada}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="costoTotal"
                                        className="block mb-3  text-xs font-medium text-black"
                                    >
                                        Costo total
                                    </label>
                                    <input
                                        type="text"
                                        name="costoTotal"
                                        className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-2/3 p-3 focus:ring-primario focus:ring-2 "
                                        required
                                        value={costoTotal}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2 mt-9 ">
                                    <label
                                        htmlFor="proveedor"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Pagado
                                    </label>
                                    <select
                                        name="proveedor"
                                        className="outline-none border w-2/3 border-bordeInput text-gray-800 text-xs rounded-md block  p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            defaultValue={false}
                                        >
                                            No
                                        </option>
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            defaultValue={true}
                                        >
                                            Si
                                        </option>
                                    </select>
                                </div>

                                <Divider className="col-span-2 my-10" />

                                <div className="col-span-1  ">
                                    <label
                                        htmlFor="proveedor"
                                        className="block mb-3 font-montserrat text-xs font-medium text-black"
                                    >
                                        Cliente
                                    </label>
                                    <select
                                        name="proveedor"
                                        className="outline-none border w-4/5 border-bordeInput text-gray-800 text-xs rounded-md block  p-3 focus:ring-primario focus:ring-2"
                                    >
                                        <option
                                            className="py-2 text-sm text-secundario"
                                            defaultValue={"1"}
                                        >
                                            seleccione
                                        </option>
                                    </select>
                                </div>

                                <div className="col-span-1 relative  pt-8  ">
                                    <p className="absolute -left-4 bottom-3">
                                        o
                                    </p>

                                    <button
                                        type="button"
                                        className="hover:scale-105 ml-auto border w-5/6 transition-all duration-200 h-10 flex items-center justify-evenly text-white font-normal text-sm bg-primario rounded"
                                    >
                                        <MdOutlineAdd className="block text-2xl w-5 h-5  fill-white  lg:w-5" />

                                        <p className="sm:block  text-xs ">
                                            Registrar pedido
                                        </p>
                                    </button>
                                </div>

                                <Modal.Footer className=" col-span-2 flex justify-end w-full mt-14">
                                    <Button
                                        type="button"
                                        onClick={closeModal}
                                        className="text-black h-10 cursor-pointer inline-flex items-center font-medium  text-sm px-5 py-2.5 text-center bg-transparent hover:bg-transparent"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="submit "
                                        className="text-white h-10 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-xs px-5 py-2.5 text-center  rounded-md hover:bg-primario hover:scale-105"
                                    >
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </div>
                        </form>
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
