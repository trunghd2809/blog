/**
 * TODO: implement authorization in addition to authentication (user.token)
 * must match user id for editing profile.
 */
// FIXME: this routes configuration might be deprecated by react-router v4
import Base from './components/Base.jsx';
import Home from './components/Home.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignupPage from './containers/SignupPage.jsx';
import CreatePostPage from './containers/CreatePostPage.jsx';
// import UserPage from './';
import Auth from './modules/Auth';

/**
 * @function bounceIfNotLoggedIn
 * @description a helper method that wraps around the React Router
 * "getComponent" route option (that replaces the "component" option)
 * callback that conditionally returns a component to the route
 * @param {React.Component} protectedComponent - a react component
 * @return {function} a react
 * @example {path: '/protected', getComponent: protectedComponent(ProtectedPage)}
 */
const bounceIfNotLoggedIn = (protectedComponent) => {
  return (location, callback) => {
    if (Auth.isTokenExist()) {
      callback(null, protectedComponent);
    } else {
      callback(null, LoginPage);
    }
  };
};

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: SignupPage,
    },
    {
      path: '/logout',
      // TODO: remove server-side logout?
      onEnter: (nextState, replace) => {
        Auth.removeToken();

        // change the current URL to /
        replace('/');
      },
    },
    {
      path: '/posts/new',
      getComponent: bounceIfNotLoggedIn(CreatePostPage),
    },
    // {
    //   path: '/user/:userId',
    //   getComponent: bounceIfNotLoggedIn(UserPage),
    // },
  ],
};

export default routes;
