const { db } = require("../config/firebase_config");

//// create ////
//// read ////
const getAllUser = async () => {
  try {
    const user = db.collection("User");
    const snapshot = await user.get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getUser = async (UserID) => {
  try {
    const userRef = db.collection("User").doc(UserID);
    const doc = await userRef.get();
    return doc.data();
  } catch (error) {}
};

//// update ////

//// delete ////
const deleteUser = (UserID) => {
  try {
    db.collection("User").doc(UserID).delete();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAllUser, getUser, deleteUser };
