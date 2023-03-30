let admin = require("firebase-admin");
let serviceAccount = require("../../domain/key.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const firestore = admin.firestore();
firestore;

module.exports.insertCities = async (countryCities) =>  {
    for(let country of Object.keys(countryCities)) {
      await firestore.collection("country").doc(country).set({"cities": countryCities[country]});
    }
    return true;
}
