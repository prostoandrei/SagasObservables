export const Api = {
    fetchUser: (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 10000);
        })
    }
}