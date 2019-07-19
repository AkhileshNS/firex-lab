// External Modules
import React from 'react';
import {inject, observer} from 'mobx-react';

// Local Styles and Controller
import { AppContainer } from 'App/App.styles';
import Controller from 'App/App.controller';

// Global Functions and Components
import {derive} from 'global/functions';
import Router from 'global/components/Router/Router';

// Module Components
import Appbar from './components/Appbar/Appbar';

// Page Components
import Realtime from 'Realtime/Realtime';

const App = ({trigger, currRoute}) => {
  return <AppContainer>
    <Appbar />
    {trigger ? <Controller /> : null}
    <Router 
      currRoute={currRoute}
      routes={[{
        name: /^Realtime$/i,
        component: Realtime
      }]}
    />
  </AppContainer>;
}

const mapStoresToProps = derive({
  trigger: "appStore",
  currRoute: "appStore"
});
export {App};
export default inject(mapStoresToProps)(observer(App));
