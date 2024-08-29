// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Dell>mongosh
// Current Mongosh Log ID: 66cff606d708822dd12710bb
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
// chitkara> show collections
// faculty
// student
// user
// chitkara> db.user.insertOne({date:ISODate()});
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cff82ed708822dd12710bc')
// }
// chitkara> db.user.find()
// [
//   {
//     _id: ObjectId('66ceba9759148545fd2710bc'),
//     name: 'Illu',
//     age: 19,
//     class: 'G9'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c7'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c8'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c9'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710ca'),
//     name: 'Illu',
//     age: 23,
//     marks: 88,
//     subject: 'Biology'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710cb'),
//     name: 'Eva',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science'
//   },
//   {
//     _id: ObjectId('66cff82ed708822dd12710bc'),
//     date: ISODate('2024-08-29T04:25:18.156Z')
//   }
// ]
// chitkara> db.user.find().pretty();
// [
//   {
//     _id: ObjectId('66ceba9759148545fd2710bc'),
//     name: 'Illu',
//     age: 19,
//     class: 'G9'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c7'),
//     name: 'Jack',
//     age: 20,
//     marks: 85,
//     subject: 'Mathematics'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c8'),
//     name: 'Bob',
//     age: 22,
//     marks: 78,
//     subject: 'Physics'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710c9'),
//     name: 'Nav',
//     age: 21,
//     marks: 92,
//     subject: 'Chemistry'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710ca'),
//     name: 'Illu',
//     age: 23,
//     marks: 88,
//     subject: 'Biology'
//   },
//   {
//     _id: ObjectId('66cec21859148545fd2710cb'),
//     name: 'Eva',
//     age: 19,
//     marks: 95,
//     subject: 'Computer Science'
//   },
//   {
//     _id: ObjectId('66cff82ed708822dd12710bc'),
//     date: ISODate('2024-08-29T04:25:18.156Z')
//   }
// ]
// chitkara> db.user.findOne();
// {
//   _id: ObjectId('66ceba9759148545fd2710bc'),
//   name: 'Illu',
//   age: 19,
//   class: 'G9'
// }
// chitkara> db.user.findOne();
// {
//   _id: ObjectId('66ceba9759148545fd2710bc'),
//   name: 'Illu',
//   age: 19,
//   class: 'G9'
// }
// chitkara> _id
// ReferenceError: _id is not defined
// chitkara> db.user.findOne({_id: ObjectId("66cec21859148545fd2710c8")})
// {
//   _id: ObjectId('66cec21859148545fd2710c8'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara> db.user.findOne({name: "Bob"})
// {
//   _id: ObjectId('66cec21859148545fd2710c8'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara> db.user.insertOne({name:"Bob",age:77,class:"G12"})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cffebed708822dd12710bd')
// }
// chitkara> db.user.findOne({name: "Bob"})
// {
//   _id: ObjectId('66cec21859148545fd2710c8'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara> db.user.insertOne({name:"Bob",age:77,marks:52,subject:"chemistry"});
// {
//   acknowledged: true,
//   insertedId: ObjectId('66cfff57d708822dd12710be')
// }
// chitkara> db.user.findOne({name: "Bob"})
// {
//   _id: ObjectId('66cec21859148545fd2710c8'),
//   name: 'Bob',
//   age: 22,
//   marks: 78,
//   subject: 'Physics'
// }
// chitkara>