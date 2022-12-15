import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/navmenu.css'

export const Navmenu = () => (
    <nav className="navmenu navbar navbar-dark navbar-expand-jg">
        <div className="titlename">
            PAVEL KOCHETKOV
        </div>
        <ul className="nav nav-item justify-content-end">
            <li className="">
                <NavLink to ="/" exact className="bt nav-link">Главная</NavLink>
            </li>
            <li className="">
                <NavLink to ="/about" className="bt nav-link">Обо мне</NavLink>
            </li>
            <li className="">
                <NavLink to ="/skill" className="bt nav-link">Навыки</NavLink>
            </li>
            <li className="">
                <NavLink to ="/contacts" className="bt nav-link">Контакты</NavLink>
            </li>
        </ul>

    </nav>
)