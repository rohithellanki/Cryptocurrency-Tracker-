// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="currency-container">
      <div className="logo-container">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p>{usdValue}</p> &nbsp; &nbsp;
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
