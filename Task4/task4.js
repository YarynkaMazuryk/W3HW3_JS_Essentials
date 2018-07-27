function getResultAfterTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                result: 10
            });
        }, 10000);
    });
}
function getPromiseSecond() {
    return new Promise(function (resolve, reject) {
        resolve( getResultAfterTime().then(data => {
            return data;
        }) );
        });
}
async function showAll() {
            try {   
                const secondPromise = await getPromiseSecond(); 
                console.log(secondPromise);
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



