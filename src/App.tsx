import "./App.css";
import UserContext from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";
import { useState } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  
  return <>
    <UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}>
        <UserProfile />
    </UserContext.Provider>
  </>
}

export default App;