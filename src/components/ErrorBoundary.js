// src/components/ErrorBoundary.js
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="text-red-500 text-lg">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary} className="mt-4 bg-red-500 text-white p-2 rounded">
      Try Again
    </button>
  </div>
);

const CustomErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
