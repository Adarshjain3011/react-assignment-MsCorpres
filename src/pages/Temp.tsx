import React, { useState } from "react";
import RepoList from "../components/RepoList";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #9333ea;
    box-shadow: 0px 0px 5px rgba(147, 51, 234, 0.5);
  }
`;

const Button = styled.button`
  background: #9333ea;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7e22ce;
    transform: scale(1.05);
  }
`;

const RepoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const Temp = () => {
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchUser(username);
  };

  return (
    <Container>
      <Title>GitHub Repo Fetcher 🚀</Title>

      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      {/* Show Repo List if user is searched */}
      <RepoContainer>{searchUser && <RepoList username={searchUser} />}</RepoContainer>
    </Container>
  );
};

export default Temp;
