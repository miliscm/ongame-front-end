import React from 'react'
import { BrowserRouter,Switch, Route } from "react-router-dom"
import Landing from "./pages/Landing"

const routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing}/>
    </Switch>
    
    </BrowserRouter>
  )
}

export default routes
