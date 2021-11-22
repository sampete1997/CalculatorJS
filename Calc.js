//input
let space=document.getElementById('space');
function display(num){
    space.value += num;
}
//calculation error
function calc(){
    try{
space.value = eval(space.value);
    }
    catch(err){
        alert("invalid:make sure you are using signs  in successive manner ")
    }
}
//clearing
function clear(){
    space.value ='';
}
//deleting
function del(){
    space.value = space.value.slice(0,-1);
}
