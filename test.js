/**
 * Created by stan on 16/8/22.
 */
var async = require('async');
var _ = require('underscore');
/**
 * log
 * @param message
 * @param result
 */
function log(message,result){
    console.log(message+"------"+result);
}
/**
 * inc
 * @param message
 * @param result
 */
//function inc(n,cb){
//    var r = /^[0-9]*[1-9][0-9]*$/;
//    if(r.test(n)){
//     cb(null,n+1);
//    }else{
//        cb("err",n);
//    }
//}

//function inc1(message,cb,n){
//    console.log(message);
//    cb(null,n);
//}
//
/**
 *  async
 */
//async.series([
//    function(cb) { inc(3, cb); },
//    function(cb) { inc(undefined, cb); },
//    function(cb) { inc(2, cb); }
//], function(err, results) {
//    log('1.1 err: ', err);
//    log('1.1 results: ', results); // [4 9 3]
//});

//async.parallel([
//    function(cb) { inc1('a400', cb, 400) },
//    function(cb) { inc1('a200', cb, 200) },
//    function(cb) { inc1('a300', cb, 300) }
//], function (err, results) {
//    log('1.1 err: ', err); // -> undefined
//    log('1.1 results: ', results); // ->[ 'a400', 'a200', 'a300' ]
//    log("result 0 ",results[0]);
//    log("result 1 ",results[1]);
//    log("result 2 ",results[2]);
//});
/**
 * underscore
 */
//var filter = _.filter([1,2,3,4,5], function (num) {
//    return num%2 == 0;
//})
//var result = _.reduce([1,2,3],function(memo,num){
//    return memo+num;
//});
//var result1 = _.map({one : 1, two : 2, three : 3}, function(num){ return num * 3; });
//log("fileter",filter);
//log("result",result[1]);
//log("result",result[2]);

//var any = _.any([null,0,'yes',true,false], function (num,index) {
//    console.log("num "+index,num)
//    if(num == true){
//        return true;
//    }
//    ;})
//log("message",any);
//var each = _.each([1,2,3], function (num,index) {
//    log(num,index);
//})
//var extend = _.extend({name: 'moe', age: 50, userid: 'moe1'},{name:"ok",3:22});
//log("extend",JSON.stringify(extend));
/**
 * crypto.randomBytes
 */
//function cb(err,buf){
//    if(err){
//
//    }else{
//        console.log("newToken :"+buf);
//        console.log("length :"+buf.length);
//    }
//}
//var crypto = require('crypto');
//crypto.randomBytes(24, function (err, buf) {
//    log("buf",buf.toString());
//    log("buf.length",buf.length)
//    var newToken = buf.toString('hex');
//    cb(null, newToken);
//});
/**
 * enum
 */
var Enum = require('enum');

//var EnumTest  = new Enum({
//    'killEnumy': 0,
//    'unLockHero': 1,
//    'killPerson': 2
//})
//function castEnum(enumObj) {
//    var returnOptionString = "";
//    for(var i=0;i<enumObj.enums.length;i++){
//        returnOptionString += enumObj.get(i).key;
//
//        if(i < enumObj.enums.length - 1){
//            returnOptionString += ",";
//        }
//    }
//    return returnOptionString;
//};
//var resultString = castEnum(EnumTest);
//var arrayResult = resultString.split(',');
//log("resultString",castEnum(EnumTest));
//log("result 0",arrayResult[0]);
//log("result 1",arrayResult[1]);
//log("result 2",arrayResult[2]);
//if(resultString.indexOf("killEnumy")>-1){
//    log("has value",resultString.indexOf("unLockHero"));
//    log("enumTest 0",EnumTest.getValue(2));
//}
//var itemIndex =  _.find(arrayResult,function(value,key){
//        if(value.startsWith("unLock")){
//            return key;
//        }
//    })
//log("indexIndex "+itemIndex);


//var regx = /killPerson/;
//if(regx.test(resultString)){
//    log("has value",true)
//}else{
//    log("no value",false);
//}

/**
 * apply
 */
//var array = [12,18,22,48];
//var max=Math.max.apply(null,array);

///*定义一个人类*/
//function Person(name,age) {
//    this.name = name;
//    this.age = age;
//}
// /*定义一个学生类*/
//function Student(name,age,grade){
//             Person.apply(this,arguments);
//             this.grade=grade;
//         }
////创建一个学生类
//var student=new Student("me",100,"120年级  ");
//log("name",student.name);
//log("age",student.age);
//log("grade",student.grade);

//function add(a,b){
//    return(a+b);
//}
//function sub(a,b){
//    return(a-b);}
//log("result",add.call(sub,3,1));




























