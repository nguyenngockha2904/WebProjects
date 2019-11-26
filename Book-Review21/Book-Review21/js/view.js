const view = {};

view.setActiveScreen = (screenName) => {
    const app = document.getElementById('app');

    switch (screenName) {
        case 'loginPage':
            if (app) {
                app.innerHTML = components.loginPage;
            }

            // listen submit login
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.addEventListener('submit', (event) => {
                    event.preventDefault();

                    const email = loginForm.email.value;
                    const password = loginForm.password.value;
                    controller.validateLoginInfo(email, password);
                });
            }

            // listen click register link
            const registerAccountLink = document.getElementById('register-link');
            if (registerAccountLink) {
                registerAccountLink.addEventListener('click', (event) => {
                    view.setActiveScreen('registerAccountPage');
                });
            }

            // listen click forgot password link
            const forgotPasswordFormLoginPage = document.getElementById('forgotPassword-link');
            if (forgotPasswordFormLoginPage) {
                forgotPasswordFormLoginPage.addEventListener('click', event => {
                    view.setActiveScreen('forgotPasswordPage');
                });
            }

            break;
        case 'homePage':
            if (app) {
                app.innerHTML = components.homePage;
            }

            // change button login to logout when login success!
            if (model.loginData) {
                view.renderLogoutBar();
            }

            // load best reviews books:
            model.loadBestReviewsBooks();

            // load new books:
            model.loadNewBooks();

            //listen click sign up
            const signUpLink = document.getElementById('btn-registerAccount');
            if (signUpLink) {
                signUpLink.addEventListener('click', (event) => {
                    view.setActiveScreen('registerAccountPage');
                });
            }

            //comment
            //listen click login page
            const loginLinkHomePage = document.getElementById('login-link');
            if (loginLinkHomePage) {
                loginLinkHomePage.addEventListener('click', (event) => {
                    if (!model.loginData) {
                        view.setActiveScreen('loginPage');
                    } else {
                        model.loginData = undefined;
                        view.setActiveScreen('homePage');
                    }
                });
            }
            // listen click allbooks page
            const allBooksLink = document.getElementById('all-books-link');
            if (allBooksLink) {
                allBooksLink.addEventListener('click', (event) => {
                    view.setActiveScreen('allBooksPage');
                });
            }
            const logo = document.querySelector('.logo');
            if (logo) {
                logo.addEventListener('click', (event) => {
                    event.preventDefault();
                    view.setActiveScreen('homePage');
                })
            }

            break;

        case 'allBooksPage':
            if (app) {
                app.innerHTML = components.allBooksPage;
            }
            if (model.loginData) {
                view.renderLogoutBar();
            }
            // render list category books
            model.loadListCategory();

            // render all book
            model.loadListAllBooks();

            // listen click button load more books
            const btnSuccess = document.querySelector('.btn-success');
            if (btnSuccess) {
                btnSuccess.addEventListener('click', event => {
                    model.limit += 3;
                    const booksRow = document.querySelector('.books-row');
                    if (booksRow) {
                        booksRow.innerText = '';
                        model.loadListAllBooks();
                    }
                });
            }

            // listen search books from name books
            const searchForm = document.getElementById('search-form');
            if (searchForm) {
                searchForm.addEventListener('keyup', event => {
                    const searchBox = document.getElementById('search-box');
                    const query = document.querySelectorAll('.books-row .element');
                    query.forEach(element => {
                        if (element.innerText.toLowerCase().indexOf(searchBox.value.toLowerCase()) > -1) {
                            element.style.display = '';
                        } else {
                            element.style.display = 'none';
                            // document.querySelector('.books-row').innerText = 'CÓ CL ẤY TIN NGƯỜI VCL';
                        }
                    });
                });
            }
            const logo1 = document.querySelector('.logo');
            if (logo1) {
                logo1.addEventListener('click', (event) => {
                    event.preventDefault();
                    view.setActiveScreen('homePage');
                })
            }

            // listen click all books link
            const booksLink = document.getElementById('all-books-link');
            if (booksLink) {
                booksLink.addEventListener('click', event => {
                    view.setActiveScreen('allBooksPage');
                });
            }

            // listen lick: login in all Books Page
            const loginLinkAllBooksPage = document.getElementById('login-link');
            if (loginLinkAllBooksPage) {
                loginLinkAllBooksPage.addEventListener('click', (event) => {
                    if (!model.loginData) {
                        view.setActiveScreen('loginPage');
                    } else {
                        model.loginData = undefined;
                        view.setActiveScreen('allBooksPage');
                    }
                });
            }

            break;

        case 'detailPage':
            if (app) {
                app.innerHTML = components.detailPage;
            }
            // render detail a book
            if (model.activeBook) {
                view.renderDetailBook(model.activeBook);
            }

            // listen click all books page
            const homeLink = document.getElementById('nav-home');
            if (homeLink) {
                homeLink.addEventListener('click', (event) => {
                    model.clearLoadComment();
                    view.setActiveScreen('allBooksPage');
                });
            }

            //click login 
            const loginLinkDetailPage = document.getElementById('login-link');
            if (loginLinkDetailPage) {
                loginLinkDetailPage.addEventListener('click', (event) => {
                    if (!model.loginData) {
                        model.clearLoadComment();
                        view.setActiveScreen('loginPage');
                    } else {
                        model.loginData = undefined;
                        loginLinkDetailPage.innerText = "LOGIN";
                        view.setActiveScreen('detailPage');
                    }
                });
            }
            //submit comment
            const commentForm = document.getElementById('form-comment');
            if (commentForm) {
                commentForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const commentContainer = document.getElementById('comment-container');
                    const clearStarElement = document.querySelectorAll('#stars .star');
                    if (commentContainer && commentForm.comment.value !== '' && model.ratingStarValue !== undefined) {
                        model.saveComment(commentForm.comment.value);
                        const rating = document.getElementById('rating');
                        if (rating) {
                            if (model.ratingStarValue) {
                                view.renderStar(((model.sumRating + model.ratingStarValue) / (model.lengthComments + 1)).toFixed(2));
                                const totalStar = document.getElementById('star');
                                totalStar.innerHTML = model.star;
                                rating.innerText = ((model.sumRating + model.ratingStarValue) / (model.lengthComments + 1)).toFixed(2);
                            }
                        }
                        commentForm.comment.value = '';
                        if (clearStarElement) {
                            clearStarElement.forEach(element => {
                                element.classList.remove('selected');
                            });

                        }
                    } else {
                        commentForm.comment.value = '';
                        model.ratingStarValue = undefined;
                        if (clearStarElement) {
                            clearStarElement.forEach(element => {
                                element.classList.remove('selected');
                            });
                        }
                    }
                });
            }
            //Rating star
            view.voteRatingStar();

            //Like comment
            const commentContainer = document.getElementById('comment-container');
            if (commentContainer) {
                commentContainer.addEventListener('click', (event) => {
                    const element = event.target;
                    const status = element.getAttribute("data-status");
                    const updateStatus = element.getAttribute('data-commentStatus').split(',');
                    const idComment = element.getAttribute('data-idComment');
                    if (status === "unlike") {
                        //   const numberLike = document.getElementById('number-like');
                        //   const n = numberLike.getAttribute('data-number')
                        //   numberLike.innerText=`${n+1}`;
                        element.setAttribute('data-status', 'liked');
                        element.innerText = "Unlike";
                        model.saveLikeComment(updateStatus, idComment);
                    } else if (status === "liked") {
                        element.setAttribute('data-status', 'unlike');
                        element.innerText = "Like";
                        model.saveUnlike(updateStatus, idComment);
                        //   const numberLike = document.getElementById('number-like');
                        //   const n = numberLike.getAttribute('data-number');
                        // numberLike.innerText=`${n-1}`;

                    } else if (status === "undefined") {
                        Swal.fire({
                            type: 'error',
                            title: 'Please login to like...',
                        });
                    }
                });
            };

            // listen click: home page from detail page
            const logo2 = document.querySelector('.logo');
            if (logo2) {
                logo2.addEventListener('click', (event) => {
                    event.preventDefault();
                    model.clearLoadComment();
                    view.setActiveScreen('homePage');
                })
            }

            break;

        case 'registerAccountPage':
            if (app) {
                app.innerHTML = components.registerAccountPage;
            }

            // listen submit register account
            const registerForm = document.getElementById('register-form');
            if (registerForm) {
                registerForm.addEventListener('submit', (event) => {
                    event.preventDefault();

                    controller.validateRegisterInfo(
                        registerForm.firstName.value,
                        registerForm.lastName.value,
                        registerForm.email.value,
                        registerForm.password.value,
                        registerForm.confirmPassword.value,
                    );
                    view.setActiveScreen('loginPage');
                });
            }

            //listen click forgot password link to redirect forgot password page
            const forgotPasswordLink = document.getElementById('forgotPassword-link');
            if (forgotPasswordLink) {
                forgotPasswordLink.addEventListener('click', (event) => {
                    view.setActiveScreen('forgotPasswordPage');
                });
            }

            // listen click: login
            const loginLinkFromRegisterPage = document.getElementById('login-link');
            if (loginLinkFromRegisterPage) {
                loginLinkFromRegisterPage.addEventListener('click', event => {
                    view.setActiveScreen('loginPage');
                });
            }

            break;

        case 'forgotPasswordPage':
            if (app) {
                app.innerHTML = components.forgotPasswordPage;
            }

            //listen submit form forgot password
            const forgotPasswordForm = document.getElementById('forgotPassword-form');
            if (forgotPasswordForm) {
                forgotPasswordForm.addEventListener('submit', (event) => {
                    event.preventDefault();

                    const email = forgotPasswordForm.email.value;
                    controller.validateForgotPassword(email);
                    email.innerText = '';
                });
            }

            // listen click back to login
            const loginLinkForgotPasswordPage = document.getElementById('login-link');
            if (loginLinkForgotPasswordPage) {
                loginLinkForgotPasswordPage.addEventListener('click', event => {
                    view.setActiveScreen('loginPage');
                });
            }
    }
};

view.renderErrorMessage = (elementId, errorMessage) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = errorMessage;
    }
};

view.clearRegisterInfo = () => {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.firstName.value = '';
        registerForm.lastName.value = '';
        registerForm.email.value = '';
        registerForm.password.value = '';
        registerForm.confirmPassword.value = '';
    }
};

view.clearLoginInfo = () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.email.value = '';
        loginForm.password.value = '';
    }
};
view.renderBestBooksElement = (book) => {
    const responsiveItem = document.querySelector('.responsive');
    if (responsiveItem) {
        const hottestItem = document.createElement('div');
        // hottestItem.setAttribute('data-id', `${book.id}`);
        hottestItem.classList.add('hottest-item');
        const hottestImg = document.createElement('div');
        hottestImg.classList.add('hottest-img');
        const nameBook = document.createElement('h4');
        const authorBook = document.createElement('p');

        hottestImg.style.backgroundImage = `url('${book.imageUrl}')`;
        nameBook.innerText = book.name;
        authorBook.innerText = book.author;

        hottestItem.appendChild(hottestImg);
        hottestItem.appendChild(nameBook);
        hottestItem.appendChild(authorBook);
        responsiveItem.appendChild(hottestItem);

        if (hottestItem) {
            hottestItem.addEventListener('click', (event) => {
                // lưu tạm mỗi book vào model.book khi click vào mỗi book.
                model.activeBook = book;
                view.setActiveScreen('detailPage');
            });
        }
    }
};

view.renderDetailBook = (book) => {
    model.sumRating = 0;
    model.lengthComments = 0;
    // calculate rating average of book
    book.comment.forEach(element => {
        model.sumRating += element.ratingUser;
    });
    model.lengthComments = book.comment.length;

    view.renderStar((model.sumRating / model.lengthComments).toFixed(2));
    // render detail information book
    const detailPartEmlement = document.getElementById('detail-part');
    if (detailPartEmlement) {
        const item1 = `
            <div class="row">
                <div class="col-xs-12 col-sm-3">
                    <div class="img" style="background:url('${book.imageUrl}')"></div>
                </div>
                <div class="col-xs-12 col-sm-9">
                    <h5 class="title" style="font-weight:bold">
                        ${book.name}
                    </h5>
                    <div class="author">
                        ${book.author}
                    </div>
                    <div class="total-rate">
                        <span id="star" class="star">${model.star}</span>
                        <span class="total-rate-point" id="rating">${(model.sumRating / model.lengthComments).toFixed(2)}</span>
                    </div>
                    <div class="genre">
                        ${book.category}
                    </div>
                    <div class="description">
                        ${book.description}
                    </div>

                    <!-- Rating part -->
                    <div class="rating">
                        <form   id="form-comment">
                            <div class='rating-stars text-center'>
                                <h5 class="title-vot">Vote Here!</h5>
                                <ul id='stars'>
                                    <li class='star' title='Poor' data-value='1'>
                                        <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='star' title='Fair' data-value='2'>
                                        <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='star' title='Good' data-value='3'>
                                        <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='star' title='Excellent' data-value='4'>
                                        <i class='fa fa-star fa-fw'></i>
                                    </li>
                                    <li class='star' title='WOW!!!' data-value='5'>
                                        <i class='fa fa-star fa-fw'></i>
                                    </li>
                                </ul>
                            </div>
                            <label for="exampleFormControlTextarea1">Leave a comment</label>
                            <textarea style="background-color: transparent" class="form-control" id="exampleFormControlTextarea1" name="comment" rows="3"></textarea>
                            <input class="btn btn-outline-light" type="submit" value="Submit">
                        </form>    
                    </div>
                </div>
            </div>
        `;
        const item2 = ` 
        <div class="row">
            <div class="col-xs-12 col-sm-3">
                <div class="img" style="background:url('${book.imageUrl}')"></div>
            </div>
            <div class="col-xs-12 col-sm-9">
                <h5 class="title" style="font-weight:bold">
                    ${book.name}
                </h5>
                <div class="author">
                    ${book.author}
                </div>
                <div class="total-rate">
                    <span id="star">${model.star}</span>
                    <span class="total-rate-point" id="rating">${(model.sumRating / model.lengthComments).toFixed(2)}</span>
                </div>
                <div class="genre">
                    ${book.category}
                </div>
                <div class="description">
                    ${book.description}
                </div>

            </div>
        </div>
        
        `;
        if (!model.loginData) {
            detailPartEmlement.insertAdjacentHTML('beforeend', item2);  //Khi chua dang nhap thi render cai nay
        } else {
            view.renderLogoutBar();
            detailPartEmlement.insertAdjacentHTML('beforeend', item1);  //Khi dang nhap roi thi render cai nay va render login thanh logout
        }

        //load comment
        model.loadComment();
    }
};


view.renderComment = (comment, status) => {
    const commentContainer = document.getElementById('comment-container');
    if (commentContainer) {
        const options = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        };
        view.renderStar(comment.ratingUser);
        const item1 = `
        <div class="comment-container">
                        <div class="comment-heading">
                            <img src="../images/person.png">
                            <div class="user">
                                <div class="login-user">
                                    <span class="name-user">${comment.user}</span>
                                    <span>rated it</span>
                                    <span class="star">${model.star}</span>
                                    <span class="point">${comment.ratingUser}</span>
                                </div>
                                <div class="date">
                                    ${comment.createdAt.toDate().toLocaleDateString("en-US", options)}
                                </div>
                            </div>
                        </div>
                        <div class="comment-content">
                            ${comment.content}
                        </div>
                        <div class="likes">
                            <span class="number-likes" id="number-like" data-number="${comment.status.length}">${comment.status.length}</span>
                            &nbsp;·&nbsp;
                            <a class="like-button" data-status="${status}" 
                            data-idComment = "${comment.id}"
                            data-commentStatus = "${comment.status}"
                            >Like</a>
                        </div>
        </div>
        `;

        const item2 = `
        <div class="comment-container">
                        <div class="comment-heading">
                            <img src="../images/person.png">
                            <div class="user">
                                <div class="login-user">
                                    <span class="name-user">${comment.user}</span>
                                    <span>rated it</span>
                                    <span class="star">${model.star}</span>
                                    <span class="point">${comment.ratingUser}</span>
                                </div>
                                <div class="date">
                                    ${comment.createdAt.toDate().toLocaleDateString("en-US", options)}
                                </div>
                            </div>
                        </div>
                        <div class="comment-content">
                            ${comment.content}
                        </div>
                        <div class="likes">
                            <span class="number-likes" id="number-like" data-number="${comment.status.length}">${comment.status.length}</span>
                            &nbsp;·&nbsp;
                            <a class="like-button" data-status="${status}" 
                            data-idComment = "${comment.id}"
                            data-commentStatus = "${comment.status}"
                            >Unlike</a>
                        </div>
        </div>
        `;
        const item3 = `
        <div class="comment-container">
                        <div class="comment-heading">
                            <img src="../images/person.png">
                            <div class="user">
                                <div class="login-user">
                                    <span class="name-user">${comment.user}</span>
                                    <span>rated it</span>
                                    <span class="star">${model.star}</span>
                                    <span class="point">${comment.ratingUser}</span>
                                </div>
                                <div class="date">
                                    ${comment.createdAt.toDate().toLocaleDateString("en-US", options)}
                                </div>
                            </div>
                        </div>
                        <div class="comment-content">
                            ${comment.content}
                        </div>
                        <div class="likes">
                            <span class="number-likes" id="number-like" data-number="${comment.status.length}">${comment.status.length}</span>
                            &nbsp;·&nbsp;
                            <a class="like-button" data-status="${status}" 
                            data-idComment = "${comment.id}"
                            data-commentStatus = "${comment.status}"
                            >Like</a>
                        </div>
        </div>
        `;

        // check like or unlike before
        if (status === "liked") {
            commentContainer.insertAdjacentHTML('beforeend', item2);
        } else if (status === "unlike") {
            commentContainer.insertAdjacentHTML('beforeend', item1);
        } else if (status = "undefined") {
            commentContainer.insertAdjacentHTML('beforeend', item3);
        }
    }

};

view.renderStar = (ratingUser) => {
    if (ratingUser === 0 || ratingUser < 1) {
        model.star = '&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;';
    } else if (ratingUser === 1 || ratingUser < 2) {
        model.star = '&#x2605;&#x2606;&#x2606;&#x2606;&#x2606;';
    } else if (ratingUser === 2 || ratingUser < 3) {
        model.star = '&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;';
    } else if (ratingUser === 3 || ratingUser < 4) {
        model.star = '&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;';
    } else if (ratingUser === 4 || ratingUser < 5) {
        model.star = '&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;';
    } else if (ratingUser === 5) {
        model.star = '&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;';
    }

}

view.renderLogoutBar = () => {
    const login = document.getElementById('login-link');
    login.innerText = "LOGOUT";
};


view.loadBestReviewSlick = () => {
    $('.responsive').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};

view.renderlistCategory = (categoryInfo) => {
    // render list category of books
    const categoryElement = document.querySelector('.category');
    if (categoryElement) {
        const listCategory = `
            <div class="item" id="${categoryInfo}">${categoryInfo}</div>
        `;
        categoryElement.insertAdjacentHTML('beforeend', listCategory);
    }

    // listen click: change category name
    const categoryIdElement = document.getElementById(categoryInfo);
    if (categoryIdElement) {
        categoryIdElement.addEventListener('click', event => {
            // query list book with category name
            const booksRow = document.querySelector('.books-row');
            if (booksRow) {
                booksRow.innerText = '';
            }
            model.queryBooksWithCategory(categoryInfo);

            // add style for class: active - category
            const activeCategory = document.querySelector('.active-category');
            if (activeCategory) {
                activeCategory.classList.remove('active-category');
            }
            categoryIdElement.classList.add('active-category');
        });
    }
};

view.renderListAllBooks = (book) => {
    const booksRow = document.querySelector('.books-row');
    if (booksRow) {
        const listAllBooks = `
            <div class="element" id="${book.id}" style="background: url('${book.imageUrl}')">
                <div class="title">
                    ${book.name}
                </div>
            </div>
        `;
        booksRow.insertAdjacentHTML('beforeend', listAllBooks);

        // listen click detail book
        const bookId = document.getElementById(book.id);
        if (bookId) {
            bookId.addEventListener('click', event => {
                model.activeBook = book;
                view.setActiveScreen('detailPage');
            });
        }
    }
};

view.renderNewBooks = (book) => {
    const newBooksElement = document.getElementById('new-books-row');
    if (newBooksElement) {
        const newBooks = `
            <div class="col-xs-12 col-sm-4 col-lg-2">
                <div class="new-item">
                    <div class="sub-hottest-img" id="${book.id}" style="background:url('${book.imageUrl}')"></div>
                </div>
            </div>
        `;
        newBooksElement.insertAdjacentHTML('beforeend', newBooks);

        //listen click detail book
        const bookId = document.getElementById(book.id);
        if (bookId) {
            bookId.addEventListener('click', event => {
                model.activeBook = book;
                view.setActiveScreen('detailPage');
            });
        }
    }
};

view.voteRatingStar = () => {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        const onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        const onStar = parseInt($(this).data('value'), 10); // The star currently selected
        const stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        model.ratingStarValue = parseInt($('#stars li.selected').last().data('value'), 10);
    });
}