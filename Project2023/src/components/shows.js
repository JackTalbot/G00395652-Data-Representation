import AddShow from "./showItem";

function shows(props){

    return props.myshows.map(
        (show)=>{
            return <AddShow myShow={show} key={show._id} 
            Reload={()=>{props.ReloadData();}}></AddShow>
        }
    );

}

export default shows;