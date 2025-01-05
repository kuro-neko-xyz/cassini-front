import styled from 'styled-components';
import PostProps from './models';

const Container = styled.div`
  background-color: white;
  color: black;
`;

const Post = ({ content, date, picture, user, username }: PostProps) => {
  return (
    <Container>
      <img src={picture} alt={user} />
      <h1>{user}</h1>
      <h2>{username}</h2>
      <h3>{date}</h3>
      <p>{content}</p>
    </Container>
  );
};

export default Post;
