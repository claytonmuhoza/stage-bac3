
import axios from "axios"
import { Button,File } from "../Form"
import { useParams } from "react-router-dom"
import { useState } from "react"
// import raul from '../../assets/raul.png'
import Dashbord from "../Dashbord"
import {InputLabel} from "@mui/material"
import TextInput from "../TextInput"
// import LoadingBtn from "../LoadingBtn"


export default function CreateCertificat() {

    const num_demande = useParams().numDemande

    ///check first if the id exists : NumDemande
        //call some apis


    //sates
    const [numDemande, setNumDemande] = useState(num_demande)
    const [pdfFile, setPdfFile] = useState('')
    const [numCertificat, setCertificat] = useState('')
    const [nomProprietaire, setNomProprietaire] = useState('')
    const [typeProprietaire, setTypeProprietaire] = useState('')
    

    const categories = [
        {
            value: 'Cat1',
            label: 'CAT1'
        },
        {
            value: 'Cat2',
            label: 'CAT2'
        },
        {
            value: 'Cat3',
            label: 'CAT3'
        }
    ]

    const handlePost = () => {
        const data = {
            numDemande : numDemande,
            file : pdfFile.link,
            numCertificat : numCertificat,
            nomProprietaire : nomProprietaire,
            typeProprietaire : typeProprietaire
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
                            <span className="font-semibold text-5"> Enregistrer Certificat   </span>
                            {/* <div className="flex flex-row gap-2 justify-center items-center">
                                {!showBtns && <Button className='rounded-full' secondary={false} name={'Enregistrer Certificat'} />}
                                {!showBtns && <Button className='rounded-full' secondary={true} name={'Enregistrer Opposition'} />}
                            {showBtns && <div className="flex gap-2">
                                    <Button className='rounded-full' edit={true}/>
                                    <Button className='rounded-full bg-zinc-200' del={true} />
                                </div>}
                                <span className="font-semibold text-5 px-3 pb-3 hover:bg-slate-200 rounded-full cursor-pointer" title="more options" onClick={handleOptions}>...</span>
                            </div> */}
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
                                    // multiple={true}
                                />
                                <div>
                                <InputLabel hidden={true}>Fichier Pdf</InputLabel> {/* dont delete */}
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                           {!pdfFile ? <div className="flex flex-col items-center justify-center">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="text-3 text-gray-500 dark:text-gray-400"><span className="font-semibold">Fichier Pdf</span></p>
                                                {/* <p className="text-3 text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p> */}
                                                <p className="text-3 text-gray-500 dark:text-gray-400"><span className="font-semibold">Max size : 100MB</span></p>
                                                {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                            </div>
                                             : 
                                             <p className="text-4 text-blue-400 dark:text-gray-400"><span className="font-semibold">{pdfFile.name}</span></p>
                                             }
                                            {/* <input id="dropzone-file" type="file" className="hidden" /> */}
                                            <File hidden={true} sendValue={setPdfFile} value={pdfFile} only='.pdf'/>
                                        </label>
                                    </div>
                                    {/* <span>Max file size: 100 MB</span> */}
                                </div>
                                <TextInput
                                    className='w-full'
                                    label={"Numero Cerificat"}
                                    inputValue={numCertificat}
                                    handleInput={setCertificat}
                                />
                                <TextInput
                                    className='w-full'
                                    label={"Nom & Prenom Proprietaire"}
                                    inputValue={nomProprietaire}
                                    handleInput={setNomProprietaire}
                                />
                                <TextInput
                                    className='w-full'
                                    label={"Type Proprietaire"}
                                    data={categories}
                                    inputValue={typeProprietaire}
                                    handleInput={setTypeProprietaire}
                                />
                            </div>
                            <div className="w-10/12 flex justify-left pt-3">
                                <Button
                                    onClick={handlePost}
                                    name="Enregistrer"
                                    className='rounded font-semibold'
                                />
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
        // </Dashbord>
    )
}