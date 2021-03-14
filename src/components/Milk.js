import { useState } from 'react';
import { connect } from 'react-redux';
import { buyMilk } from '../redux';

const Milk = ({ numberOfMilk, buyMilk }) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>Number of Milk - {numberOfMilk}</h2>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => buyMilk(+number)}>Buy milk</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numberOfMilk: state.milk.numberOfMilk,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyMilk: number => dispatch(buyMilk(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Milk);
