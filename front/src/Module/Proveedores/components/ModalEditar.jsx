import React from "react";

// iconos
import { IoCloseOutline } from "react-icons/io5";

// Keep react
import { Button, Modal } from "keep-react";

// Hook
import { useForm } from "../../../Hooks/useForm";

// data
import {proveedores} from "../../../Data/Proveedores"

export const ModalEditar = ({ proveedorId, showModal, handleCloseModal }) => {
    const proveedor = proveedores[proveedorId - 1];

    const estructura = {
        nombre: proveedor.nombre,
        telefono1: proveedor.telefono1,
        telefono2: proveedor.telefono2,
        email: proveedor.email
    };
    const { formState, onInputChange } = useForm(estructura);
    const { nombre, telefono1, telefono2 , email } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <Modal.Body className="space-y-3  w-[500px] rounded-sm p-6">
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
                            Editar cliente
                        </h3>
                    </div>
                    <Modal.Content>
                        <form className=" mt-20 px-2" onSubmit={onSubmit}>
                            <div className="grid gap-y-12  gap-x-5 grid-cols-2">
                            <div className="col-span-2">
                                    <label
                                        htmlFor="nombre"
                                        className="block mb-5 font-montserrat text-xs font-medium text-black"
                                    >
                                        Nombre del proveedor
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="outline-none border border-bordeInput  text-black font-normal text-xs rounded-md block w-full h-11 pl-5 focus:ring-primario focus:ring-2 placeholder:text-gray-800 placeholder:font-light"
                                        placeholder="Nombre del cliente"
                                        required
                                        value={nombre}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="cantidadInicial"
                                        className="block mb-5 font-montserrat text-xs font-medium text-black"
                                    >
                                        Telefono
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono1"
                                        className="outline-none border border-bordeInput text-black font-normal text-xs rounded-md block w-full h-11 pl-5 focus:ring-primario focus:ring-2 placeholder:text-gray-800 placeholder:font-light"
                                        required
                                        placeholder="0"
                                        value={telefono1}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-1 ">
                                    <label
                                        htmlFor="stockMinimo"
                                        className="block mb-5 font-montserrat text-xs font-medium text-black"
                                    >
                                        Telefono secundario
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono2"
                                        className="outline-none border border-bordeInput text-black font-normal text-xs rounded-md block w-full h-11 pl-5 focus:ring-primario focus:ring-2 placeholder:text-gray-800 placeholder:font-light"
                                        placeholder="0"
                                        value={telefono2}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block mb-5 font-montserrat text-xs font-medium text-black"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="outline-none border border-bordeInput text-black font-normal text-xs rounded-md block w-full h-11 pl-5 focus:ring-primario focus:ring-2 placeholder:text-gray-800 placeholder:font-light"
                                        placeholder="email"
                                        required
                                        value={email}
                                        onChange={onInputChange}
                                    />
                                </div>

                                <Modal.Footer className=" col-span-2 flex justify-center w-full mt-16 mb-6">
                                    <Button
                                        type="submit "
                                        className="text-white h-10 inline-flex items-center bg-primario focus:ring-4 focus:outline-none font-medium  text-sm px-5 py-2.5 text-center  rounded hover:bg-primario hover:scale-105"
                                    >
                                        Guardar cambios
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
