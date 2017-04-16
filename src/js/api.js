export default class {
    get(key) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', './api/mock.json');

            request.onload = () => {
                // success
                if (request.status === 200) {
                    // resolve the promise with the parsed response text (assumes JSON)
                    resolve(JSON.parse(request.response)[key]);
                } else {
                    // error retrieving file
                    reject(Error(request.statusText));
                }
            };

            request.onerror = () => {
                // network errors
                reject(Error('Network Error'));
            };

            request.send();
        });
    }
}
