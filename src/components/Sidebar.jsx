import { Menu, Transition } from '@headlessui/react'
import { links } from '../globals/SidebarLinks'
import { Link } from "react-router-dom";

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
                  <div className="w-6 h-6 mr-2 h-5 w-5">
                    {link.icon}
                  </div>
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
