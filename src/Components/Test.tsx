import { useState } from "react";

export default function Input(props:any) {
    const {titre, texte, children, refT, refD, value1, value2} = props;
    
    return(
        <>
            <div className="input" >
                <div className="formulaire">
                    <h1>Add New Task</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">{titre} : </label>
                            <input type="text" name="" id="" value={value1} ref={refT}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">{texte} : </label>
                            <input type="text" name="" id="" value={value2} ref={refD}/>
                        </div>
                        {children}
                    </form>
                </div>
            </div>
        </>
    )
}