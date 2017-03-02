export default function reducer(state={
    ipaddresses: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch (action.type) {
        case "FETCH_IPADDRESSES": {
            return {...state, fetching: true}
        }
        case "FETCH_IPADDRESSES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_IPADDRESSES": {
            return {...state, fetching: true}
        }
    }
}