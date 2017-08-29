import React from 'react';
import { render } from 'react-dom';

import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import AppState from './stores/Appstate'
import {Provider} from 'mobx-react';

render(
   <Provider  User={AppState}>
      <App/>
      </Provider>
     ,
    document.getElementById('root')
  );
  
registerServiceWorker();
