const stream = require('stream');

// Normal implementation of Writable
// let writable = new stream.Writable({
//     decodeStrings: false
// });
// writable._write = (chunk, encoding, callback) => {
//     console.log(chunk.toString());
//     callback();
// };
// let written = writable.write(Buffer.alloc(16384, 'A'));
// writable.end();
// console.log(written);

//safe implementation of writable, checking for true/false value, and proceeding to check for 'drain' events before writing.

let writable = new stream.Writable({
    highWaterMark: 10
});
writable._write = (chunk, encoding, callback) => {
    process.stdout.write(chunk);
    callback();
};
function writeData(iterations, writer, data, encoding, cb) {
    (function write() {
        if(!iterations--) {
            return cb()
        }
        if (!writer.write(data, encoding)) {
            console.log(` <wait> highWaterMark of ${writable.highWaterMark};
reached`);
            writer.once('drain', write);
        } })()
}

writeData(4, writable, 'String longer than highWaterMark', 'utf8', () => console.log('finished'));
