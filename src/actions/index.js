import newsAPI from './../apis/newsAPI'


export const getNews = (page=0)=>async dispatch =>{
   

   let response = await newsAPI.get('/top-headlines',{
    params:{
        country:'in',
        apiKey:"9c3941a342074415a515c1e07aeaf2af",
        pageSize:100,
        page:page
    }
   })


   dispatch({
       type:'TOP_HEADLINES',
       payload:response.data.articles
   })

}

export const searchNews = ( term )=>async dispatch =>{

    let response = await newsAPI.get('/everything', {
        params:{
            q:term,
            apiKey:"9c3941a342074415a515c1e07aeaf2af"
        }
    })

    dispatch({
        type:'SEARCH',
        payload:response.data.articles
    })


}

export const getSources = () =>async dispatch =>{

    let response = await newsAPI.get('/sources',{
        params:{
            apiKey:"9c3941a342074415a515c1e07aeaf2af"
        }
    })

    dispatch({
        type:"SOURCES",
        payload:response.data.sources
    })

}