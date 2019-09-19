import {useState} from "react";

export const useErrorHandler = (initialState) => {
  const [error, setError] = useState(initialState);
  const showError = ({
    error: errorMessage
  }) => {
    setError(errorMessage);
    setTimeout(() => {
      
    }, 1000);
  };
  return {error, showError};
};