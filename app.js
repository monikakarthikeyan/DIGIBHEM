function delux(){
    let deluxRoom = document.getElementById("deluxRoom");
    let roomCost= document.getElementById("roomCost");
     roomCost.value=2500;
     calculate();
}
function suite(){
    let suite= document.getElementById('suite')
    let roomCost= document.getElementById('roomCost');
    roomCost.value=4000;
    calculate();
}

function amenitiesCost(){
  let acRoom= document.getElementById('roomCheckbox').checked;
  let locker= document.getElementById('lockerCheckbox').checked;
  let totalAmount = 0;
  if(acRoom && locker){
     totalAmount = 1300;
  }else if( acRoom && !locker) {
    totalAmount = 1000;
  } else if(!acRoom && locker) {
    totalAmount=300;
  }else {
    totalAmount = 0;
  }
   let amenities=document.getElementById('amenities');
   amenities.value=totalAmount;
   calculate();
}

// function calcTotal(){
//     let roomCost= document.getElementById("roomCost").value;
//     let amenities= document.getElementById("amenities").value;
//     let totalCost = parseInt(roomCost)+parseInt(amenities);
//     document.getElementById("totalCost").value = totalCost;
// }
function advanceAmt(){
    let advAmt= document.getElementById('advanceAmount');
}
function balAmount(){
    let balAmt= document.getElementById('balanceAmount');
}
function getExtraAmountBasedOnPersonsCount(){
  let personValue = document.getElementById("persons").value;
  let personsCount = parseInt(personValue);
  let extraAmount = 0;
  if(personsCount>2){
    let extraPersons = personsCount - 2;
    extraAmount = extraPersons * 1000;
  }
  return extraAmount;
}

function getOneDayCostAmount(){
  let roomCost= document.getElementById("roomCost").value || 0;
  let amenities= document.getElementById("amenities").value || 0;
  let extraAmount = getExtraAmountBasedOnPersonsCount();
  return parseInt(roomCost) + parseInt(amenities) + extraAmount;
}

function getTotalAmount() {
  let numberOfDays = document.getElementById("days").value;
  let summary = document.getElementById("summary");
  let personValue = document.getElementById("persons").value;
  summary.innerText = `${numberOfDays} days + ${personValue} Adults`;
  return parseInt(numberOfDays) * getOneDayCostAmount();
}

function calculate() {
  let totalAmount = getTotalAmount();
  document.getElementById("totalCost").value = totalAmount;

  let advAmt = document.getElementById('advanceAmount').value || 0;
  document.getElementById('balanceAmount').value = totalAmount - parseInt(advAmt);
}
function onBookHotel(){
 document.getElementById("successMsgDiv").style.display = 'block';
 document.getElementById("formDiv").style.display = 'none';
 return false;
}

function bookAgain() {
  document.getElementById("successMsgDiv").style.display = 'none';
  document.getElementById("formDiv").style.display = 'block';

}


