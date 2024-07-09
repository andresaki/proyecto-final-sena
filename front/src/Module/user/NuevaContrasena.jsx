import { Button } from "keep-react";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link,  } from "react-router-dom";

export const NuevaContrasena = () => {
    const [hidenPassword, sethidenPassword] = useState(true);
    const [hidenPassword2, sethidenPassword2] = useState(false);


    const onVisiblePassword = () => {
        sethidenPassword(false);
    };

    const onHiddenPassword = () => {
        sethidenPassword(true);
    };

    const onVisiblePassword2 = () => {
        sethidenPassword2(false);
    };

    const onHiddenPassword2 = () => {
        sethidenPassword2(true);
    };
    
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
                        Nueva contraseña
                    </h3>
                    <p className="text-[13px] text-[#807f7f]  ">
                        Su nueva contraseña debe ser diferente de la contraseña
                        utilizada anteriormente.
                    </p>
                </div>

                <form className="mt-20 space-y-14 xl:space-y-0  ">
                    <div className="space-y-4 relative">
                        {hidenPassword ? (
                            <IoEyeOutline
                                onClick={onVisiblePassword}
                                className="hover:bg-blue-50 rounded-full  absolute right-4 top-11 text-primario cursor-pointer "
                            />
                        ) : (

                            
                            <IoEyeOffOutline
                                onClick={onHiddenPassword}
                                className="hover:bg-blue-50 rounded-full  absolute right-4 top-11 fill-primario cursor-pointer "
                            />
                        )}

                        <label
                            className="block  font-montserrat text-xs font-medium text-black"
                            htmlFor="password"
                        >
                            Contraseña
                        </label>

                        <input
                            type={hidenPassword ? "text" : "password"}
                            name="Password"
                            className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                            placeholder="Password"
                            required
                            // value={Password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className="space-y-4 relative">
                        {hidenPassword2 ? (
                            <IoEyeOutline
                                onClick={onVisiblePassword2}
                                className="hover:bg-blue-50 rounded-full  absolute right-4 top-11 text-primario cursor-pointer "
                            />
                        ) : (
                            <IoEyeOffOutline
                                onClick={onHiddenPassword2}
                                className="hover:bg-blue-50 rounded-full  absolute right-4 top-11 fill-primario cursor-pointer "
                            />
                        )}

                        <label
                            className="block  font-montserrat text-xs font-medium text-black"
                            htmlFor="confirmPassword"
                        >
                            Contraseña
                        </label>

                        <input
                            type={hidenPassword2 ? "text" : "password"}
                            name="confirmPassword"
                            className="outline-none border border-bordeInput text-gray-800 text-xs rounded-md block w-full p-3 focus:ring-primario focus:ring-2 "
                            placeholder="confirmPassword"
                            required
                            // value={confirmPassword}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="w-full flex justify-center  ">
                        <Button
                            type="submit"
                            className="text-white h-8  bg-primario focus:ring-4 focus:outline-none font-medium  text-xs px-3 text-center rounded  hover:bg-primario"
                        >
                            Restablecer contraseña
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
