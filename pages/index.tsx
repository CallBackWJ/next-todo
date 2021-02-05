import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;
const index: NextPage = () => {
  return (
    <Container>
      <h1>hello 넥스트</h1>
      <h2>hello 넥스트</h2>
      <h3>hello 넥스트</h3>
      <p>hello 넥스트</p>
      <a>hello 넥스트</a>
      <span>hello 넥스트</span>
      <ul>
        <li>hello 넥스트</li>
      </ul>
    </Container>
  );
};
export default index;
