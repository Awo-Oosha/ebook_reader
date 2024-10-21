import  { useEffect, useState } from 'react'
import useDocuments from '../hooks/useDocuments'
import EpubReader from './EpubReader';
import PdfReader from './PdfReader';

const FileRenderer = () => {
  const { file } = useDocuments();
  const [fileUrl, setFileUrl] = useState("");

   useEffect(() => {
			if (file && file.doc instanceof File) {
				const reader = new FileReader();

				// Define the onload event handler
				reader.onload = (e: ProgressEvent<FileReader>) => {
					if (e.target && e.target.result) {
						const url = e.target.result as string; // Type assertion to string
						setFileUrl(url); // Update the state with the data URL
						console.log("File URL:", url); // Log the URL to the console
					}
				};

				reader.onerror = (e) => {
					console.error("File reading error:", e);
				};

				reader.readAsArrayBuffer(file.doc); // Read the file as a Data URL

				return () => {
					setFileUrl("");
				};
			}
		}, [file]);

  if (file.type === "pdf") {
    return (
			<div>
				<PdfReader />
      </div>
    )
  };

  return (
		<div>
			<EpubReader url={fileUrl} />
		</div>
	);
}

export default FileRenderer