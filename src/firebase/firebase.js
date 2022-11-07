import { initializeApp } from 'firebase/app'

const firebaseConfig = {
   apiKey: 'AIzaSyD3PqQqTLlqzngzmIgbyFHen7Q4gjSDzMU',
   authDomain: 'auth-4bd68.firebaseapp.com',
   projectId: 'auth-4bd68',
   storageBucket: 'auth-4bd68.appspot.com',
   messagingSenderId: '936473324512',
   appId: '1:936473324512:web:24cefadd589b1257535985',
}

const app = initializeApp(firebaseConfig)
console.log(app)
