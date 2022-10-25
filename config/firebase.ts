// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { initializeApp as AdminInitializeApp } from "firebase-admin/app"
import admin from "firebase-admin"
import { getAnalytics } from "firebase/analytics"

const serviceAccount = require('./serviceAccount.json')
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const adminApp = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount)
  }
)