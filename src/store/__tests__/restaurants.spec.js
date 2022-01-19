import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from '../restaurants/reducers';
import {loadRestaurants} from '../restaurants/actions';

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    it('stores the restaurants', async () => {
      // set what you want the result to be
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];

      // define your state and also the api for stubbing
      const initialState = {
        records: [],
      };
      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      // create store for the test alone
      const store = createStore(
        restaurantsReducer,
        initialState,
        // NOTES: unlike the normal store, we attach `withExtraArgument` to expose api to test
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      // the test has no concept of actions such as STORE_RESTAURANTS, therefore it has insight into implementation details
      await store.dispatch(loadRestaurants());

      expect(store.getState().records).toEqual(records);
    });
  });
});
