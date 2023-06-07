import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
