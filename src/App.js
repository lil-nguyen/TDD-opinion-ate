import store from './store';
import RestaurantScreen from './components/RestaurantScreen';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}

export default App;
