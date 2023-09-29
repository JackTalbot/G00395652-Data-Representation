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
