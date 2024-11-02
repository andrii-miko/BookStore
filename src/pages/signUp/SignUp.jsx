import { Link } from 'react-router-dom';

import Button from '../../components/button/Button';
import { FormContainer } from './styles';

const SignUp = () => {
  return (
    <FormContainer>
      <h1>Create an account</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button>Sign Up</Button>
      <Link to={'/sign-in'}>Already have an account</Link>
    </FormContainer>
  );
};

export default SignUp;
