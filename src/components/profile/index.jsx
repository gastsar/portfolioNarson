import PropTypes from 'prop-types';
export const SocialLink = ({ href: linkHref, ariaLabel, children }) => (
  <a
    href={linkHref}
    target="_blank"
    rel="noopener noreferrer"
    role="link"
    tabIndex={0}
    aria-label={ariaLabel}
    className="rounded-full bg-slate-900 p-2 text-2xl text-amber-300 duration-300 hover:bg-slate-700"
  >
    {children} 
  </a>
);

  SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    ariaLabel: PropTypes.string.isRequired,
  };
