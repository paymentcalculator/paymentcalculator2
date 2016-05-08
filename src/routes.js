import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './containers/app'
import NotFound from './containers/page-not-found'

export default (
  <Route path="/" component={App}>
      <Route path="*" component={NotFound} />
  </Route>
)
