const db = require('../config/firebase_config');

const getAllTimeTable = async()=>{
    const timetable = await db.collection('TimeTable');
    const snapshot = await timetable.get();
    const arr = []
    snapshot.forEach(doc =>{
        arr.push(doc.data())
    });
    return arr;
}

module.exports={getAllTimeTable};