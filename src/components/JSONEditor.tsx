import React, { useState } from 'react';

const JSONEditor: React.FC<{ setSchema: (schema: any) => void }> = ({ setSchema }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsedJson = JSON.parse(e.target.value);
      setSchema(parsedJson);
    } catch (error) {
      console.error('Invalid JSON');
    }
  };

  return (
    <textarea
      value={jsonInput}
      onChange={handleInputChange}
      rows={30}
      className="w-full p-2 border"
      placeholder="Enter JSON schema here..."
    />
  );
};

export default JSONEditor;
