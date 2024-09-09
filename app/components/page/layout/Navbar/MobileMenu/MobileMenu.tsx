import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DialogProps } from '@/types/component';
import Logo from '@/app/assets/logo/Enfold-logo-white.png';
import Image from 'next/image';


const MobileMenu: React.FC<DialogProps> = ({ navigation, open, setMobileMenuOpen }) => {
  return (
    <Dialog open={open} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-enfold_red text-white p-4 sm:max-w-full sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/">
            <span className="sr-only">Enfold</span>
            <span className="text-2xl">
            <Image src={Logo} width="150" />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-16 px-8 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 white-text">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
      </DialogPanel>
    </Dialog>
  );
};

export default MobileMenu;
