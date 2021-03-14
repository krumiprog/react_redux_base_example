import { useDispatch, useSelector } from 'react-redux';
import { buyMilk } from '../redux';

const MilkHook = () => {
  const numberOfMilk = useSelector(state => state.milk.numberOfMilk);
  const dispatch = useDispatch();

  return (
    <>
      <h2>(Hook) Number of Milk - {numberOfMilk}</h2>
      <button onClick={() => dispatch(buyMilk())}>Buy Milk</button>
    </>
  );
};

export default MilkHook;
