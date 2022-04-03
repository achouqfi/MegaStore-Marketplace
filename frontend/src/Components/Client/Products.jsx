import React, { useState } from 'react';
import Product1 from '../../Assets/men/product1.jpg'
import Product2 from '../../Assets/men/product2.jpg'
import Product3 from '../../Assets/men/product3.jpg'
import Product4 from '../../Assets/men/product4.jpg'
import { CardContext } from '../../Context/CardContext'
import { useContext } from "react";

const Products = () => {
    const { dataProduct, setDataProduct } = useContext(CardContext)
    // console.log(dataProduct);

    return (
        <div class="my-20 mx-20">
            <div class="flex flex-row justify-between my-5">
                <h2 class="text-3xl text-center">Men's Collection</h2>
                <a href="#" class="flex flex-row text-lg hover:text-purple-700">
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
            <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div class="shadow-lg rounded-lg">
                    <a href="#">
                        <img src={Product1} class="rounded-tl-lg rounded-tr-lg" />
                    </a>
                    <div class="p-5">
                        <h3><a href="#">Mens T-Shirt</a></h3>
                        <div class="flex flex-row my-3">
                            <div class="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
                        </div>
                        <div class="flex flex-row my-3">
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
                        </div>
                        <div class="flex flex-col xl:flex-row justify-between">
                            <button class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </button>
                            <button class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" onClick={()=>setDataProduct('haa')}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div class="shadow-lg rounded-lg">
                    <a href="#">
                        <img src={Product2} class="rounded-tl-lg rounded-tr-lg" />
                    </a>
                    <div class="p-5">
                        <h3><a href="#">Slim Khaki Tousers</a></h3>
                        <div class="flex flex-row my-3">
                            <div class="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
                        </div>
                        <div class="flex flex-row my-3">
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
                        </div>
                        <div class="flex flex-col xl:flex-row justify-between">
                            <button onClick={()=>setDataProduct(dataProduct+1)} class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </button>
                            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                View Details
                            </a>
                        </div>
                    </div>
                </div>

                <div class="shadow-lg rounded-lg">
                    <a href="#">
                        <img src={Product3} class="rounded-tl-lg rounded-tr-lg" />
                    </a>
                    <div class="p-5">
                        <h3><a href="#">Nike Shoes</a></h3>
                        <div class="flex flex-row my-3">
                            <div class="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
                        </div>
                        <div class="flex flex-row my-3">
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
                        </div>
                        <div class="flex flex-col xl:flex-row justify-between">
                            <button class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </button>
                            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                View Details
                            </a>
                        </div>
                    </div>
                </div>

                <div class="shadow-lg rounded-lg">
                    <a href="#">
                        <img src={Product4} class="rounded-tl-lg rounded-tr-lg" />
                    </a>
                    <div class="p-5">
                        <h3><a href="#">Wirst Watch</a></h3>
                        <div class="flex flex-row my-3">
                            <div class="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
                            <div class="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
                        </div>
                        <div class="flex flex-row my-3">
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
                            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
                        </div>
                        <div class="flex flex-col xl:flex-row justify-between">
                            <button class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </button>
                            <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
