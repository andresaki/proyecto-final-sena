import { Dropdown } from "keep-react";
import React from "react";
import { TbCalendarUser } from "react-icons/tb";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaUserLock, FaUsersLine } from "react-icons/fa6";
import { HeaderAdmin } from "./HeaderAdmin";

export const Admin = () => {
    return (
        <HeaderAdmin>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                    {/* card */}
                    <div className="shadow-md rounded-2xl p-7 h-max">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <p className="text-sm font-medium">Usuarios</p>

                            <FaUsersLine className="fill-primario" size={20} />
                        </div>
                        <div className="mt-4">
                            <div className="text-2xl font-bold">24</div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-2xl p-7 ">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <p className="text-sm font-medium">
                                Usuarios activos
                            </p>

                            <FaUserLock className="fill-primario" size={20} />
                        </div>
                        <div className="mt-4">
                            <div className="text-2xl font-bold">20</div>
                        </div>
                    </div>
                    <div className="shadow-md rounded-2xl p-7 ">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <p className="text-sm font-medium">
                                Renovacion de suscripcion
                            </p>

                            <TbCalendarUser
                                className="text-primario"
                                size={20}
                            />
                        </div>
                        <div className="mt-4">
                            <div className="text-2xl font-bold">2</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6 ">
                    {/* card */}
                    <div className="shadow-md rounded-2xl p-7 border-t ">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <p className="text-sm font-medium">
                                Lista de usuarios{" "}
                            </p>

                            <FaUsersLine className="text-primario" size={20} />
                        </div>

                        <div className="mt-4">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&amp;_tr]:border-b">
                                    <tr className="border-b  hover:bg-metal-50">
                                        <th className="h-12 px-4 text-left align-middle font-medium  ">
                                            Nombre
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium  ">
                                            Email
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium  text-left">
                                            Inicio
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-left ">
                                            Expira el
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-left "></th>
                                    </tr>
                                </thead>

                                <tbody class="">
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr class="border-b transition-colors hover:bg-metal-50 cursor-default ">
                                        <td class="p-4 align-middle  font-medium">
                                            INV001
                                        </td>
                                        <td class="p-4 align-middle ">
                                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primario hover:bg-secondary/80">
                                                Ejemplo@email.com
                                            </div>
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/07/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            06/08/2024
                                        </td>
                                        <td class="align-middle px-4 ">
                                            <Dropdown
                                                placement="left"
                                                action={
                                                    <BiDotsHorizontalRounded
                                                        size={32}
                                                        className="hover:bg-blue-100  rounded-full w-6 h-6  transition-all duration-300 bg-transparent text-primario m-auto"
                                                    />
                                                }
                                                actionClassName="rounded-full bg-transparent border-none"
                                                className=" shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-40 p-2"
                                            >
                                                <Dropdown.List>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className="  text-sm">
                                                            Editar
                                                        </p>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="hover:text-primario  hover:font-semibold  flex items-center text-gray-700 ">
                                                        <p className=" text-sm">
                                                            Eliminar
                                                        </p>
                                                    </Dropdown.Item>
                                                </Dropdown.List>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </HeaderAdmin>
    );
};
