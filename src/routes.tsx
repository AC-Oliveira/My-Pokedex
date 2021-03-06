import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:id" component={PokemonDetails} />
    </Switch>
  );
};

export default Routes;
