const getSleepHour = (day) => {
  switch (day) {
    case "sunday":
      return 8;
    case "monday":
      return 7;
    case "Tuesday":
      return 8;
    case "Wednesday":
      return 9;
    case "Thursday":
      return 8;
    case "Friday":
      return 7;
    case "Saturday":
      return 6;
    default:
      return "error";
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHour("sunday") +
    getSleepHour("monday") +
    getSleepHour("Tuesday") +
    getSleepHour("Wednesday") +
    getSleepHour("Thursday") +
    getSleepHour("Friday") +
    getSleepHour("Saturday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You had a great week of sleep keep going like this!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You sleep too much!, " +
        (actualSleepHours - idealSleepHours) +
        " hour more then you shuld, sleep less houres."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "Your not getting enough sleep!, you shold add " +
        (idealSleepHours - actualSleepHours) +
        " more hours to your sleep this week."
    );
  } else {
    console.log("error!");
  }
};

console.log(getIdealSleepHours());
console.log(getActualSleepHours());
console.log(calculateSleepDebt());
