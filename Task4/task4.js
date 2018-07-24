function getPromiseFirst() {
    return new Promise(function (resolve, reject) {
        resolve({
            name: 'yarynka',
        });
    })
}
function getPromiseSecond() {
    return new Promise(function (resolve, reject) {
        resolve({
            surname: "mazuryk"
        });
    })
}
function getResultAfterTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                result: 10
            });
        }, 10000);
    });
}
async function showAll() {
    try {
        const firstPromise = await getPromiseFirst();
        const secondPromise = await getPromiseSecond();
        const timePromise = await getResultAfterTime();
        console.log(firstPromise, secondPromise, timePromise);
    } catch (error) {
    }
}
showAll();


// getPromiseFirst().then(data => {
//     console.log(data);
//     getPromiseSecond().then(data => {
//         console.log(data);
//         getResultAfterTime().then(data => {
//             console.log(data);
//         });
//     });
// });



