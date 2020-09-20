 let word = parsefloat(prompt("enter the word with min lenght of 5 symbols"));
if (word.length < = 5) {
    alert("try again");

} else {

    alert ("true");
}

let mynumber = 0;

switch (word.chaAt(0)) {

case "a";
mynumber = mynumber + 4;
break;
case "e";
mynumber = mynumber + 4;
break;
case "u";
mynumber = mynumber + 4;
break;
case "i";
mynumber = mynumber + 4;
break;
case "o";
mynumber = mynumber + 4;
break;
case "z";
mynumber = mynumber + 5;
break;
default;
mynumber = mynumber - 1;

}

let mynumber1 = 0;

switch (word.chaAt(1)) {

case "a";
mynumber1 = mynumber1 + 4;
break;
case "e";
mynumber1 = mynumber1 + 4;
break;
case "u";
mynumber1 = mynumber1 + 4;
break;
case "i";
mynumber1 = mynumber1 + 4;
break;
case "o";
mynumber1 = mynumber1 + 4;
break;
case "z";
mynumber1 = mynumber1 + 5;
break;
default;
mynumber1 = mynumber1 - 1;

}

let mynumber2 = 0;

switch (word.chaAt(2)) {

case "a";
mynumber2 = mynumber2 + 4;
break;
case "e";
mynumber2 = mynumber2 + 4;
break;
case "u";
mynumber2 = mynumber2 + 4;
break;
case "i";
mynumber2 = mynumber2 + 4;
break;
case "o";
mynumber2 = mynumber2 + 4;
break;
case "z";
mynumber2 = mynumber2 + 5;
break;
default;
mynumber2 = mynumber2 - 1;

}

alert("mynumber + mynumber1 + mynumber2");

