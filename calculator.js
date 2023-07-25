function calculate(str){
    if(str.includes("+")){
        let array = str.split("+");
        return +array[0] + +array[1];
    }else if(str.includes("-")){
        let array = str.split("-");
        return +array[0] - +array[1];
    }else if(str.includes("*")){
        let array = str.split("*");
        return +array[0] * +array[1];
    }else if(str.includes("/")){
        let array = str.split("/");
        return +array[0] / +array[1];
    }else if(str.includes("%")){
        let array = str.split("%");
        return +array[0] % +array[1];
    }else{
        return str
    }
}

const screen = document.querySelector(".screen");

document.querySelectorAll(".buttons div").forEach((element)=>{
    element.addEventListener("click",handleEvent)
})

function handleEvent(){
    let add = this.innerHTML;

    if(add === "C"){
        screen.innerHTML = ""
    }else if(add === "DEL"){
        let view = screen.innerHTML;
        screen.innerHTML = view.substring(0,view.length-1);
    }else if(add === "="){
        screen.innerHTML = calculate(screen.innerHTML);

    }else {
        screen.innerHTML+=add;
    }
}

