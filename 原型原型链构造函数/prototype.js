// 构造函数 原型对象 实例化关系
    // this.name this.age为实例化成员 
    // Person为构造函数
    // wys为Person的一个实例
function Person(name,age){
    this.name=name;
    this.age=age
}
let wys =new Person('wys',27)
    // 一般为了节约内存,会把实例化成员属性放在构造函数中，实例化方法放在prototype原型对象上
Person.prototype.skils=function(){
    console.log("我叫"+this.name+"今年"+this.age+"会唱跳rap篮球");
}
wys.skils()
    // 实例化对象的隐式属性_proto_和构造函数的prototype（原型对象之间的关系）
 let result=(wys.__proto__=== Person.prototype)
 console.log(result);
    // 构造函数的原型对象和构造函数之间的关系  可以互相转换
Person.prototype.constructor===Person
console.log(Person.prototype.constructor===Person);
    //同理 实例化对象的隐式原型（__proto__）
wys.__proto__.constructor===Person
console.log(wys.__proto__.constructor===Person);
    // 任何一个构造函数的原型对象的隐式原型 都等于 Object的原型对象
console.log(Person.prototype.__proto__===Object.prototype);
    // 原型链
let step0One=wys.__proto__===Person.prototype
console.log("第一层",step0One);
let stepTwo=wys.__proto__.__proto__===Object.prototype
console.log('第二层',stepTwo);
let stepThree=wys.__proto__.__proto__.__proto__===null
console.log('第三层',stepThree);
    //所有的__proto__连接起来称之为一个原型链

 




