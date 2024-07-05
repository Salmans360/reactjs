import moment from 'moment';

const customerSearchTypeDropDown = [
  { label: 'Customer Name', value: 'name' },
  { label: 'Phone Number', value: 'phoneNumber' },
  { label: 'Email ID', value: 'email' },
];

const vehicleSearchTypeDropDown = [
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Model Year', value: 'year' },
  { label: 'Displacement', value: 'displacement' },
  { label: 'Color', value: 'color' },
  { label: 'License Plate', value: 'licensePlate' },
  { label: 'VIN', value: 'vin' },
];

const quotesSearchTypeDropDown = [
  { label: 'Customer', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Walk in', value: 'walkIn' },
  { label: 'Carried Away', value: 'carriedAway' },
  { label: 'Work Order #', value: 'id' },
  { label: 'License Plate', value: 'licensePlate' },
];
const estimateSearchTypeDropDown = [
  { label: 'Customer', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Walk in', value: 'walkIn' },
  { label: 'Carried Away', value: 'carriedAway' },
  { label: 'Estimate #', value: 'id' },
  { label: 'License Plate', value: 'licensePlate' },
];
const invoicesSearchTypeDropDown = [
  { label: 'Customer', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Walk in', value: 'walkIn' },
  { label: 'Carried Away', value: 'carriedAway' },
  { label: 'Sales Man', value: 'salesMan' },
  { label: 'Invoice #', value: 'id' },
  { label: 'License Plate', value: 'licensePlate' },
];

const customerSortDropdown = [
  { label: 'Date', value: 'createdAt' },
  { label: 'Customer Name', value: 'firstName' },
  { label: 'Last Visit date', value: 'serviceDate' },
];

const vehicleSortDropdown = [
  { label: 'Date', value: 'createdAt' },
  { label: 'Last Service date', value: 'serviceDate' },
];
const quoteSortDropdown = [
  { label: 'Date', value: 'date' },
  { label: 'Work Order #', value: 'quoteNo' },
  { label: 'Customer Name', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
];
const estimateSortDropdown = [
  { label: 'Date', value: 'date' },
  { label: 'Estimate #', value: 'quoteNo' },
  { label: 'Customer Name', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
];

const invoicesSortDropdown = [
  { label: 'Date', value: 'date' },
  { label: 'Invoice #', value: 'invoiceNo' },
  { label: 'Customer Name', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
];

export const customerTableHeader = [
  { label: 'Sr #', value: 'sr' },
  { label: 'Customer Name', value: 'name' },
  { label: 'Phone Number', value: 'mobileNumber' },
  { label: 'Email ID', value: 'email' },
  { label: 'Last Visit Date', value: 'servicedate' },
  { label: 'Balance', value: 'balance' },
  { label: 'Overdue', value: 'overdue' },
  { label: 'Action' },
];
export const vehicleTableHeader = [
  { label: 'Sr #', value: 'sr' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'Model Year', value: 'year' },
  { label: 'Displacement', value: 'engineSize' },
  { label: 'Color', value: 'color' },
  { label: 'License Plate', value: 'licensePlate' },
  { label: 'Last Service', value: 'servicedate' },
  { label: 'VIN', value: 'vin' },
  { label: 'Action' },
];
export const quoteHeader = [
  { label: 'Work Order #', value: 'id' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'License Plate', value: 'licensePlate' },
  { label: 'Customer', value: 'customer' },
  { label: 'Work Order Date', value: 'date' },
  { label: 'Estimated Amount', value: 'totalPayAble' },
  { label: 'Action' },
];
export const estimateHeader = [
  { label: 'Estimate #', value: 'id' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'License Plate', value: 'licensePlate' },
  { label: 'Customer', value: 'customer' },
  { label: 'Estimate Date', value: 'date' },
  { label: 'Estimated Amount', value: 'totalPayAble' },
  { label: 'Action' },
];
export const invoiceHeader = [
  { label: 'Invoice #', value: 'invoiceId' },
  { label: 'WO #', value: 'id' },
  { label: 'Customer', value: 'customer' },
  { label: 'Vehicle', value: 'vehicle' },
  { label: 'License Plate', value: 'licensePlate' },
  { label: 'Sales Man', value: 'salesMan' },
  { label: 'Payment Status', value: 'status' },
  { label: 'Payment Date', value: 'date' },
  { label: 'Final Amount', value: 'finalAmount' },
  { label: 'Action' },
];

export const customerModule = [
  // { label: 'Trans #', value: 'transactionNo' },
  { label: 'Ref#', value: 'workOrderNumber' },
  { label: 'Date', value: 'date' },
  { label: 'Type', value: 'type' },

  { label: 'Invoice Status', value: 'invoiceStatus' },
  { label: 'License Plate ', value: 'licensePlate' },
  { label: 'Open Amount', value: 'openAmount' },
  { label: 'Remaining Amount', value: 'remainingAmount' },
  { label: 'Total Amount', value: 'totalAmount' },
  { label: 'Action' },
];
export const receiveOnAccountModule = [
  { label: 'Type', value: 'type' },
  { label: 'Date', value: 'date' },
  { label: 'WO #', value: 'workOrderNumber' },
  { label: 'Terms', value: 'terms' },
  { label: 'Total Amount', value: 'totalAmount' },
  { label: 'Open Amount', value: 'openAmount' },
  { label: 'To Apply', value: 'toApply' },
  { label: 'New Open Amount ', value: 'newOpenAmount' },
];
export const searchTypeDropDown = (view) => {
  if (view?.toLowerCase() === 'customer') return customerSearchTypeDropDown;
  if (view?.toLowerCase() === 'vehicle') return vehicleSearchTypeDropDown;
  if (view?.toLowerCase() === 'estimate') return estimateSearchTypeDropDown;
  if (view?.toLowerCase() === 'quotes') return quotesSearchTypeDropDown;
  if (view?.toLowerCase() === 'invoices') return invoicesSearchTypeDropDown;
};

export const defaultValueDropDown = (view) => {
  if (view?.toLowerCase() === 'customer') return 'name';
  if (view?.toLowerCase() === 'vehicle') return 'vehicle';
  if (view?.toLowerCase() === 'quotes') return 'customer';
  if (view?.toLowerCase() === 'estimate') return 'customer';
  if (view?.toLowerCase() === 'invoices') return 'customer';
};
export const sortTypeDropDown = (view) => {
  if (view?.toLowerCase() === 'customer') return customerSortDropdown;
  if (view?.toLowerCase() === 'vehicle') return vehicleSortDropdown;
  if (view?.toLowerCase() === 'quotes') return quoteSortDropdown;
  if (view?.toLowerCase() === 'estimate') return estimateSortDropdown;
  if (view?.toLowerCase() === 'invoices') return invoicesSortDropdown;
};

export const listingTableHeader = (view) => {
  if (view?.toLowerCase() === 'customer') return customerTableHeader;
  if (view?.toLowerCase() === 'vehicle') return vehicleTableHeader;
  if (view?.toLowerCase() === 'estimate') return estimateHeader;

  if (view?.toLowerCase() === 'quotes') return quoteHeader;
  if (view?.toLowerCase() === 'invoices') return invoiceHeader;
  if (view?.toLowerCase() === 'customermodule') return customerModule;
  if (view?.toLowerCase() === 'receiveonaccount') return receiveOnAccountModule;
};

export const calculateDateRanges = (value) => {
  if (value === 'today') {
    return [
      {
        label: 'start',
        value: moment().format('YYYY-MM-DD'),
      },
      {
        label: 'end',
        value: moment().format('YYYY-MM-DD'),
      },
    ];
  } else if (value === 'lastWeek') {
    const startDate = moment()
      .subtract(moment().day(), 'days')
      .subtract(6, 'days');
    const endDate = moment().subtract(moment().day(), 'days');
    return [
      {
        label: 'start',
        value: startDate.format('YYYY-MM-DD'),
      },
      {
        label: 'end',
        value: endDate.format('YYYY-MM-DD'),
      },
    ];
  } else if (value === 'lastMonth') {
    const startDate = moment()
      .month(moment().month() - 1)
      .startOf('month');
    const endDate = moment()
      .month(moment().month() - 1)
      .endOf('month');

    return [
      {
        label: 'start',
        value: startDate.format('YYYY-MM-DD'),
      },
      {
        label: 'end',
        value: endDate.format('YYYY-MM-DD'),
      },
    ];
  }
};

export const sampleCsvLink = (view) => {
  if (view?.toLowerCase() === 'customer')
    return process.env.REACT_APP_CUSTOMER_IMPORT_SAMPLE_CSV_URL;
  if (view?.toLowerCase() === 'vehicle')
    return process.env.REACT_APP_VEHICLE_IMPORT_SAMPLE_CSV_URL;
  if (view?.toLowerCase() === 'quotes')
    return process.env.REACT_APP_QUOTES_IMPORT_SAMPLE_CSV_URL;
  if (view?.toLowerCase() === 'invoices')
    return process.env.REACT_APP_INVOICE_IMPORT_SAMPLE_CSV_URL;
};

export const convertDataListingforCsv = (headings, rows, view) => {
  headings?.pop();
  const columnNames = headings?.map((item) => {
    return { label: item.label, key: item.value };
  });
  const dataRows = rows?.map((item, index) => {
    if (view?.toLowerCase() === 'customer') {
      return {
        ...item,
        name: `${item.firstName} ${item?.lastName}`,
        sr: ++index,
      };
    } else if (view?.toLowerCase() === 'vehicle') {
      return {
        ...item,
        vehicle: `${item?.make || ''} ${item?.model || ''}`,
        sr: ++index,
      };
    } else if (view?.toLowerCase() === 'quotes') {
      return {
        ...item,
        date: moment(item?.createdAt).format('L'),
        customer:
          (item?.customer &&
            `${item?.customer?.firstName} ${item?.customer?.lastName}`) ||
          '',
        vehicle:
          (item?.vehicle &&
            ` ${item?.vehicle?.year} ${item?.vehicle?.make} ${item?.vehicle?.model}`) ||
          '',

        licensePlate: (item?.vehicle && item?.vehicle?.licensePlate) || '',
        sr: ++index,
      };
    } else if (view?.toLowerCase() === 'estimate') {
      return {
        ...item,
        date: moment(item?.createdAt).format('L'),
        customer:
          (item?.customer &&
            `${item?.customer?.firstName} ${item?.customer?.lastName}`) ||
          '',
        vehicle:
          (item?.vehicle &&
            ` ${item?.vehicle?.year} ${item?.vehicle?.make} ${item?.vehicle?.model}`) ||
          '',

        licensePlate: (item?.vehicle && item?.vehicle?.licensePlate) || '',
        sr: ++index,
      };
    } else if (view?.toLowerCase() === 'invoices') {
      return {
        ...item,
        invoiceId: (item?.invoice && item?.invoice?.id) || '',

        date: item?.invoice && moment(item?.invoice?.createdAt).format('L'),
        customer:
          (item?.customer &&
            `${item?.customer?.firstName} ${item?.customer?.lastName}`) ||
          '',
        vehicle:
          (item?.vehicle &&
            `${item?.vehicle?.make} ${item?.vehicle?.model}${item?.vehicle?.model}${item?.vehicle?.year}`) ||
          '',
        licensePlate: (item?.vehicle && item?.vehicle?.licensePlate) || '',
        salesMan: (item?.invoice && item?.invoice?.salesRep) || '',
        status: +item?.invoice?.totalAmount
          ? +item?.invoice?.paidAmount + +item?.invoice?.discount ===
            +item?.invoice?.totalAmount
            ? 'Fully Paid'
            : 'Partial Paid'
          : '',
        sr: ++index,
      };
    } else {
      return {
        ...item,
      };
    }
  });
  return { dataRows, columnNames };
};

// export const customerTableHeader = [
//   { label: 'Sr #', value: 'sr' },
//   { label: 'Customer Name', value: 'name' },
//   { label: 'Phone Number', value: 'mobileNumber' },
//   { label: 'Email ID', value: 'email' },
//   { label: 'Last Visit Date', value: 'servicedate' },
//   { label: 'Action' },
// ];
// export const mapListTableRowsData = (header,rows)=>{
//   return rows?.map((item,index)=>{

//   })
