const components = {};

components.loginPage = `
    <div class='login-screen' id='login-screen'>
        <div class='login-form-container' id='login-form-container'>
            <img src='../images/2.png' class='logo'/>
            <h2 class='logo'>LOGIN</h2>
            <form id='login-form'>
                <div class='input-wrapper'>
                    <input class='input' type='text' name='email' placeholder="Email address" >
                    <div class='error' id='email-error-message'></div>
                </div>
                <div class='input-wrapper'>
                    <input class='input' type='password' name='password' placeholder="Password">
                    <div class='error' id='password-error-message'></div>
                </div>
                <div class='button-group'>
                    <a href="#" id='register-link'>Dont have an account? Register</a>
                    <input class='btn' type='submit' value='Log In'>
                </div>
                <div id="forgot-password" class="forgot-password">
                    <a href="#" id="forgotPassword-link">Forgot Password</a>
                </div>
            </form>
        </div>
    </div>
`;

components.homePage = `
<!-- --- NAV BAR --- -->
<nav class="navbar navbar-expand-lg sticky-top ">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <i style="color:white;" class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/"><img src="../images/2.png" alt="logo" class="logo"></a>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" id="all-books-link" href="#">ALL BOOKS <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">NEWS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="login-link" href="#">LOGIN</a>                        
                </li>
                
            </ul>

        </div>
    </div>
</nav>
<!-- --- NAV BAR --- -->
<!-- --- HEADER --- -->
<header>
    <!-- --- SLIDE --- -->
    <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="carousel-item-content" style="background:url('../images/1.png')">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Make your own success story</h5>
                        <a href="#" class="btn btn-danger" id="btn-registerAccount">SIGN UP NOW</a>
                        <a href="#" class="btn btn-danger">EXPLORE MORE</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- --- SLIDE --- -->
</header>
<!-- --- HEADER --- -->
<!-- --- HOTTEST BOOKS --- -->
<section class="hottest">
    <div class="container">
        <div class="row header">
            <div class="col-xs-2">
                <span>Best Reviews</span>
            </div>               
        </div>
    </div>
    <div class="container">
        <div class="responsive">

        </div>
    </div>
</section>    
<section class="latest">
    <div class="container">
        <div class="row header">
            <div class="col-xs-2">
                <span>New Books</span>
            </div>   
        </div>
    </div>
    <div class="container">
        <div class="row" id="new-books-row">
            
        </div>
    </div>
</section>
<section class="latest">
    <div class="container">
        <div class="row header">
            <div class="col-xs-2">
                <span>News</span>
            </div>   
        </div>
    </div>
    <div class="container">
        <div class="row news">
            <div class="col-xs-12 col-md-6">
                <div class="card" style="width: 100%">
                    <img class="card-img-top" src="../images/news-1.jpg" alt="Card image cap">
                    <div class="card-body">
                    <h2>Top 10 books about summer</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="card"  style="width: 100%">
                    <img class="card-img-top" src="../images/news-2.jpg" alt="Card image cap">
                    <div class="card-body">                    
                    <h2>Author apologized for being irresonsible for his words</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row news">
            <div class="col-xs-12 col-md-4">
                <div class="card"  style="width: 100%">
                    <img class="card-img-top" src="../images/news-3.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="card"  style="width: 100%">
                    <img class="card-img-top" src="../images/news-4.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="card"  style="width: 100%">
                    <img class="card-img-top" src="../images/news-5.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>     

<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-3">
                <h6>COMPANY</h6>
                <a href="#">About us</a><br>                   
                <a href="#">Careers</a><br>
                <a href="#">Terms</a><br>
                <a href="#">Privacy</a>
            </div>
            <div class="col-xs-12 col-sm-3">
                <h6>WORK WITH US</h6>
                <a href="#">Authors</a><br>                        
                <a href="#">Advertise</a><br>
                <a href="#">Authors & ads blog</a><br>
                <a href="#">API</a>
            </div>
            <div class="col-xs-12 col-sm-3 offset-sm-3">
                <h6>FOLLOW US ON</h6>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                
            </div>
        </div>
    </div>
</footer>
`;

components.allBooksPage = `
    <!-- --- NAV BAR --- -->
    <nav class="navbar navbar-expand-lg sticky-top ">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                aria-label="Toggle navigation">
                <i style="color:white;" class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="/"><img src="../images/2.png" alt="logo" class="logo"></a>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" id="all-books-link" href="#">ALL BOOKS <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">NEWS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="login-link" href="#">LOGIN</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- --- NAV BAR --- -->

    <!-- --- HEADER --- -->
    <header>
        <!-- --- SLIDE --- -->
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-item-content" style="background:url('../images/1.png')">
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Make your own success story</h5>
                            <a href="#" class="btn btn-danger">SIGN UP NOW</a>
                            <a href="#" class="btn btn-danger">EXPLORE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- --- SLIDE --- -->
    </header>
    <!-- --- HEADER --- -->

    <section class="all-book">
        <!-- --- SEARCH BAR --- -->
        <div class="search-bar">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2">
                        <form class="search-form" id="search-form">
                            <input type="text" name="searchBox" id="search-box">
                            <div id="search-error"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row header">
                <div class="col-xs-2">
                    <span>Category</span>
                </div>
            </div>
        </div>

        <div class="container books-container">
            <div class="category">
                
            </div>
            <div class="books-detail">
                <div class="books-row">
                    
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button class="btn btn-success">Load more books</button>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3">
                    <h6>COMPANY</h6>
                    <a href="#">About us</a><br>
                    <a href="#">Careers</a><br>
                    <a href="#">Terms</a><br>
                    <a href="#">Privacy</a>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <h6>WORK WITH US</h6>
                    <a href="#">Authors</a><br>
                    <a href="#">Advertise</a><br>
                    <a href="#">Authors & ads blog</a><br>
                    <a href="#">API</a>
                </div>
                <div class="col-xs-12 col-sm-3 offset-sm-3">
                    <h6>FOLLOW US ON</h6>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    </footer>
`;

components.registerAccountPage = `
    <div class='register-screen' id='register-screen'>
        <div class='register-form-container' id='register-form-container'>
            <img src='../images/2.png' class='logo'/>
            <h2 class='logo'>REGISTER ACCOUNT</h2>
            <form class='register-form' id='register-form'>
                <div class='name-group' id='name-group'>
                    <div class='input-wrapper'>
                        <input class='input' type='text' name='firstName' placeholder="First name">
                        <div class='error' id='first-name-error-message'></div>
                    </div>
                    <div class='input-wrapper'>
                        <input class='input' type='text'name='lastName' placeholder="Last name">
                        <div class='error' id='last-name-error-message'></div>
                    </div>
                </div>
                <div class='input-wrapper input-end'>
                    <input class='input' type='text' name='email' placeholder="Email address">
                    <div class='error' id='email-error-message'></div>
                </div>
                <div class='input-wrapper input-end'>
                    <input class='input' type='password' name='password' placeholder="Password">
                    <div class='error' id='password-error-message'></div>
                </div>
                <div class='input-wrapper input-end'>
                    <input class='input' type='password' name='confirmPassword' placeholder="Confirm password">
                    <div class='error' id='confirm-password-error-message'></div>
                </div>
                <div class='button-group'>
                    <a href="#" id='login-link'>Already have an account? Log In</a>
                    <input class='btn' type='submit' value='Register'>
                </div>
            </form>
        </div>
    </div>
`;

components.forgotPasswordPage = `
    <div class='forgotPassword-screen' id='forgotPassword-screen'>
        <div class='forgotPassword-form-container' id='forgotPassword-form-container'>
            <img src='../images/2.png' class='logo'/>
            <h2 class='logo'>RESET PASSWORD</h2>
            <form id="forgotPassword-form" class="forgotPassword-form">
                <div class='input-wrapper'>
                    <input class='input' type='text' name='email' placeholder="Your email">
                    <div class='error' id='email-error-message'></div>
                </div>
                <div class='button-group'>
                    <a href="#" id='login-link'>Back to login</a>
                    <input class='btn' type='submit' value='Continue'>
                </div>
            </form>
        </div>
    </div>
`;

components.detailPage = `
<!-- --- NAV BAR --- -->
<nav class="navbar navbar-expand-lg sticky-top ">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <i style="color:white;" class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="/"><img src="../images/2.png" alt="logo" class="logo"></a>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" id="nav-home" href="#">ALL BOOKS <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">NEWS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="login-link" href="#">LOGIN</a>                        
                    </li>
                    
                </ul>

            </div>
        </div>
    </nav>
    <!-- --- NAV BAR --- -->



    <!-- --- HEADER --- -->
    <header>
        <!-- --- SLIDE --- -->
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-item-content" style="background:url('../images/1.png')">
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Make your own success story</h5>
                            <a href="#" class="btn btn-danger">SIGN UP NOW</a>
                            <a href="#" class="btn btn-danger">EXPLORE MORE</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- --- SLIDE --- -->
    </header>
    <!-- --- HEADER --- -->         



    <!-- DETAIL -->
    <section class="detail">
        <div class="container">
            <div class="row header">
                <div class="col-xs-2">
                    <span>Book Reviews</span>
                </div>                                    
            </div>
        </div>

        <div class="container detail-part" id="detail-part">
            
        </div>
        
    </section>
    <!-- DETAIL -->

    <section class="comment" >
        
        <div class="container comment-part">
            <div class="row">
                <div class="col-xs-12 col-sm-3"></div>
                
                <div class="col-xs-12 col-sm-9" >
                    
                    <div id="comment-container">Comments</div>
                    
                </div>
            </div>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3">
                    <h6>COMPANY</h6>
                    <a href="#">About us</a><br>                   
                    <a href="#">Careers</a><br>
                    <a href="#">Terms</a><br>
                    <a href="#">Privacy</a>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <h6>WORK WITH US</h6>
                    <a href="#">Authors</a><br>                        
                    <a href="#">Advertise</a><br>
                    <a href="#">Authors & ads blog</a><br>
                    <a href="#">API</a>
                </div>
                <div class="col-xs-12 col-sm-3 offset-sm-3">
                    <h6>FOLLOW US ON</h6>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    </footer>
`;