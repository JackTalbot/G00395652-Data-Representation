//console.log("Hello");

//ex2
//(a)
const text = ['(a) Data Representation and Querying'];

console.log(text.toString(text));

//(b)
let Part2 = (myValue) => {
    return myValue;
};

console.log(Part2("(b) Hello"));

//(c)

let Part3 = (num1, num2) => {
    return num1 + num2;
};

console.log(Part3(2, 3));

//(d)
const ages = [25, 31, 42, 77];

let Part4 = ages.map((item)=>{
    if(item < 70){
        return item * 2;
    } else {
        return item;
    }
})

console.log(Part4);

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
