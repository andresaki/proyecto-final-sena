import React from "react";

// iconos
import { GoHistory } from "react-icons/go";
import { MdHistoryToggleOff,  MdCheck} from "react-icons/md";

// Keep react
import { Button } from "keep-react";

// data
import { ingresos } from "../../../Data/Ingresos";

// Componentes
import { ModalNewComponent } from "./Components/ModalNewComponent";
import { DropdownAccionesComponent } from "./Components/DropdownAccionesComponent";
import { DropdownFilterComponent } from "./Components/DropdownFilterComponent";

function Ingresos() {
    const listapedidos = ingresos.map((ingreso) => (
        <tr
            key={ingreso.id}
            className="  bg-white border-b cursor-default  h-10 hover:bg-gray-50 font-light text-xs text-neutral-600 "
        >
            <td className="min-w-24 text-center ">{ingreso.id} </td>

            <td className="min-w-52 pl-6 whitespace-nowrap overflow-hidden font-semibold text-primario text-ellipsis  ">
                {ingreso.categoria}
            </td>
            <td className="min-w-52 pl-2 ">{ingreso.monto}</td>
            
            
            <td className="min-w-40 ">
                {ingreso.fecha}
            </td>
            <td className="min-w-52  text-center">
                <DropdownAccionesComponent ingresoId={ingreso.id} />
            </td>
        </tr>
    ));

    return (
        <main className="container mx-auto px-10 pt-5   self-center 2xl:mx-40  lg:px-14 lg:pt-7   xl:px-10   2xl:px-10 2xl:pt-5 mt-20 ">



            <div className="w-full h-14 md:h-24  border-b border-gray-300 md:flex items-center justify-between px-3 mb-16">

                <div className="">
                    <h1 className=" hidden md:block  text-primario font-semibold   2xl:text-xl">
                        Ingresos
                    </h1>

                    
                </div>

                <div>
                    <h1 className="text-primario font-semibold  text-center xl:text-xl 2xl:text-xl 2xl:mb-1">
                        $ 3.458.000
                    </h1>
                    <p className="text-secundario font-normal text-sm 2xl:w-36 text-center">
                        Total de ingresos en este mes
                    </p>
                </div>

            </div>


            <div className="w-full flex justify-between items-center ">
                <div className=" flex items-center gap-4">
                    <div>
                        <input
                            className="outline-none border-b-2 pl-1 pb-[1px] border-primario w-48 h-7 font-light md:w-56  md:h-10  md:font-normal  lg:text-sm lg:pb-0 text-slate-600"
                            type="search "
                            placeholder="Buscar"
                        />
                    </div>
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
                <ModalNewComponent />
            </div>

            <div className=" overflow-x-auto mt-10  border-x  2xl:mt-12   xl:mx-10">
                <table className="w-full text-sm  text-left border text-gray-500 font-light">
                    <thead className="bg-white border-b">
                        <tr className=" text-sm  text-black h-12 ">
                            <th
                                scope="col"
                                className=" min-w-20 max-w-20 text-center italic  font-medium"
                            >
                                #
                            </th>
                            <th
                                scope="col"
                                className="min-w-40  pl-6 font-medium"
                            >
                                Tipo
                            </th>
                            <th
                                scope="col"
                                className="min-w-40 pl-2  font-medium"
                            >
                                Monto
                            </th>
                            <th
                                scope="col"
                                className="min-w-36  font-medium "
                            >
                                Fecha
                            </th>
                           
                            <th
                                scope="col"
                                className="min-w-52  text-center font-medium"
                            >
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">{listapedidos}</tbody>
                </table>
            </div>
        </main>
  )
}

export default Ingresos