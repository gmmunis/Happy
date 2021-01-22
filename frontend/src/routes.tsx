import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Map from './pages/Map';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={Map} />

        <Route path="/orphanages/create" comonents={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;