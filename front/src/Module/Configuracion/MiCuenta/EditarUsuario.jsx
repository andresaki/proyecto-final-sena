import React from "react";
import Fondo from "./Fondo.png";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Buildings } from "phosphor-react";
import NavConfiguracion from "../NavConfiguracion";
import { useSelector } from "react-redux";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

function EditarUsuario() {
    const { user, loading } = useSelector((state) => state.auth);

    return (
        <NavConfiguracion>
            <main className="grid lg:grid-cols-2 grid-cols-1 gap-24">
                {/* formualtio */}
                <div className="w-full md:max-w-md  xl:max-w-4xl ">
                    <div className="flex flex-col space-y-1">
                        <h3 className=" text-lg font-medium font-montserrat">
                            Editar usuario
                        </h3>
                        <p className="text-[11px] text-[#494949] text-muted-foreground ">
                            Edita los campos necesarios
                        </p>
                    </div>

                    <form className="mt-14 space-y-8 xl:space-y-0 xl:grid xl:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label
                                className="block  font-montserrat text-xs font-medium text-black"
                                htmlFor="nombre"
                            >
                                Nombre
                            </label>
                            <input
                                className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                id="nombre"
                                placeholder="nombre"
                                type="text"
                                name="nombre"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="block  font-montserrat text-xs font-medium text-black"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                id="email"
                                placeholder="email"
                                type="email"
                                name="email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="block  font-montserrat text-xs font-medium text-black"
                                htmlFor="subscription-expiry"
                            >
                                Telefono
                            </label>
                            <input
                                className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                id="telefono"
                                placeholder="000 000 00 00"
                                type="tel"
                                name="telefono"
                            />
                        </div>

                        <div className="w-full col-span-2">
                            <Button
                                type="submit"
                                className="text-white h-8  bg-primario focus:ring-4 focus:outline-none font-medium  text-xs px-3 text-center rounded  hover:bg-primario"
                            >
                                Guardar cambios
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="grid gap-7">
                    <div className="w-full max-w-md  shadow-md rounded-b-sm">
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
            </main>
        </NavConfiguracion>
    );
}
export default EditarUsuario;
