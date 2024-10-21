import React from 'react'
import FileInput from './components/FileInput/FileInput'
import useDocuments from './components/hooks/useDocuments'
import FileRenderer from './components/FileRenderer/FileRenderer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='w-full h-[100dvh] flex flex-col border-2 border-blue-900'>
      <Header />
      {/*

      <div>
        {files && files.map((file, idx) => (
          <p key={idx} onClick={() => handleSelectFile(file)}>{ file.name }</p>
        ))}
      </div> */}
      
      <FileRenderer />
    </div>
  )
}

export default App