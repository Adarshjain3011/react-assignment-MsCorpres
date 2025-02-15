import React, { useEffect } from "react";
import { useFetchRepos } from "../hooks/useFetchRepos";
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "../redux/repoSlice";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const RepoListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RepoItem = styled.li`
  background: white;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const RepoLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
  }
`;

const LoadingText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;

const ErrorText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

const RepoList = ({ username }: { username: string }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchRepos(username);
  const repos = useSelector((state: any) => state.repos.repos);

  useEffect(() => {
    if (data) {
      dispatch(setRepos(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <ErrorText>Error: {error.message}</ErrorText>;

  return (
    <Container>
      <Title>GitHub Repositories</Title>
      <RepoListContainer>
        {repos &&
          repos.map((repo: any) => (
            <RepoItem key={repo.id}>
              <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </RepoLink>
            </RepoItem>
          ))}
      </RepoListContainer>
    </Container>
  );
};

export default RepoList;
