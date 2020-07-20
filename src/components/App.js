import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

import NavBar from './NavBar'
import NewsElement from './NewsElement'
import Sources from './Sources'


class App extends React.Component{



    render(){
      
      return(
      <div>
        <HashRouter>
          <NavBar />
          <Route path="/" exact component={NewsElement}></Route>
          <Route path="/sources" component={Sources}></Route>
        </HashRouter>
      </div>
      
      )
    }
}


export default App;