import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { IoCaretDownOutline, IoSearch } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Menu } from '../../constants';
import Submenu from '../Submenu';
import LogoVector from '../LogoVector';
import useNavbar from './useNavbar';

function Navbar({ history }) {
  const { onChange, onLogoClick, searchInput, userInput } = useNavbar(history);
  const scrollPosition = useScrollPosition();

  return (
    <nav className={`nav ${scrollPosition > 50 ? 'active' : ''}`}>
      <ul className="nav--categories">
        <li>
          <NavLink to="/" onClick={() => onLogoClick()}>
            <LogoVector className="nav--categories__logo" />
          </NavLink>
        </li>
        {Menu.map(({ text, link }, index) => (
          <li
            key={text}
            className={`nav--categories__tab ${index === 0 && 'active'}`}
          >
            <NavLink to={link}>{text}</NavLink>
          </li>
        ))}
      </ul>
      <ul className="nav--menu">
        <li>
          <IoSearch className="nav--icon__search" color="#fff" />
          <input
            ref={searchInput}
            value={userInput}
            onChange={event => onChange(event)}
            className="nav--menu__input"
            type="text"
            placeholder="Title, genres, people"
          />
        </li>
        <li>
          <NavLink className="nav--menu__link" to="/">
            Niños
          </NavLink>
        </li>
        <li>
          <FaRegBell color="#fff" size={'1.2rem'} className="nav--icon__bell" />
        </li>
        <li className="nav--menu__profile--wrap">
          <div className="nav--menu__profile"></div>
          <IoCaretDownOutline color="#fff" className="nav--icon__menu" />
          <Submenu />
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
