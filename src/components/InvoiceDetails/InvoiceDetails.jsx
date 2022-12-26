import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInvocesById } from 'data/fakeApi';
export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvocesById(invoiceId).then(setInvoice);
  }, [invoiceId]);
  //   if (!invoice) {
  //     return;
  //   }
  return (
    <div>
      {invoice && (
        <div>
          <p>
            <b>Recipient:</b> {invoice.recipient}
          </p>
          <p>
            <b>Account number:</b> {invoice.account}
          </p>
          <p>
            <b>Total due:</b> {invoice.total}$
          </p>
          <p>
            <b>Invoice date:</b>{' '}
            {new Date(invoice.date.created).toLocaleDateString()}
          </p>
          <p>
            <b>Due date:</b> {new Date(invoice.date.due).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};
