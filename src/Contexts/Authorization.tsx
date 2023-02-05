import React from "react";
import SiteUser from "../Types/SiteUser";
import { auth, provider } from '../utils/firebase';
import { User, signInWithRedirect } from 'firebase/auth';
import { getSiteUserById } from "../utils/database";

type ContextState = {
  firebaseUser: User | undefined,
  siteUser: SiteUser | undefined,
}

type Props = {
  children: React.ReactNode,
}

export const AuthContext = React.createContext<ContextState>({ firebaseUser: undefined, siteUser: undefined });

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = React.useState<User | undefined>(undefined);
  const [siteUser, setSiteUser] = React.useState<SiteUser | undefined>(undefined);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user == null) {
        signInWithRedirect(auth, provider);
      } else {
        setFirebaseUser(user)
        getSiteUserById(user.uid).then(fetchedSiteUser => {
          setSiteUser(fetchedSiteUser);
          setLoaded(true);
        }) 
      }
    });

    
  }, []);

  const value = {
    firebaseUser,
    siteUser
  }
  return (
    <AuthContext.Provider value={value}>
      {loaded && children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuthContext };