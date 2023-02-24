//react
import { useContext, createContext, useEffect, useState } from "react";
//firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , signOut } from "firebase/auth";
import { auth, db } from './firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const initialValue = {
    user : {},
    setUser: (v: any)=>{},
    signIn: (mail: string, pass: string) => {},
    signUp: (mail: string, pass: string) => {},
    logOut: () => {}
}

const UserContext = createContext(initialValue)
export const useAuth = () => {
    return useContext(UserContext)
}

interface Props {
    children: any
}

const UserContextCompo = ({ children }: Props) => {
    const [user, setUser] = useState<any>(null)

    const signIn = async (mail: string, pass: string) => {
        const res = await signInWithEmailAndPassword(auth, mail, pass)
        return res
    }

    const signUp = async (mail: string, pass: string) => {
        const res = await createUserWithEmailAndPassword(auth, mail, pass)
        console.log(res.user.uid)
        //create user in firestore to put data after
        const docRef = doc(db, 'users', res.user.uid)
        await setDoc(docRef, {})
       /*  const collectionRef = collection(db, `users/${res.user.uid}/trainings`)
        await addDoc(collectionRef, {}) */
        return res
    }

    const logOut = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        //change l'état à chaque changement. 
        //Ca gère automatique le storage ce qui fait que dès qu'un mec est co tu as acces
        const unsubscribe = auth.onAuthStateChanged(
            userActual => setUser(userActual?.uid)
        )
        return unsubscribe //desactive quand le compo est pas monté
    }, [])

    const value = {
        user,
        setUser,
        signIn,
        signUp,
        logOut
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}
export default UserContextCompo;