import { 
    userLogin,
    userRegist
} from '../controllers/userController';

const routes = (app) => {
    app.route('/register')
    .post(userRegist)
    
    app.route('/login')
    .post(userLogin)
}

export default routes;
