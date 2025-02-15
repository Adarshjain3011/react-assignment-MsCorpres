import React, { useEffect } from "react";
import { useFetchRepos } from "../hooks/useFetchRepos";
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "../redux/repoSlice";

const RepoList = ({ username }: { username: string }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchRepos(username);
  const repos = useSelector((state: any) => state.repos.repos);

  useEffect(() => {
    if (data) {
      dispatch(setRepos(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>GitHub Repositories</h2>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
