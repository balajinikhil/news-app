import React from 'react'
import {connect} from 'react-redux'

import {getNews} from './../actions'
import ErrorMessage from './ErrorMessage'


class NewsElement extends React.Component{

   

    componentDidMount(){
        this.props.getNews()
    }



    renderList = ()=>{
        return this.props.top.map((e,i)=>{

        if(e.content){

            const content = e.content.split('[')[0]
            

            return (
                
                    <div className="ui piled segment" key={i} style={{overflow:'hidden'}}>
                        <img className="ui large left floated rounded image" src={e.urlToImage} alt='no-img'  />
                        <h4 className="ui header">{e.title}</h4>
                        <p style={{textAlign:'justify'}}>{content}
                            <a href={e.url} target="_blank" rel="noopener noreferrer">read more at {e.source.name}</a>
                        </p>
                        <p className="ui label">
                            <i className="clock outline icon"></i>
                            { new Date(e.publishedAt).toLocaleString()  }
                        </p>
                    </div>              
            )
        }
        return null
        })
    }

    render(){

        return (
            <div style={{
                marginTop:'6%'
            }}>   
                {this.props.top.length > 0 ? this.renderList() : <ErrorMessage/>}
            </div>   
        )
    }
}


const mapStateToProps = state =>{
    return {
        top:state.top
    }
}

export default connect(mapStateToProps, {
getNews
})(NewsElement) 