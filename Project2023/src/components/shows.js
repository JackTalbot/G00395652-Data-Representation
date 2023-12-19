import addShow from './showItem';

function shows(props){

    return props.myshows.map(
        (show)=>{
            return <ShowItem myShow={show} key={show._id} Reload={()=>{props.ReloadData();}}></ShowItem>
        }
    );

}

export default shows;