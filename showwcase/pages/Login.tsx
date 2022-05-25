import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
      <div className="text-2xl py-2">
        Hi there! Welcome to your education showcase
      </div>
      <div className="py-2 ">
        <div className="text-lg text-blue-500">
          Type your name and click &quot;Enter&quot; below to begin
        </div>
        <div className="py-2">
          <input
            className="p-2 border rounded-md"
            value={name}
            onChange={onNameChange}
            onKeyDown={onEnterClick}
          />
        </div>
        <div className="space-x-2">
          <button
            className="bg-blue-500 p-2 text-white rounded-md"
            onClick={() => onClick()}
          >
            Enter
          </button>
          <span className="text-gray-500">↵</span>
        </div>
      </div>
    </Flex>
  );
};
export default Login;
