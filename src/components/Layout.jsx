import { useState } from "react"
import Sidebar from './Sidebar'
import { MyRoutes } from "../globals/Routes"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  const [selected, setSelected] = useState(-1)
  const getRouteLabel = () => {
    if (selected >= 0)
      return MyRoutes[selected].label

    return MyRoutes.find(e => e.href === window.location.pathname).label
  }
  // console.log(window.location.pathname);
  return (
    <div className="flex bg-slate-900  m-auto">
      {/* Sidebar */}
      <aside className="h-screen min-w-64 sticky top-0 mr">
        <Sidebar
          setSelected={setSelected}
        />
      </aside>

      {/* <!-- Contenido principal --> */}
      <main className="w-full flex flex-row justify-center">
        <Outlet />
      </main>
    </div>
  )
}