"use client"

import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import React from "react";

export default function ServiciosPage() {
	return (

		<>
		{/* seccion servicios*/ }
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
              Servicios
            </h1>
            <p className="mt-4 text-xl font-normal">
			Especialistas y detallistas, nos enfocamos en prioirzar tu seguridad
						y entregar un resultado optimo, seguro y sobre todo acorde a tus 
						necesidades.
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
                      <div className=" h-64 w-60 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 grayscale drop-shadow-lg">
                        <Image
                          src="/service-2.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-60 overflow-hidden rounded-lg drop-shadow-lg">
                        <Image
                          src="/service-3.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 drop-shadow-lg">
                      <div className="h-64 w-60 overflow-hidden rounded-lg">
                        <Image
                          src="/service-4.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-60 overflow-hidden rounded-lg hue-rotate-15 drop-shadow-lg">
                        <Image
                          src="/service-5.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-60 overflow-hidden rounded-lg drop-shadow-lg ">
                        <Image
                          src="/service-1.jpg"
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
		
		{/* seccion servicios detalle*/ }
		<section className="bg-slate-50 dark:bg-zinc-700">
		<div className="py-24 sm:py-32">
      <motion.div
	  initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
	   className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none bg-slate-100 dark:bg-zinc-200">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Planos Eléctricos</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
			Elaboramos planos eléctricos, para clientes que requieran una certificación SEC o para aumento de capacidad. 
			Los planos eléctricos detallan los aspectos necesarios de una instalación eléctrica cumpliendo con la vigente 
			normativa y requerimientos del (SEC) Superintendencia de Electricidad y Combustible.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
		  <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 ">
              <div className="mx-auto object-cover">
			  <Image
                          src="/s_pe.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-96 w-full object-cover object-center py-3 px-3 rounded-3xl"
                        />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

	  <motion.div
	  initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
	   className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none bg-slate-100 dark:bg-zinc-200">
			<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 ">
              <div className="mx-auto object-cover">
			  <Image
                          src="/s_sec.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-96 w-full object-cover object-center py-3 px-3 rounded-3xl"
                        />
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Certificación Eléctrica TE1</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
			La regularización TE1 de una instalación es documento emitido por la Superintendencia de Electricidad (SEC)
			a los propietarios de una instalación eléctrica para certificar que esta instalación cumple la norma 
			eléctrica vigente sin generar riesgos para las personas que la utilizan. Se requiere de un instalador 
			eléctrico autorizado por la SEC clase A – B – C o D para presentar planos y otros documentos que 
			acrediten la instalación de esta manera se podrá obtener el certificado SEC TE1.</p>
            <div className="mt-10 flex items-center gap-x-4">
            </div>
          </div>

        </div>
      </motion.div>


	  <motion.div
	  initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
	   className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none bg-slate-100 dark:bg-zinc-200">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Instalación Domiciliaria</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
			La energía eléctrica es muy importante para la vida cotidiana, sin embargo, también significa un riesgo para la vida humana, 
			entonces es necesario establecer la máxima seguridad para cuidar la integridad de las personas y de igual forma los 
			bienes materiales de su hogar. Es muy importante realizar evaluaciones periódicas de las instalaciones, 
			sobre todo si tienen una antigüedad de más de 15 años que nos sirven para determinar si es necesario hacer 
			cambios de conductores eléctricos, tomacorrientes, entre otros elementos que posiblemente no estén aptos y 
			que originan fugas que pasan desapercibidos
            </p>
            <div className="mt-10 flex items-center gap-x-4">
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
		  <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 ">
              <div className="mx-auto object-cover">
			  <Image
                          src="/s_hom.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className=" h-96 w-full object-cover object-center py-3 px-3 rounded-3xl"
                        />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

	  <motion.div
	  initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
	   className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none bg-slate-100 dark:bg-zinc-200">
			<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 ">
              <div className="mx-auto object-cover">
			  <Image
                          src="/s_rev.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className="h-96 w-full object-cover object-center py-3 px-3 rounded-3xl"
                        />
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Inspección técnica eléctrica</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
			Una inspección eléctrica garantizará que el cableado de su hogar o negocio y otros componentes eléctricos estén en buen estado de 
			funcionamiento y no representen un peligro para usted o su familia. Esto involucra varios puntos:</p>
			<p className="text-base leading-7 text-gray-600">
			Determinar cualquier peligro eléctrico, comprobar cableado en buen estado, verificar cables expuestos, comprobar el cableado obsoleto,
			prueba de interruptores de seguridad, revisión de Tablero eléctrico, prueba de puntos de potencia e iluminación,
			evaluar el nivel de servicio eléctrico,	chequear elemento eléctrico que no cumpla con las normas actuales.</p>
            <div className="mt-10 flex items-center gap-x-4">
            </div>
          </div>

        </div>
      </motion.div>
	  
	  <motion.div 
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
	   className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none bg-slate-100 dark:bg-zinc-200">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Mantenciones Eléctricas</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
			El mantenimiento eléctrico preventivo y correctivo es la realización de inspecciones rutinarias, pruebas y servicios en el equipo 
			eléctrico, para que se puedan detectar, reducir o suprimir problemas inminentes. Esto permite así la disminución de los 
			tiempos de parada, además de los siguientes beneficios:
			Conseguir que los equipos funcionen de forma eficiente e ininterrumpidamente. Mantener permanentemente los equipos e 
			instalaciones en estado óptimo. Prolongar la vida útil de los equipos e instalaciones al máximo.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
		  <div className="rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 ">
              <div className="mx-auto object-cover">
			  <Image
                          src="/s_mant.jpg"
                          width={415}
                          height={415}
                          alt=""
                          className=" h-96 w-full object-cover object-center py-3 px-3 rounded-3xl"
                        />
              </div>
            </div>
          </div>
        </div>
      </motion.div>


    </div>

	
		
		</section>
		
		</>
	);
}