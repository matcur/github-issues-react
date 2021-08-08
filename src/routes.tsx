import { Route } from "react-router-dom";
import {Issues} from "./pages/Issues";

const routes = [
  <Route path="/:owner/:repository/issues" component={Issues}/>
]

export {routes}