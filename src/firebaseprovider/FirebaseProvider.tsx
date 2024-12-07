import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

// Define the shape of the context values
interface AuthContextType {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signinUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => void;
  updateUserProfile: (name: string, image: string) => Promise<void>;
  user: User | null;
  loading: boolean;
}

// Props for the provider component
interface FirebaseProviderProps {
  children: ReactNode;
}

// Create the context with an initial null value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name: string, image: string) => {
    if (!auth.currentUser) {
      return Promise.reject(new Error('No user is signed in.'));
    }
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const signinUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Sign out error:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const allValues = useMemo(
    () => ({
      createUser,
      signinUser,
      logOut,
      user,
      loading,
      updateUserProfile,
    }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};
