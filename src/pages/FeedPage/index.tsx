import Post from '../../components/Post';

const posts = [
  {
    date: Date.now(),
    picture: '',
    user: 'Donald J. Trump',
    username: 'realDonaldTrump',
    content: 'Despite the constant negative press covfefe',
  },
  {
    date: Date.now(),
    picture: '',
    user: 'Donald J. Trump',
    username: 'realDonaldTrump',
    content: 'Despite the constant negative press covfefe',
  },
  {
    date: Date.now(),
    picture: '',
    user: 'Donald J. Trump',
    username: 'realDonaldTrump',
    content: 'Despite the constant negative press covfefe',
  },
  {
    date: Date.now(),
    picture: '',
    user: 'Donald J. Trump',
    username: 'realDonaldTrump',
    content: 'Despite the constant negative press covfefe',
  },
  {
    date: Date.now(),
    picture: '',
    user: 'Donald J. Trump',
    username: 'realDonaldTrump',
    content: 'Despite the constant negative press covfefe',
  },
];

const FeedPage = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.user + post.date}
          date={post.date}
          picture={post.picture}
          user={post.user}
          username={post.username}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default FeedPage;
