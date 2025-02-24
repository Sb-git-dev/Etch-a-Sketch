const container = document.querySelector(".container");
const btn = document.querySelector("button");
let containerName = "container";
let input = null;
let previousInput = null;
function createGrid(inputSize)
{
    container.innerHTML = '';
    for(let i=0;i<inputSize;i++)
    {
        containerName = "container"+(i+1);
        const divContainer = document.createElement("div");
        divContainer.classList.add(containerName);
        divContainer.setAttribute("style","display:flex;flex-direction:row");
        container.appendChild(divContainer);
        for(let j=0;j<inputSize;j++)
        {
            const div = document.createElement("div");
            div.classList.add("div");
            div.setAttribute("style","width:10px;height:10px;background-color:white;border:1px solid black");
            div.addEventListener("mouseover",()=>{
                //div.classList.add("hover");
                let color
                div.setAttribute("style","width:10px;height:10px;border:1px solid black;background-color:red");
            });
            div.addEventListener("mouseout",()=>{
                //div.classList.remove("hover");
                div.setAttribute("style","width:10px;height:10px;border:1px solid black;background-color:red");
            });
            divContainer.appendChild(div)
        }
    }
    previousInput = inputSize;
}
if(input == null){
    createGrid(16);
}
btn.classList.add("btn");
btn.addEventListener("click",()=>{
    input = parseInt(prompt("Enter the of the size of the sketch pad between 1 to 100"));
    if(isNaN(input) == undefined || input<0 || input>100)
    {
        alert("Invalid input");
    }
    else{
        while(container.firstChild)
        {
            container.removeChild(container.firstChild);
        }
        createGrid(input);
    }
});


