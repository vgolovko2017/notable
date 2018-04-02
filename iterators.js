// let xmen = ['Cyclops', 'Wolwevin', 'Rigue'];
//
// // console.log('for');
// // for (let index = 0; index < xmen.length; index++) {
// //     console.log(xmen[index]);
// // }
// //
// // console.log('for in');
// // for (let key in xmen) {
// //     console.log(xmen[key]);
// // }
//
// console.log('for...of');
// for (let xman of xmen) {
//     console.log(xman);
// }
//
// let iterator = xmen[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
//
// //console.log(iterator.length);
//
// let next = iterator.next();
//
// while(!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;

                return { value, done }
            }
        };
    }
};

for (let id of idGenerator) {
    console.log(id);
}


let randomGenerator = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count += 1;

                return { value, done }
            }
        };
    }
};

for (let random of randomGenerator) {
    console.log(random);
}




