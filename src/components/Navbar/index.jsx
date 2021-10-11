import React from 'react'
import { Head, Icon, Ul, Menu, LogoText } from './styles'

export const Navbar = () => {
  return (
    <Head>
      <Icon>
        <LogoText> <a href='/'> Carlos Sanchez Meneses </a> </LogoText>
      </Icon>
      <Menu>

        <Ul>
          <li> <a href='Works'>Works</a></li>
          <li> <a href='/skills'> Skills </a> </li>
          <li> <a href='/education'> Education </a>  </li>
          <li> <a href='/constact'> Contact</a></li>
        </Ul>

      </Menu>
    </Head>
  )
}
