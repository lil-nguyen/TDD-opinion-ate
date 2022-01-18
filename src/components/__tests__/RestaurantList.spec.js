import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

// It's important to check only one behavior per test: it makes it easy to understand what it does, and what actually goes wrong.

describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');
    const restaurants = [];
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const noop = () => {};
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    const {queryByText} = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
