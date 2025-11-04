let display = document.getElementById("display");
let key = true;
let dotkey = false;


function clr11(){
    display.value = '';
    key = true;
    dotkey = false;
}

function concat(item){
    if (item === '.')
    {
        if(dotkey){
            alert("Cannot add any more dots");
            return;
        }
        else{
            dotkey = true;
        }
    }
    if (!(item >= '0' && item <= '9')){
        if(!(display.value.slice(-1) >= '0' && display.value.slice(-1) <= '9')){
            alert("Cannot add the " + item + " element");
            return;
        }
        if (item != '.'){
            dotkey = false;
        }
    }
    if (item != '.'){
        dotkey = false;
    }
    if (key){
        display.value = item;
        key = false;
    }
    else
    {   
        display.value += item;
        
    }
}

function decimals(item){
    let value = item.split('.')[1];
    return value.length;
}

function answr(){
    display.value = eval(display.value).toFixed(decimals(display.value));
    if (decimals(display.value) !== 0){
        dotkey = true;
    }
}

