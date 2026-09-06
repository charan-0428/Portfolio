import PropTypes from 'prop-types';
import './Logo.css';

/** Wordmark: gradient monogram tile + name, legible on the dark canvas. */
const Logo = ({ tagline }) => (
  <span className="logo">
    <span className="logo-mark" aria-hidden="true">
      NE
    </span>
    <span className="logo-text">
      <strong>Naresh Edagotti</strong>
      {tagline ? <small>{tagline}</small> : null}
    </span>
  </span>
);

Logo.propTypes = {
  tagline: PropTypes.string,
};

export default Logo;
