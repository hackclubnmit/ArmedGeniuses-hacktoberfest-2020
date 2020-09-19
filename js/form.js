
document.getElementById("m5").innerHTML = localStorage.getItem("message5");

function validateMesssage() {
  const userName2 = document.getElementById("name12").value;
  //console.log(userName2);
  const userMessage2 = document.getElementById("message12").value;
  //console.log(userMessage2);

  if (validateName(userName2, 5, 15)) {
    if (validateMesssage2(userMessage2, 70)) {
      alert("Your feeedback has been taken, and added to the slideshow");
      storeItem(userMessage2);
      location.reload();
    }
  }
}

function validateName(uN, lL, uL) {
  const un_len = uN.length;
  if (un_len == 0 || un_len >= uL || un_len < lL) {
    alert(
      "Name should not be empty, length must be between " + lL + " and " + uL
    );
    console.log("Name is not validated.");
    return false;
  }
  console.log("name is validated");
  return true;
}

function validateMesssage2(uM, limit) {
  const userMLength = uM.length;

  if (userMLength == 0 || userMLength >= limit) {
    alert("Message should not be empty / length be smaller than " + limit);
    console.log("Message is not validated.");
    return false;
  }
  console.log("Message is validated");
  return true;
}

function storeItem(userMessage2) {
  localStorage.setItem("message5", userMessage2);

  document.getElementById("m5").innerHTML = localStorage.getItem(
    "message5"
  );
}
