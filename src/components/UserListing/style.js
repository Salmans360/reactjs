const Style = (theme) => ({
  category__details: {
    background: '#fff',
  },
  invntory__container: {
    background: '#F4F8FF',
    height: '100%',
    padding: '1rem',
  },
  stock__counter: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1rem',
    width: '170px',
  },
  link__disable: {
    color: 'grey',
    cursor: 'default',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  stock__category: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1rem',
    width: '340px',
    '&:nth-child(1), &:nth-child(3)': {
      '& .link__color': {
        color: 'var(--color-secondary)',
      },
      '& .icon__color': {
        '& path': {
          '&:nth-child(1), &:nth-child(3)': {
            fill: 'rgba(255, 96, 25, 0.15)',
          },
          '&:nth-child(2)': {
            stroke: 'var(--color-secondary)',
          },
          '&:nth-child(3)': {
            stroke: 'var(--color-secondary)',
          },
        },
      },
    },
    '&:nth-child(2),:nth-child(3)': {
      '& .link__color': {
        color: 'var(--color-primary)',
      },
    },
    '& .search__dropdown': {
      width: '8rem',
      right: '1rem',
      top: 'unset',
      bottom: '1.7rem',
      left: 'unset',
      '& .field': {
        padding: '0.5rem 1rem',
      },
    },
  },
  tab__panel: {
    height: 'calc(100vh - 140px)',
    overflowY: 'auto',
  },
  indicator: {
    bottom: '0px',
    backgroundColor: 'var(--color-primary) !important',
    height: '100% !important',
    borderRadius: '100px',
  },
  tabs__bar: {
    backgroundColor: 'rgba(105, 33, 196, 0.07)',
    boxShadow: 'none',
    padding: '0',
    zIndex: '1',
    position: 'relative',
    borderRadius: '100px',
    minHeight: '30px !important',
    '& .MuiTabScrollButton-root': {
      color: 'rgba(109, 125, 139, 1)',
      borderBottom: '3px solid #CCD2E3',
      opacity: '1 !important',
    },
    '& .MuiTabScrollButton-root.Mui-disabled': {
      color: 'rgba(109, 125, 139, .3)',
    },
    '& .MuiTabs-scroller': {
      '& .MuiTabs-flexContainer': {
        justifyContent: 'flex-start',
        '& .MuiTab-root': {
          minHeight: '30px',
          width: 'max-content',
          maxWidth: 'max-content',
          minWidth: 'max-content',
          textTransform: 'capitalize',
          color: 'var(--color-primary)',
          opacity: '1',
          borderBottom: '0',
          fontSize: '13px',
          padding: '.8rem 1.4rem',
          margin: '0',
        },
        '& .Mui-selected': {
          color: 'var(--color-white)',
          zIndex: 1,
        },
      },
    },
  },
  paper__filter: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: '#F2F7FA',
    borderRadius: '100px',
    '& .category__dropdown': {
      width: '130px',
      '& .MuiSelect-root': {
        margin: 0,
        background: 'rgba(227, 233, 242, .5)',
        minHeight: '40px',
        padding: '0 12px',
      },
    },
    '& .MuiInputBase-root': {
      height: '40px',
      minWidth: '250px',
    },
  },
  multi__select__width: {
    '& .MuiSelect-root': {
      width: '100%',
      minWidth: '100%',
    },
  },
  sub__category__dropdown: {
    width: '100px',
    '& .MuiSelect-root': {
      margin: 0,
      minHeight: '40px',
      padding: '0 12px',
    },
  },
  style__main: {
    position: 'absolute',
    top: '2.7rem',
    left: '0',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.04)',
    borderRadius: '15px',
    zIndex: 10,
    background: '#fff',
    padding: '5px',
    maxHeight: '220px',
    overflowY: 'auto',
    width: '160px',
    '& .field': {
      borderBottom: '.25px solid #DDE9FB',
      padding: '0.6rem 1rem',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      '&:last-child': {
        borderBottom: '0',
      },
    },
  },
  main__dialog: {
    width: '50vw !important',
    height: '85vh',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
      width: '90%',
    },
  },
  header__style: {
    background: '#FEFEFE',
    padding: '1rem 1.5rem 1rem',
  },
  dialog__content: {
    height: 'calc(100% - 124px)',
    overflowY: 'auto',
    background: '#FEFEFE',
    padding: '0 1.5rem',
    '& .flex__wrap': {
      flexWrap: 'wrap',
      '& .field__padding': {
        '& .search__dropdown': {
          top: '1.9rem',
          right: '0',
          left: 'unset',
        },
        '& .field': {
          padding: '.5rem 1rem',
        },
      },
    },
    '& .dialog__content__inner': {
      height: '100%',
    },
  },
  data__import__dialog: {
    width: '25rem !important',
    height: '22rem',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
      width: '90%',
    },
  },
  data__import__dialog__content: {
    height: '100%',
    overflowY: 'auto',
    background: '#FEFEFE',
    padding: '1.5rem',
    '& .dialog__content__inner': {
      height: '100%',
    },
  },
  data__import__icon: {
    fontSize: '70px',
  },
  import__popup__bg: {
    background: '#F2F7FA',
  },

  fields__space: {
    '& .control-width': {
      width: '100%',
    },
  },
  add__logo: {
    '& .upload__icon': {
      height: '76px',
      width: '76px',
      backgroundColor: '#f0e9f9',
      padding: '0',
    },
    '& .pl__1': {
      paddingLeft: '1.5rem',
    },
    '& .selected__img': {
      height: '100%',
      width: '100%',
      borderRadius: '100px',
    },
  },

  outOfStockButtonPressed: {
    color: '#FFFFFF !important',
    backgroundColor: '#FF1919 !important',
  },
  lowStockButtonPressed: {
    color: '#FFFFFF !important',
    backgroundColor: '#FF6019 !important',
  },
  import__box: {
    backgroundColor: 'rgba(254, 252, 252, 0.8)',
    border: '1px solid #FFFFFF',
    borderRadius: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 0',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  import__box__upload: {
    backgroundColor: 'rgba(254, 252, 252, 0.8)',
    border: '1px solid #FFFFFF',
    borderRadius: '.5rem 1rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    marginTop: '1rem',
  },
  submit__icon: {
    height: '40px',
    width: '40px',
    cursor: 'pointer',
    marginBottom: '1.5rem',
  },
  browse__btn: {
    background: 'rgba(255, 96, 25, 0.2)',
    borderRadius: '100px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#FF6019',
    padding: '.7rem 2rem',
    textTransform: 'capitalize',
    '&:hover': {
      background: 'rgba(255, 96, 25, 0.2)',
    },
  },

  header__style__service__package: {
    background: '#f6f8fa',
    padding: '1rem 1.5rem 1rem',
  },

  main__dialog__service__package: {
    width: '60vw !important',
    height: '80%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
      width: '90%',
    },
  },

  dialog__content__service_package: {
    height: '100%',
    background: '##f5f7f9',
    '& .dialog__content__inner': {
      height: '100%',
      // padding: '1rem',
    },
  },
  tableContainer__service__package: {
    height: 'calc(100% - 190px)',
    '& .MuiTableHead-root .MuiTableRow-root .MuiTableCell-root': {
      color: '#6D7D8B ',
    },

    overflowY: 'auto',
  },
  drop__down__w__100: {
    '& .search__dropdown': {
      width: '100%',
    },
  },
});
export default Style;
