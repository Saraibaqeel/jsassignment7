//Chap 21-25
//Q1
var firstname = prompt("Enter FirstName");
var lasttname = prompt("Enter LastName");
var fullname = firstname + lasttname;
alert("Welcome" + " " + fullname);
//Q2
var mobileModel = prompt("Enter Mobile Model");
var length = mobileModel.length;
alert("Length Of String:" + length);
//Q3
var str = "Pakistani";
var index = str.indexOf("n");
alert("Index Of 'n': " + index)
//Q4
var str = "Hello World";
var index = str.lastIndexOf("l");
alert("Last Index Of 'l': " + index)
//Q5
var str = "Pakistan";
alert("String:" + str);
var num = +prompt("Enter Index number");
var index = str.charAt(num);
alert("Char at index " + num + ":" + index);
//Q6
var firstname = prompt("Enter FirstName");
var lasttname = prompt("Enter LastName");
var fullname = firstname.concat(lasttname);
alert("Welcome" + fullname);
//Q7
var city1 = "Hayderabad"
alert(city1);
var city2 = city1.replace("Hayder", "Islam")
alert(city2);
//Q8
var message = " Ali and Sami are best friends. They play cricket and football together";
alert("Before Replacement:" + message)
var result = message.replace(/and/g, "&")
alert("After Replacement:" + result);
//Q9
var str = "472"
document.write("String:" + str);
document.write("<br>");
var num = parseInt(str);
document.write("Converted to number:" + (num));
document.write("<br>");
var num1 = +prompt("Enter number to add to confirm it is converted or not");
document.write("Conversion Confirmed:" + (num + num1));
//Q10
var input = prompt("Enter String");
var capital = input.toLocaleUpperCase();
alert(capital);
//Q11
var input = prompt("Enter String");
var title = input.split('');
console.log(title);
title[0] = title[0].toUpperCase();
var titleCase = title.join("");
alert(titleCase);
//Q12
var num = 35.36;
alert("Before Conversion:" + num);
var num1 = num.toString();
var str = num1.replace(".", "");
alert("After Conversion:" + str);
//Q13
var str = prompt("Enter Name");
flag = "yes";
for (i = 0; i <= str.length - 1; i++) {
    if (str[i] === "!" || str[i] === "." || str[i] === "," || str[i] === "@") {
        alert("Enter Valid Username");
        flag = "no";

    }


}
if (flag === "yes") {
    alert("Welcome:" + " " + str);
}



//Q14
var Item = prompt("Enter Item").toLowerCase();
var flag = "nahi"

var ItemList = ["cake", "applepie", "cookies", "patties", "chips"]

for (i = 0; i < ItemList.length; i++) {
    if (Item === ItemList[i]) {
        flag = "han";
        if (ItemList[i] === "cake") {
            alert("Yes " + ItemList[i] + " " + "Present at index:" + i)


        }
        else if (ItemList[i] === "applepie") {
            alert("Yes " + ItemList[i] + " " + "Present at index:" + i)
        }
        else if (ItemList[i] === "chips") {
            alert("Yes " + ItemList[i] + " " + "Present at index:" + i)

        }
        else if (ItemList[i] === "cookies") {
            alert("Yes " + ItemList[i] + " " + "Present at index:" + i)

        }
        else if (ItemList[i] === "patties") {

            alert("Yes " + ItemList[i] + " " + "Present at index:" + i)
        }

    }

}
if (flag === "nahi") {
    alert("Item not Available")

}
//Q15
var password = prompt("Enter Password");
flag = "yes";
for (i = 0; i <= password.length; i++) {
    if (password.charCodeAt[i] >= 48 && password.charCodeAt[i] <= 57 && password.charCodeAt[i] <= 65 && password.charCodeAt[i] <= 90 && password.charCodeAt[i] <= 97 && password.charCodeAt[i] <= 122) {
        alert("Password Accepted");
        flag = "no";
    }

}
if (flag === "yes") {
    alert("Password Must Have Letters And Numbers");
}

if (password.length <= 6) {
    alert("Password Length Must Be greater than Six Character");
}

if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password should not start with Number");

}


//Q16
var university = "University Of Karachi";
var str = university.split("");
for (i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//Q17
var str = prompt("Enter String");
var lastChar = str.charAt(str.length - 1);
alert("Last Character:" + lastChar);


