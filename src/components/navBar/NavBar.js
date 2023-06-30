import { NavLink } from 'react-router-dom';
import { Group, } from '@mantine/core';
import './style.css';

const NavBar = () => {
 
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

    return ( 
        <Group position="center" spacing="xs" h={64}>
          <ul className="header-list">
            <li className="header-list__item">
              <NavLink to="/" className={({isActive}) => isActive? activeLink : normalLink }>
                Поиск вакансий
              </NavLink>
            </li>
            <li className="header-list__item">
              <NavLink to="/favotites" className={({isActive}) => isActive? activeLink : normalLink }>
                Избранное
              </NavLink>
            </li>
          </ul>
        </Group> 
    );
}
 
export default NavBar;