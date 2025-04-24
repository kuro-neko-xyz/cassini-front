import axios from 'axios';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [title, setTitle] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/feed');
        setTitle(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <h1>{title}</h1>;
};

export default HomePage;
