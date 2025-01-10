import React from "react";
import { Route, Routes } from "react-router";

export default function Router() {
  const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
  const Login = React.lazy(() => import("./Login/Login"));
  const Signup = React.lazy(() => import("./Signup/Signup"));
  const Analysis = React.lazy(() => import("./Analysis/Analysis"));
  const Expense = React.lazy(() => import("./Expense/Expense"));
  const Budgets = React.lazy(() => import("./Budgets/Budgets"));

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </React.Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Login />
          </React.Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <React.Suspense fallback={<div>Loadin....</div>}>
            <Signup />
          </React.Suspense>
        }
      />
      <Route
        path="/analysis"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Analysis />
          </React.Suspense>
        }
      />
      <Route
        path="/expenses"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Expense />
          </React.Suspense>
        }
      />
      <Route
        path="/budgets"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Budgets />
          </React.Suspense>
        }
      />
    </Routes>
  );
}
