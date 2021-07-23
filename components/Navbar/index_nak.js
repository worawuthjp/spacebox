import classNames from 'classnames';
import variables from 'themes/variables';
import { Image } from 'components';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import { NavbarStyle } from './styled';
export function NavItem({ linkTo, children, className }) {
  return (
    <Link href={linkTo ? linkTo : ''}>
      <a className={classNames('nav-link', 'mr-2', className)}>{children}</a>
    </Link>
  );
}

export function NavbarDropDown({ name, children, className }) {
  return (
    <div className={classNames('dropdown', 'nav-link', className)}>
      <button className="nav-link dropbtn">{name}</button>
      <div className="dropdown-content">{children}</div>
    </div>
  );
}

export function NavDropDownItem({ linkTo, children, className }) {
  return (
    <Link className={classNames(className)} href={linkTo ? linkTo : ''}>
      <a>{children}</a>
    </Link>
  );
}

export default function Navbar({ id, className }) {
  return (
    <NavbarStyle className={classNames('navbar', className)} id={id}>
      <div>
        <NavItem linkTo="/">
          <Image src="../images/SPACE_BOX_JPEG_WHITE_BG.jpg" style={{ height: `${variables.ELEMENTSSIZE.NAVBAR_HEIGHT}` }} />
        </NavItem>
      </div>
      <div className="left-section">
        <NavItem linkTo="/about">About us</NavItem>
        <NavItem linkTo="/product">Product</NavItem>
        <NavbarDropDown name="project">
          <NavDropDownItem linkTo="/project/1">Project1</NavDropDownItem>
          <NavDropDownItem linkTo="/project/2">Project2</NavDropDownItem>
        </NavbarDropDown>
        <NavbarDropDown name="Inspiration">
          <NavDropDownItem linkTo="/blog/idea">ไอเดียการเลือก Buit in</NavDropDownItem>
          <NavDropDownItem linkTo="/blog/review">รีวิวลูกค้า</NavDropDownItem>
        </NavbarDropDown>
        <NavItem linkTo="/contact">Contact us</NavItem>
      </div>

      <div className="right-section">
        <div className="user-nav">
          <div className="user-name">John Doe</div>

          <div className="user-role">Super Admin</div>
        </div>
      </div>
    </NavbarStyle>
  );
}

// Button.defaultProps = {
//   theme: 'primary'
// }
