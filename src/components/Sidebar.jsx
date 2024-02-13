import { Menu, Transition } from '@headlessui/react'
import { links } from '../globals/SidebarLinks'
import {  Link } from "react-router-dom";

export default function Sidebar({ setSelected }) {
  return (
    <Menu>
      {/* <Menu.Button>Options</Menu.Button> */}
      <Menu.Items static={true} className="right-0 m-4 mt-20 origin-top-right  rounded-md  ">
        {links.map((link, i) => (
          <div className="px-1 py-1 ">

            <Menu.Item>
              {({ active }) => (
                <Link
                  onClick={() => setSelected(i)}
                  to={link.href}
                  className={`${active ? 'text-slate-50' : 'text-gray-400'
                    } group flex w-full items-center rounded-md px-2 py-2 text-lg`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>
                  {link.label}
                </Link>
              )}
            </Menu.Item>

          </div>
        ))}
      </Menu.Items>
    </Menu >
  )
}
