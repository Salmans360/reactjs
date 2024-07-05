const Style = (theme) => ({
  table__container: {
    maxHeight: '100%',

    // width: '75rem',
    overflowY: 'auto',
    '& .MuiTableHead-root': {
      background: '#F4F7FB',
      padding: '0',
    },
    '& .MuiTableCell-head': {
      padding: '8px 25px',
      background: '#F4F7FB',
      borderBottom: 0,
    },
  },
  theadCell: {
    padding: '8px 25px',
    background: '#F4F7FB',
    borderBottom: 0,
  },
  tableCell: {
    padding: '6px 25px',
    borderBottom: 0,
  },
  headRoot: {
    background: '#F4F7FB',
    padding: '0',
  },
  table__action: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  table__body__row: {
    '& .MuiTableCell-root': {
      padding: '6px 25px',
      borderBottom: '1px solid #dcdcdc',
    },
    '&:last-child': {
      '& .MuiTableCell-root': {
        borderBottom: 0,
      },
    },
  },
});

export default Style;
