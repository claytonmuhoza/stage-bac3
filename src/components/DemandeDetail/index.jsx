
import axios from "axios"
import { Button } from "../Form"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import raul from '../../assets/raul.png'


export default function DemandeDetail() {

    const id = useParams().id
    const [showBtns, setShoBtns] = useState(false)

    const handleOptions = () => {
        setShoBtns(!showBtns)
    }

    const [demande, setDemande] = useState({
        name:'Abraham Tommy',
        num:'1234',
        date:'12/01/2023',
        dateNaissance:'02/05/2023',
        lieuNaissance:'Bururi',
        nomPere:'Zeptoman Otaku',
        nomMere:'Oklm Mulindi',
        cni:'3456789',
        bordereau: raul, //if done by an agent
    })

    axios.get('http://localhos:3000/demades/'+id)
        .then((res) => {
            console.log(res)
            if(res.nom)
                setDemande(res)
        })
        .catch( err => {
            console.log('ERR' + err)
        })
        
    return(
        <div className="w-full h-full flex justify-center p-5">
            {
                demande ? 
                <div className="flex flex-col border w-full md:w-10/12 rounded-2 cursor-pointer bg-zinc-100 overflow-y-auto">
                    <div className="flex flex-row justify-between items-center px-4 pt-4">
                        <span className="font-semibold text-5"> Details Demande </span>
                        <div className="flex flex-row gap-2 justify-center items-center">
                            {!showBtns && 
                                <Link to={'/scf/certificats/create/'+demande.num}>
                                    <Button className='rounded-full' secondary={false} name={'Enregistrer Certificat'} />
                                </Link>
                            }
                            {!showBtns && 
                                <Link to={'/scf/oppositions/create/'+demande.num}>
                                    <Button className='rounded-full' secondary={true} name={'Enregistrer Opposition'} />
                                </Link>
                            }
                        {showBtns && <div className="flex gap-2">
                                <Button className='rounded-full' edit={true}/>
                                <Button className='rounded-full bg-zinc-200' del={true} />
                            </div>}
                            <span className="font-semibold text-5 px-3 pb-3 hover:bg-slate-200 rounded-full cursor-pointer" title="more options" onClick={handleOptions}>...</span>
                        </div>
                    </div>
                    <hr className="border-2 my-2" />
                    <div className="flex flex-col gap-2 px-4 pb-4 text-5">
                        <span>Numero Demande : <span className="font-semibold" >{demande.num} </span></span>
                        <span>Nom : <span className="font-semibold" >{demande.name} </span></span>
                        <span>Date Naissance : <span className="font-semibold" >{demande.dateNaissance} </span></span>
                        <span>Né à : <span className="font-semibold" >{demande.lieuNaissance} </span></span>
                        <span>Nom du Pere : <span className="font-semibold" >{demande.nomPere} </span></span>
                        <span>Nom dela Mere : <span className="font-semibold" >{demande.nomMere} </span></span>
                        <span>CNI : <span className="font-semibold" >{demande.cni} </span></span>
                        {
                            !demande.agent &&
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold underline" > Bordereau de Paiement </span>
                                <img className="w-50" src={raul} alt="bordereau de paiement"/>
                            </div>
                        }
                    </div>
                </div> :
                <div>
                    Loader
                </div>
            }
        </div>
    )
}