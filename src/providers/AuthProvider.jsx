import { createContext } from "react";

export const AuthContext = createContext(null);
export const websiteTitle = "Bistro Boss";
export const apiURL = "http://localhost:5000";

const AuthProvider = ({ children }) => {
	const authInfo = {
		//
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
