import { toast } from 'react-toastify';

export function request(path, {data = null, token = null, method = "GET"}) {
    return fetch(path, {
        method,
        headers: {
            Authorization: token ? `Token ${token}` : "",
            
            "Content-Type": "application/json",
        },
        body: method !== "GET" && method !== "DELETE" ? JSON.stringify(data) : null,
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                if (method === "DELETE") {
                    return true;
                }
                return response.json()
            }
            //If there is an error
            return (response.json().then((json) => {
                //Handle error from server
                if (response.status === 400) {
                    const errors = Object.keys(json).map(
                        (k) => ` ${(json[k].join(" "))}`
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
       
        .catch((e) => {
        //Handle all errors
            toast(e.message, { type: "error" });
    })
}



//User Login API
export function signIn(username, password) {
    return request("auth/token/login/", {
        data: { username, password },
        method: "POST",
    })
}



//Registering new user
export function register(username, password) {
    return request("auth/users/", {
        data: { username, password },
        method: "POST",
    })
}

export function fetchPlaces(token) {
    return request("/api/places/", { token });

}

export function addPlaces(data,token) {
    return request("/api/places/", {data, token, method:"POST" });

}