import { 
  Navigate,
  Route,
  Routes 
} from "react-router-dom";
import { 
  PageLayout 
} from "../pages";
import { routeRegistry } from "./RouteRegistry";

export function MainRoutes () {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {
          routeRegistry.map((route) => 
            <Route key={route.key} path={route.path} element={route.element} />
          )
        }
        <Route path="/" element={<Navigate to={"/home"} replace />} />
      </Route>
    </Routes>
  )
};