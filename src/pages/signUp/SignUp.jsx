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
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSubmit}>Sign Up</Button>
      <Link to={'/sign-in'}>Already have an account</Link>
    </FormContainer>
  );
};

export default SignUp;
