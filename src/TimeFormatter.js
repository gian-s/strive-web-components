function formatTime(timeInput) {

    let intValidNum = timeInput;
  
    if (intValidNum < 24 && intValidNum.length == 2) {
        timeInput = timeInput + ":";
        return false;  
    }
    if (intValidNum == 24 && intValidNum.length == 2) {
        timeInput = timeInput.length - 2 + "0:";
        return false;
    }
    if (intValidNum > 24 && intValidNum.length == 2) {
        timeInput = "";
        return false;
    }
  
    if (intValidNum.length == 5 && intValidNum.slice(-2) < 60) {
      timeInput = timeInput + ":";
      return false;
    }
    if (intValidNum.length == 5 && intValidNum.slice(-2) > 60) {
      timeInput = timeInput.slice(0, 2) + ":";
      return false;
    }
    if (intValidNum.length == 5 && intValidNum.slice(-2) == 60) {
      timeInput = timeInput.slice(0, 2) + ":00:";
      return false;
    }
  
  
    if (intValidNum.length == 8 && intValidNum.slice(-2) > 60) {
      timeInput = timeInput.slice(0, 5) + ":";
      return false;
    }
    if (intValidNum.length == 8 && intValidNum.slice(-2) == 60) {
      timeInput.value = timeInput.slice(0, 5) + ":00";
      return false;
    }
  
  
  
  }

  export {formatTime};