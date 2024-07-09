import { Button } from "keep-react";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const OlvidarContraseña = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <div className="w-full md:max-w-md  xl:max-w-md  h-3/4 shadow-md rounded-t-xl border-t border-t-slate-200 p-7 border-b-4 border-primario">
                <div className="flex justify-start mb-10">
                    <Link
                        to={"/login"}
                        className="p-0 bg-transparent hover:bg-blue-50  rounded-full hover:scale-105 transition-all duration-100 font-montserrat hover:text-gray-900  flex justify-center items-center "
                    >
                        <span>
                            <GoArrowLeft className="text-black text-2xl" />
                        </span>
                    </Link>
                    
                </div>

                <div className="flex flex-col space-y-2">
                    <h3 className=" text-base font-medium  font-montserrat">
                        Restablecer contraseña
                    </h3>
                    <p className="text-[13px] text-[#807f7f]  ">
                    Ingrese el correo electrónico asociado con su cuenta y le enviaremos un correo electrónico con un link  para restablecer su contraseña
                    </p>
                </div>

                <form className="mt-20 space-y-40 xl:space-y-0  ">
                    <div className="space-y-4">
                        <label
                            className="block  font-montserrat text-xs font-medium text-black"
                            htmlFor="email"
                        >
                            Correo electronico
                        </label>
                        <input
                            className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                            id="email"
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className="w-full flex justify-center  ">
                        <Button
                            type="submit"
                            className="text-white h-8  bg-primario focus:ring-4 focus:outline-none font-medium  text-xs px-3 text-center rounded  hover:bg-primario"
                        >
                            Enviar Link
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
