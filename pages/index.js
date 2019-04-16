import styled from "styled-components";
import { connect } from "react-redux";
import { increment, decrement } from "../app/actions/countActions";

const Title = styled.h1`
  color: cornflowerblue;
  font-weight: bold;
  font-size: 5rem;
`;

function Home({ count, increment, decrement }) {
  return (
    <div>
      <Title>Welcome to Next.js!</Title>
      <div>Count: {count}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.countReducer.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
