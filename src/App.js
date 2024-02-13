import { Transition } from "@headlessui/react";
import Sidebar from "./components/Sidebar";
import { links } from "./globals/SidebarLinks";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div class="flex bg-slate-900">
      {/* Sidebar */}
      <aside className="h-screen sticky top-0 mr-10">
        <Sidebar
          setSelected={setSelected}
        />
      </aside>

      {/* <!-- Contenido principal --> */}
      <main className="flex ">
        <div className="">
          <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
            {links[selected].label}
            <Outlet />
          </h2>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {links.map(e => (
          <Route path={e.href} element={e.component ? <e.component/> : <div>Error??</div>} />
        ))}
      </Route>

    </Routes>
  );
}

export default App;
