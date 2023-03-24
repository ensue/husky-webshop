import { createContext } from "react";
import { useState } from "react";

//value to access globally
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};