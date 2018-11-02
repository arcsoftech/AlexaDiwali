// [START get_messaging_object]
// Retrieve Firebase Messaging object.

//We get this profile from firebase
if (typeof Notification === 'undefined') {
  alert('Sorry, Push notification isn\'t supported in your browser.We can not send notification of transaction status to you.You have to mannualy check the status of transaction.Thank you.');
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDh9WTlcVKw_TBWUqmkZw_mDetsbUNf2pI",
  authDomain: "alexadiwali-361c9.firebaseapp.com",
  databaseURL: "https://alexadiwali-361c9.firebaseio.com",
  projectId: "alexadiwali-361c9",
  storageBucket: "alexadiwali-361c9.appspot.com",
  messagingSenderId: "273362971859"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
//This is the public key of the web app in firebase
messaging.usePublicVapidKey('BCfmeEXSFKLM-CreztK87HZtfTBitwCNR-5WipuzrgrHJMF90CVp14Wb7WquItOXlURTJRsNs3sXTv-RTtMF8sY');
navigator.serviceWorker.register('firebase-messaging-sw.js')
  .then((registration) => {
    messaging.useServiceWorker(registration);

    // Request permission and get token.....
  });