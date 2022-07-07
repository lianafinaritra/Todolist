
export default function Card(props:any) {
  const {titre, children} = props;
  
    return(
        <div className="card">
            <div className={titre}>{titre}</div>
            <div> {children} </div>
        </div>
    )
}