// Write your code here
import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
