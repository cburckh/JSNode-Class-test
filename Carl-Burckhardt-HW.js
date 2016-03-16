function palindrome(str)
{
    var palin = str.split("").reverse().join("");

    if (palin === str){
        return true;
    } else {
        return false;
    }
}
palindrome("racecar") //Comes back as true
palindrome("Beso ")//Comes back as false
