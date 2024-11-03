import { StyledButton } from './styles';

const Button = ({ children, primary = true, ...rest }) => {
  return (
    <StyledButton $primary={primary} {...rest} data-cy={'button'}>
      {children}
    </StyledButton>
  );
};

export default Button;
