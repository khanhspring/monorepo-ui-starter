import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {UIProvider} from "@repo/ui/atoms";
import App from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
)
