import firebase from 'firebase'
import config from '../config.js'

class RealtimeIO {

  constructor () {
    this.init()
  }

  init () {
    console.log('Firebase init', config.firebase)
    if (!firebase.apps.length) {
      this.firebase = firebase.initializeApp(config.firebase)
      this.connect()
    }
  }

  connect () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User already signed in.')
      } else {
        console.log('Sign in...')
        firebase.auth().signInAnonymously().catch(function (error) {
          console.log('error', error)
        })
      }
    })
  }

  load (ref, callback) {
    this.firebase.database()
                 .ref(ref)
                 .once('value')
                 .then(callback)
  }

  // Sets the key automatically
  push (ref, object, callback) {
    this.firebase.database()
                 .ref(ref)
                 .push(object)
                 .then(callback)
  }

  // Key is expected in the refs
  set (ref, object, callback) {
    this.firebase.database()
                 .ref(ref)
                 .set(object)
                 .then(callback)
  }

  // Key is expected in the refs
  update (ref, object, callback) {
    this.firebase.database()
                 .ref(ref)
                 .update(object)
                 .then(callback)
  }


  listen (event, ref, callback) {
    this.firebase.database()
                 .ref(ref)
                 .on(event, callback)
  }
}

export default new RealtimeIO()
