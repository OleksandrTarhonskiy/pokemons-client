import React from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

import { store } from './store';
import PokemonsList from 'components/PokemonsList';
import AppLayout from 'layout/AppLayout';
import PokemonDetails from 'components/PokemonDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={PokemonsList} />
            <Route exact path="/pokemons/:name" component={PokemonDetails} />
          </Switch>
        </Provider>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
