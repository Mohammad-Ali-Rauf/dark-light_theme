import React, { useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import themeContext from './context/theme/themeContext';

const PostCard = ({ post, theme }) => {
  const cardClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';

  return (
    <div className={`shadow-md rounded-lg p-4 mb-4 ${cardClass}`}>
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
};

const App = () => {
  const { theme, setTheme } = useContext(themeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const mainClass = theme === 'dark' ? 'bg-gray-900 text-white min-h-screen flex flex-col' : 'bg-white text-black min-h-screen flex flex-col';

  return (
    <div className={mainClass}>
      <Navbar title="Dark and Light Theme" />
      <div className="container mx-auto p-4 flex-grow">
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Posts</h2>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} theme={theme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;