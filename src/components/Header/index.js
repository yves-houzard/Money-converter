import PropTypes from 'prop-types';

import './style.scss';

export default function Header({ inputDevice, onChange }) {
  const handleOnChange = (e) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="header">
      <h1 className="header__title">Converter</h1>
      <input type="number" className="header__input" min="1" value={inputDevice} onChange={handleOnChange} />
      <p className="header__base">€</p>
    </div>
  );
}

Header.propTypes = {
  inputDevice: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
