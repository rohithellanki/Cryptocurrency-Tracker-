// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount = () => {
    this.fetchCrypto()
  }

  fetchCrypto = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    console.log(data)

    const newData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({cryptoList: newData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="table-container">
        <div className="headings-container">
          <p>Coin Type</p>
          <div className="usd">
            <p className="usdname">USD</p> &nbsp; &nbsp; &nbsp;
            <p className="usdname1">EURO</p>
          </div>
        </div>

        <div className="usd">
          <div className="coin">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              cryptoList.map(item => (
                <CryptocurrencyItem key={item.id} cryptoDetails={item} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
