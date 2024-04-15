import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList title={blogData.posts.title} date={blogData.posts.date} preview={blogData.posts.preview} posts={blogData.posts}/>
    </div>
  );
}

export default App;
