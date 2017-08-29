import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import AppState from './stores/Appstate'
import {Provider} from 'mobx-react';

render(
    <AppContainer >
   <Provider  User={AppState}>
      <App   />
      </Provider>
     
    </AppContainer>,
    document.getElementById('root')
  );
  
registerServiceWorker();
