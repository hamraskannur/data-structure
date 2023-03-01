
// is an abstract data type that maps keys to values. A hash table uses a hash 
// function to compute an index, also called a hash code, into an array of buckets or
//  slots, from which the desired value can be found. During lookup, the key is hashed 
//  and the resulting hash indicates where the corresponding value is stored.



// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key) {
// //         const index = this.hash(key)
// //         this.table[index] = undefined
// //     }

// //     display() {
// //         for (let i = 0; i < this.table.length; i++) {
// //             if (this.table[i]) {
// //                 console.log(i, this.table[i]);
// //             }

// //         }
// //     }
// // }

// // const table = new HashTable(50)
// // table.set("name", "hamras")
// // table.set("age", 99)
// // table.display()
// // console.log(table.get("name"));


// // remove Collisions o(n)


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }


//     // o(1)
//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value 
//         } else {
//             const samekeyitems = bucket.find(item => item[0] === key)
//             if (samekeyitems) {
//             samekeyitems[1] = value
//             } else {
//             bucket.push([key, value])
//      }}}


//     // o(1)
//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samekeyitems = bucket.find(item => item[0] === key)
//             if (samekeyitems) {
//                 return samekeyitems[1]
//             }
//         }
//         return undefined 
//     }

//     // o(1)

//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samekeyitems = bucket.find(item => item[0] === key)
        
//             if (samekeyitems) {
//                 bucket.splice(bucket.indexOf(samekeyitems), 1)
//             }
//         }

//     }
//     // o(n)
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }

//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name", "bruse")
// table.set("name", "bruse")
// table.set("age", "25")
// table.display()
// console.log(table.get("name"));
// table.set("mane", "clark")
// table.display()
// console.log(table.get("name"));



// class hashTable{

//     constructor(size){
//           this.table=new Array(size)
//           this.size=size
//     }

//     hash(key){
//      for (let i = 0; i < key.length; i++) {
//           total=+key.charcodeAt(i)
//      }

//      return total/this.size
//     }

//     set(){}

// }