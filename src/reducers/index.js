import { combineReducers } from 'redux';
import BurgerReducer from './BurgerReducer';
import PizzaReducer from './PizzaReducer';
import PastaReducer from './PastaReducer';
import BurgerReducerO from './BurgerReducerO';
import PizzaReducerO from './PizzaReducerO';
import PastaReducerO from './PastaReducerO';
import ItemReducer from './ItemReducer';
import TotalReducer from './TotalReducer';

export default combineReducers({
  burgers: BurgerReducer,
  pizzas: PizzaReducer,
  pastas: PastaReducer,
  burgerso: BurgerReducerO,
  pizzaso: PizzaReducerO,
  pastaso: PastaReducerO,
  item: ItemReducer,
  total: TotalReducer
});
