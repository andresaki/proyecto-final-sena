import React from "react";
import AppRoutes from "./Routes/Routes";
import { useEffect } from "react";
import store from "./Redux/store";
import { loadUser } from "./Redux/actions/userActions";
import { useSelector } from "react-redux";

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    const { user, loading } = useSelector((state) => state.auth);

    let primaryColor;

    if (!user) {
        primaryColor = "#0256A4";
    } else {
        primaryColor = user.colorPrimario;
    }

    console.log(primaryColor);

    return (
        <div style={{ "--primary-color": primaryColor }}>
            <AppRoutes />
        </div>
    );
};

export default App;
