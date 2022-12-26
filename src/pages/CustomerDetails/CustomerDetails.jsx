import { Box } from 'components/Box/Box';
import { getCustomersById } from 'data/fakeApi';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  const { customersId } = useParams();
  useEffect(() => {
    getCustomersById(Number(customersId)).then(setCustomer);
  }, [customersId]);
  if (!customer) {
    return null;
  }
  return (
    <Box as="main">
      <Link to={location.state?.from ?? '/customers'}>Back to customers</Link>
      <p>id: {customer.id}</p>
      <p>Username: {customer.name}</p>
    </Box>
  );
};
