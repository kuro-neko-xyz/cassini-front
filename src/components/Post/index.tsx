import PostProps from "./models";

const Post = ({ content, date, picture, user, username }: PostProps) => {
  return (
    <div>
      <img src={picture} alt={user} />
      <h1>{user}</h1>
      <h2>{username}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Post;
