import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { GiBackup } from 'react-icons/gi'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-gradient-to-r from-cyan-100 to-cyan-500'
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]: text-yellow-200'
        ]
      }}
    >
      <NavbarBrand as={Link} href='/'>
        <GiBackup size={40} className='text-blue-400'/>
        <div className='font-bold text-3xl flex'>
          <span className='text-blue-700'>Hobby</span>
          <span className='text-blue-400'>Mates</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink href='/members' label='Members'/>
        <NavLink href='/lists' label='Lists'/>
        <NavLink href='/messages' label='Messages'/>
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button as={Link} href='/auth/login' variant='bordered' className='text-white'>Login</Button>
        <Button as={Link} href='/auth/register' variant='bordered' className='text-white'>Register</Button>
      </NavbarContent>
    </Navbar>
  )
}
