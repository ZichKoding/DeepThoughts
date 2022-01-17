// const https = require('https');

// async function getMovieTitles(substr) {
//     const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;
//     let parsedData = [];
//     await https.get(url, res => {
//         let incomingdata = '';
//         res.on('data', data => {
//             incomingdata += data;
//         });
//         res.on('end', () => {
//             incomingdata = JSON.parse(incomingdata);
//             for (let i = 0; i < incomingdata.data.length; i++) {
//                 parsedData.push(incomingdata.data[i].Title);
//             }
//             parsedData.sort();
//             console.log(parsedData);
//         })
//     }).on('error', err => {
//         console.log(err.message);
//     });
// };

// getMovieTitles('Spiderman');

// let invlist = [];

// function inventoryList() {
//     // let invlist = [];

//     const add = (name) => {
//         if (typeof name === 'string'){
//             invlist.push(name)
//         }
//         else {
//             console.log('Must enter a string!');
//         }
//     }

//     const getList = () => {
//         let sortedList = "";
//         for (let i = 0; i < invlist.length; i++) {
//             sortedList += invlist[i] + ", ";
//         }
//         console.log(sortedList);
//     }

//     const remove = (name) => {
//         if(typeof name === 'string') {
//             invlist.pop(name)
//         } else {
//             console.log('Must enter a string!');
//         }
//     }

//     return {
//         add: add,
//         remove: remove,
//         getList: getList
//     }
// }

// inventoryList().add('Shirt');
// inventoryList().add('Trouser');
// inventoryList().getList();
// inventoryList().remove('Shirt');
// inventoryList().getList();