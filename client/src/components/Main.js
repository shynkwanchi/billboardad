const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Login Successfully</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Main;
