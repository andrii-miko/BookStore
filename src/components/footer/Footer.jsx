import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer data-cy={'footer-container'}>
      <span>BookStore project</span>
      <div>
        <Link to={'https://github.com/andrii-miko'} target="blank">
          <SlSocialGithub size={20} />
        </Link>
        <Link to={'https://www.instagram.com/andrii.miko/profilecard/?igsh=MTlkYXRjeGRxZGJqMw=='} target="blank">
          <SlSocialInstagram size={20} />
        </Link>
        <Link
          to={'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B9-%D0%BC%D1%96%D0%BA%D0%BE-b33944263/'}
          target="blank"
        >
          <SlSocialLinkedin size={20} />
        </Link>
      </div>
      <span>by Andriy</span>
    </FooterContainer>
  );
};

export default Footer;
