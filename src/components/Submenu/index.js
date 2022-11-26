import React from 'react';
import { BiUser } from 'react-icons/bi';
import { MdOutlineEdit } from 'react-icons/md';
import { IoHelpCircleOutline } from 'react-icons/io5';

const Submenu = () => (
  <ul className="submenu">
    <li className="submenu--item">
      <div className="submenu--item__avatar"></div>
      <p className="submenu--item__text">User</p>
    </li>
    <li className="submenu--item">
      <div className="submenu--item__avatar"></div>
      <p className="submenu--item__text">User</p>
    </li>
    <li className="submenu--item">
      <div className="submenu--item__avatar"></div>
      <p className="submenu--item__text">User</p>
    </li>
    <li className="submenu--item divider">
      <MdOutlineEdit className="submenu--item__icon" />
      <p className="submenu--item__text">Administrar perfiles</p>
    </li>
    <li className="submenu--item">
      <BiUser className="submenu--item__icon" />
      <p className="submenu--item__text">Cuenta</p>
    </li>
    <li className="submenu--item">
      <IoHelpCircleOutline className="submenu--item__icon" />
      <p className="submenu--item__text">Centro de ayuda</p>
    </li>
    <li className="submenu--item divider">
      <p className="submenu--item__text">Cerrar sesión en Netflix</p>
    </li>
  </ul>
);

export default Submenu;
