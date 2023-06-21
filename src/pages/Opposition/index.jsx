import { useState } from 'react'
import axios from 'axios'

export default function Opposition() {

  return (
    <div className="w-full h-full overflow-scroll bg-white rounded-xl p-2 flex flex-row items-center text-slate-500">
          <Oppositions/>
      </div>
  )
}

function Oppositions({}) {

  const [oppositions, setOppositions] = useState([
    {
      numDemande: 1234,
      nom: 'Abraham Tommy',
      ///and more..
    },
    {
      numDemande: 12345,
      nom: 'Zeptoman Clay',
      ///and more..
    },
    {
      numDemande: 12346,
      nom: 'Mister Nobody',
      ///and more..
    },
  ])

  console.log(oppositions)

  // axios
  //   .get('https://localhost:3000/oppositions/all')
  //   .then((res) => {
  //     if (res.lenght > 0) {
  //       setOppositions(res)
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('ERR:' + err)
  //   })

  //lever oposition
  const handlerLeverOpposition  = () => {
    ///your api call
  }

  return(
    <div className="w-full h-full flex flex-col gap-4 p-5">
          <span className="text-semibold w-full text-center text-5">
            Liste des Oppositions
          </span>
          <div className="flex flex-wrap gap-4 justify-center">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full md:w-10/12">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nom & Prenom
                            </th>
                            <th scope="col" className="px-6 py-3">
                                N° Demande
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            oppositions.map(({nom, numDemande}) => 
                            (
                              <tr key={numDemande} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {nom}
                                </th>
                                <td className="px-6 py-4">
                                    {numDemande}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span onClick={handlerLeverOpposition} className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Lever Opposition</span>
                                </td>
                            </tr>
                            ))
                          }
                    </tbody>
                </table>
            </div>

          </div>
        </div>
  )

}