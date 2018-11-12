const token = localStorage.getItem('token');

export const jwtHeaders = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};