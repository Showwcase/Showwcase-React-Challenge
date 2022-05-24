import { useRouter } from "next/router";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/education-dashboard");
  };

  return (
    <Flex>
      <div>Hi there! Welcome to your education showcase</div>
      <div>
        <div>Type your name and click &quot;Enter&quot; below to begin</div>
        <div>
          <input />
        </div>
        <button onClick={() => onClick()}>Enter</button>
      </div>
    </Flex>
  );
};
export default Login;
