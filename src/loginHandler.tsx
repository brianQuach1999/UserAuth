import React, { Component } from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCRAQes_Yo9TTuVNTVSb2noJ-AoPYPlg3w",
    authDomain: "learning-ff77b.firebaseapp.com",
    databaseURL: "https://learning-ff77b.firebaseio.com",
    projectId: "learning-ff77b",
    storageBucket: "learning-ff77b.appspot.com",
    messagingSenderId: "1034621457190",
    appId: "1:1034621457190:web:422a5a8ae25a6bf8"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("user signed in")
    } else {
      console.log("nobody signed in")
    }
  });

function UserInDB(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("error code" + error.code)
        console.log("error message" + error.message)

        return {errorCode, errorMessage}
    });
    return null
}
function MakeNewUser(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        console.log("error code" + error.code)
        console.log("error message" + error.message);
        return {errorCode, errorMessage}

    });
    return null
}

function SignOutUser(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    return null
}
export {UserInDB, MakeNewUser, SignOutUser};

