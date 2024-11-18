import React from 'react';

const SubmissionConsole: React.FC<{ submissionData: any }> = ({ submissionData }) => {
  return (
    <div>
      <h2>Submission Data</h2>
      <pre>{JSON.stringify(submissionData, null, 2)}</pre>
    </div>
  );
};

export default SubmissionConsole;
