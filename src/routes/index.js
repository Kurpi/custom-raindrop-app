import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Document from './_document'

import Account from './account'
import Collection from './collection'
//import Settings from './settings'

import Home from './_home'

export default ()=>(
    <Router>
        <Document>
            <Switch>
                <Route path='/account' component={Account} />
                <Route path='/collection/:cid(-?\d+):modifier?/:search?' component={Collection} />
                {/*<Route path='/settings' component={Settings} />*/}

                {/* Redirects */}
				<Route path='/app/duplicates'><Redirect to='/settings/duplicates' /></Route>
				<Route path='/app/tags'><Redirect to='/settings/tags' /></Route>
				<Route path='/app/libroken'><Redirect to='/settings/libroken' /></Route>
                
                <Route component={Home} />
            </Switch>
        </Document>
    </Router>
)