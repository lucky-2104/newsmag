import { useEffect, useState } from "react";
import { Newsitems } from "./Newsitems";

export const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))
    
  },[category])

  return (
    <>
      <br/><br/><br/>
      <h2 className="text-center py-1 bg-light">Latest <span className="badge bg-danger fs-2">News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <Newsitems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>No news available</p>
      )}
    </>
  )
}
