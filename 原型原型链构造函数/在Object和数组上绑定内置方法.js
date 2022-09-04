// 统一通过Prototype绑定
Array.prototype.dealArr=function(){
    console.log("我是处理数组的方法");
}
Object.prototype.dealObject=function(){
    console.log("我是处理对象的方法")
}
let arr=new Array()
arr.dealArr()
let obj=new Object()
obj.dealObject()