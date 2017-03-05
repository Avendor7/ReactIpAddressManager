import axios from "axios";

export function fetchIpAddresses(){
    return fuction(dispatch) {
        axios.get("INSERTLINKHERE")
            .then((resoponse) => {
                dispatch({type: "FETCH_IPADDRESSES_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_IPADDRESSES_REJECTED", payload: err})
            })
    }   
}

export function addIpAddress(id, ipv4, ipv6, container, docker, vm, operating_system, description){
    return {
        type: 'ADD_IPADDRESS',
        payload:{
            id, 
            ipv4, 
            ipv6, 
            container, 
            docker, 
            vm, 
            operating_system, 
            description
        }
    }
}

export function updateIpAddress(id, ipv4, ipv6, container, docker, vm, operating_system, description){
    return {
        type: 'UODATE_IPADDRESS',
        payload:{
            id, 
            ipv4, 
            ipv6, 
            container, 
            docker, 
            vm, 
            operating_system, 
            description
        }
    }
}

export function deleteIpAddress(id) {
    return {type: 'DELETE_IPADDRESS', payload: id}
}