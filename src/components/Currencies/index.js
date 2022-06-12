import PropTypes from 'prop-types';
import './style.scss';

export default function Currencies({
  currencies,
  onClick,
  onChange,
  inputSearch,
}) {
  const handleOnClick = (e) => {
    onClick(e.target.textContent);
  };

  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="currencies">
      <input type="text" className="currencies__input" placeholder="Rechercher une device" value={inputSearch} onChange={handleOnChange} />
      <ul className="currencies__list">
        {currencies.map(({ name }) => (<li key={name} className="currencies__item" onClick={handleOnClick}>{name}</li>))}
      </ul>
    </div>
  );
}
Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.number,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
