import PropTypes from 'prop-types';
import './style.scss';

export default function Footer({ valueDevice, currency }) {
  return (
    <div className="footer">
      <p className="footer__value">{valueDevice}</p>
      <p className="footer__currency">{currency}</p>
    </div>
  );
}

Footer.propTypes = {
  valueDevice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
