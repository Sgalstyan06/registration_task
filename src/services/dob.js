export const currentYear = new Date().getFullYear();

export const dobData = {
  month: numbersUpTo(12),
  day: numbersUpTo(31),
  year: yearsBackTo(100),
};

export function underAgeValidate(birthday) {
  
    var optimizedBirthday = birthday.replace(/-/g, "/");
  
    var myBirthday = new Date(optimizedBirthday);
  
    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
  
    var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);  
  
    return myAge;
  }  

 function numbersUpTo(max) {

    return Array.from(Array(max).keys()).map(
      (i) => `${i < 9 ? "0" : ""}${i + 1}`
    );
  }
  
 function yearsBackTo(count) {
  
    return Array.from(Array(count).keys()).map((i) => `${currentYear - i}`);
  }

  