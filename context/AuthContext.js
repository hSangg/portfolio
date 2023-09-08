const {
  useContext,
  createContext,
  useState,
  useEffect,
} = require("react");
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
