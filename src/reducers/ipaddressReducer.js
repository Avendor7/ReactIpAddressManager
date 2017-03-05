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
            return {
                ...state, 
                fetching: false,
                fetched: true,
                ipaddresses: action.payload
            }
        }
        case "ADD_IPADDRESS": {
            return {
                ...state, 
                ipaddresses: [...state.ipaddresses, action.payload]
            }
        }
        case "UPDATE_ADDRESSES": {
            const {id, ipv4, ipv6, container, docker, vm, operating_system, description}= action.payload;
            const newIpAddresses = [...state.ipaddresses];
            const ipaddressToUpdate = newIpAddresses.findIndex(ipaddress => ipaddress.id === id);
            newIpAddresses[ipaddressToUpdate] = action.payload;

            return {
                ...state,
                ipaddress: newIpAddresses,
            }
        }
        case "DELETE_IPADDRESS":{
            return {
                ...state,
                ipaddresses: state.ipaddresses.filter(ipaddress => ipaddress.id !== action.payload)
            }
        }
    }
    return state;
}
