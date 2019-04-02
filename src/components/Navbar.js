import React from 'react';
import Cookies from 'js-cookie';

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            loggedin: false
        };
    }

    isAuthenticated()
    {
        export const getAccessToken = () => Cookies.get('access_token');
        export const getRefreshToken = () => Cookies.get('refresh_token');
        export const isAuthenticated = () => !!getAccessToken();
    }

    authenticate()
    {
        export const authenticate = async () => {
            if (getRefreshToken()) {
              try {
                const tokens = await refreshTokens() // call an API, returns tokens
          
                const expires = (tokens.expires_in || 60 * 60) * 1000
                const inOneHour = new Date(new Date().getTime() + expires)
          
                // you will have the exact same setters in your Login page/app too
                Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
                Cookies.set('refresh_token', tokens.refresh_token)
          
                return true
              } catch (error) {
                redirectToLogin()
                return false
              }
            }
          
            redirectToLogin()
            return false
          }
    }

    redirectToLogin()
    {
        const redirectToLogin = () => {
            history.push('/login')
          }
    }

    render()
    {
        return <table className="navbar">
            <tbody>
                <tr>
                    <td className="lalign">Movie Theatre x</td>
                    <td className="ralign">Login button here</td>
                </tr>
            </tbody>
        </table>;
    }
}



export default Navbar;
