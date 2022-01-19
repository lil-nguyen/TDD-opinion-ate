import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/V0uYwtIrBoALzWw2sThniEUD2f0NagpT/',
});

// why not make a unit test for this? Follow the principle: "Don't mock what you don't own". If you don't have control over what you're testing, then it's best to adhere to the reality of it as much as possible.

// So how can you test code with third-party dependencies if you can't mock them? The alternative is to do what we did here: wrap the third-party code with your own interface that you do control, and mock that.
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
