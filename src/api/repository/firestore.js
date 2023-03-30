let admin = require("firebase-admin");
let serviceAccount = require("../../domain/key.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const firestore = admin.firestore();
module.export = firestore;