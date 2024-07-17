import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MetaData } from "../../../Componentes Generales/MetaData/MetaData";
import { getGastos } from "../../../Redux/actions/gastoActions"
import { PaginationComponent } from "../../../Componentes Generales/Pagination/Pagination";

// iconos
import { GoHistory } from "react-icons/go";
import { MdHistoryToggleOff,  MdCheck} from "react-icons/md";

// Keep react
import { toast } from "keep-react";

// Componentes
import { ModalNewComponent } from "./Components/ModalNewComponent";
import { DropdownAccionesComponent } from "./Components/DropdownAccionesComponent";
import { DropdownFilterComponent } from "./Components/DropdownFilterComponent";
import { NumericFormat } from "react-number-format";
import { PiEmptyBold } from "react-icons/pi";

function Egresos() {
    // estados de data
    const [gastosData, setGastosData] = useState([]);
    const [gastosFiltrados, setGastosFiltrados] = useState([]);

    // filtros
    const [search, setsearch] = useState("");
    const [categoria, setCategoria] = useState("");

    // pagination
    const [paginaActual, setpaginaActual] = useState(1);
    const itemsPorPagina = 8;
    const siguienteIndex = paginaActual * itemsPorPagina;
    const primerIndex = siguienteIndex - itemsPorPagina;
    const totalItems = gastosFiltrados.length;

    // otros
    const [mostrarMensaje, setMostrarMensaje] = useState(false);


    // metodos de seteos de estados de filtro
    const searcher = (e) => {
        setsearch(e.target.value);
        setpaginaActual(1);
    };

    const filterCategoria = (x) => {
        setCategoria(x);
        setpaginaActual(1);
    };

    // instancia de dispatch
    const dispatch = useDispatch();

    const formatDateWithoutTime = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    // selector
    const { gastos, error, loading, gastosTotales } = useSelector(
        (state) => state.gastos
    );

    // useEffects
    useEffect(() => {
        dispatch(getGastos());
    }, [dispatch]);

    useEffect(() => {
        if (gastos && gastos.length > 0) {
            setGastosData(gastos);
            setMostrarMensaje(false);
        } else if (gastos && gastos.length === 0) {
            setMostrarMensaje(true);
        }

        if (error) {
            toast.error("No se pudo obtener los registro de gastos", {
                position: "bottom-left",
                duration: 5000,
                classNames: { toast: "w-auto pr-10 ", title: " text-2xl ml-2" },
                style: { boxShadow: "0px 0px 19px 8px rgba(0,0,0,0.1)" },
            });
        }
    }, [gastos, error]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (gastosData.length === 0 && !error) {
                setMostrarMensaje(true);
            }
        }, 3000);

        return () => clearTimeout(timerId);
    }, [gastosData, error]);

    useEffect(() => {
        let resultado = [...gastosData];
        resultado = resultado.slice().reverse();

        // buscador
        if (search) {
            resultado = resultado.filter((dato) =>
                dato.categoria.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filtrar por categoría
        if (categoria) {
            resultado = resultado.filter(
                (producto) => producto.categoria === categoria
            );
        }

        setGastosFiltrados(resultado);
    }, [search, categoria, gastosData]);

    const categorias = [
        ...new Set(gastosData.map((i) => i.categoria)),
    ];

    const listaGastos = gastosFiltrados
        .slice(primerIndex, siguienteIndex)
        .map((gasto, index) => (
            <tr
                key={gasto._id}
                className="  bg-white border-b cursor-default  h-10 hover:bg-gray-50 font-light text-xs text-neutral-600 "
            >
                <td className="min-w-24 text-center ">
                    {" "}
                    {primerIndex + index + 1}{" "}
                </td>

                <td className="min-w-52 pl-6 whitespace-nowrap overflow-hidden font-semibold text-primario text-ellipsis  ">
                    {gasto.categoria}
                </td>
                <td className="min-w-52 pl-2 ">{gasto.monto}</td>

                <td className="min-w-40 ">{formatDateWithoutTime(gasto.fechaModificacion)}</td>
                <td className="min-w-52  text-center">
                    <DropdownAccionesComponent gastoId={gasto._id} />
                </td>
            </tr>
        ));

    return (
        <main className="container mx-auto px-10 pt-5   self-center 2xl:mx-40  lg:px-14 lg:pt-7   xl:px-10   2xl:px-10 2xl:pt-5 mt-20 ">
            <MetaData title={"Gastos"} />

            <div className="w-full h-14 md:h-24  border-b border-gray-300 md:flex items-center justify-between px-3 mb-16">
                <div className="">
                    <h1 className=" hidden md:block  text-primario font-semibold   2xl:text-xl">
                        Gastos
                    </h1>
                </div>

                <div className="flex flex-col items-center">
                    {!loading && gastosTotales && (
                        <NumericFormat displayType={"text"} className="block text-primario font-semibold  text-center xl:text-xl 2xl:text-xl 2xl:mb-1 " value={gastosTotales} prefix={'$ '}  thousandSeparator={true}/>
                    )}
                    
                    <p className="font-normal text-sm 2xl:w-36 text-center">
                        Total de gastos en este mes
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-between items-center ">
                <div className=" flex items-center gap-4">
                    <div>
                        <input
                            className="outline-none border-b-2 pl-1 pb-[1px] border-primario w-48 h-7 font-light md:w-56 md:h-10 md:font-normal lg:text-sm lg:pb-0 text-slate-600"
                            type="search"
                            placeholder="Buscar"
                            value={search}
                            onChange={searcher}
                        />
                    </div>
                    <DropdownFilterComponent 
                        filterCategoria={filterCategoria}
                        categorias={categorias}
                        categoria={categoria}


                    />
                    
                </div>
                <ModalNewComponent />
            </div>




            {loading ? (
                <p>Cargando...</p>
            ) : mostrarMensaje ? (
                <div className="mt-40">
                    <div className="px-10 py-4 w-full md:w-3/4 xl:w-1/2 2xl:w-2/5 mx-auto rounded-2xl border-slate-200">
                        <div className="w-16 h-16 flex items-center mx-auto rounded-full bg-secundario">
                            <PiEmptyBold
                                size={30}
                                className="mx-auto fill-primario"
                            />
                        </div>
                        <div className="my-6">
                            <h3 className="font-semibold text-center mb-4 text-lg">
                                Opps!
                            </h3>
                            <p className="text-center text-gray-600">
                                Parece que aún no hay Gastos registrados. Por
                                favor, añada  para verlos aquí.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
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
                            <th scope="col" className="min-w-36  font-medium ">
                                Fecha
                            </th>

                            <th
                                scope="col"
                                className="min-w-52  text-center font-medium"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="">{listaGastos}</tbody>
                </table>
            </div>
            )}
            {!mostrarMensaje && (
                <div className="h-28 flex justify-center items-center">
                    <PaginationComponent
                        itemsPorPagina={itemsPorPagina}
                        paginaActual={paginaActual}
                        totalItems={totalItems}
                        setpaginaActual={setpaginaActual}
                    />
                </div>
            )}
        </main>
    );
}

export default Egresos