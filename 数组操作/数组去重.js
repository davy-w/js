// 普通数组
let arr1=[1,2,3,4,5,12,3,4,5]
    //set去重 
console.log(Array.from(new Set(arr1)))
    //for循环
    let newArr1=[]
    arr1.forEach(item=>{
        if(newArr1.indexOf(item)==-1){
            newArr1.push(item)
        }
        return newArr1
    }) 
    console.log(newArr1);
// json数组
let arr2=[
    {name:"wys"},
    {name:"wlj"},
    {name:"wys"},
    {name:"wzk"}
]
let newArr2=[]
newArr2.push(arr2[0])
newArr2.forEach(item=>{
    arr2.forEach(item2=>{
        if(item.name!=item2.name){
            newArr2.push(item2)
            return newArr2
        }
        
    })
})
console.log(newArr2);
