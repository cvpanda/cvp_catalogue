// eslint-disable-next-line
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Router, Routes } from "react-router-dom";
import { AccountCreation } from "./Pages/CreateAccount.jsx";
import { Login } from "./Pages/Login.jsx";
import { Otracosa } from "./Pages/Otracosa";

function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {console.log(user)}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Otracosa/:empresa" element={<Otracosa />} />
        <Route path="/User/:empresa" element={<Otracosa />} />
        <Route path="/CreateAccount" element={<AccountCreation />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<Nav />} />
</Routes>; */
}
