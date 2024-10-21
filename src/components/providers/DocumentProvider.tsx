import { useCallback, useState, createContext } from 'react'

interface documentContextProps {
	handleSelectFile: (doc: File) => void;
	files: File[] | null;
	setFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
	file: { doc: File | null; type: string | undefined };
}
export const DocumentsContext = createContext<documentContextProps | undefined>(undefined);

const DocumentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [file, setFile] = useState<{ doc: File | null, type: string | undefined}>({
    doc: null,
    type: undefined
  });
  
  const handleSelectFile = useCallback((doc: File) => {
    if (doc === file.doc) return;
    if (doc) {
      const fileType = doc.name.split(".").pop();
      setFile({ doc: doc, type: fileType })
    }
  }, [file]);
  
  
  return (
		<DocumentsContext.Provider
			value={{
        handleSelectFile,
        files,
        setFiles,
        file
			}}
		>
			{children}
		</DocumentsContext.Provider>
	);
}

export default DocumentsProvider