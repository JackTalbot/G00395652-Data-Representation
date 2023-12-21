import ShowItem from "./showItem";

function Shows(props) {
    
        return props.myShows.map(
            (show)=>{
                return <ShowItem myShow={show} key={show._id} Reload={()=>{props.ReloadData();}}></ShowItem>
            }
        )
}

export default Shows;