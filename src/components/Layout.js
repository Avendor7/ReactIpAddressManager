import React from "react";
import { connect } from "react-redux";

import { fetchIpAddresses} from "../actions/ipAddressActions";

@connect((store) => {
  return {
    
    ipaddresses: store.ipaddresses.ipaddresses
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchIpAddresses() {
    this.props.dispatch(fetchIpAddresses())
  }

  render() {
    const { ipaddresses} = this.props;

    if (!ipaddresses.length) {
      return <button onClick={this.fetchIpAddresses.bind(this)}>load Addresses</button>
    }

    const mappedIpAddresses = ipaddresses.map(ipaddresses => <li>{ipaddresses.hostname}</li>)

    return <div>
      <ul>{mappedIpAddresses}</ul>
    </div>
  }
}