import React, { useContext } from 'react';
import { FirebaseContext } from '../firebase'
import { FaFacebook } from 'react-icons/fa'

const Header = () => {
    const { user, firebase } = useContext(FirebaseContext)
    return (
        <div className='header'>
            <h1 className='header-title'>Twitcoders</h1>
            {user ?
                (<button
                    onClick={() => firebase.logout()}
                    type='button'
                    className='login-btn'
                >
                    Logout
                </button>
                ) : (
                    <button
                        onClick={() => firebase.login('facebook')}
                        type='button'
                        className='login-btn'
                    >
                        <FaFacebook />  Login
                    </button>
                )}
        </div>
    );
}

export default Header;