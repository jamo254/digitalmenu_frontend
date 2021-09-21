import { toast } from 'react-toastify';

export function signIn(username, password) {
    return fetch("/auth/token/login/", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            //If there is an error
            return (response.json().then((json) => {
                //Handle error from server
                if (response.status === 400) {
                    const errors = Object.keys(json).map(
                        (k) => `[${k}]: $(json[k].join(" "))`
                    );
                    throw new Error(errors.join(" "))
                }
                //throw general error
                throw new Error(JSON.stringify(json));
            }))
                .catch((e) => {
                    if (e.name === "SyntaxError") {
                        throw new Error(response.statusText);
                    }
                    throw new Error(e);
            })
        })
        .then((json) => {
            //Call api successful
            toast(JSON.stringify(json), { type: "success" })
        })
        .catch((e) => {
        //Handle all errors
            toast(e.message, { type: "error" });
    })
}