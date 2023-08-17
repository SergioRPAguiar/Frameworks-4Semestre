/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-useless-constructor */
import "./App.css";
import { Component } from "react";
import { loadPosts } from "./utils/load-posts";
import { PostCard } from "./components/PostCard";

class App extends Component {
  state = {
    posts: [],
  };

  // fetch aqui
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    
    const photosAndPosts = await loadPosts();

    this.setState({ posts: photosAndPosts });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
           <PostCard post ={post}/>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
