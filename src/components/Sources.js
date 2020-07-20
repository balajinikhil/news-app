import React from 'react'
import {connect} from 'react-redux'

import {getSources} from './../actions'
import ErrorMessage from './ErrorMessage'

class Sources extends React.Component{

    componentDidMount(){

        this.props.getSources()

    }

    renderList = ()=>{
      return  this.props.sources.map((e,i)=>{
            return (
                    <div className="item" key={i} style={{marginTop:'5px'}}>
                        <div className="content">
                        <div className="header">{e.name}</div>
                        <p>Category: {e.category}</p>
                        <p>Description: {e.description}</p>
                        <p>Website: <a href={e.url} target="_blank" rel="noopener noreferrer">{e.url}</a></p>

                        </div>
                    </div>
                
            )
        })
    }

    render(){
       
        return(
            <div className="ui inverted segment" style={{marginTop:"7%"}}>
                <div className="ui inverted relaxed divided list">
                {this.props.sources.length > 0 ? this.renderList() : <ErrorMessage/>}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        sources:state.source
    }
}

export default connect(mapStateToProps, {
getSources
})(Sources)
