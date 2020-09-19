
function validate() {
  const userName = document.getElementById("name1").value;
  const userEmail = document.getElementById("email1").value;
  const userMessage = document.getElementById("message1").value;
  const radioBtn1 = document.getElementById("yes");
  const radioBtn2 = document.getElementById("no");

  if (userNameValidate(userName, 5, 15)) {
    if (userEmailValidate(userEmail)) {
      if (userMessageValidate(userMessage, 50)) {
        if (radioValidate(radioBtn1, radioBtn2)) {
          // The validation chain occurs this way
          alert("Form Succesfully Submitted");
          window.location.href = "thankyou.html";
        }
      }
    }
  }
}

function userNameValidate(userN, lowerLimit, upperLimit) {
  const userNLength = userN.length;

  if (
    userNLength == 0 ||
    userNLength >= upperLimit ||
    userNLength < lowerLimit
  ) {
    alert(
      "Name should not be empty, length must be between " +
        lowerLimit +
        " and " +
        upperLimit
    );
    console.log("Name is not validated.");
    return false;
  }
  console.log("name is validated");
  return true;
}

function userEmailValidate(userE) {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // ^ = match beginning of the line
  // \w = find a word char
  // + = match at least that char
  // \. = match match a .(period)
  // () = group the search
  // .?  = optional (question mark)
  // {x, y} = match from number x to y
  // $ = match end of line
  // .* = and, to use many groups
  // | = or, to use many groups
  
  if (userE.match(emailFormat)) {
    console.log("name is validated");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    console.log("Email is not validated.");
    return false;
  }
}

function userMessageValidate(userM, limit) {
  const userMLength = userM.length;
  if (userMLength == 0 || userMLength >= limit) {
    alert("Message should not be empty / length be smaller than " + limit);
    console.log("Message is not validated.");
    return false;
  }
  console.log("Message is validated");
  return true;
}

function radioValidate(radioBtn1, radioBtn2) {
    let temp = 0;
    if (radioBtn1.checked) {
        temp++;
    }

    if (radioBtn2.checked) {
        temp++;
    }

    if (temp == 0) {
        alert("Select if you want the newsletter or not");
        console.log("Radio not validated");
        return false;
    }

    console.log("Radio is validated");
    return true;
}
