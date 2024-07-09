import React from "react";

// iconos
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
// Keep react
import { Drawer } from "keep-react";

// data
import { proveedores } from "../../../Data/Proveedores";

export const ModalDetalles = ({ proveedorId, showModal, handleCloseModal }) => {
    const proveedor = proveedores[proveedorId - 1];

    return (
        <>
            <Drawer
                position="right"
                isOpen={showModal}
                onClose={handleCloseModal}
            >
                <Drawer.Content className="space-y-3 w-[400px]  rounded-sm p-6 pb-10">
                    <h3 className=" text-lg text-left font-semibold mt-9 text-primario mb-16">
                        Proveedor {proveedor.nombre}
                    </h3>

                    <div >
                        <h3 className="font-semibold text-sm mb-5">
                            Informacion del contacto
                        </h3>

                        <div className="flex items-center gap-3 ml-4 mb-2">
                            <FiPhone size={18} className="text-secundario" />{" "}
                            <p className="text-xs text-secundario font-medium">
                                {proveedor.telefono1}
                            </p>
                        </div>

                        {!proveedor.telefono2 ? (
                            ""
                        ) : (
                            <div className="flex items-center gap-3 ml-4 mb-2">
                                <FiPhone
                                    size={18}
                                    className="text-secundario"
                                />{" "}
                                <p className="text-xs text-secundario font-medium">
                                    {proveedor.telefono2}
                                </p>
                            </div>
                        )}
                        <div className="flex items-center gap-4 ml-4 mb-2">
                            <AiOutlineMail size={18} className="text-secundario" />{" "}
                            <p className="text-xs text-secundario font-medium">
                                {proveedor.email}
                            </p>
                        </div>
                    </div>

                    <div >
                        <h3 className="font-semibold text-sm mb-5 mt-12">
                            Productos que provee
                        </h3>

                        <div className="flex items-center gap-3 ml-4 mb-2">
                            <BsBoxSeam size={18} className="text-secundario" />{" "}
                            <p className="text-xs text-secundario font-medium">
                                Producto 1
                            </p>
                        </div>

                        
                        <div className="flex items-center gap-3 ml-4 mb-2">
                            <BsBoxSeam size={18} className="text-secundario" />{" "}
                            <p className="text-xs text-secundario font-medium">
                                Producto 2
                            </p>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer>
        </>
    );
};
