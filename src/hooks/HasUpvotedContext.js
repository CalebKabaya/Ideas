import React, { createContext, useContext, useState } from 'react';

const HasUpvotedContext = createContext();

export const useHasUpvoted = () => {
  return useContext(HasUpvotedContext);
};

export const HasUpvotedProvider = ({ children }) => {
  const [hasUpvoted, setHasUpvoted] = useState({});

  const toggleUpvote = (ideaId) => {
    setHasUpvoted((prevUpvotes) => ({
      ...prevUpvotes,
      [ideaId]: !prevUpvotes[ideaId],
    }));
  };

  return (
    <HasUpvotedContext.Provider value={{ hasUpvoted, toggleUpvote }}>
      {children}
    </HasUpvotedContext.Provider>
  );
};
