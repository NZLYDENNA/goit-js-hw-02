function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

//console.log(checkForSpam("Latest technology news"));
//console.log(checkForSpam("JavaScript weekly newsletter"));
//console.log(checkForSpam("Amazing SalE, only tonight!"));
//console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//console.log(checkForSpam("[SPAM] How to earn fast money?"));
