/* 
Submitted By: Chitwan Katyal
Student ID: 301169422
COMP125
Assignment 04
*/


"use strict"

//Form validation
function ValidateForm()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postalCode = document.getElementById("postalCode").value;
    var province = document.getElementById("province").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;

    document.getElementById("fnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("addresserror").innerHTML = "";
    document.getElementById("cityerror").innerHTML = "";
    document.getElementById("postalcodeerror").innerHTML = "";
    document.getElementById("provinceerror").innerHTML = "";
    document.getElementById("ageerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";
    document.getElementById("confirmerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";

    if (fname == "")
    {
        document.getElementById("fnameerror").innerHTML = "**First name cannot be left blank";
    }
    if (lname == "")
    {
        document.getElementById("lnameerror").innerHTML = "**Last name cannot be left blank";
    }
    if (address == "")
    {
        document.getElementById("addresserror").innerHTML = "**Address cannot be left blank";
    }
    if (city == "")
    {
        document.getElementById("cityerror").innerHTML = "**City cannot be left blank";
    }

    //Postal Code format = a0a0a0
    var validPostal = false;
    if (postalCode == "")
    {
        document.getElementById("postalcodeerror").innerHTML = "**Postal Code cannot be left blank";
    }
    else {
        if (/[a-zA-Z]\d[a-zA-Z]\d[a-zA-Z]\d/.test(postalCode))
        {
            validPostal = true;
        }
        else 
        {
            document.getElementById("postalcodeerror").innerHTML = "**Postal Code should be in the a0a0a0 format";
        }
    }

    var validProvince = false;
    var provinceOpt = ["QC", "ON", "MN", "SK", "AB", "BC"];
    if (province == "")
    {
        document.getElementById("provinceerror").innerHTML = "**Province cannot be left blank";
    }
    else {
        if (provinceOpt.includes(province))
        {
            validProvince = true;
        }
        else {
            document.getElementById("provinceerror").innerHTML = "**Province must be from QC, ON, MN, SK, AB, BC";
        }
    }




    if (age == "")
    {
        document.getElementById("ageerror").innerHTML = "**Age cannot be left blank";
    }
    else {
        if (age < 18)
        {
            document.getElementById("ageerror").innerHTML = "**Age must be greater than 18 years";
        }
    }

    var validPassword = false;
    if (password == "")
    {
        document.getElementById("passworderror").innerHTML = "**Password cannot be left blank";
    }
    else {
        if (/.{6,}/.test(password)){
            validPassword = true;
            
        }else {
            document.getElementById("passworderror").innerHTML = "**Password must have at least 6 characters";
        }
        if (/[A-Z]/.test(password)){
            validPassword = true;

        }else {
            document.getElementById("passworderror").innerHTML = "**Password must contain at least one upper-case character";
        }
        if (/\d/.test(password)){
            validPassword = true;

        }else {
            document.getElementById("passworderror").innerHTML = "**Password must contain at least one digit";
        }
    }
        
    var validConfirm = false;
    if (confirmPassword == "")
    {
        document.getElementById("confirmerror").innerHTML = "**Confirm Password cannot be left blank";
    }
    else 
    {
        if (confirmPassword.localeCompare(password) == 0)
        {
            validConfirm = true;

        }
        else
        {
            document.getElementById("confirmerror").innerHTML = "**Password must match!";
        }
    }

    var validEmail = false;
    if (email == "")
    {
        document.getElementById("emailerror").innerHTML = "**Email cannot be left blank";
    }
    else
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {        
            validEmail = true;

        }
        else
        {
            document.getElementById("emailerror").innerHTML = "**Please enter a valid email address";
        }
    }

    if (fname != "" && lname != "" && address != "" && city != "" && postalCode != "" && province != "" && age != "" && age >= 18 && password != "" && confirmPassword != "" && email != "" && validPostal === true && validProvince === true && validPassword === true && validConfirm === true && validEmail === true)
    {
        alert("Thanks for registering with our website, your customer record was created successfully.");

        //Clearing the form after registeration is done
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("address").value = "";
        document.getElementById("city").value = "";
        document.getElementById("postalCode").value = "";
        document.getElementById("province").value = "";
        document.getElementById("age").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("email").value = "";
    }
}

//Function for Clearing the form
function ClearForm()
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postalCode").value = "";
    document.getElementById("province").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("email").value = "";
}

//Creating addEventListener
function CreateEventListener()
{
    var submit = document.getElementById("submitButton");
    var reset = document.getElementById("reset");

    //submitting the form
    if (submit.addEventListener)
    {
        submit.addEventListener("click", ValidateForm, false);
    }
    else if (submit.attachEvent) {
        submit.attachEvent("onclick", ValidateForm);
    }

    //clearing the form
    if (reset.addEventListener)
    {
        reset.addEventListener("click", ClearForm, false);
    }
    else if (reset.attachEvent)
    {
        reset.attachEvent("onclick", ClearForm);
    }
}

//To load the window
if (window.addEventListener)
{
    window.addEventListener("load", CreateEventListener);
}
else if (window.attachEvent)
{
    window.attachEvent("onload", CreateEventListener);
}