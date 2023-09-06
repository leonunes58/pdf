import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <>
      <header id='header'>
        <a href="##" className='insta-gaucho-dev'>@gaucho.dev</a>
        <nav className='navbar'>
          <NavLink to={'/'} className={({isActive}) => (isActive ? 'class-ativo' : 'class-nao-ativo')}>PDF para Word</NavLink>
          <NavLink to={'/pdftopowerpoint'} className={({isActive}) => (isActive ? 'class-ativo' : 'class-nao-ativo')}>PDF para PowerPoint</NavLink>
          <NavLink to={'/wordtopdf'} className={({isActive}) => (isActive ? 'class-ativo' : 'class-nao-ativo')}>Word para PDF</NavLink>
          <NavLink to={'/powerpointtopdf'} className={({isActive}) => (isActive ? 'class-ativo' : 'class-nao-ativo')}>PowerPoint para PDF</NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header