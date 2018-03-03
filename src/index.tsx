import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import I18n from 'redux-i18n';

import './styles.scss';
import configureStore from './configureStore';
import { translations } from './translations';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} fallbackLang="en">
      <App />
    </I18n>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
