import React from 'react'
import FileInput from './components/FileInput/FileInput'
import useDocuments from './components/hooks/useDocuments'
import FileRenderer from './components/FileRenderer/FileRenderer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='w-full h-[100dvh] flex flex-col'>
      <Header />
      <FileRenderer />
    </div>
  )
}

export default App