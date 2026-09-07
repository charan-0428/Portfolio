import './Background.css';

/**
 * Fixed, non-interactive backdrop: a slowly drifting aurora over a
 * fine grid, with a vignette to keep foreground text readable.
 */
const Background = () => (
  <div className="backdrop" aria-hidden="true">
    <div className="backdrop-grid" />
    <span className="blob blob-indigo" />
    <span className="blob blob-violet" />
    <span className="blob blob-cyan" />
    <div className="backdrop-vignette" />
  </div>
);

export default Background;
