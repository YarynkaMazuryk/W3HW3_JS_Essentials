function getResultAfterTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                result: 10
            });
        }, 10000);
    });
}

getResultAfterTime()
    .then(data => console.log(data));