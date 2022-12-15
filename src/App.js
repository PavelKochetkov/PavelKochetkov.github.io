import React from 'react'
import {Navmenu} from './components/Navmenu'
import { HashRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skill } from './pages/Skill'
import { Contacts } from './pages/Contacts'

const App = () => (
    <HashRouter>
      <Navmenu />
      <div className="container">
        <Routes>
          <Route path = "/" exact  element = {<Home />} />
          <Route path = "/about" element = {<About />}/>
          <Route path = "/skill" element = {<Skill />}/>
          <Route path = "/contacts" element = {<Contacts />}/>
        </Routes>
      </div>
    </HashRouter>
  )
export default App