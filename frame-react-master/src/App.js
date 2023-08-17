import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");
      const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");

      const albumsJson = await albumsResponse.json();
      const usersJson = await usersResponse.json();

      this.setState({
        posts: albumsJson.map((album) => {
          const user = usersJson.find((user) => user.id === album.userId);

          return {
            ...album,
            user: user || {}, // Se não encontrar o usuário, use um objeto vazio
          };
        }),
      });
    } catch (error) {
      console.error("Erro ao carregar os posts:", error);
    }
  };

  // loadPosts = async () => {
  //   try {
  //     const albumsResponse = fetch("https://jsonplaceholder.typicode.com/albums");
  //     const usersResponse = fetch("https://jsonplaceholder.typicode.com/users");
  //     const localApiResponse = fetch("http://localhost:3000/api");
  
  //     const [albums, users, localData] = await Promise.all([albumsResponse, usersResponse, localApiResponse]);
  
  //     const albumsJson = await albums.json();
  //     const usersJson = await users.json();
  //     const localDataJson = await localData.json();
  
  //     const albumsAndUsers = albumsJson.map((album, index) => {
  //       return {
  //         ...album,
  //         user: usersJson[index],
  //         localData: localDataJson[index], // Adicione os dados da API local aqui
  //       };
  //     });
  
  //     this.setState({ posts: albumsAndUsers });
  //   } catch (error) {
  //     console.error("Erro ao carregar os posts:", error);
  //   }
  // };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              {post.user.name && <h3>User: {post.user.name}</h3>}
              <p>{post.user.email}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
