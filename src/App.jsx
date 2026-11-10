import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';


const blogData = {
  name: "Under the React Hood",
  image: "https://via.placeholder.com/215",
  about: "A personal blog exploring architecture, components, props, and design patterns in frontend engineering.",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "November 15, 2020",
      preview: "Setting up the building blocks of your site.",
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé.",
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meets OOJS.",
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      
      <About image={blogData.image} about={blogData.about} />
      
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;