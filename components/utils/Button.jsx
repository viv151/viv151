import React from 'react';

const config = {
  primary: 'bg-white bg-opacity-90 text-lak-blue ',
  secondary: 'bg-lak-blue bg-opacity-80 text-white',
  transparent: 'bg-white bg-opacity-10 text-white backdrop-blur-lg',
  orange: 'bg-orange-400 bg-opacity-90 text-white bg-shadow[0_4px_0_#fff]',
  dynamic: 'w-full md:w-auto',
  xs: 'py-3 px-6',
  md: 'py-2 px-8 text-lg',
  lg: 'py-2 px-12 text-lg',
  xl: 'py-3 px-12 text-xl',
  full: 'w-full py-3 text-xl',
  nomral: 'p-0 ',
};

// normal button
function Button({ type = 'primary', size = 'md', children = 'Button' }, props) {
  return (
    <button
      {...props}
      className={`${config[type]} ${config[size]} tracking-wide shadow-normal font-medium rounded-lg transform active:translate-y-[4px] active:shadow-active flex justify-center items-center`}
    >
      <span className="text-center">{children}</span>
    </button>
  );
}

export const AEButton = (props) => {
  const { type = 'primary', size = 'md', ticketId } = props;
  let tic = ticketId.toString();

  return (
    <button
      data-event-id="80001140486759"
      data-ticket-id={ticketId}
      className={`${config[type]} ${config[size]} text-center ae-ticket-book-button tracking-wide shadow-normal font-medium rounded-lg transform active:translate-y-[4px] active:shadow-active flex justify-center items-center`}
    >
      Register Now
    </button>
  );
};

// button for nextjs link routing
export const LinkButton = React.forwardRef(
  ({ onClick, href, type = 'primary', size = 'md', children = 'Button' }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`${config[type]} ${config[size]} text-center tracking-wide shadow-normal font-medium rounded-lg transform active:translate-y-[4px] active:shadow-active flex justify-center items-center`}
      >
        {children}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export default Button;
