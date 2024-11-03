import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { useAuthContext } from '../../providers/AuthProvider';
import { FormContainer } from './styles';

const SignIn = () => {
  const { signIn, isAuth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    signIn({ email, password });
  };
  return (
    <FormContainer>
      <h1>Login here</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSubmit}>Sign In</Button>
      <Link to={'/sign-up'} data-cy={'create-account'}>
        Don&apos;t have an account
      </Link>
    </FormContainer>
  );
};

export default SignIn;
