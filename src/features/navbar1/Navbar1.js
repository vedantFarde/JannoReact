import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    current: false,
  },
  {
    name: "Dashboard1",
    href: "/newdashboard",
    current: false,
  },
  { name: "Crate New Bot", href: "/createNewBot", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar1({ handelLogOut }) {
  return (
    <Disclosure as="nav" className="bg-slate-50 sticky top-0 z-10 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h3 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    <Link to="/">Jaano</Link>
                  </h3>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <>
                      {navigation.map((item) => (
                        <div key={item.name}>
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-black"
                                : "text-black hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}>
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="absolute flex flex-wrap gap-x-1 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={handelLogOut}
                    className="bg-black flex items-center text-white px-4 rounded-md py-2 hover:bg-white hover:text-black">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col items-center justify-center  space-y-1 px-2 pb-3 pt-2">
              <div className=" w-full space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-700 text-black"
                        : "text-black hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="flex flex-row item-center w-full gap-1">
                <button
                  type="/button"
                  onClick={handelLogOut}
                  className="bg-black flex items-center justify-center text-white w-1/2 px-4 rounded-md py-2 hover:bg-white hover:text-black">
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
