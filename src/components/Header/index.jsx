import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import * as C from './styles'

export function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (window.pageYOffset < 150) {
      setChangeBackground(false)
    }
  }

  return (
    <C.Container $changeBackground={changeBackground}>
      <img src={Logo} alt="logo-movies-dev" />
      <C.Menu>
        <C.Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </C.Li>
        <C.Li $isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </C.Li>
        <C.Li $isActive={pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </C.Li>
      </C.Menu>
    </C.Container>
  )
}
