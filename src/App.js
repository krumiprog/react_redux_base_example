import { Provider } from 'react-redux';
import Milk from './components/Milk';
import MilkHook from './components/MilkHook';
import Juice from './components/Juice';
import store from './redux/store';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <Milk />
      <hr />
      <MilkHook />
      <hr />
      <Juice />
      <hr />
      <User />
    </Provider>
  );
}

export default App;
