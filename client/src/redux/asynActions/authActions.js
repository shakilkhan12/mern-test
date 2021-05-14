import axios from 'axios';

export const registerAction = (userData) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'REGISTER_REQUEST' });
			const { data } = await axios.post(
				'http://localhost:5000/register',
				userData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			dispatch({ type: 'REGISTER_SUCCESS' });
			if (data.status === 'errors') {
				dispatch({ type: 'AUTH_ERRORS', payload: data.errors });
			} else if (data.status === 'success') {
				console.log(data.token);
				localStorage.setItem('token', data.token);
				dispatch({
					type: 'SET_TOKEN',
					payload: { token: data.token, user: data.user },
				});
			}
		} catch (error) {
			dispatch({ type: 'AUTH_ERRORS', payload: error.response.data.errors });
		}
	};
};

export const loginAction = (userData) => {
	return async (dispatch) => {
		try {
			dispatch({ type: 'LOGIN_REQUEST' });
			const { data } = await axios.post(
				'http://localhost:5000/login',
				userData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			dispatch({ type: 'LOGIN_SUCCESS' });
			console.log(data);
			if (data.status === 'errors') {
				dispatch({ type: 'LOGIN_ERRORS', payload: data.errors });
			} else if (data.status === 'success') {
				console.log('Your token is here: ', data.token);
				localStorage.setItem('token', data.token);
				dispatch({
					type: 'SET_TOKEN',
					payload: { token: data.token, user: data.user },
				});
				axios.defaults.headers.common = {
					token: data.token,
				};
			}
		} catch (error) {
			console.log(error);
		}
	};
};
