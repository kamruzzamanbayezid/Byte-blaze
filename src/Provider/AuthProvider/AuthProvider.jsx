import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../../Configs/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // create user
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile
      const updateUserProfile = (name, photoURL) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoURL
            })
      }

      // logIn
      const logInUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      // signOut user
      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('The logged in user is:', currentUser);
                  setUser(currentUser)
                  setLoading(false);
            })

            return () => {
                  unSubscribe()
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            updateUserProfile,
            logInUser,
            logOut,
            loading
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
};

export default AuthProvider;