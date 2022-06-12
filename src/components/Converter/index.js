// == Import
import './styles.scss';
import { useState, useEffect } from 'react';

import Header from '../Header';
import Currencies from '../Currencies';
import Footer from '../Footer';

// == Data
import currenciesData from '../../data/currencies';

// == Composant
export default function Converter() {
  const [currency, setCurrency] = useState('United States Dollar');
  const [search, setSearch] = useState('');
  const [device, setDevice] = useState(1);

  useEffect(() => {
    document.title = `Euro to ${currency}`;
  }, [currency]);

  const setFilteredCurrencies = () => {
    if (!search) return currenciesData;
    const filteredCurrencies = currenciesData.filter((item) => {
      const lowerCurrency = item.name.toLowerCase();
      const lowerSearch = search.toLowerCase();

      return lowerCurrency.includes(lowerSearch);
    });
    return filteredCurrencies;
  };

  const makeConversion = () => {
    const foundCurrency = currenciesData.find((item) => item.name === currency);
    return Number((foundCurrency.rate * device).toFixed(2));
  };

  const filteredCurrencies = setFilteredCurrencies();
  const convertDevice = makeConversion();

  return (
    <div className="converter">
      <Header inputDevice={device} onChange={setDevice} />
      <Currencies
        currencies={filteredCurrencies}
        onClick={setCurrency}
        onChange={setSearch}
        inputSearch={search}
      />
      <Footer valueDevice={convertDevice} currency={currency} />
    </div>
  );
}
