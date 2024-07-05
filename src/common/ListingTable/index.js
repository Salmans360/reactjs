import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { makeStyles } from '@mui/styles';

import Style from './style';
import Button from '../../common/Button';
import ListingLoader from './ListingLoader';
import CircularProgressLoading from '../CircularProgress';

const Styles = makeStyles((theme) => Style(theme));

// ---------------------- Table Rows -----------------------------
const TabelRows = ({
  usedIn,
  tData,
  classes,
  handleActions,
  itemLoading = '',
}) => {
  switch (usedIn) {
    case 'userListing':
      return tData?.map((item, i) => {
        return (
          <TableRow key={item?.id} className={classes.table__body__row}>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.id || '-'}
              </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.name || '-'}
              </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.email || '-'}
              </Typography>
            </TableCell>

            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.phone || '-'}
              </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.roles?.name || '-'}
              </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item.createdAt?.split('T')[0] || '-'}
              </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tableCell}>
              <Typography variant='h6' sx={{ fontWeight: '400' }}>
                {item?.last_login?.split('T')[0] || '-'}
              </Typography>
            </TableCell>

            <TableCell className={classes.tableCell}>
              {item?.roCount || (
                <Button
                  title="RO's"
                  variant='contained'
                  color='primaryButton'
                  onClick={() => handleActions('getUserRos', item)}
                  disabled={itemLoading?.[item?.id]}
                />
              )}
            </TableCell>

            <TableCell className={classes.tableCell}>
              {item?.packageName || (
                <Button
                  title='Package'
                  variant='contained'
                  color='primaryButton'
                  onClick={() => handleActions('getUserPackage', item)}
                  disabled={itemLoading?.[item?.id]}
                />
              )}
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    title='Payment'
                    variant='contained'
                    color='primaryButton'
                    onClick={() => handleActions('addUserPayment', item)}
                    disabled={itemLoading?.[item?.id]}
                  />

                  <Button
                    title={item?.userStatus?.isBlocked ? 'Unblock' : 'Block'}
                    variant='contained'
                    color='primaryButton'
                    onClick={() => handleActions('blockUnblockUser', item)}
                    disabled={itemLoading?.[item?.id]}
                  />
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Button
                      title={
                        item?.publicApiKey
                          ? 'View Appointment'
                          : 'Create Appointment'
                      }
                      variant='contained'
                      color='primaryButton'
                      onClick={() =>
                        handleActions('createViewPublicApiKey', item)
                      }
                      disabled={itemLoading?.[item?.id]}
                    />
                    <span>
                      {itemLoading?.[item?.id] && (
                        <CircularProgressLoading size={10} />
                      )}
                    </span>
                  </Stack>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Button
                      title={'Activate'}
                      variant='contained'
                      color='primaryButton'
                      onClick={() => handleActions('activate', item)}
                      disabled={!item?.confirmEmail || itemLoading?.[item?.id]}
                    />
                    <span>
                      {itemLoading?.[item?.id] && (
                        <CircularProgressLoading size={10} />
                      )}
                    </span>
                  </Stack>
                  <Button
                    title={
                      item?.adminApproval === false ? 'Approve' : 'Disapprove'
                    }
                    variant='contained'
                    color='primaryButton'
                    onClick={() => handleActions('approveDisapproveUser', item)}
                    disabled={itemLoading?.[item?.id]}
                  />
                  <Button
                    title='Create Subscription'
                    variant='contained'
                    color='primaryButton'
                    onClick={() => handleActions('createSubscription', item)}
                    disabled={itemLoading?.[item?.id]}
                  />
                </AccordionDetails>
              </Accordion>
            </TableCell>
          </TableRow>
        );
      });
    default:
      break;
  }
};

const ListingTable = ({
  thead,
  tData,
  usedIn,
  loading,
  handleActions,
  itemLoading,
  page,
  handleChangePage,
  totalCount,
}) => {
  const classes = Styles();
  return (
    <>
      <TableContainer component='div' className={classes.table__container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead className={classes.headRoot}>
            <TableRow>
              {thead.map((head, i) => {
                return (
                  <TableCell className={classes.theadCell} key={i++}>
                    <Typography variant='h7' sx={{ fontWeight: '600' }}>
                      {head.label}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <ListingLoader rowsLength={thead.length} />
            ) : (
              <TabelRows
                usedIn={usedIn}
                tData={tData}
                classes={classes}
                handleActions={handleActions}
                itemLoading={itemLoading}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <TablePagination
          style={{
            width: '100%',
            display: 'contents',
          }}
          count={+totalCount || 0}
          rowsPerPageOptions={[10]}
          rowsPerPage={10}
          page={page}
          onPageChange={(e, page) => {
            handleChangePage(page);
          }}
        />
      </Box>
    </>
  );
};

export default ListingTable;
