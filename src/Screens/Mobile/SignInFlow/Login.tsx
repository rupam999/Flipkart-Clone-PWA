import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();
    useEffect(() => {
        history.push("/user");
    }, [])
    return (
        <p>jhk</p>
    );
}