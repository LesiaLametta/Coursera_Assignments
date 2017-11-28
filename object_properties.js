let person = {
    name: 'Lesia',
    age: 23,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
};

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}
console.log(person[alarm]);

//Output : Alarm set to 7AM