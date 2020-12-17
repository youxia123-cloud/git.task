function makeClosures(arr,fn){
    var result = new Array();
    result.length=arr.length;/*指定result数组的长度*/
        var i;
        for(i=0;i<result.length;i++){
            result.length=array.length;
            result[i]=function(){
                x=array;
               return fn(x.indexOf(i));
            }
        }
    return result;
}
let array =[1,2,3];
let foo =(x) => {
    console.log(x);
}
let fun = makeClosures(array,foo);
