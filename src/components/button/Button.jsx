import { StyledButton } from './styles';

const Button = ({ children, primary = true, ...rest }) => {
  return (
    <StyledButton $primary={primary} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
