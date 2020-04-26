import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNF0tW0P_WQmbTug2hN7zG97MDKpKDVvQ",
  authDomain: "arobillard-games.firebaseapp.com",
  databaseURL: "https://arobillard-games.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

export default base;