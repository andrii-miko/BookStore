import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { useAuthContext } from '../../providers/AuthProvider';
import { FormContainer } from './styles';

const SignUp = () => {
  const { signUp, isAuth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password });
  };

  return (
    <FormContainer>
      <h1>Create an account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-cy={'email-input'}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-cy={'password-input'}
      />
      <Button onClick={handleSubmit} data-cy={'sign-up-button'}>
        Sign Up
      </Button>
      <Link to={'/sign-in'}>Already have an account</Link>
    </FormContainer>
  );
};

export default SignUp;
