import { useEffect, useRef, useState } from 'react'
import Epub from 'epubjs'
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const EpubReader = ({ url }: { url: string | ArrayBuffer }) => {
	const bookRef = useRef<any>(null);
  const viewRef = useRef<any>(null);
  const [redition, setRedition] = useState<any>(null);

	useEffect(() => {
		if (url) {
			const book = Epub(url);
      bookRef.current = book;
      
      const rendition = book.renderTo(viewRef.current, {
        width: 500,
        height: 500
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
		<div className="w-full h-full flex items-center justify-center">
			<div>
				<button onClick={prevPage}>
					<CaretLeft weight="bold" size={32} />
				</button>
			</div>
			<div>
				<div ref={viewRef} style={{ width: "100%", height: "100%" }} />
			</div>
			<div>
				<button onClick={nextPage}>
					<CaretRight weight="bold" size={32} />
				</button>
			</div>
		</div>
	);
}

export default EpubReader