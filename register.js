// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC53G_r62_qZyfySw1G-9OfoZoAdbxMi84",
    authDomain: "loginsigninweb.firebaseapp.com",
    projectId: "loginsigninweb",
    storageBucket: "loginsigninweb.firebasestorage.app",
    messagingSenderId: "111295614256",
    appId: "1:111295614256:web:a71b1e95c4e21eea99ccf5",
    measurementId: "G-PXBPZFW1CM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);