import React from 'react'
import './TransferList.css';
const TransferList = ({transfers, approveTransfer}) => {
  return (
      <>
    <h2>Transfers</h2>
    <table className='styledTable'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Amount</th>
          <th>To</th>
          <th>approvals</th>
          <th>sent</th>
        </tr>
      </thead>
      <tbody>
        {transfers.map(transfer => (
          <tr key={transfer.id}>
             <td>{transfer.id}</td>
             <td>{transfer.amount}</td>
             <td>{transfer.to}</td>
             <td>{transfer.approvals}
             <buton className="btn" onClick = { () => approveTransfer(transfer.id)}>Approve</buton>
             </td>
             <td>{transfer.sent?'yes':'no'}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>

  );
}
export default TransferList