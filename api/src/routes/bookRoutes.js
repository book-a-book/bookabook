import { 
    addNewBook,
    addNewBooks, 
    getBooks, 
    getBookWithID, 
    updateBook,
    deleteBook 
} from '../controllers/bookController';

const routes = (app) => {
    app.route('/book')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getBooks)
    
    // POST endpoint
    .post(addNewBook);

    app.route('/book/:bookId')
    // get specific book
    .get(getBookWithID)
    
    // put request
    .put(updateBook)

    // delete request
    .delete(deleteBook);

    app.route('/addAll')
    .post(addNewBooks)

}

export default routes;
