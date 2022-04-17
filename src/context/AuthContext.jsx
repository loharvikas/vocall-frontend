import { createContext } from "react";
import { useLocalStorage } from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [authTokens, setAuthTokens] = useLocalStorage("authTokens", null);

    const logOut = () => {
        setUser('');
        setAuthTokens('');
        localStorage.removeItem('auth_tokens')
        localStorage.removeItem('user')
    }

    const context = {
        setUser,
        setAuthTokens,
        user,
        authTokens,
        logOut,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
