import styled from "styled-components";
import { connect } from "react-redux";

const Title = styled.h1`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 5rem;
`;

function Home({ foo }) {
  return (
    <div>
      <Title>Welcome to Next.js!</Title>
      <div>Prop from Redux {foo}</div>
    </div>
  );
}

export default connect(state => state)(Home);
