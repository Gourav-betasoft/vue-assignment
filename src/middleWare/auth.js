export default function ({next,router}){

    const Authenticated=parseInt(localStorage.getItem('IsloggedIn') ?? "0");
    if(Authenticated){ 
        console.log("entered");
         next();
    }
    else{
          router.push({path:'/LoginComponent'});
    }
}