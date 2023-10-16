'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Image from 'next/image';
import SignIn from './SignIn';
import UserDropdown from './UserDropdown';

import { useAuthContext } from '../../context/AuthContext';

export default function Header() {
  const { user } = useAuthContext();

  return (
    <Navbar className='h-20 bg-grey-800'>
      <NavbarBrand>
      <p className='copyright text-sm '>
        Sustainer
      </p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          {user == null ? <SignIn /> : <UserDropdown user={user} />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
