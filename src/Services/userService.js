export function getUser (Username){
    const requestOptions = {
        method: "get", 
        headers: {
            "Content-Type": "application/json", 
            "Authorization": "bearer 07b0731d-1e1d-41c4-b11f-42660809f386"
        }
    }
    return fetch ("https://blogpress.api.hscc.bdpa.org/v1/users/" + Username, requestOptions)
        .then(data => data.json())
}