import React from 'react'
import useDocuments from '../hooks/useDocuments';

const FileInput = () => {
  const { setFiles } = useDocuments();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray: File[] = [];
    const files: FileList | null = e.target.files ?? null;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        filesArray.push(file);
        setFiles(filesArray);
      }
    }
  };

  return (
    <div>
      <input
        type='file'
        multiple
        id='file-input'
        name='file'
        onChange={handleFileChange}
        className='hidden'
      />
      <label
        htmlFor='file-input'
        className='cursor-pointer border rounded-md px-4 py-3'
      >
        Upload Files
      </label>
    </div>
  )
}

export default FileInput