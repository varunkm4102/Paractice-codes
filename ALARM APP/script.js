let getTime = document.getElementById("getTime");
const setTime = document.getElementById("setTime");
let AlarmData = []

setTime.addEventListener("click", () => {
  let getTimeValue = getTime.value;
  let getTimeType = parseInt(getTimeValue);
  AlarmData.push(getTimeType);
  console.log(getTimeType);
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMunute = currentDate.getMinutes();
  console.log(currentHour);
if(getTimeType === currentHour, currentMunute){
    console.log("happy codding");
}else{
    console.log("its not work")
}
});
  console.log(AlarmData);