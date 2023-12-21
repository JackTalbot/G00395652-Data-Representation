import ShowItem from "./showItem";

function Shows(props) {
        //Displaying the User's data in an array
        return props.myShow.map(
            (show)=>{
                return <ShowItem myShow={show} key={show._id} Reload={()=>{props.ReloadData();}}></ShowItem>
            }
        )
}

export default Shows;