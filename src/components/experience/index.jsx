import PropTypes from 'prop-types';
export function ButtonCard({href,ariaLabel, children}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className=""
    >
      {children}
    </a>
  );
}

ButtonCard.propTypes = {
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const ProjectStatus = ({ project }) => {
  return (
    <p className={`size-fit rounded-sm p-1 text-xs font-medium text-slate-100 duration-300 hover:opacity-70 ${project.status === 'Terminer' ? 'cursor-default bg-green-800' : 'cursor-wait bg-blue-600'}`}>
      {project.status}
    </p>
  );
}


ProjectStatus.propTypes = {
  project: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};




