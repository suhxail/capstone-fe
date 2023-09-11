import instance from '../services/instance';

const signup = async (credentials) => {
    try {
        console.log('Signing up user...');
        const response = await instance.authInstance.post('/users/signup', credentials);
        console.log('Signup Successful');
        console.log(response.data.message);
    } catch (error) {
        console.error('Signup failed', error);
    }
}

const signin = async (credentials) => {
    try {
        console.log('Signing In user...');
        const response = await instance.authInstance.post('/users/signin', credentials);
        console.log('Signin Successful');
        // console.log(response.data);

        // after successful signin,store the token in the session storage
        sessionStorage.setItem('loggedInUser', JSON.stringify(response.data));
        return response.data;

    } catch (error) {
        return null;
        console.error('Signin failed', error);
    }
}

export default {
    signup,
    signin
}










