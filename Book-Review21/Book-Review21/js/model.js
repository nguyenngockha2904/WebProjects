const model = () => { };
//biến của trang ngoài
model.loginData = undefined;
model.activeBook = undefined;
model.listenerLoadComment = undefined;
model.book = undefined;
model.ratingStarValue = undefined;
model.limit = 9;
model.star = undefined;
model.sumRating = undefined;
model.lengthComments = undefined;

model.createNewUser = (firstname, lastname, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((registerResult) => {
            //update displayname
            registerResult.user.updateProfile({
                displayName: `${firstname} ${lastname}`
            });
            //send email verification
            registerResult.user.sendEmailVerification();

            Swal.fire('Register success. Please check your email !!!');
            view.clearRegisterInfo();
        })
        .catch((error) => {
            Swal.fire({
                type: 'error',
                title: error.message,
                text: error.message
            });
        });
};

model.loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((loginResult) => {
            if (loginResult.user.emailVerified) {
                //login success
                model.loginData = {
                    id: loginResult.user.uid,
                    displayName: loginResult.user.displayName,
                    email: loginResult.user.email,
                };
                view.setActiveScreen('homePage');
                view.renderLogoutBar();
                //vao trang chu
            } else {
                Swal.fire('This account is not activate . Please verify!');
                view.clearLoginInfo();
            }
        })
        .catch((error) => {
            Swal.fire({
                type: 'error',
                title: error.message,
                text: error.message,
            });
            view.clearLoginInfo();
        })
}

model.forgotPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            Swal.fire('Please check your email!');
        })
        .catch((error) => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: error.message
            });
        })
}

model.loadBestReviewsBooks = () => {        //dung de load slick Book o home
    const db = firebase.firestore();
    db.collection('book-review')
        .onSnapshot((snapShot) => {
            const bestBooks = [];
            snapShot.docChanges().forEach((item) => {
                const book = item.doc.data();
                book.id = item.doc.id;
                bestBooks.push(book);
            });
            bestBooks.forEach((element) => {
                view.renderBestBooksElement(element);
            });
            view.loadBestReviewSlick();
        });
};

model.loadListCategory = () => {
    const db = firebase.firestore();
    db.collection('book-review')
        .onSnapshot(snapShot => {
            const listCagegories = [];
            snapShot.docChanges().forEach(item => {
                const listCategory = item.doc.data();
                listCategory.id = item.doc.id;
                listCagegories.push(listCategory);
            });
            const categoryElements = [];
            listCagegories.forEach(element => {
                if (!categoryElements.includes(element.category)) {
                    categoryElements.push(element.category);
                }
            });
            categoryElements.forEach(element => {
                view.renderlistCategory(element);
            });
        });
};

model.queryBooksWithCategory = (categoryInfo) => {
    const db = firebase.firestore();
    db.collection('book-review').where('category', '==', categoryInfo)
        .onSnapshot(snapShot => {
            const listBooks = [];
            snapShot.docChanges().forEach(element => {
                const book = element.doc.data();
                book.id = element.doc.id;
                listBooks.push(book);
            });
            listBooks.forEach(element => {
                view.renderListAllBooks(element);
            });
        });
};

model.loadListAllBooks = () => {
    const db = firebase.firestore();
    db.collection('book-review').limit(model.limit)
        .onSnapshot(snapShot => {
            const listBooks = [];
            snapShot.docChanges().forEach(element => {
                const book = element.doc.data();
                book.id = element.doc.id;
                listBooks.push(book);
            });
            listBooks.forEach((element) => {
                view.renderListAllBooks(element);
            });
        });
};

model.saveComment = (commentContent) => {
    const newComment = {
        content: commentContent,
        createdAt: new Date(),
        ratingUser: model.ratingStarValue,
        status: [],
        user: model.loginData.email,
    }
    const db = firebase.firestore();
    db.collection('book-review')
        .doc(model.activeBook.id)
        .update({
            comment: firebase.firestore.FieldValue.arrayUnion(newComment),
        });
};

model.loadComment = () => {
    const db = firebase.firestore();
    model.listenerLoadComment = db.collection('book-review')
        .doc(model.activeBook.id)
        .onSnapshot((snapshot) => {
            const book = snapshot.data();
            book.id = snapshot.id;

            if (model.book) {
                const newCmt = book.comment[book.comment.length - 1];
                view.renderComment(newCmt, 'unlike');
            } else {
                model.book = book;
                if (model.loginData) {
                    book.comment.forEach((cmt) => {
                        if (cmt.status.includes(model.loginData.email)) {
                            view.renderComment(cmt, 'liked');
                        } else {
                            view.renderComment(cmt, 'unlike');
                        }
                    });
                } else {
                    book.comment.forEach((cmt) => {
                        view.renderComment(cmt, 'undefined');
                    })
                }
            }
        });
};

model.clearLoadComment = () => {
    model.activeBook = undefined;
    model.book = undefined;
    model.listenerLoadComment();
};

model.loadNewBooks = () => {
    const db = firebase.firestore();
    db.collection('book-review')
        .orderBy('createdAt', 'desc').limit(6)
        .onSnapshot(snapShot => {
            const listBooks = [];
            snapShot.docChanges().forEach(element => {
                const book = element.doc.data();
                book.id = element.doc.id;
                listBooks.push(book);
            });
            listBooks.forEach(element => {
                view.renderNewBooks(element);
            });
        });
};

model.saveLikeComment = (updateStatus, idComment) => {
    updateStatus.push(model.loginData.email);
    const db = firebase.firestore();
    db.collection('book-review')
        .doc(model.activeBook.id).onSnapshot((snapShot) => {
            const book = snapShot.data();
            book.id = snapShot.id;
            const listComment = book.comment;
            listComment.forEach((item) => {
                if (item.id === idComment) {
                    item.status = updateStatus;
                };
            });
            db.collection('book-review')
                .doc(model.activeBook.id)
                .update({
                    comment: listComment,
                });
        })
}

model.saveUnlike = (updateStatus, idComment) => {
    updateStatus.splice(updateStatus.indexOf(model.loginData.email), 1);
    const db = firebase.firestore();
    db.collection('book-review')
        .doc(model.activeBook.id).onSnapshot((snapShot) => {
            const book = snapShot.data();
            book.id = snapShot.id;
            const listComment = book.comment;
            listComment.forEach((item) => {
                if (item.id === idComment) {
                    item.status = updateStatus;
                };
            });
            db.collection('book-review')
                .doc(model.activeBook.id)
                .update({
                    comment: listComment,
                });
        })
}
