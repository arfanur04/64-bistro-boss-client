import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosPublic = useAxiosPublic();
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photo) => {
		setLoading(false);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("current user state: ", currentUser?.email, currentUser);

			if (currentUser) {
				// get token and store client
				const userInfo = { email: currentUser.email };
				axiosPublic.post("/jwt", userInfo).then((res) => {
					if (res.data.token) {
						localStorage.setItem("access-token", res.data.token);
					}
				});
			} else {
				// TODO: remove token (if  token stored in the client side: Local storage, caching, in memory, etc)
				localStorage.removeItem("access-token");
			}

			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, [axiosPublic]);

	const authInfo = {
		user,
		loading,
		createUser,
		updateUserProfile,
		signIn,
		googleSignIn,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
