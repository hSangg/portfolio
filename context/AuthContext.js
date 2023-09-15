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
  const [isAuthor, setIsAuthor] = useState(false)
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithRedirect(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currUser) => {
        if (
          currUser?.email ===
          'sangfc774@gmail.com'
        ) {
          setIsAuthor(true)
        }
      }
    )

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthor, googleSignIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
