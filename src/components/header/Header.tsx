'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const [darkMode, setDarkMode] = useState(false)

// //changement de thème
// useEffect(() => {
//     if (darkMode) {
//         document.documentElement.classList.add('dark')
//     } else {
//         document.documentElement.classList.remove('dark')
//     }
// },[darkMode]);

const products = [
  { name: 'Gestion de prescription', description: 'Ne t\'en fait plus , tes informations seront bien stockés', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Vous pouvez échangés directement avec le docteur', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Securité', description: 'Vos infos médicales seront crypté pour que seul le docteur en a l\'accés', href: '#', icon: FingerPrintIcon },
  { name: 'Mbola misy ony fa apiny aveo', description: 'Ny Ranto ony ovy be', href: '#', icon: SquaresPlusIcon },
  { name: 'Automatisations', description: 'Vous serez informez dès lors que le docteur aurais fait une mise à jour de vôtre prescription', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'S\'inscrire', href: '#signin', icon: PlayCircleIcon },
  { name: 'Nous contacter', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="font-mono bg-transparent">
      <nav aria-label="Global" className="mx-auto flex max-w-8xl items-center justify-between xl:px-0">

        <div className="flex lg:flex-1">
          <Link to="/home" className="-m-1.5 p-1.5">
            <span className="font-serif py-2 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
              HelseCare
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lime-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <Popover className="relative">

            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
              Fonctionnalités
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-50" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-lime-300  shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-gray-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-900">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-white bg-lime-300">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-white"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6  text-gray-50">
            <Link to="/team">Qui Sommes-nous ?</Link>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            <Link to="/contact">Contact</Link>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            <Link to="/membership">Abonnement</Link>
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="" className="text-sm font-semibold leading-6 text-gray-50 border-2 rounded-md border-lime-600 px-10 py-2 hover:bg-lime-600 hover:text-white">
            <Link to="/signin">Sign-In</Link> <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* <button className="hidden lg:flex lg:flex-1 lg:justify-end" onClick={() => setDarkMode(!darkMode)}>
            <i className="text-black text-2xl uil uil-sun"></i>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">HelseCare</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-lime-600"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-900">
                    Fonctionnalités
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to="/team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                >
                  Qui Sommes-nous ?
                </Link>
                <Link to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                >
                  Contact
                </Link>
                <Link to="/membership"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                >
                  Abonnement
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50 hover:text-gray-900"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}