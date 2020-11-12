function fx(n){
    if(n==1||n==2){
        return 1;
    }else{
        return fx(n-1)+fx(n-2);
    }
}
