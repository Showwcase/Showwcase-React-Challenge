import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CustomButton from "../components/Button";
import InputCustom from "../components/Input";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState("");

  //This function will be called when the user click "Enter" button
  const onClick = () => {
    localStorage.setItem("name", name);
    router.push("/education-dashboard");
  };

  //To get the name value saved in the local storage if any
  useEffect(() => {
    let defaultName = localStorage.getItem("name");
    console.debug(localStorage.getItem("name"), "Asd");
    if (defaultName) {
      setName(defaultName);
    }
  }, []);

  //On name value change
  const onNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onEnterClick = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <Flex>
      <div className="py-2 text-2xl">
        Hi there! Welcome to your education showcase
      </div>
      <div className="py-2 ">
        <div className="text-lg text-blue-500">
          Type your name and click &quot;Enter&quot; below to begin
        </div>
        <div className="py-2">
          <InputCustom
            value={name}
            onChange={onNameChange}
            onKeyDown={onEnterClick}
          />
        </div>
        <div className="space-x-2">
          <CustomButton label="Enter" onClick={() => onClick()} />

          <span className="text-gray-500">↵</span>
        </div>
      </div>
    </Flex>
  );
};
export default Login;
