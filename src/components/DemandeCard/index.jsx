
import { Button } from "../Form"

export default function DemandeCard({num, date,name,dateNaissance,lieuNaissance,nomPere,nomMere}) {
    

    return(
        <div className="flex flex-col border w-100 rounded-2 cursor-pointer hover:bg-zinc-200">
            <div className="flex flex-row justify-between items-center px-4 pt-4">
                <span className="font-semibold"> Demande n°: {num} du {date} </span>
                <Button className='rounded-full' secondary={true} name={'Editer'} />
            </div>
            <hr className="border-2 my-2" />
            <div className="flex flex-col gap-2 px-4 pb-4">
                <span>Nom : <span className="font-semibold" >{name} </span></span>
                <span>Date Naissance : <span className="font-semibold" >{dateNaissance} </span></span>
                <span>Né à : <span className="font-semibold" >{lieuNaissance} </span></span>
                <span>Nom du Pere : <span className="font-semibold" >{nomPere} </span></span>
                <span>Nom dela Mere : <span className="font-semibold" >{nomMere} </span></span>
            </div>
        </div>
    )
}