export default function ({next,router}){

    const Authenticated=parseInt(localStorage.getItem('IsloggedIn') ?? "0");
    if(Authenticated){ 
        router.push({path:'/'});
    }
    else{
          next();
    }
}