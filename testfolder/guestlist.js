let guestList = ['Angela', 'Jack', 'Pam', 'Strange', 'Doom', 'Faust'];
var guest = prompt("What's Your name? ", "Enter Name...");

if (guestList.includes(guest)){
    alert("Welcome  Dr. " + guest);
}
else{
    alert("Sorry Dr. " + guest + " You are not on the list");
}

