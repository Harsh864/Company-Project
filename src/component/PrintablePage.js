import React from 'react';
import "./PrintablePage.css"; // Import the CSS file for styling the PrintablePage

const PrintablePage = ({ details }) => {
  const {
    place,
    vehicleNumber,
    date,
    challanNumber,
    phoneNumber,
    driverName,
    items, // Array of dynamically entered items
  } = details;

  const paragraph = `VISHAL ENTERPRISE
DELIVERY CHALLAN
Dear Sir,
We are Vishal Enterprise (Engineers/ Contractors ) working as Mechanical Maintenance
Maintenance & Project contractor  transferring the below-listed material from our Vishal
Central Dahej Store To AIL JHAGADIA
*Note : Material is Not For Sale Only transferring form Vishal Central Dahej Store to AIL JHAGADIA

TO, M/S VISHAL ENTERPRISES SERVICE RENDORS  AT, AIL JHAGADIA\t\t\tChallan N0:${challanNumber}
\t\t\t\t\tDATE : ${date}
Vehical No: ${vehicleNumber}
Driver Name:${driverName}
Contact No: ${phoneNumber}
GST No:

Tools Tackles ,Machineries , Consumable Item (As Per Annexure-I) to execute ARC jobs

Details of Goods are as under as per Annexure -I
Vishal Enterprise Company Details: D2/E 397-398, Jolva, GIDC Dahej, Dist. Bharuch-392 130
PAN NO: AAYPM1959N
GST No: 24AAYPM1959N1ZS

Annexture - I
Sr.No\tItem Description\tUOM\tQty.\tRemark
${items.map((item, index) => `\n${index + 1}\t${item.description}\t${item.uom}\t\t${item.qty}\t${item.remark}`)}
`;

  return (
    <div className="printable-page">
    <div className="watermark">Vishal Enterprise</div>
      <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{paragraph}</pre>
    </div>
  );
};

export default PrintablePage;
