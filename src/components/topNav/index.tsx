import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { NavbarProps } from 'react-bootstrap'
import {ScrollSpy} from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery'
import './style.scss'
import NavMenu, {INavProps} from './navMenu';

export const TopNav: React.FC<INavProps> = (props: INavProps) => {
const [variant, setVariant] = useState<NavbarProps['variant']>('light')

useEffect(() => {
    const navbar = document.querySelector('.navbar') as HTMLElement
    const body: any = $('body')

    if (!navbar) return

      // Change nav style for load and top.
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > navbar.offsetHeight) {
            setVariant('light')
        } else {
            setVariant('light')
        }
    })

      // Auto-advance menu.
    new ScrollSpy(body, {
        target: '.navbar.fixed-top',
        offset: navbar.offsetHeight + 50,
    });
})

return (
    <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        role="navigation"
        variant={variant}
    >
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand
                href="https://github.com/kayfernander2022"
                target="_blank"
                className="ml-3 mt-2"
                style={{marginLeft:'20px'}}
            >
                <FontAwesomeIcon size='4x' icon={faCamera} />
            </Navbar.Brand>
        <NavMenu {...props} />
    </Navbar>
    
    
)
}