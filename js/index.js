function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}
function _C(elts) {return document.querySelector(elts)}

const logo_github = _$("logo")
const nav_bar = _$("nav-bar")
const menuOptions1 = _$("menuOptions1")
const menuOptions2 = _$("menuOptions2")
const menuOptions3 = _$("menuOptions3")
const btn1 = _$("btn1")
const btn2 = _$("btn2")
const btn3 = _$("btn3")
const line1 = _$("line1")
const btn4 = _$("btn4")
const btn5 = _$("btn5")
const graph1 = _$("graph1")
const build = _$("build")
const icon = _$("icon-logo")
const check_container1 = _$("Check-container1")
const check_container2 = _$("Check-container2")
const check_container3 = _$("Check-container3")

let icon_logo = ["https://github.githubassets.com/assets/3m-0151c2fda0ce.svg","https://github.githubassets.com/assets/kpmg-c249f20c5173.svg","https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg","https://github.githubassets.com/assets/sap-96248a56d312.svg","https://github.githubassets.com/assets/pg-f1f19955c4e4.svg","https://github.githubassets.com/assets/telus-df0c2109df99.svg"]
let tab_check = ["Initialize CodeQL","Autobuild","Perform CodeQL Analyses"]
let tab_time = ["1m 42s","1m 24s","1m 36s"]
const image_grid = (selector,data,width,height,marginTop,marginLeft) =>{
    selector.src = data
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.marginTop = marginTop + "rem"
    selector.style.marginLeft = marginLeft + "rem"
}


image_grid(logo_github,"img/logo_github.png",2.5,2.5,0,0)

const menuOptions = ["Actions","Packages","Security","Codespaces","Copilot","Code review","Issues","Discussions"]
const Options2 = ["For","By Solution","Resources"]
const Options3 = ["Github Sponsors","The ReadME Project","Repositories"]

function createMenuOptions(options, containerId) {
    const menuContainer = document.getElementById(containerId);

    options.forEach(option => {
        const optionLink = document.createElement("a");
        optionLink.href = "#";
        optionLink.textContent = option;
        menuContainer.appendChild(optionLink);
    });
}

createMenuOptions(menuOptions, "menuOptions1");
createMenuOptions(Options2,"menuOptions2")
createMenuOptions(Options3,"menuOptions3")

const buttonCheck = (selector,height,width,borderRadius,borderColor,backgroundColor,marginTop,marginLeft,marginRight,value,color,align) => {
    const t_btn = _createElts("button")
    selector.appendChild(t_btn)
    
    t_btn.style.height = height + "rem"
    t_btn.style.width = width + "%"
    t_btn.style.borderRadius = borderRadius + "em"
    t_btn.style.borderColor = borderColor
    t_btn.style.backgroundColor = backgroundColor
    t_btn.style.marginTop = marginTop + "%"
    t_btn.style.marginLeft = marginLeft + "%"
    t_btn.style.marginRight = marginRight + "%"
    t_btn.textContent = value
    t_btn.textAlign = align
    t_btn.style.color = color
    t_btn.classList.add("txt")
    
}
buttonCheck(btn1,2.3,175,0.5,"white","transparent",0,42,0,"Sign Up","white","center")
buttonCheck(btn2,3,21,0.2,"transparent","white",7,10,0,"Email address","gray","")
buttonCheck(btn3,3,10,0,"transparent","#763EC6",7,-4,0,"Sign up","white","center")

const graphCheck = (selector,height,width,color,radius,classe) => {
    selector.style.width = width + "%"
    selector.style.height = height + "%"
    selector.style.background = color
    selector.style.borderRadius = radius + "rem"
    selector.classList.add(classe)
    selector.style.fontSize = "2rem"
}

graphCheck(line1,5,1,"white",0)

buttonCheck(btn4,3,17,0.5,"#763EC6","transparent",0,3,0,"Start a free enterprise trial","white")

const icon_grid = (selector,table) =>{
    table.forEach((data) => {
    let t_div = _createElts("div")
    let t_img = _createElts("img")
    selector.appendChild(t_div)
    t_div.appendChild(t_img)
    image_grid(t_img,data,5,5,2,4)
    })
}
icon_grid(icon,icon_logo)
buttonCheck(btn5,1.5,8,2,"rgb(32, 148, 32)","transparent",5,13,0,"Did you know?","rgb(32, 148, 32)") 
function checkbox(selector) {
    let round_background = _createElts("div")
    let check_mark = _createElts("div")
   
    selector.appendChild(round_background)
    selector.appendChild(check_mark)
    selector.classList.add("check-container")
    round_background.classList.add("round-background")
    check_mark.classList.add("check-mark")
}

const listContainer = (selector,data1,data2) => {
        selector.classList.add("spaces")
        let t_div1 = _createElts("div")
        selector.appendChild(t_div1) 
        let t_div2 = _createElts("div")
        selector.appendChild(t_div2) 
        let t_div3 = _createElts("div")
        selector.appendChild(t_div3)
        
        checkbox(t_div1)
        t_div2.textContent = data1
        t_div2.classList.add("check-txt")
        t_div3.textContent = data2
        t_div3.classList.add("time")

    
}
listContainer(build,"Build")
listContainer(check_container1,"Initialize CodeQL","1m 42s")
listContainer(check_container2,"AutoBuild","1m 24s")
listContainer(check_container3,"Perform CodeQL Analyses","1m 36s")