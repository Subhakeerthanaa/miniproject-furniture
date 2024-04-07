import React, { createContext, useState } from 'react';

export const InquiriesContext = createContext();

export const InquiriesProvider = ({ children }) => {
  const [submittedInquiries, setSubmittedInquiries] = useState([]);

  return (
    <InquiriesContext.Provider value={{ submittedInquiries, setSubmittedInquiries }}>
      {children}
    </InquiriesContext.Provider>
  );
};
