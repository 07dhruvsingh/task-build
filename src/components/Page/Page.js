import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import News from '../News/News'
import './Page.css'

function Page() {
    const [newsList, setNews] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    console.log(newsList)


    React.useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=48b65ee8c6044d1c9e4faed1d3b00314').then((res)=>{
            setNews(res.data.articles)
            setLoaded(true)
        })
    })

    const fetchedNewsList = newsList.map((news) => <News key={news.publishedAt} title={news.title} img={news.urlToImage} url={news.url} news={news.content} />)

    if(isLoaded){
        return(
            <div>
                {fetchedNewsList}
            </div>
        )
    }else{
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default Page
