import { useEffect, useRef, useState } from 'react'
import Epub from 'epubjs'
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { cn } from '../../utils/utils';

const EpubReader = ({ url }: { url: string | ArrayBuffer }) => {
	const bookRef = useRef<any>(null);
  const viewRef = useRef<any>(null);
  const [redition, setRedition] = useState<any>(null);

	useEffect(() => {
		if (url) {
			const book = Epub(url);
      bookRef.current = book;
      
      const rendition = book.renderTo(viewRef.current, {
        width: "95vw",
        height: "100%"
      })

      setRedition(rendition);
      rendition.display();

      return () => {
				if (bookRef.current) {
					bookRef.current.destroy();
				}
			};
		}
  }, [url]);
  
  const nextPage = () => {
    if (redition) redition.next();
  }

  const prevPage = () => {
    if (redition) redition.prev();
  }
  
  return (
		<div className="w-full h-full flex flex-row items-center justify-center ">
			<button
				onClick={prevPage}
				className={cn(
					"flex h-full w-[5vw] items-center justify-center rounded-full",
					"hover:bg-slate-100 transition-all duration-200 ease-in-out"
				)}
			>
				<CaretLeft weight="bold" size={32} />
			</button>
			<div className="flex w-full h-full items-center justify-center">
				<div ref={viewRef} style={{ width: "100%", height: "100%" }} />
			</div>
			<button
				onClick={nextPage}
				className={cn(
					"flex h-full w-[5vw] items-center justify-center rounded-full",
					"hover:bg-slate-100 transition-all duration-200 ease-in-out"
				)}
			>
				<CaretRight weight="bold" size={32} />
			</button>
		</div>
	);
}

export default EpubReader