import { Route } from "react-router-dom";
import { Issues } from "./pages/Issues";

let index = 0

const routes = [
  <Route key={index++} path="/:owner/:repository/issues" component={Issues}/>
]

export {routes}