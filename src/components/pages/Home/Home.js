import React from 'react'
import '../Home/Home.css'
import { useState, useEffect } from 'react';
function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint

      if (response.ok) { // Check for 200 status code
        const data = await response.json();
        setData(data);
      } else if (response.status === 400) {
        setError('Bad Request (400): The server could not understand the request.');
      } else if (response.status === 401) {
        setError('Unauthorized (401): Authentication is required or has failed.');
      } else if (response.status === 500) {
        setError('Server Error (500): An internal server error has occurred.');
      } else {
        setError(`Unexpected Error (${response.status}): ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home