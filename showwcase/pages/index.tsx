import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
`;

export default function Home() {
  return (
    <div>
      <Container>
        <div>hello</div>
      </Container>
    </div>
  );
}
