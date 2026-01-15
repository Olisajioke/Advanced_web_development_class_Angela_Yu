let year = parseInt(prompt("Enter a year", "Enter..."));

if  (year % 4 == 0  &&  year % 100 != 0  || year % 400 == 0)
         alert("Yes! Sireee!! " + year + " is a leap year!!!" );
else {
    alert("Sorry, but " + year + " is not a leap year");
}