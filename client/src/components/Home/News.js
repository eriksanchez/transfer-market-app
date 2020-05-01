import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import pushid from "pushid";
import "../App.css";

const News = () => {
  const [newsItems, setNewsItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/live")
      .then((response) => response.json())
      .then((articles) => {
        setNewsItem({
          newsItems: [...newsItems, ...articles],
        });
      })
      .catch((error) => console.log(error));
  });

  const pusher = new Pusher("991061", {
    cluster: "eu",
    encrypted: true,
  });

  const channel = pusher.subscribe("news-channel");
  channel.bind("update-news", (data) => {
    setNewsItem({
      newsItems: [...data.articles, ...newsItems],
    });
  });

  const NewsItem = (article, id) => (
    <li>
      key={id}><a href={`${article.url}`}>{article.title}</a>
    </li>
  );

  const newsItemsFlow = newsItems.map((e) => NewsItem(e, pushid()));

  return (
    <div className="App">
      <h1 className="App-title">Live Bitcoin Feed</h1>
      <ul className="news-items">{newsItemsFlow}</ul>
    </div>
  );
};

export default News;
