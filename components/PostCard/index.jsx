export const PostCard = (props) => {
    return (
        <div key={props.post.id} className="post">
        <img src={props.post.cover} alt="" />
        <div className="text">
        <h1>{props.post.title}</h1>
        <h3>{props.post.body}</h3>
        </div>
      </div>
    )
}