import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});
const mapDispatchToProps = {loadRestaurants};

// TODO: How can we follow a similar pattern for Zustand state management?
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
