export const Api = {
    fetchUser: () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json());
            // .then(json => console.log(json))
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(require('./data.json'));
        //     }, 3000);
        // })
    }
}