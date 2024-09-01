function validate() {
    var email = document.getElementById("exampleInputEmail1");
    var erroremail = document.getElementById("erroremail");
    var password = document.getElementById("exampleInputPassword1");
    var errorPassword = document.getElementById("password-strength");
    var phoneNumber = document.getElementById("phoneNumber");
    var errorPhoneNumber = document.getElementById("errorPhoneNumber");

    // Phone number validation
    var phoneRegExp = /^\d{10}$|^\d{3}[-.\s]\d{3}[-.\s]\d{4}$/;
    if (!phoneRegExp.test(phoneNumber.value)) {
        errorPhoneNumber.innerText = "Invalid phone number. Please enter a valid phone number with 10 digits or one of the specified formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        errorPhoneNumber.style.color = "red";
        return false;
    } else {
        errorPhoneNumber.innerText = "";
    }

    // Email validation
    var emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegExp.test(email.value)) {
        erroremail.innerText = "Invalid email address";
        erroremail.style.color = "red";
        return false;
    } else {
        erroremail.innerText = "";
    }

    // Password validation
    var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegExp.test(password.value)) {
        errorPassword.innerText = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and at least one number";
        errorPassword.style.color = "red";
        return false;
    }

    // Check password strength
    var passwordLength = password.value.length;
    var strength;
    if (passwordLength >= 15) {
        strength = "strong";
        errorPassword.style.color = "green";
    } else if (passwordLength >= 12) {
        strength = "medium";
        errorPassword.style.color = "orange";
    } else {
        strength = "poor";
        errorPassword.style.color = "red";
    }
    errorPassword.innerText = "Password strength: " + strength;

    // If all validations pass, return true to submit the form
    return true;
}
