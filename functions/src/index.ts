import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

exports.initSiteUserDoc = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('siteUsers').doc(user.uid).set({
    name: user.displayName,
    email: user.email,
    appIds: [],
  });
})
