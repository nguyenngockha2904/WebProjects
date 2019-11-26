const controller = {};
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegex = /^[a-z0-9_-]{6,18}$/;

controller.validateLoginInfo = (email, password) => {
    if (!email) {
        view.renderErrorMessage('email-error-message', 'Please input email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    } else {
        view.renderErrorMessage('email-error-message', '');
    }

    if (!password) {
        view.renderErrorMessage('password-error-message', 'Please input password')
    } else {
        view.renderErrorMessage('password-error-message', '')
    }

    // check pass conditional then call model login
    if (email && emailRegex.test(email) && password) {
        // call model => check database
        model.loginUser(email, password);
    }
};

controller.validateRegisterInfo = (firstName, lastName, email, password, confirmPassword) => {
    // firstName
    if (!firstName) {
        view.renderErrorMessage('first-name-error-message', 'Please input first name');
    } else {
        view.renderErrorMessage('first-name-error-message', '');
    }

    // lastName
    if (!lastName) {
        view.renderErrorMessage('last-name-error-message', 'Please input last name');
    } else {
        view.renderErrorMessage('last-name-error-message', '');
    }

    // email
    if (!email) {
        view.renderErrorMessage('email-error-message', 'Please input email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    } else {
        view.renderErrorMessage('email-error-message', '');
    }

    // password
    if (!password) {
        view.renderErrorMessage('password-error-message', 'Please input password');
    } else if (password.length < 6) {
        view.renderErrorMessage('password-error-message', 'Password must greater than 6 characters');
    } else {
        view.renderErrorMessage('password-error-message', '');
    }

    // confirmPassword
    if (!confirmPassword) {
        view.renderErrorMessage('confirm-password-error-message', 'Please confirm password');
    } else if (confirmPassword != password) {
        view.renderErrorMessage('confirm-password-error-message', 'Confirm password didnt match');
    } else {
        view.renderErrorMessage('confirm-password-error-message', '');
    }

    // check pass conditional then call model create new user
    if (firstName && lastName && email && emailRegex.test(email) && password && password.length >= 6 && confirmPassword == password) {
        //call model to save database
        model.createNewUser(firstName, lastName, email, password);
    }
};

controller.validateForgotPassword = (email) => {
    if (!email) {
        view.renderErrorMessage('email-error-message', 'Please input email');
    } else if (!emailRegex.test(email)) {
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    } else {
        view.renderErrorMessage('email-error-message', '');
    }

    // check pass conditional then call model forgotPassword
    if (email && emailRegex.test(email)) {
        model.forgotPassword(email);
    }
};