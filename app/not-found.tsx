"use client"

import { Link } from "@nextui-org/link";
import { motion } from "framer-motion"
import React from "react";
 
export default function NotFound() {
  return (

<main className="grid min-h-full place-items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">ERROR</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Pagina no encontrada</h1>
          <p className="mt-6 text-base leading-7">No te preocupes, si necesitas algo solo comunicate con nosotros.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1.2 }}
       className="pt-4">
          <Link href="./contacto" as={Link}>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-orange-500 text-slate-50 shadow-lg py-2 px-5 rounded-full text-lg">
            concreta una visita
          </motion.button></Link>
        </motion.div>
          </div>
        </div>
      </main>
    
    
  );
}