import { FC } from 'react';
import {
  NavBarItemInterface,
  NavBarSocialItemInterface,
} from '../../interfaces';
import './index.css';

interface Props {
  items: NavBarItemInterface[];
  socialLinks: NavBarSocialItemInterface[];
}

export const NavBar: FC<Props> = ({ items, socialLinks, ...props }) => {
  return (
    <nav className={'custom-nav-bar'} {...props}>
      <ul className='custom-nav-bar-left-container'>
        {items &&
          items.map((item: NavBarItemInterface) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
      </ul>
      <ul className='custom-nav-bar-right-container'>
        {socialLinks &&
          socialLinks.map((item: NavBarSocialItemInterface) => (
            <li key={item.name}>
              <a href={item.href} className='nav-bar-social'>
                <img src={item.src} alt={item.name} />
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};
