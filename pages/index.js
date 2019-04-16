import styled from "styled-components";

const Title = styled.h1`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 5rem;
`;

function Home() {
  return (
    <div>
      <Title>Welcome to Next.js!</Title>
    </div>
  );
}

export default Home;
