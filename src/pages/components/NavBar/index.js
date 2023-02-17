import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import Logo from './Logo'
import MenuToggle from './MenuToggle';
import NavBarContainer from './NavBarContainer'
import NavItems from './NavItems';

function NavBar() {
    const { isOpen, onToggle } = useDisclosure()

 const toggle = () => setIsOpen(!isOpen);
  return (
        <>
            <NavBarContainer>
                <Logo />
                <MenuToggle onToggle={onToggle} isOpen={isOpen} />
                <NavItems isOpen={isOpen} />
            </NavBarContainer >
        </>
    )
}

export default NavBar