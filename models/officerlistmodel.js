const db = require('../config/firebase_config');

const getAllOfficer = async()=>{
    const doctor = await db.collection('Doctor');
    const admin = await db.collection('Admin');
    const snapshotdoctor = await doctor.get();
    const snapshotadmin = await admin.get();
    const arr = []
    snapshotdoctor.forEach(doc => {
        arr.push(doc.data())
    });
    snapshotadmin.forEach(doc=>{
      arr.push(doc.data())
    });
    return arr;
    
};

module.exports={getAllOfficer};