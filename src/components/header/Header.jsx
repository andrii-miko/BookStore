import { CiBookmark } from 'react-icons/ci';
import { IoBookOutline } from 'react-icons/io5';
import { PiPlus, PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { HeaderContainer, LinksContainer, LogoContainer } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <LogoContainer>
          <IoBookOutline size={20} />
          <p>BookStore</p>
        </LogoContainer>
      </Link>
      <LinksContainer>
        <Link to={'/add-book'}>
          <PiPlus size={25} />
        </Link>
        <Link>
          <PiShoppingCartSimpleLight size={25} />
        </Link>
        <Link>
          <CiBookmark size={25} />
        </Link>
        <Link to={'/sign-in'}>Login</Link>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
