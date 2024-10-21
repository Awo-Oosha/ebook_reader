import React, { Fragment } from 'react'
import FileInput from '../FileInput/FileInput'
import BaseDropdown from '../Dropdown/BaseDropdown'
import { DotsThreeVertical } from '@phosphor-icons/react'
import useDocuments from '../hooks/useDocuments'
import { cn } from '../../utils/utils'

const Header = () => {

  const { files, handleSelectFile } = useDocuments();

  const ShowFiles = () => {
    return (
			<Fragment>
				{files &&
					files.map((file, idx) => (
						<div
							key={idx}
							className={cn("flex items-center w-[300px] bg-slate-950 px-3 py-2.5 rounded-md")}
							onClick={() => handleSelectFile(file)}
						>
							<div className='flex items-center'>
								<p className='text-white w-[230px] truncate'>{file.name}</p>
							</div>
							<div></div>
						</div>
					))}
			</Fragment>
		);
  }

  return (
    <header className='w-full flex items-center justify-between px-5 py-2.5'>
      <FileInput />
      <BaseDropdown
        toggleHandler="Select a file"
        dropdownContent={<ShowFiles />}
      />
      <div>
        <DotsThreeVertical size={32} />
      </div>
    </header>
  )
}

export default Header