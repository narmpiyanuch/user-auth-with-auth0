import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //console.log(user)

  return (
    <div className="content">
      {!isAuthenticated && (
        <button onClick={loginWithRedirect}>Log in</button>
      )}

      {isAuthenticated && (
        <div className="profile">
          <p>Khun. {user.name}</p>
          <p>Email : {user.email}</p>
          <button onClick={logout}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default App;