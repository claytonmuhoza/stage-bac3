import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'material-icons/iconfont/round.css'


///SCF
import Demande from './pages/Demande'
import Opposition from './pages/Opposition'
import CreateCertificat from './components/CreateCertificat'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NavProvider>
    <SessionProvider>
      <Router>
          <Routes>
            <Route path="/demandes/*" element={<Demande/>}/>
            <Route path="/oppositions" element={<Opposition/>}/>
            <Route path="/oppositions/create/:numDemande" element={<CreateOpposition/>}/>
            <Route path="/certificats/create/:numDemande" element={<CreateCertificat/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </SessionProvider>
    </NavProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
