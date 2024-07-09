import React from "react";
import Fondo from "./Fondo.png";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Buildings } from "phosphor-react";
import NavConfiguracion from "../NavConfiguracion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MiCuenta() {
    const { user, loading } = useSelector((state) => state.auth);

    console.log(user);

    return (
        <NavConfiguracion>
            <main className="grid grid-cols-1 gap-24">
                <div className="grid gap-7">
                    <h1 className="font-medium text-xl">Mi cuenta</h1>

                    <div className="w-full max-w-[600px]  shadow-md rounded-b-sm">
                        <div className="relative h-24 overflow-hidden rounded-t-lg">
                            <img
                                src={Fondo}
                                alt="Backgroud"
                                className="h-full w-full object-cover object-bottom  "
                            />
                        </div>

                        {/* Card- Body */}
                        <div className="relative -mt-4 px-6 pb-6 ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white rounded-full p-0.5">
                                        <HiOutlineUserCircle
                                            size={50}
                                            className="text-primario"
                                        />
                                    </div>
                                    <div className="text-sm font-medium mt-3">
                                        User
                                    </div>
                                </div>
                                <Link
                                    to={"EditarPerfil"}
                                    className="font-normal text-xs text-center  bg-primario px-2  py-1 text-white rounded-md mt-5"
                                >
                                    Editar
                                </Link>
                            </div>

                            <div className="mt-6 rounded-lg bg-blue-50 p-4 ">
                                <div className="grid gap-3 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold">
                                            Nombre
                                        </div>

                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                {user.nombre}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold">
                                            Correo electronico
                                        </div>

                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                {user.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold ">
                                            Telefono
                                        </div>
                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                {user.telefono}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-7">
                    <h1 className="font-medium text-xl">Empresa</h1>

                    <div className="w-full max-w-[600px] shadow-md rounded-b-sm">
                        <div className="relative h-24 overflow-hidden rounded-t-lg">
                            <img
                                src={Fondo}
                                alt="Backgroud"
                                className="h-full w-full object-cover object-bottom filter:hue-rotate(80deg) "
                            />
                        </div>

                        {/* Card- Body */}
                        <div className="relative -mt-4 px-6 pb-6 ">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white rounded-xl p-1">
                                        <Buildings
                                            size={50}
                                            className="text-primario"
                                        />
                                    </div>
                                    {loading ? (
                                        <div className=" ssc-line w-16"></div>
                                    ) : (
                                        <div className="text-sm font-medium mt-3">
                                            {user.nombreEmpresa}
                                        </div>
                                    )}
                                </div>
                                <Link to={"EditarEmpresa"} className="font-normal text-xs text-center  bg-primario px-2  py-1 text-white rounded-md mt-5">
                                    Editar
                                </Link>
                            </div>

                            <div className="mt-6 rounded-lg bg-blue-50 p-4 ">
                                <div className="grid gap-3 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold">
                                            Nombre
                                        </div>
                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                {user.nombreEmpresa}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold">
                                            Correo de la empresa
                                        </div>

                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                john.doe@example.com
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#494949] text-xs font-semibold ">
                                            Direccion
                                        </div>
                                        {loading ? (
                                            <div className=" ssc-line w-16"></div>
                                        ) : (
                                            <div className="text-xs text-[#494949] font-medium">
                                                Direccion
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </NavConfiguracion>
    );
}

export default MiCuenta;
