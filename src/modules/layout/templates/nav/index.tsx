"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Ddmenu from "@modules/layout/components/dropdown-menu/ddmenu"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <div
        className={clsx("h-8 bg-black text-white text-center text-xs", {
          "!hidden": isScrolled,
        })}
      >
        <span className="align-middle pt-3">
          {" "}
          Il nostro impegno per l'ambiente è cucito in ogni abito.
        </span>

        <span className="align-middle pt-3 hidden">
          "Scopri la differenza nella nostra moda autoprodotta."
        </span>
      </div>
      <header
        className={clsx(
          "relative h-24 transition-colors bg-stone-700 opacity-80 border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200 !opacity-100": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          {" "}
          <div className="row flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
          </div>


          <div className="column">
            {" "}
            
            <div className="row flex items-center h-full text-center">
             
              <Link
                href="/"
                className="flex item-center uppercase text-xl text-center font-normal mx-auto pt-12 md:pt-2 tracking-[.75em]"
              ><span>         
              <Image
                src="/logo_paypal_capomannuproductions.png"
                width={35}
                height={35}
                alt=""
                className="flex mr-2"
              
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </span><span className={clsx("invisible w-0 md:w-full md:visible transition-all ease-in-out delay-150 duration-300",{"lg:visible transition-all ease-in-out delay-150 duration-300":isScrolled})} >apo Mannu Productions</span>
                
              </Link>
            </div>
            <div className="row hidden small:block h-full justify pt-6 uppercase ">
              <Ddmenu />
            </div>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-1/2 mb-10">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
              <span>         
              <Image
                src="/account.png"
                width={35}
                height={35}
                alt=""
                className="flex mr-2"
              
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </span>
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
