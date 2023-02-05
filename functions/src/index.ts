import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();

exports.initSiteUserDoc = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('siteUsers').doc(user.uid).set({
    name: user.displayName,
    email: user.email,
    appIds: [],
  });
})

exports.getUserPermissions = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const userId = req.query.userId as string;
  
  admin.firestore().collection('appUsers').doc(userId).get().then(docRef => {
    const { roleId } = docRef.data() as any;

    admin.firestore().collection('roles').doc(roleId).get().then(docRef => {
      const data = docRef.data() as any;
      const promises = (data.permissionIds as string []).map(pid => {
        return admin.firestore().collection('permissions').doc(pid).get()
      })

      Promise.all(promises).then(permissions => {
        res.send(permissions.map(permission => (permission as any).data().name))
      })
    })
  })
})
