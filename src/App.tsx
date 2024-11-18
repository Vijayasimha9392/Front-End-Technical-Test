import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import { FormSchema } from './types/formTypes';

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <JSONEditor setSchema={setSchema} />
      </div>
      <div className="w-1/2 p-4">
        {schema && <FormPreview schema={schema} />}
      </div>
    </div>
  );
};

export default App;
