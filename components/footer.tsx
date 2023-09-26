import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	return (

<section className="dark:bg-zinc-800 dark:text-slate-300">

<div className="px-8 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="/" aria-label="Home" title="Reficent" className="inline-flex items-center">
      <Image
          className="mb-2 hidden dark:block"
          src="/logo_alone_dark.svg"
          alt="dark-mode-image"
          width={100}
          height={100}
        />
        <Image
          className="mb-2 block dark:hidden"
          src="/logo_alone.svg"
          alt="light-mode-image"
          width={100}
          height={100}
		  />
      </a>

    </div>
    <div className="space-y-2 text-sm">
    <p className="transition-colors duration-300 font-bold text-medium pb-3">
        Menu 
        </p>
      <div className="flex">
      <a href="/" className="transition-colors duration-300 hover:text-primary">Home</a>
      </div>
      <div className="flex">
       <a href="/somos" className="transition-colors duration-300 hover:text-primary">Somos</a>
      </div>
      <div className="flex">
       <a href="/servicios" className="transition-colors duration-300 hover:text-primary">Servicios</a>
      </div>
      <div className="flex">
       <a href="/contacto" className="transition-colors duration-300  hover:text-primary">Contacto</a>
      </div>



    </div>
    <div>
     
      <div className="space-y-2 text-sm">      
      <p className="transition-colors duration-300 font-bold text-medium pb-3">
        Contactanos 
        </p>
      <div className="flex">

        <a href="tel:935700369"className="transition-colors duration-300 hover:text-primary">+ 56 9 3570 0369</a>
      </div>
      <div className="flex">
        <a href="mailto:contacto@reficent.cl" className="transition-colors duration-300 hover:text-primary">contacto@reficent.cl</a>
      </div>
      <div className="flex">
        <p className="transition-colors duration-300">
        Av. Los Pajaritos 3195, Oficina 1208, Maipú, Chile
        </p>
      </div>
    </div>
  </div></div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className=" text-xs text-slate-500 dark:text-slate-400">
      @ Reficent Solution 2023 - Diseñado por <a href="https://orideken.cl" target="_blank" className="transition-colors duration-300 hover:text-primary">Orideken.</a>
    </p>
    <div className="flex items-center space-x-3 pb-3">
        <a href="https://twitter.com/ReficentChile" target="_blank"
        className=" transition-colors duration-300 hover:text-primary">
          <svg viewBox="0 0 512 512" fill="currentColor" className="h-5">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/reficentsolutions" target="_blank"
        className=" transition-colors duration-300 hover:text-primary">
          <svg viewBox="0 0 448 512" fill="currentColor" className="h-6">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/ReficentSolutions/" target="_blank"
        className=" transition-colors duration-300 hover:text-primary">
          <svg viewBox="0 0 320 512" fill="currentColor" className="h-5">
          <path 
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
          </svg>
          </a>
          <a href="https://www.linkedin.com/company/reficentsolutions" target="_blank"
          className=" transition-colors duration-300 hover:text-primary">
          <svg viewBox="0 0 448 512" fill="currentColor" className="h-6">
          <path 
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
         </svg>
        </a>
    </div>
  </div></div>
</section>
    )
}
