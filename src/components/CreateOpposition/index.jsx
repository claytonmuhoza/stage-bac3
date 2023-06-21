
import axios from "axios"
import { Button } from "../Form"
import { useParams } from "react-router-dom"
import { useState } from "react"
// import raul from '../../assets/raul.png'
import { Input, TextField, InputLabel, ButtonBase } from "@mui/material"
import TextInput from "../TextInput"
// import LoadingBtn from "../LoadingBtn"


export default function CreateOpposition() {

    const num_demande = useParams().numDemande

    //sates
    const [numDemande, setNumDemande] = useState(num_demande)
    const [motif, setMotif] = useState('')
    const [date, setDate] = useState()
    const [nomOpposant, setNomOpposant] = useState('')
    // const [typeProprietaire, setTypeProprietaire] = useState('')


    const handlePost = () => {
        const data = {
            numDemande : numDemande,
            motif : motif,
            date : date,
            nomOpposant : nomOpposant,
        }
        console.log(data)

        //call your Api here to POST DATA
    }
        
    return(
        // <Dashbord>
        <div className="w-full h-full overflow-scroll bg-white rounded-xl p-2 flex flex-row items-center text-slate-500">
            <div className="w-full h-full flex justify-center p-5">
                    <div className="flex flex-col border w-full md:w-10/12 rounded-2 cursor-pointer bg-zinc-100 overflow-y-auto">
                        <div className="flex flex-row justify-between items-center px-4 pt-4">
                            <span className="font-semibold text-5"> Enregistrer Opposition </span>
                        </div>
                        <hr className="border-2 my-2" />
                        <div className="flex w-full flex-col gap-2 p-4 pb-4 text-5 justify-center items-center">
                            <div className="w-10/12 flex flex-col gap-4 m-auto">
                                <InputLabel hidden={true}></InputLabel> {/* dont delete */}
                                <TextInput
                                    className='w-full'
                                    label={"Numero Demamde"}
                                    readOnly={true}
                                    inputValue={numDemande}
                                    handleInput={setNumDemande}
                                />
                                <TextInput
                                    className='w-full'
                                    label={"Motif"}
                                    multiple={4}
                                    inputValue={motif}
                                    handleInput={setMotif}
                                />
                                <div className="w-full">
                                    <InputLabel >Date</InputLabel> {/* dont delete */}
                                    <Input
                                        className="w-full"
                                        type="date"
                                        onChange={(e)=>{
                                            setDate(e.target.value)
                                        }}
                                    />
                                </div>
                                <TextInput
                                    className='w-full'
                                    label={"Nom & Prenom Opposant"}
                                    inputValue={nomOpposant}
                                    handleInput={setNomOpposant}
                                />
                            </div>
                            <div className="w-10/12 flex justify-left pt-3">
                                <Button
                                    name="Enregistrer"
                                    className='rounded font-semibold'
                                    onClick={handlePost}
                                />
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
        // </Dashbord>
    )
}