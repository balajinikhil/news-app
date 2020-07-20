import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { searchNews } from './../actions'


class NavBar extends React.Component{
  state = {
      term:''
  }

  onSearchSubmit=(e)=>{
    e.preventDefault()
    
    this.props.searchNews(this.state.term);

    this.setState({term:''})



  }


    render(){

        return(
      <div className="ui borderless main menu fixed" >
        <Link to="/" className="item ui header">Home</Link>
        <Link to="/sources" className="item ui header">Sources</Link>
              
        <div className="right menu">

        <div className="item">
          <div className="ui transparent icon input">
              <form onSubmit={this.onSearchSubmit}>
                <input type="text" placeholder="Search topics..." value={this.state.term} onChange={(e)=>{
                  this.setState({term: e.target.value} )
                 }}/>
                <i className="search link icon" onClick={this.onSearchSubmit}></i>
              </form>
            </div>
          </div>
         </div>
      </div>
        )
    }
}



export default connect(null, {
searchNews
})(NavBar)