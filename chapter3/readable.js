const stream = require('stream');

// Normal Readable byte implementation
// let Feed = function(channel) {
//     let readable = new stream.Readable({});
//     let news = [
//         "Big Win!",
//         "Stocks Down!",
//         "Actor Sad!"
//     ];
//
//     readable._read = () => {
//         if(news.length) {
//             return readable.push(news.shift() + "\n");
//         } readable.push(null);
//     };
//     return readable;
// };
//
// let feed = new Feed();
// feed.on("readable", () => {
//     let data = feed.read();
//     data && process.stdout.write(data);
// });
//
// feed.on("end", () => console.log("No more news"));


//---------------------------------------------------------------------------------------------------
//Object Mode implementation
// let Feed = function(channel) {
//     let readable = new stream.Readable({
//         objectMode : true
//     });
//     let prices = [{price : 1},{price : 2}];
//     readable._read = () => {
//         if(prices.length) {
//             return readable.push(prices.shift());
//         } readable.push(null);
//     };
//     return readable;
// };
// //When in objectMode, each chunk pushed is expected to be an object. The reader for this stream can then work on the assumption that each read() event will produce a single object.
// let feed = new Feed();
// feed.on("readable", () => {
//     let data = feed.read();
//     data && console.log(data);
// });
// feed.on("end", () => console.log("No more prices"));

//----------------------------------------------------------------------------------------------------
//Byte by Byte implementation, note the feed.read([int here]), the int indicating how many bytes to read.

let Feed = function(channel) {
        let readable = new stream.Readable({});
        let news = 'A long headline might go here';
        readable._read = () => {
            readable.push(news);
            readable.push(null);
        };
        return readable;
};

let feed = new Feed();

feed.on('readable', () => {
    let character;
    while(character = feed.read(1)) {
        console.log(character.toString());
    }
});

feed.on('end',()=>{
   console.log("No more bytes to read.")
});