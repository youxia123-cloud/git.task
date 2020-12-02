const xhr = new XMLHttpRequest();
xhr.open('get','http://musicapi.leanapp.cn/personalized?limit=30',true);
xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){
        if((xhr.status >=200 && xhr.status <300) || String.status == 304){
            const res =JSON.parse(xhr.responseText);
            console.log(res);
            console.log('请求成功');
        } else{
            console.log('请求失败');
        }
    }
} ;
xhr.send();
var success=xhr;
var result=success.responseText;
console.dir(result);
var div=document.createElement('div');
div=success;
document.body.append(div);



  
