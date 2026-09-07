import PropTypes from 'prop-types';
import { person } from '../../data/site';
import './Logo.css';

/** Wordmark: gradient monogram tile + name, legible on the dark canvas. */
const Logo = ({ tagline = person.brandTagline }) => (
  <span className="logo">
    <span className="logo-mark" aria-hidden="true">
      {person.initials}
    </span>
    <span className="logo-text">
      <strong>{person.name}</strong>
      {tagline ? <small>{tagline}</small> : null}
    </span>
  </span>
);

Logo.propTypes = {
  tagline: PropTypes.string,
};

export default Logo;
