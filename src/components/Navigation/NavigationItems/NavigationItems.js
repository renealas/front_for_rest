import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItems.css';

const navItems = [
  { id: 'feed', text: 'Articulos', link: '/', auth: true },
  { id: 'login', text: 'Acceder', link: '/', auth: false },
  { id: 'signup', text: 'Registrarse', link: '/signup', auth: false }
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Salir</button>
    </li>
  )
];

export default navigationItems;
