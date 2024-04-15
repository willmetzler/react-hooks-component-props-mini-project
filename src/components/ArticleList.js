import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const mappedArticles = posts.map( post => {
        return (
            <Article title={post.title} date={post.date} preview={post.preview} key={post}/>
        )
    })

  return (
    <main>
        {mappedArticles}
    </main>
  );
}

export default ArticleList;