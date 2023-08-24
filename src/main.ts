import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcdRgros3RshqGLHhSBjsy4FqzwHHGJ_0",
  authDomain: "kitty-gen.firebaseapp.com",
  projectId: "kitty-gen",
  storageBucket: "kitty-gen.appspot.com",
  messagingSenderId: "421252579710",
  appId: "1:421252579710:web:80fde5e81474c88c9f732f",
  measurementId: "G-SQD86R821W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
