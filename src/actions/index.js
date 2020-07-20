import newsAPI from './../apis/newsAPI'


export const getNews = ()=>async dispatch =>{
   

   let response = await newsAPI.get('/top-headlines',{
    params:{
        country:'in',
        apiKey:"<YOUR_API_KEY>",
        pageSize:100,
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
            apiKey:"<YOUR_API_KEY>"
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
            apiKey:"<YOUR_API_KEY>"
        }
    })

    dispatch({
        type:"SOURCES",
        payload:response.data.sources
    })

}