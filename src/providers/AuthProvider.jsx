import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user,setUser] =useState(null);
   const [loading,setLoading] = useState(true);
 
       const createUser = (email,password) =>{
           setLoading(true);
           return createUserWithEmailAndPassword(auth,email,password);
       }

       const signInUser = (email,password) =>{
           setLoading(true);
           return signInWithEmailAndPassword(auth,email,password);
       }

       const signInWithGoogle = () =>{
        setLoading(true);
           return signInWithPopup(auth,googleProvider);
       }

       useEffect(()=>{
           const unsubscribe =onAuthStateChanged(auth,(currentUser) =>{
               setUser(currentUser);
               console.log("state captured",currentUser?.email)
               if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://server-site-rust.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('login token', res.data);
                        setLoading(false);
                    })

            }
            else {
                axios.post('https://server-site-rust.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                })
            }
            
        })


        return () => {
            unsubscribe();
        }
    }, [])






       const signOutUser = ()=>{
           setLoading(true);
           return signOut(auth);
       }

;


   const updateUserProfile = (updatedData) => {
       setLoading(true);
       return updateProfile(auth.currentUser, updatedData);
     };

     function resetPass(email) {
       return sendPasswordResetEmail(auth, email);
     }
       
       const  authInfo = {
         
           loading,
           signInWithGoogle,
           createUser,signInUser,user,setUser,signOutUser,
           resetPass,updateUserProfile
       }
   
   return (
       <AuthContext.Provider value = {authInfo}>
          {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;