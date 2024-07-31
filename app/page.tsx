"use client"

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import React from "react";
import { motion } from "framer-motion"
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import {Link} from "@nextui-org/link";


const features = [
  {
    name: 'Certificación eléctrica TE1',
    description:
      'Certificación a propietarios de una instalación eléctrica que cumple la norma eléctrica vigente sin generar riesgos para las personas que la utilizan.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Instalación domiciliaria',
    description:
      'Se establence la máxima seguridad para cuidar la integridad de las personas y de igual forma los bienes materiales de su hogar.',
    icon: LockClosedIcon,
  },
  {
    name: 'Inspección técnica eléctrica',
    description:
      'Garantizar que los componentes eléctricos estén en buen estado de funcionamiento y no representen un peligro para usted o su familia.',
    icon: ArrowPathIcon,
  },
]

const list = [
  {
    name: "Leopoldo",
    img: "/avatar.svg",
    rrss: <><AiFillStar className="inline-block text-orange-500" />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " /></>,
    comment: "Estoy encantado de recomendar los servicios eléctricos proporcionados por Reficent Spa. Su nivel de profesionalismo y experiencia es simplemente excepcional. Recientemente, tuve la oportunidad de contratar sus servicios para llevar a cabo una serie de trabajos eléctricos en mi departamento, y el resultado superó todas mis expectativas",
  },
  {
    name: "Gustavo",
    img: "/avatar2.svg",
    rrss: <><AiFillStar className="inline-block text-orange-500" />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " /></>,
    comment: "Muy buen trato, deferencia y disposición, además de conocimiento técnico de excelencia, profesionalismo y compromiso con su trabajo. Desempeño y eficiencia más allá de la tarea a realizar. Totalmente recomendable.",
  },
  {
    name: "Daniel Parra",
    img: "/avatar.svg",
    rrss: <><AiFillStar className="inline-block text-orange-500" />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " /></>,
    comment: "Excelente trabajo realizado por ambos profesionales que visitaron mi hogar. Muy amables, con un disposición tremenda al momento de explicarnos que había sucedido. Me dejaron todo claro desde el día de la revisión. Destaco mucho su profesionalismo y experiencia!! Se necesita más gente honesta y comprometida con su labor.",
  },
  {
    name: "Maria José Burgos",
    img: "/avatar2.svg",
    rrss: <><AiFillStar className="inline-block text-orange-500" />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " />
    <AiFillStar className="inline-block text-orange-500 " /></>,
    comment: "Estamos muy agradecidas del gran trabajo de Daniel y Patricio. Renovamos todo el sistema eléctrico de nuestra casa y realizaron un excelente trabajo que nos dejó muy felices y satisfechas, se demoraron incluso menos días de lo que nos habían dicho inicialmente, se preocuparon de cumplir con todos los detalles que les solicitamos y también de no interrumpir nuestro trabajo online.",
  },
  {
      name: "Macarena",
      img: "/avatar.svg",
      rrss: <><AiFillStar className="inline-block text-orange-500" />
      <AiFillStar className="inline-block text-orange-500" />
      <AiFillStar className="inline-block text-orange-500" />
      <AiFillStar className="inline-block text-orange-500" />
      <AiFillStar className="inline-block text-slate-500" /></>,
      comment: "Solucionó el problema con la electricidad en la parte exterior del edificio, fue innovador con el sistema de apagado y encendido de luces, es muy paciente y muy comprometido con su trabajo, además fue puntual con la hora y día de llegada, hizo un buen trabajo!. Estamos muy agradecidos!.",
    },
    {
      name: "Gloria Valiente",
      img: "/avatar2.svg",
      rrss: <><AiFillStar className="inline-block text-orange-500" />
      <AiFillStar className="inline-block text-orange-500 " />
      <AiFillStar className="inline-block text-orange-500 " />
      <AiFillStar className="inline-block text-orange-500 " />
      <AiFillStar className="inline-block text-orange-500 " /></>,
      comment: "El equipo es muy amable, respetuoso y ordenado, además de tener muy buena disposición para aclarar dudas y explicar de manera profesional todo lo relacionado al proceso de instalación. También destaco que buscaron soluciones a todos nuestros requerimientos a pesar de ser una casa antigua, ya fueran arreglos complejos o pequeños detalles.",
    },
];


export default function Home() {
	return (
		<>
    
      {  /* Seccion Header */ }
    <section id="Home" className=" flex flex-col items-center justify-center gap-4 pb-12 px-6 h-screen bg-top bg-fixed bg-[url('/back.jpg')] dark:bg-[url('/back_dark.jpg')]">
<div className="container max-w-7xl sm:mx-6">
      <motion.div className=" inline-block text-left font-semibold w-7xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
      >
        <div className="mt-8">
        <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
         className="text-xl font-medium leading-7 text-slate-900">Profesionales certificados.</motion.h2>
      </div>
        <p className="mt-2 text-5xl font-semibold tracking-tight sm:text-7xl py-4  text-slate-900">
              Soluciones <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">Eléctricas</span><br />
              Para tu tranquilidad.
            </p>
      

      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1.2 }}
       className="pt-4">
          <Link href="/contacto" as={Link}>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-orange-500 text-slate-50 shadow-lg py-2 px-5 rounded-full text-lg">
            concreta una visita
          </motion.button></Link>
        </motion.div></motion.div></div>
      </section>



     {  /* Seccion Servicios */ }
      <section id="Servicios" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-6">

      <div className="container pt-24 pb-4 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2 
             initial={{ opacity: 0, y: 100}}
             whileInView={{ opacity: 1, y: 0}}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 1.1 }}
             className="text-base text-primary font-ligth leading-7">Profesionales certificados.</motion.h2>
            <motion.p 
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }} 

            className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
              Cuentas con personales especialistas y servicios a tu medida para cubrir los requisitos mas exigentes.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <motion.div
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }} 
                
                key={feature.name} className="relative pl-16">
                  <dt className="text-xl font-medium leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }} 
        
        className="flex flex-col items-center pt-16">
          <Link href="/servicios" as={Link}>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-orange-500 text-slate-50 shadow-lg py-2 px-5 rounded-full text-lg">
            Vea todos nuestros servicios
          </motion.button></Link>
        </motion.div>
      </div>

      <div className='mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
        <div className="items-center justify-center">
                      asdasdasdasd
                    </div>
                    <div className="items-center justify-center">
                      Personal certificado 
                      NFPA 70E: Seguridad Eléctrica en Lugares de Trabajo
                    </div>
        </div>
      </div>

    </section>
    
 
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-orange-500 px-8">
          <div className="mx-auto max-w-2xl lg:text-center py-8">
              <motion.h2
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }} 
               className="text-base text-slate-50 font-ligth leading-7">Nuestros clientes hablan</motion.h2>
              <motion.p
              initial={{ opacity: 0, y: 100}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }} 
       className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl text-slate-50">
                  Confíe en las voces reales de nuestros clientes.
              </motion.p>
          </div>

          
          <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
                  {list.map((item, index) => (
                      <Card key={index} className="max-w-[400px] dark:bg-zinc-800">
                          <CardHeader className="flex gap-3 ">
                              <Avatar  src={item.img} />

                              <div className="flex flex-col">
                                  <p className="text-md">{item.name}</p>
                                  <p className="text-small text-default-500">{item.rrss}</p>
                              </div>
                          </CardHeader>
                          <Divider className="dark:bg-slate-300" />
                          <CardBody>
                              <p>{item.comment}</p>
                          </CardBody>
                      </Card>
                  ))}



              </div>
<h2 className=" text-lg text-slate-50 font-ligth">Puedes ver todos los comentarios de nuestros clientes.</h2>
              <motion.div 
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }} 
               className="flex gap-3 py-9">
              <Link 
        href="https://empresas.habitissimo.cl/pro/reficent-spa"
        target="_blank"
        >
        <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="bg-slate-50 text-orange-500 shadow-lg hover:bg-slate-100 py-2 px-5 rounded-full text-lg">
          Leer más en habitissimo 
        </motion.button></Link>
        </motion.div>
</section>   {  /* Lista de Comentarios */ }
    
    {  /* Seccion nuestros clientes */ }
    <section>    
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl text-center">
          Contamos con la confianza de nuestros clientes
        </h2>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-12 bg-slate-200 rounded-3xl py-10">
          <Image
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 my-2"
            width={415}
            height={415}
            src="/c_s_logo.svg"
            alt="Transistor"
          />
          <Image
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 my-2"
            width={415}
            height={415}
            src="/logo_fusi.png"
            alt="Transistor"
          />
          <Image
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 my-2"
            width={415}
            height={415}
            src="/logo_pia.png"
            alt="Transistor"
          />
          <Image
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 my-2"
            width={415}
            height={415}
            src="/logo-servimec.png"
            alt="Transistor"
          />

        </div>
      </div>
    </div>
    </section>


<section>  {  /* Seccion CTA */ }
<div className="bg-slate-100 dark:bg-zinc-800">
      <motion.div 
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      
      className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-slate-900 dark:bg-gray-200 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#00000" />
                <stop offset={1} stopColor="#94a3b8" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-900 sm:text-4xl">
              Personal Certificado
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 dark:text-slate-900 ">
              Contamos con personal con Licencia autorizada por la Superintendencia de Electricidad y Combustible (SEC).
            </p>
  
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/cert-SEC.jpg"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </motion.div>
    </div>


</section>

      </>
	);
}
