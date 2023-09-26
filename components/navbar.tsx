import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image"
import { ThemeSwitch } from "./theme-switch";


export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" className="fixed dark:bg-zinc-800">
			<NavbarContent className="basis-2/3 sm:basis-full " justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">

	  <div>
        <Image
          className="mb-2 hidden dark:block"
          src="/logo_d.svg"
          alt="dark-mode-image"
          width={140}
          height={140}
        />
        <Image
          className="mb-2 block dark:hidden"
          src="/logo_l.svg"
          alt="light-mode-image"
          width={140}
          height={140}
		  />
   </div>

    
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-5 justify-star ml-9">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium hover:font-semibold hover:text-primary"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-2/3 sm:basis-full "
				justify="end"
			>
				<NavbarItem className="hidden lg:flex gap-2 ">
				<ThemeSwitch/>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="dark:bg-zinc-800">
				
				<div
				 className="mx-4 mt-16 flex flex-col gap-8 ">
					
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link 
											
							className=" transition duration-700 ease-linear dark:text-slate-50 text-slate-900 font-normal mt-2 text-4xl hover:translate-x-4 hover:font-medium hover:text-primary dark:hover:text-orange-500"	
							href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
