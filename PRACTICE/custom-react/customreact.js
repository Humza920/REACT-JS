const rootDiv = document.getElementById("root")

const content = {
    type : "button",
    props : {
        class : "btn",
        onClick : () =>(alert("Button clicked!"))
    },
    children : "Click Me"
}

function customReact (content , rootDiv) {
    const inrootDiv = document.createElement(content.type);
    inrootDiv.innerHTML = content.children
    const obj = content.props
    console.log(obj);
for (let i = 0; i < obj; i++) {
    console.log(obj);
}

            console.log(inrootDiv);
            
}

customReact(content , rootDiv)