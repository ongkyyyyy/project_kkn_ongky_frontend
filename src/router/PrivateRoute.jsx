import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();
    
    return (
        <Routes>
            <Route
                {...rest}
                element={isAuthenticated ? element : <Navigate to="/login" />}
            />
        </Routes>
    );
};

export default PrivateRoute;
