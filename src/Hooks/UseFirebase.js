import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeFirebaseAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register form
    const registerHome = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName:name};
            setUser(newUser);
            // save a new user
            saveUser(email, name, 'POST');
            // name send to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });

            history.replace('/');
          })
          .catch((error) => {
              setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));

    }

    // google sign in
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
    const redirectFinder = location?.state?.from || '/';
    history.push(redirectFinder);
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
    }


    // login form
    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const redirectFinder = location?.state?.from || '/';
    history.push(redirectFinder);
    setAuthError('');
    // ...
  })
  .catch((error) => {
      setAuthError(error.message)
  });
    }

    useEffect(() =>{
        fetch(`https://boiling-hamlet-70962.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[user?.email])

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken)
                })
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
        return unsubscribe;
    }, [auth]);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=>setIsLoading(false));
    }


    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://boiling-hamlet-70962.herokuapp.com/users', {
            method:method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }


        return{
            user,
            registerHome,
            logOut,
            admin,
            token,
            isLoading,
            authError,
            loginUser,
            signInUsingGoogle,
        }

}

export default useFirebase;