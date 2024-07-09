import React from "react";
import { HeaderAdmin } from "./HeaderAdmin";
import { Button } from "keep-react";

export const EditUsuario = () => {
  return (
    <HeaderAdmin>
        
        <main className="mt-20 px-4">


                {/* formulario */}
                <div
                    className="rounded-3xl p-3 border-t shadow-2xl w-full md:max-w-md lg:  xl:max-w-4xl mx-auto"
                    
                >
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className=" text-base text-center font-semibold m-3 text-primario font-montserrat">
                            Editar perfil de usuario
                        </h3>
                        <p className="text-xs text-muted-foreground text-center">
                            Ingrese la informacion necesaria para crear el usuario
                        </p>
                    </div>

                    <div className="p-6"> 
                      <p className="font-semibold text-sm inline-block text-primario">Id:</p> <span className=" text-xs inline-block">354565</span> <br />
                      <p className="font-semibold text-sm inline-block text-primario">Inicio:</p> <span className=" text-xs inline-block">24 de junio del 2024</span>
                    </div>


                    <form className="p-6 space-y-8 xl:space-y-0 xl:grid xl:grid-cols-2 gap-8">
                        
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
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                className="block  font-montserrat text-xs font-medium text-black"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                id="password"
                                placeholder="password"
                                type="password"
                                
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label
                                className="block  font-montserrat text-xs font-medium text-black"
                                htmlFor="subscription-expiry"
                            >
                                Fecha de Vencimiento de Suscripción
                            </label>
                            <input
                                className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2"
                                id="subscription-expiry"
                                placeholder="subscription expiry date"
                                type="date"
                            />
                        </div>
                    </form>
                    <div className="flex w-full justify-center p-6">
                        <Button
                            type="submit "
                            className="text-white h-9  bg-primario focus:ring-4 focus:outline-none font-medium  text-xs px-5 py-2 text-center  rounded  hover:bg-primario"
                        >
                            Guardar
                        </Button>
                    </div>
                </div>
            </main>
     
    </HeaderAdmin>

  )
}
