let person = {
  name: 'Lesia',
  age: 23,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello : () => {
  return 'Hello, there!';
}
};
console.log(person.sayHello());
person.hobbies = ['Sport', 'Sport Articles', 'Stretching'];
person.hobbies =['Sport'];
console.log(person.hobbies);



console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);