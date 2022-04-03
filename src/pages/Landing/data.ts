import twitterIcon from '../../assets/twitter.svg';
import facebookIcon from '../../assets/facebook.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import slider_1 from '../../assets/slider_1.jpg';
import slider_2 from '../../assets/slider_2.jpg';
import slider_3 from '../../assets/slider_3.jpg';

export const navBarList = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const socialMediaList = [
  { name: 'twitter', src: twitterIcon, href: 'https://twitter.com/' },
  { name: 'facebook', src: facebookIcon, href: 'https://facebook.com/' },
  { name: 'linkedin', src: linkedinIcon, href: 'https://linkedin.com/' },
];

export const sliderImages = [
  { id: 1, src: slider_1 },
  { id: 2, src: slider_2 },
  { id: 3, src: slider_3 },
];

export const stepperItems = ['First', 'Second', 'Third', 'Fourth'];
