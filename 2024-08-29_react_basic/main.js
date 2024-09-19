const dateObj = new Date();
console.log(
  typeof dateObj,
  dateObj,
  dateObj.getFullYear() + "-" + String((dateObj.getMonth() + 1)).padStart("2", "0") + "-" + dateObj.getDate()
);
// padStart를 사용해 2자리일때 앞이 비어있다면 9으로 채워넣는다


const result = `${dateObj.getFullYear()}-${String((dateObj.getMonth() + 1)).padStart("2", "0")}-${dateObj.getDate()}`;
console.log(result);


const year = dateObj.getFullYear();
const month = String((dateObj.getMonth() + 1)).padStart("2", "0");
const day = dateObj.getDate();
const time = dateObj.getHours();
const min = dateObj.getUTCMinutes()

const resultEnd = `${year}-${month}-${day} ${time}:${min}`;
console.log(resultEnd);


