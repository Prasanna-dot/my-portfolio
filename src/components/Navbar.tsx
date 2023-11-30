/* eslint-disable react/no-unescaped-entities */
"use client"
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "./../image/logo.png";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="backdrop-blur-sm bg-transparent h-[15vh] fixed top-0 left-0 w-full header z-50"
      initial={{ transform: "translateY(-100%)" }}
      animate={{ transform: "translateY(0%)" }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav
        className="mx-auto px-6 lg:px-[4%] w-full h-full flex items-center justify-between"
        aria-label="Global"
      >
        <div className="w-full flex justify-between items-center">
          <div className="w-[25%] lg:w-[10%] h-full flex justify-center items-center">
            <a href="/">
              <Image src={logo} alt="Logo" style={{ width: "50%" }} />
            </a>
          </div>

            <button
              type="button"
              className="-m-2.5 lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>

          <div className="my-font lg:flex hidden">
          <a
                href="/#home"
                className="font mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ffffff] hover:bg-indigo-500"
              >
                Home
              </a>
              <a
                href="/#project"
                className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ffffff] hover:bg-indigo-500"
              >
                Projects
              </a>
              <a
                href="/#my-journey"
                className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ffffff] hover:bg-indigo-500"
              >
                My journey
              </a>
              <a
                href="#"
                className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#ffffff] hover:bg-indigo-500"
              >
                Let's Talk
              </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" />
        <Dialog.Panel
          className="fixed h-[100vh] inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent px-6 py-6 lg:px-[4%] lg:pt-[1.6%] backdrop-blur-3xl"
          style={{ zIndex: "9999999" }}
        >
          <div className="w-full h-[9vh] flex justify-between items-center">
            <div className="w-[25%] lg:w-[10%] h-full flex justify-center items-center">
              <a href="/">
                <Image src={logo} alt="Logo" style={{ width: "50%" }} />
              </a>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="h-[80vh] flex justify-center items-center">
            <div className="w-[30%] h-auto text-center">
              <a
                href="/" onClick={() => setMobileMenuOpen(false)}
                className="font -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#825846] hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/#project" onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#825846] hover:bg-gray-50"
              >
                Projects
              </a>
              <a
                href="./#my-journey" onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#825846] hover:bg-gray-50"
              >
                My journey
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#825846] hover:bg-gray-50"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
};

export default NavBar;
