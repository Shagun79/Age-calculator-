let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];
let Result = document.getElementById("result");
function calculateAge() {
  let birthDate = new Date(userInput.value);
  console.log(birthDate);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
  //9/27/1970

  let d3, m3, y3;

  y3 = y2 - y1;

  //y3= 2023-1970 = 53
  if (m2 >= m1) {
    
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
     //y3 =52 //
     //m3= 12+ 07-9=10//
     //m3 =10//
     

  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    let d3 = getDaysInMonth(y1, m1) + d2 - d1;
    console.log(d3, "32");
    //m3=09//
    //d3 = 1970, 09 + 
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  console.log(y3, m3, d3);

  Result.innerHTML =
    "You are " + y3 + " years " + m3 + " months and  " + d3 + " days old ";
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
  //1970,09,0
}
