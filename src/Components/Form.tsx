import { useRef, useState } from "react";
import Card from "./Card";
import Content from "./Content";
import Input from "./Test";

function Form(){
    const refTitre = useRef<any>(null);
    const refTexte = useRef<any>(null);
    const refStatus = useRef<any>(null);
    const [doD, setDo] = useState< {titre:string, texte:string, status : string}[]>([])
    const [doing, setDoing] = useState< {titre:string, texte:string, status : string}[]>([])
    const [finish, setFinish] = useState< {titre:string, texte:string, status : string}[]>([])
    
    function handleUpdate(item: any) {
        if(item.status === "DO"){
            const filterData1 = doing.filter(elt => elt.titre != item.titre);
            setDoing(filterData1);
            const filterData2 = finish.filter(elt => elt.titre != item.titre);
            setFinish(filterData2);
            setDo(prevState => {
                return [...prevState, item]
            })
        }
        else if(item.status === "DOING"){
            const filterData1 = doD.filter(elt => elt.titre != item.titre);
            setDo(filterData1);
            const filterData2 = finish.filter(elt => elt.titre != item.titre);
            setFinish(filterData2);
            setDoing(prevState => {
                return [...prevState, item]
            })
        }
        else if(item.status === "FINISHED"){
            const filterData1 = doing.filter(elt => elt.titre != item.titre);
            setDoing(filterData1);
            const filterData2 = doD.filter(elt => elt.titre != item.titre);
            setDo(filterData2);
            setFinish(prevState => {
                return [...prevState, item]
            })
        }
    }  
    
    function handleLoad(e:any) {
        e.preventDefault();
        let item : {titre:string, texte:string, status : string} = {
            titre : refTitre.current.value,
            texte : refTexte.current.value,
            status : refStatus.current = "DO",
        }
        
        console.log(item);
        
        setDo(prevState => {
            return [...prevState, item]
        })

        console.log(doD);
    }
    
    return(
        <>
             <Input titre="titre" texte="texte" status="Status" refT={refTitre} refS={refStatus} refD={refTexte} Status = "STATUS">
                    <button type="submit" id="close" onClick={handleLoad}>Add</button>
            </Input>
            
            <div className='container'>
                <Card titre="DO" >
                    {
                        doD.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} key={k} titre = {elt.titre} texte = {elt.texte} className="DO" status={elt.status}/>
                        ))
                    }
                </Card>
                <Card titre="DOING">
                {
                        doing.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} key={k} titre = {elt.titre} texte = {elt.texte} className="DOING" status={elt.status}/>
                        ))
                }
                </Card>
                <Card titre="FINISHED">
                    {
                        finish.map((elt, k)=>(
                            <Content handleUpdate={handleUpdate} key={k} titre = {elt.titre} texte = {elt.texte} className="FINISHED" status={elt.status}/>
                        ))
                    }
                </Card>
            </div>
        </>
    )
}

export default Form;