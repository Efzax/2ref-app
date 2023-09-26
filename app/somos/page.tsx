"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const people = [
	{
	  name: 'Leslie Alexander',
	  role: 'Co-Founder / CEO',
	  imageUrl:
		'/daniel.jpg',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
		  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
	  },

	  {
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
		  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
	  },
]

export default function SomosPage() { 
	return (

		<>
		{/* seccion somos*/ }
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
              Somos
            </h1>
            <p className="mt-4 text-xl font-normal">
			Somos una empresa fundada en 2020 compuesta por profesionales con más de 10 años de experiencia, 
			ejecutando obras de mantención e instalaciones eléctricas, capaz de crear y aportar valor a nuestros 
			clientes.
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
                      <div className=" h-64 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg dark:opacity-90 blur-sm">
                        <Image
                          src="/r-back.jpg"
						  width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
					  <div className=" h-64 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg dark:opacity-90">
                        <Image
                          src="/r-back.jpg"
						  width={415}
                          height={415}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
					  <div className=" h-64 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg dark:opacity-90 blur-md">
                        <Image
                          src="/r-back.jpg"
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
		
		{/* seccion mision - vision */}
		<section className="flex flex-col items-center justify-center bg-zinc-700 py-12 text-slate-200">

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-8 mx-auto max-w-7xl">
					<div className="sm:px-16 pb-16">
						<div>
							<p className="text-2xl font-bold pb-8">Misión</p>
						</div>
						<p>
						Brindar un servicio a nivel nacional, cumpliendo con los estándares de calidad y seguridad, 
						mejorando continuamente los procesos internos y brindando soluciones integrales para cada 
						requerimiento, complementados con personal capacitado y comprometido en cada uno de los servicios 
						que se ejecuten, donde nuestra base fundamental es el compromiso con nuestros clientes.
						</p>
					</div>

					<div className="sm:px-16">
						<div>
							<p className="text-2xl font-bold pb-8">Visión</p>
						</div>
						<p>
						Ser referentes en el mercado del rubro eléctrico tanto en las instalaciones como en el 
						mantenimiento industrial y domiciliario, manteniendo nuestro compromiso y profesionalismo 
						que nos representa.
						</p>
					</div>
				</div>

		</section>
	
		{/* seccion team 
		<section className="">    
    <div className="bg-gray-100 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold">Nuestro Equipo</h2>

          <div className="mt-6 space-y-12 md:grid sm:grid-cols-3 md:gap-x-6 md:space-y-0">
		  {people.map((person) => (
              <div key={person.name} className="group relative">
                <div className=" h-full w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-1 md:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-96">
                  <img
                    src={person.imageUrl} 
                    className="h-96 w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm ">
                    <span className="absolute inset-0" />
                    {person.name}
                  
                </h3>
                <p className="text-base font-semibold ">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    	</section>*/}
	
		</>
	);
}

