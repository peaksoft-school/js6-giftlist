import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyDGOEIHpLlvz0Szccf9kYRr_L95tOC18jc',
   authDomain: 'auth-b3b0a.firebaseapp.com',
   projectId: 'auth-b3b0a',
   storageBucket: 'auth-b3b0a.appspot.com',
   messagingSenderId: '469908736730',
   appId: '1:469908736730:web:654d931dd5f5139c6173e3',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
const singUpWithGoogle = async () => {
   const { user } = await signInWithPopup(auth, provider)
   console.log(user)
   return user
}
export default singUpWithGoogle
