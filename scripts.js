const add = document.getElementById("add");

add.addEventListener("click", addTask);

okNode=null;

function addTask() {
  if(!lastTaskOk()) return;

  console.log("last node ok");

  const parent = document.getElementById("container");

  const child = document.createElement("div");

  const input = document.createElement("input");
  input.type = "text";

  // const ok = document.createElement("input");
  // ok.type = "button";
  // ok.value = "Ok";
  // ok.setAttribute('id',"inputField");

  const childDesc = document.createElement("span");

  child.classList.add("taskList");

  child.appendChild(input);
  child.appendChild(okNode);
  child.appendChild(childDesc);

  parent.appendChild(child);
}

function lastTaskOk(){
  const section = document.getElementsByClassName("taskList");

  const lastSection = section[section.length - 1];

  const lastInput = lastSection.lastElementChild.textContent;
  console.log(lastInput);
  if(lastInput==""){console.log("not k"); return false;}
  return true;
}

document.getElementById("inputField").addEventListener("click", addTaskDesc);

function addTaskDesc() {
  console.log("in");
  const section = document.getElementsByClassName("taskList");

  const lastSection = section[section.length - 1];

  const input = lastSection.firstElementChild.value;
  if(input==null || input=="") return;
  
  lastSection.lastElementChild.innerHTML = input;

  lastSection.removeChild(lastSection.firstElementChild);
  // lastSection.firstElementChild.style.display="none";
  okNode=lastSection.removeChild(lastSection.firstElementChild);
  // lastSection[1].style.display='none';
}
