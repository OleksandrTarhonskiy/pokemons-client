import React from 'react';

interface IErrorProps {
  message: string
}

const Error: React.FC<IErrorProps> = ({ message }) => {
  return (
    <div className="error-layout">
      <p className="h3">
        {message}
      </p> 
    </div>
  );
};

export default Error;