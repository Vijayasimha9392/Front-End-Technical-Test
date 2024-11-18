import React from 'react';

const ValidationMessages: React.FC<{ errors: any }> = ({ errors }) => {
  return (
    <div>
      {Object.keys(errors).map((key) => (
        <div key={key} className="text-red-500">
          {errors[key].message}
        </div>
      ))}
    </div>
  );
};

export default ValidationMessages;
