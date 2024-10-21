import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DocumentsProvider from './components/providers/DocumentProvider.tsx'

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<DocumentsProvider>
			<App />
		</DocumentsProvider>
	</StrictMode>
);
