import React from 'react';
import { makeStyles } from '@mui/styles';
import { Skeleton, TableCell, TableRow } from '@mui/material';

const useStyles = makeStyles({
  tableCell: {
    padding: '30px 25px',
  },
});
const ListingLoader = ({ rowsLength }) => {
  const classes = useStyles();
  rowsLength = Array(rowsLength).fill('');
  const mapCount = Array(10).fill('');
  return (
    <>
      {mapCount.map((k, i) => {
        return (
          <TableRow key={i++}>
            {rowsLength?.map((m, index) => {
              return (
                <TableCell className={classes.tableCell} key={index++}>
                  <Skeleton
                    animation='wave'
                    height={20}
                    width='80%'
                    style={{ marginBottom: 6 }}
                  />
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
};

export default ListingLoader;
