import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route
            component={props =>
                (isLoggedIn)
                    ? <Component {...props} />
                    : <Redirect to="/auth-login" />
            }
            {...rest} />
    )
}
