import { useEffect, useState } from 'react'
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const searchData=()=>{
      
    };
    searchData();
  }, [])
  
  

  return (
    <header className="bg-transparent backdrop-blur-sm fixed w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Weather App</span>
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            <span className="font-semibold text-xl">Climalive</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link to="/locations" className="text-sm font-semibold leading-6 text-gray-900">
            Locations
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <div className="flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-full shadow-md">
            <input className="focus-within:outline-none bg-transparent" type="search" placeholder="search" name="locations" id="searchlocations" />
            <button>
              <FaSearch/>
            </button>
          </div>          
        </div>        
      </nav>

      {mobileMenuOpen && 
      <div className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full h-screen overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl sm:rounded-l-md">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              <span className="font-medium text-xl">Climalive</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/locations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Locations
                </Link>
                
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
              </div>
              <div className="flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-full shadow-md">
                <input className="focus-within:outline-none bg-transparent w-full" type="search" placeholder="search" name="locations" id="searchlocations" />
                <button>
                  <FaSearch/>
                </button>
              </div> 
            </div>
          </div>
        </div>
      </div>
      }
    </header>
  )
}
