window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyD4W6ybIC9uc32nz-AVR5Uz4UbpDeOl0Hc",
        authDomain: "book-review-511cc.firebaseapp.com",
        databaseURL: "https://book-review-511cc.firebaseio.com",
        projectId: "book-review-511cc",
        storageBucket: "book-review-511cc.appspot.com",
        messagingSenderId: "509697599340",
        appId: "1:509697599340:web:bc77fe04928e6b0a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    view.setActiveScreen('homePage');
};