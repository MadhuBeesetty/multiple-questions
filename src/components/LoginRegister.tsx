import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styles using styled-components
const FormContainer = styled.div`
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p`
  color: red;
`;

const LoginRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = isLogin ? 'http://localhost:5001/api/login' : 'http://localhost:5001/api/register';
      const response = await axios.post(url, { username, password });
      setMessage(response.data.message);
    } catch (error: any) {
      if (error.response) {
        // Handle server errors
        setMessage(error.response.data.message);
      } else if (error.request) {
        // Handle network errors
        setMessage('Network error. Please try again.');
      } else {
        // Handle other errors
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <FormContainer>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        <Message>{message}</Message>
      </form>
      <Button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </Button>
    </FormContainer>
  );
};

export default LoginRegister;
