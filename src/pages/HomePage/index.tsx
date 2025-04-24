import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../../components/Post';
import Button from '../../components/Button';
import Footer from './Footer';
import { Link } from 'react-router';

const HomePage = () => {
  const [postData, setPostData] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/feed');
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Post data={postData} />
      <Footer>
        <Link to="/post">
          <Button>Post</Button>
        </Link>
      </Footer>
    </div>
  );
};

export default HomePage;
