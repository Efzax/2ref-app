"use client"

import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function ContactoPage() {
	return (

		<>
    {/* seccion Contact */}
		<section className="bg-gradient-to-b from-slate-50 to-slate-200 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800">
		<div className="relative overflow-hidden ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <motion.div 
		  initial={{ opacity: 0, x: -100 }}
		  animate={{ opacity: 1, x: 0 }}
		  transition={{ duration: 1 }}
		  
		  className="sm:max-w-lg pb-20 pt-24">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Contacto
            </h1>
            <p className="mt-4 text-xl font-normal">
			Tienes alguna duda o deseas realizar alguna cotización o evaluación, no dudes en comunicarte con nosotros.
            </p>
          </motion.div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <motion.div
			  initial={{ opacity: 0, x: 50 }}
			  animate={{ opacity: 1, x: 0 }}
			  transition={{ duration: 1.2 }}

                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex h-screen items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className=" h-96 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 drop-shadow-lg">
                        <Image
                          src="/cont_2.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-60 overflow-hidden rounded-lg drop-shadow-lg  grayscale ">
                        <Image
                          src="/cont_1.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>


		</section>
		
    {/* seccion info */}
		<section className=" py-40 bg-slate-100 dark:bg-zinc-700">

    {/* seccion mail */}
		<div className="mt-6 space-y-12 md:grid sm:grid-cols-3 md:gap-x-6 md:space-y-0 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
              <div className="flex justify-center items-center pb-10">
              <svg viewBox="0 0 384 512" fill="#475569" className="h-16">
          <path 
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
         </svg></div>
                <p className="text-2xl font-semibold text-gray-600">Dirección</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-base font-normal tracking-tight text-gray-900">Av. Los Pajaritos 3195, Oficina 1208, Maipú, Chile</span>
                </p>
              </div>
            </div>
          </div>
          

          
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
              <div className="flex justify-center items-center pb-10">
              <svg viewBox="0 0 512 512" fill="#475569" className="h-16">
          <path 
          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
         </svg></div>
                <p className="text-2xl font-semibold text-gray-600">Correo</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <a href="mailto:contacto@reficent.cl" className="text-base font-normal tracking-tight text-gray-900">contacto@reficent.cl</a>
                </p><p>&nbsp;</p>
              </div>
            </div>
          </div>
          


         
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
              <div className="flex justify-center items-center pb-10">
              <svg viewBox="0 0 384 512" fill="#475569" className="h-16">
          <path 
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
         </svg></div>
                <p className="text-2xl font-semibold text-gray-600">Fono / Whatsapp</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <a href="tel:935700369" className="text-base font-normal tracking-tight text-gray-900">+ 56 9 3570 0369</a>
                </p><p>&nbsp;</p>
              </div>
            </div>
          </div>
          

</div>
		
		</section></>
	);
}