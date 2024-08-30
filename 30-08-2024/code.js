// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Dell>mongosh
// Current Mongosh Log ID: 66d142c27b9ad480972710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-28T10:05:36.557+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> use chitkara
// switched to db chitkara
// chitkara> db.user.countDocuments()
// 9
// chitkara> db.user.estimatedDocumentCount()
// 9
// chitkara> db.student.estimatedDocumentCount()
// 5
// chitkara> db.student.estimatedDocumentCount()
// 5
// chitkara> db.faculty.estimatedDocumentCount()
// 5
// chitkara> db.faculty.estimatedDocumentCount()
// 5
// chitkara> db.student.updateMany({},{$set:{student:"DataScience",address:"Chitkara University"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }

// chitkara> db.student.find({ age: { $eq: 22 }, marks: { $eq: 78 } })
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710be'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics',
//     address: 'Chitkara University',
//     student: 'DataScience'
//   }
// ]
// chitkara> db.student.find({ marks: { $gte: 80 }, age: { $gte: 18 } })
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710bd'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics',
//     address: 'Chitkara University',
//     student: 'DataScience'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710bf'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry',
//     address: 'Chitkara University',
//     student: 'DataScience'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710c0'),
//     name: 'Illu',
//     age: 23,
//     marks: 88,
//     subject: 'Biology',
//     address: 'Chitkara University',
//     student: 'DataScience'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710c1'),
//     name: 'Eva',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science',
//     address: 'Chitkara University',
//     student: 'DataScience'
//   }
// ]
// chitkara> db.student.bulkWrite([ { updateOne: { filter: { name: "Jack" },  update: { $set: { grade: "A" } }  } }, { updateOne: { filter: { name: "Bob" }, update: { $set: { grade: "B" } } } }, { updateOne: { filter: { name: "Nav" }, update: { $set: { grade: "A+" } } } }, { updateOne: { filter: { name: "Illu" }, update: { $set: { grade: "B+" } } } }, { updateOne: { filter: { name: "Eva" }, update: { $set: { grade: "A" } } } }] )
// {
//   acknowledged: true,
//   insertedCount: 0,
//   insertedIds: {},
//   matchedCount: 5,
//   modifiedCount: 5,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {}
// }

// chitkara> db.student.find({grade:"A+"})
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710bf'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'A+'
//   }
// ]

// chitkara> db.student.find({ $and: [ { age: 22 }, { marks: 78 }] })
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710be'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'B'
//   }
// ]
// chitkara> db.student.find({  $or: [ { age: 22 },    { marks: 90 }  ]})
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710be'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'B'
//   }
// ]

// chitkara> db.student.find({  $nor: [ { age: 22 }, { marks: 90 }]})
// [
//   {
//     _id: ObjectId('66cebee559148545fd2710bd'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710bf'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710c0'),
//     name: 'Illu',
//     age: 23,
//     marks: 88,
//     subject: 'Biology',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66cebee559148545fd2710c1'),
//     name: 'Eva',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science',
//     address: 'Chitkara University',
//     student: 'DataScience',
//     grade: 'A'
//   }
// ]
