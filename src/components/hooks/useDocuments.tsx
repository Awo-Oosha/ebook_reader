import React from 'react'
import { DocumentsContext } from '../providers/DocumentProvider';
const useDocuments = () => {
  const context = React.useContext(DocumentsContext);
  if (!context) throw new Error("useDocuments must be used within a DocumentsProvider");
  
  return context;
}

export default useDocuments;