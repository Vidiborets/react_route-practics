import { Box } from 'components/Box/Box';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getcustomers } from 'data/fakeApi';
import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const filter = searchParams.get('filter') ?? '';
  useEffect(() => {
    getcustomers().then(setCustomers);
  }, [customers]);
  const changeFilter = value => {
    setSearchParams(
      value !== ''
        ? {
            filter: value,
          }
        : {}
    );
  };
  const visibleCustomers = useMemo(
    () =>
      customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [customers, filter]
  );
  return (
    <Box as="main">
      <Box>
        <SearchBox value={filter} onChange={changeFilter} />
      </Box>
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(({ id, name }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};
