/**
 * Created by stan on 16/8/22.
 */

function callback(message,result){
    console.log(message+"----"+result);
}


function inc(n,cb){
    var num = /^d+$/;
    if(num.test(n)){
        cb("ok",n);
    }else{
        cb("err",n+2);
    }
}

inc(5,callback);