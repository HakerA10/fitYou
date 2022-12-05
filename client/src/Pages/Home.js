import React, { useEffect } from 'react';
import { Banner, NavHome } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      console.log('iam here');
      console.log(user);
      console.log(token);
      if (user) {
        navigate('/clientHome');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome home />
      <Banner />
    </div>
  );
}

export default Home;
