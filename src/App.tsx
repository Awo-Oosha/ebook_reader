import React from 'react'
import FileInput from './components/FileInput/FileInput'
import useDocuments from './components/hooks/useDocuments'
import FileRenderer from './components/FileRenderer/FileRenderer';

const App = () => {
  const { files, handleSelectFile } = useDocuments();
  return (
    <div>
      <FileInput />

      <div>
        {files && files.map((file, idx) => (
          <p key={idx} onClick={() => handleSelectFile(file)}>{ file.name }</p>
        ))}
      </div>
      
      <FileRenderer />
    </div>
  )
}

export default App