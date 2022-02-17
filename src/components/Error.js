import React from 'react';

const Error = ({ title }) => {
  return (
    <div>
      <h2 className="text-lg text-tertiary-900 text-center font-semibold ">
        Error : {title}
      </h2>
    </div>
  );
};

export default Error;
