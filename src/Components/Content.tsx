import { useRef } from "react";

export default function Content(props:any) {
    const {titre, texte, className, handleUpdate} = props;
    const refStatus = useRef<any>(null);

    function handleDoing(e:any) {
        e.preventDefault();
        let item : {titre:string, texte:string, status : string} = {
            titre : titre,
            texte : texte,
            status : refStatus.current = "DOING",
        }
        handleUpdate(item);
    }

    function handleFinished(e:any) {
        e.preventDefault();
        let item : {titre:string, texte:string, status : string} = {
            titre : titre,
            texte : texte,
            status : refStatus.current = "FINISHED",
        }
        handleUpdate(item);
    }
   
    return(
            <div className="content">
                <h2 className={className}>{titre}</h2>
                <p>{texte}</p>
                <div className="sur">
                    <h4 >Change Status</h4>
                    <button type="submit" id="bet1" onClick={handleDoing}>Doing</button>
                    <button type="submit" id="bet2" onClick={handleFinished}>Finished</button>
                </div>              
            </div>
    )
}