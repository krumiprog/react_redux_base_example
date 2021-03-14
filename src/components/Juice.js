import { useState } from 'react';
import { connect } from 'react-redux';
import { buyJuice } from '../redux';

const Juice = ({ numberOfJuice, buyJuice }) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>Number of Juice - {numberOfJuice}</h2>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => buyJuice(+number)}>Buy Juice</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numberOfJuice: state.juice.numberOfJuice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyJuice: number => dispatch(buyJuice(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Juice);
