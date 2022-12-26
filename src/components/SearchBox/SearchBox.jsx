import { Box } from 'components/Box/Box';
// import { useState } from 'react';
export const SearchBox = ({ value, onChange }) => {
  //   const [customer, setCustomer] = useState('');
  //   const handleChange = e => {
  //     const { name, value } = e.target;
  //     switch (name) {
  //       case 'customer':
  //         setCustomer(value);
  //         break;

  //       default:
  //         return;
  //     }
  //   };
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     onChange(customer);
  //     resetInput();
  //   };
  //   const resetInput = () => {
  //     setCustomer('');
  //   };
  return (
    <Box>
      <label>
        Search customers
        <input
          onChange={e => {
            onChange(e.target.value);
          }}
          type="text"
          //   value={customer}
          value={value}
          name="customer"
        />
      </label>
    </Box>
  );
};
