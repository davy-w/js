// 浅克隆
    // 数组克隆
    let arr1=[1,2,3,4]
    // 方法1
    let arr2=[...arr1]
    arr2.push(0)
    console.log(arr1,arr2);
    // 方法2
    let arr3=Array.from(new Set(arr1))
    arr3.push(123)
    console.log(arr1,arr3);
    // 方法3
    let arr4=[]
    arr1.forEach(i=>{
        arr4.push(i)
    })
    arr4.push(231)
    console.log(arr1,arr4);
    // 对象克隆 1层
    let obj1={
        name:"wys",
        age:27,
        gender:"男"
    }
    // 方法1
    let obj2=Object.assign({},obj1)
    obj2.name="wlj"
    console.log(obj1,obj2);
    // 方法2
    let obj3=JSON.parse(JSON.stringify(obj1))
    obj3.name="wzk"
    console.log(obj1,obj3);
    // 方法3
    let obj4={}
    for(let i in obj1){
        obj4[i]=obj1[i]
    }
    obj4.name="wys1"
    console.log(obj4,obj1);
// 深克隆
let arrDeep=[
    1,"wys",[
        "hello",
        {
            name:"world",
            inforMa:{
                type:"js",
                sihow:{
                    right:"1",
                    worong:"0",
                    arr:[1,23,3]
                }
            }
        }
    ],
    {
        id:"10086",
        date:new Date(),
        getName:function(){
          console.log("123");
        }
    },
    undefined,
    null,
    true,
] 
//方法1
let jsonDeepClone= JSON.parse(JSON.stringify(arrDeep)) //缺点 1.有undefine类型 转化为null,2有构造函数 直接转执行一个实例,3有函数也会消失
console.log(jsonDeepClone,arrDeep);
// 方法2 递归
function deepClone(oldObj){
    if(typeof oldObj !== "object"){
      return oldObj;
    }
    var newObj = Array.isArray(oldObj) ? [] : {};
    for(var key in oldObj){
      newObj[key] = deepClone( oldObj[key] );
    }
    return newObj;
  }
let resultDeep=deepClone(arrDeep)
resultDeep[1]="123"
console.log(1111,resultDeep,arrDeep);


