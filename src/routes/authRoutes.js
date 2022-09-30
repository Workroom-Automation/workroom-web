import React from "react";
// import Login from "../views/auth/login";
const Login = React.lazy(() => import("../views/auth/login"));
const SignUp = React.lazy(()=> import("../views/auth/signup"))


const authRoutes = [
    { path: "/login", name: "Login Page", component: Login },
    {path: "/signup", name: "Sign Up", component: SignUp},
];
export default authRoutes;
