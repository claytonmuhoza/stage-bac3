import { Link, Route, Routes } from 'react-router-dom'
// import Dashbord from '../../../components/Dashbord'
import DemandeCard from '../../components/DemandeCard'
import { useState } from 'react'
import axios from 'axios'
import DemandeDetail from '../../components/DemandeDetail'

export default function Demande() {
  const [demandes, setDemandes] = useState([
    {
      name:'Abraham Tommy',
      num:'1234',
      date:'12/01/2023',
      dateNaissance:'02/05/2023',
      lieuNaissance:'Bururi',
      nomPere:'Zeptoman Otaku',
      nomMere:'Oklm Mulindi',
    },
    {
      name:'Abraham Tommy',
      num:'12345',
      date:'12/01/2023',
      dateNaissance:'02/05/2023',
      lieuNaissance:'Bururi',
      nomPere:'Zeptoman Otaku',
      nomMere:'Oklm Mulindi',
    },
    {
      name:'Abraham Tommy',
      num:'12346',
      date:'12/01/2023',
      dateNaissance:'02/05/2023',
      lieuNaissance:'Bururi',
      nomPere:'Zeptoman Otaku',
      nomMere:'Oklm Mulindi',
    }
  ])

  //your Api call
  // axios
  //   .get('https://localhost:3000/demandes/all')
  //   .then((res) => {
  //     if (res.lenght > 0) {
  //       setDemandes(res)
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('ERR:' + err)
  //   })

  return (
    // <Dashbord>
      <div className="w-full h-full overflow-scroll bg-white rounded-xl p-2 flex flex-row items-center text-slate-500">
        <Routes>
          <Route path='' element={<Demandes demandes={demandes}/>}/>
          <Route path=':id' element={<DemandeDetail/>}/>
        </Routes>
      </div>
    // </Dashbord>
  )
}

function Demandes({demandes}) {
  console.log(demandes)
  return(
    <div className="w-full h-full flex flex-col gap-4 p-5">
          <span className="text-semibold w-full text-center text-5">
            Liste des Demandes
          </span>
          <div className="flex flex-wrap gap-4 justify-center">
            {demandes.map(({name,num,dateNaissance,date, lieuNaissance, nomMere, nomPere}) => 
              (
                <Link to={num} key={num}> 
                  <DemandeCard
                    name={name}
                    num={num}
                    date={date}
                    dateNaissance={dateNaissance}
                    lieuNaissance={lieuNaissance}
                    nomPere={nomPere}
                    nomMere={nomMere}
                  />
                </Link>
              )
            )}
          </div>
        </div>
  )

}