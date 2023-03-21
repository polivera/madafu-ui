import styled from "@emotion/styled";
import { FormControl, FormLabel, Input } from "@mui/joy";

const LoginWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 300px;
  transform: translate(-50%, -50%);
  background-color: red;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <div>
        <div>Login</div>
        <FormControl>
          <FormLabel>Email: </FormLabel>
          <Input placeholder="Enter your email address" />
        </FormControl>
        <FormControl>
          <FormLabel>Password: </FormLabel>
          <Input type="password" placeholder="Enter your email address" />
        </FormControl>
      </div>
    </LoginWrapper>
  );
};

export default Login;
