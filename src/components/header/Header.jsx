import { CiBookmark } from 'react-icons/ci';
import { IoBookOutline } from 'react-icons/io5';
import { PiPlus, PiShoppingCartSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../providers/AuthProvider';
import { HeaderContainer, LinksContainer, LogoContainer } from './styles';

const Header = () => {
  const { isAuth, signOut } = useAuthContext();

  const handleLogout = () => {
    signOut();
  };

  return (
    <HeaderContainer data-cy={'header-container'}>
      <Link to={'/'}>
        <LogoContainer>
          <IoBookOutline size={20} />
          <p>BookStore</p>
        </LogoContainer>
      </Link>
      <LinksContainer>
        {isAuth ? (
          <>
            <Link to={'/add-book'} data-cy={'add-book'}>
              <PiPlus size={25} />
            </Link>
            <button>
              <PiShoppingCartSimpleLight size={25} />
            </button>
            <Link>
              <CiBookmark size={25} />
            </Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <Link to={'/sign-in'} data-cy={'login'}>
            Login
          </Link>
        )}
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
