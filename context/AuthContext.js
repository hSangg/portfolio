const {
  useContext,
  createContext,
  useState,
  useEffect,
} = require('react')
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'
const AuthContext = createContext()

export const AuthContextProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null)
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithRedirect(auth, provider).then(
      (userCred) => {
        setUser(userCred.user)
      }
    )
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currUser) => {
        setUser(currUser)
      }
    )

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
