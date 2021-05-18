import { scrollTo } from 'src/utils/scrollTo';
import { NavProps } from '../Navbar';
import { Nav, NavLink } from './styles';

const DesktopNav = ({ section }: NavProps) => {
  return (
    <Nav>
      <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
      <NavLink onClick={() => scrollTo('about')} className={section === 'About' ? 'selected' : ''}>
        About
      </NavLink>
      <NavLink
        onClick={() => scrollTo('portfolio')}
        className={section === 'Projects' ? 'selected' : ''}
      >
        Portfolio
      </NavLink>
      <NavLink
        onClick={() => scrollTo('contact')}
        className={section === 'Contact' ? 'selected' : ''}
      >
        Contact
      </NavLink>
    </Nav>
  );
};

export default DesktopNav;