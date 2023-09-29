//ex3

let checkList = [];

let addTask = (task) =>{
    let length = checkList.push(task);
    checkList.push(task);
    console.log("Item "+task+ " has been added to the checkList")
    return length;
}

let listAlltasks =()=>{
    //checkList.length
    checkList.forEach((item)=>{
        console.log(item);
    })
}

let deleteTask = (task)=>{
    let index = checkList.indexOf(task);
    if(index > -1){
    checkList.splice(index, 2);
    console.log("Item "+task+" has been removed from the array")
    return checkList.length;
    } else {
        console.log("Item "+task+" was not found in the checkList");
    }
}

addTask("Learn JS!")
listAlltasks();
deleteTask("LearnJS");
