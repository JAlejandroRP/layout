import { MyRoutes } from "./globals/Routes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import WorkoutDay from "./components/WorkoutDay";
function App() {
  return (
    // <WorkoutDay/>
    <Routes>
      <Route path="/" element={<Layout />}>
        {MyRoutes.map(e => (
          <Route key={e.label} path={e.href} element={e.component ? <e.component/> : <div>Error??</div>} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
