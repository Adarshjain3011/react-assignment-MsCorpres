import { useFetchData } from "../hooks/useFetchData";

const UserProfile = () => {
  const { data, error, isLoading } = useFetchData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
};

export default UserProfile;


