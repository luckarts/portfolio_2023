import React from 'react';

const LoadingIndicator = ({ className }) => {
  const loader =
    'inline-block h-3 w-3 my-auto mx-1 rounded-md animation-bulging animation-1s animation-ease-in-out transition ease-in-out';
  return (
    <div className="flex items-center justify-center w-full h-full loader" data-testid="loading">
      <span key={1} className={`${loader} ${className} bg animation-delay-04s`} />
      <span key={2} className={`${loader} ${className} animation-delay-02s`} />
      <span key={3} className={`${loader} ${className}`} />
    </div>
  );
};
export default LoadingIndicator;
