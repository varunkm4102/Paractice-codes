let task = document.getElementById("task");
let duration = document.getElementById("duration");
let add = document.getElementById("add");
let get = document.getElementById("edit");
let append = document.getElementById("append");
let edit = document.getElementById("edittask");
let editval = document.getElementById("edit");
let DeLete = document.getElementById("delete");
let num = 0;

add.addEventListener("click", () => {
  let ele = append.appendChild(document.createElement("tr"));
  let ele1 = ele.appendChild(document.createElement("td"));
  let ele2 = ele.appendChild(document.createElement("td"));
  let tick = ele2.appendChild(document.createElement("input"));
  tick.type = "checkbox";
  let ele3 = ele.appendChild(document.createElement("td"));
  let ele4 = ele.appendChild(document.createElement("td"));
  let ele5 = ele.appendChild(document.createElement("td"));
  let ele6 = ele5.appendChild(document.createElement("button"));
  ele6.innerHTML = "EDIT";
  ele6.addEventListener("click", () => {
    editupdate = prompt();
    localStorage.setItem("task", editupdate);
  });
  let ele7 = ele.appendChild(document.createElement("td"));
  let ele8 = ele7.appendChild(document.createElement("button"));
  ele8.addEventListener("click", () =>{
    localStorage.removeItem('task');
  })
  ele8.innerHTML = "DELETE";
  let taskval = task.value;
  let durationval = duration.value;
  localStorage.setItem("task", taskval);
  localStorage.setItem("duration", durationval);
  num++;
  ele1.innerHTML = num;

  ele3.innerHTML = taskval;
  ele4.innerHTML = durationval;
  console.log(tick);
  console.log(taskval, durationval);
});



