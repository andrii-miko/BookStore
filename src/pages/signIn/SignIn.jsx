import { Link } from 'react-router-dom';

import Button from '../../components/button/Button';
import { FormContainer } from './styles';

const SignIn = () => {
  return (
    <FormContainer>
      <h1>Login here</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button>Sign In</Button>
      <Link to={'/sign-up'}>Don&apos;t have an account</Link>
    </FormContainer>
  );
};

export default SignIn;
