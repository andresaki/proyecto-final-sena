import React from "react";

// iconos
import { CiDeliveryTruck} from "react-icons/ci";
import { IoCloseOutline ,IoCalendarOutline } from "react-icons/io5";

// Keep react
import { Button, Modal, Divider } from "keep-react";

// data
import { ingresos } from "../../../../Data/Ingresos";

export const ModalDetalles = ({ ingresoId, showModal, handleCloseModal }) => {
    const ingreso = ingresos[ingresoId - 1];

    function convertirFecha(fechaString) {
        // 1. Separar la fecha en partes
        const [anio, mes, dia] = fechaString.split("-");
      
        // 2. Convertir el mes a nombre (resta 1 porque los meses empiezan en 0)
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                       "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const mesNombre = meses[mes - 1];
      
        // 3. Formatear la fecha
        return `${dia} de ${mesNombre} de ${anio}`;
      }

    return (
        <>
            <Modal isOpen={showModal} onClose={handleCloseModal} >
                <Modal.Body className="space-y-3  w-[400px] max-h-[900px] overflow-auto rounded-md p-4">
                    <div>
                        <Button
                            onClick={handleCloseModal}
                            className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                        >
                            <span>
                                <IoCloseOutline className="text-black text-2xl" />
                            </span>
                        </Button>
                        <h3 className=" text-base text-center font-semibold mt-5 text-gray-700">
                            Gasto
                        </h3>
                    </div>
                    <Modal.Content>
                        <div className="grid gap-y-6 mt-16 mx-2 px-2 grid-cols-3">
                            

                            <h1 className="col-span-1 text-xs font-semibold  text-zinc-700">
                                Categoria :
                            </h1>
                            <p className="col-span-2 font-semibold text-xs text-primario">
                                {ingreso.categoria}
                            </p>

                            <h1 className="col-span-1 text-xs font-semibold  text-zinc-700">
                                Descripcion :
                            </h1>
                            <p className="col-span-2 font-normal text-xs text-secundario">
                                {ingreso.descripcion}
                            </p>

                            <Divider className="my-5 col-span-3"/>

                            <h1 className="col-span-1 text-xs font-semibold  text-zinc-700">
                                Monto :
                            </h1>
                            <div className="col-span-2 font-semibold text-xs text-primario border-blue-300   border w-max py-1  px-2 rounded-full  hover:bg-blue-50">
                                <p > {ingreso.monto} COP</p>
                            </div>

                            <p className="col-span-3 mt-9 font-normal text-end text-xs text-secundario">
                                {convertirFecha(ingreso.fecha)}
                            </p>

                        </div>
                    </Modal.Content>
                </Modal.Body>
            </Modal>
        </>
    );
};
