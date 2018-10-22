import React from 'react';
import ReactDOM from 'react-dom';
import { Auth, I18n, ServiceWorker } from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import aws_exports from './aws-exports';

import './index.css';
import './i18n';
import App from './App';

I18n.setLanguage('ko');

const client = new AWSAppSyncClient({
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: aws_exports.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken()
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById('root')
);

const myServiceWorker = new ServiceWorker();
myServiceWorker.register('/service-worker.js', '/').then(() => {
  myServiceWorker.enablePush(
    'BA_Ybmr8zRgBLe_3R5aHJEBK2UctkkL8_X4sOzR3OYWWiGd9tNhAqit20LZjriIcxlUg1SzDVL5STs2-7OCIeFw'
  );
});
