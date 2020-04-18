import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main'); // settings, animals
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.gotoMenu && setActiveMenu(props.gotoMenu)}
      >
        {props.leftIcon && <span className='icon-left'>{props.leftIcon}</span>}
        {props.children}
        {props.rightIcon && (
          <span className='icon-right'>{props.rightIcon}</span>
        )}
      </a>
    );
  }
  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        unmountOnExit
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<BoltIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            gotoMenu='settings'
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        unmountOnExit
        classNames='menu-secondary'
      >
        <div className='menu'>
          <DropdownItem leftIcon={<ArrowIcon />} gotoMenu='main'></DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export default App;
