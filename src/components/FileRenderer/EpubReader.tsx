import { useEffect, useRef, useState } from 'react'
import Epub from 'epubjs'

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
		<div className="w-screen h-screen flex items-center justify-center">
      <button>
        
      </button>
			<div ref={viewRef} style={{ width: "100%", height: "100%" }}></div>
			<button></button>
		</div>
	);
}

export default EpubReader