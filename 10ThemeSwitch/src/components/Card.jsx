import React from "react";
import { useTheme } from "../context/theme"; // ✅ import your theme context

export default function Card() {
    const { themeMode } = useTheme(); // ✅ access current theme mode

    return (
        <div
        className={`w-100 border rounded-lg shadow transition-all duration-300
            ${themeMode==='dark'
               ?"bg-gray-800 border text-white"
               :"bg-white border text-black"
            }
            `}
            // className={`w-100 border rounded-lg shadow transition-all duration-300 
            // ${themeMode === "dark"
            //     ? "bg-gray-800 border-gray-700 text-white"
            //     : "bg-white border-gray-200 text-gray-900"
            // }`}
        >
            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="product_image1"
                />
            </a>

            <div className="px-5 pb-5">
                <a href="/">
                    <h5
                        className={`text-xl font-semibold tracking-tight ${
                            themeMode === "dark" ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    {[1, 2, 3, 4].map((i) => (
                        <svg
                            key={i}
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}

                    <svg
                        className={`w-4 h-4 ${
                            themeMode === "dark"
                                ? "text-gray-600"
                                : "text-gray-200"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>

                    <span
                        className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 ${
                            themeMode === "dark"
                                ? "bg-blue-900 text-blue-100"
                                : "bg-blue-100 text-blue-800"
                        }`}
                    >
                        4.0
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span
                        className={`text-3xl font-bold ${
                            themeMode === "dark"
                                ? "text-white"
                                : "text-gray-900"
                        }`}
                    >
                        $599
                    </span>

                    <a
                        href="/"
                        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ${
                            themeMode === "dark"
                                ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
                        }`}
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
