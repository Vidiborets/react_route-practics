import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
// import { Sales } from 'pages/Sales/Sales';
import { Invoices } from './Invoices/Invoices';
import { InvoiceDetails } from './InvoiceDetails/InvoiceDetails';
// import { Customers } from 'pages/Customers/Customers';
// import { CustomerDetails } from 'pages/CustomerDetails/CustomerDetails';
import { lazy } from 'react';
const Sales = lazy(() =>
  import('pages/Sales/Sales').then(module => ({
    ...module,
    default: module.Sales,
  }))
);
const Customers = lazy(() =>
  import('pages/Customers/Customers').then(module => ({
    ...module,
    default: module.Customers,
  }))
);
const CustomerDetails = lazy(() =>
  import('pages/CustomerDetails/CustomerDetails').then(module => ({
    ...module,
    default: module.CustomerDetails,
  }))
);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/sales/invoices" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            {/* <Route index element={<div>Sales index route</div>} /> */}
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              {/* <Route index element={<div>Invoices index</div>} /> */}
              <Route path=":invoiceId" element={<InvoiceDetails />}></Route>
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customersId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
