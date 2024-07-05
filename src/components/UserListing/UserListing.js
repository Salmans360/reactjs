// CardGrid.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const CardGrid = () => {
  return (
    <Grid container spacing={2} px={2}>
      {/* Repeat the following Card component four times */}
      {[
        1, 2, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
      ].map(() => {
        return (
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Card Title
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Card Content
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}

      {/* Repeat the above Card component three more times */}
    </Grid>
  );
};

export default CardGrid;

// import React from 'react';

// import { makeStyles } from '@mui/styles';
// import { Stack, Typography } from '@mui/material';

// import Style from './style';
// // import {
// //   LowStockIcon,
// //   OutOfStockIcon,
// //   ProductsIcon,
// //   StockValueIcon,
// // } from '../../../assets/constants';

// const Styles = makeStyles((theme) => Style(theme));

// export default function StockCount({
//   totalStockvalue,
//   totalLowStock,
//   totalOutOfStock,
//   totalQuantity,
// }) {
//   const items = [
//     {
//       icon: '',
//       title: 'Total Products ',
//       count: totalQuantity,
//     },
//     {
//       icon: '',
//       title: 'Total Stock Value',
//       count: `$${totalStockvalue}`,
//     },
//     {
//       icon: '',
//       title: 'Low Stock Products',
//       count: ` ${totalLowStock}`,
//     },
//     {
//       icon: '',
//       title: 'Out of Stock Products',
//       count: totalOutOfStock,
//     },
//     {
//       icon: '',
//       title: 'Total Products ',
//       count: totalQuantity,
//     },
//     {
//       icon: '',
//       title: 'Total Stock Value',
//       count: `$${totalStockvalue}`,
//     },
//     {
//       icon: '',
//       title: 'Low Stock Products',
//       count: ` ${totalLowStock}`,
//     },
//     {
//       icon: '',
//       title: 'Out of Stock Products',
//       count: totalOutOfStock,
//     },
//     {
//       icon: '',
//       title: 'Total Products ',
//       count: totalQuantity,
//     },
//     {
//       icon: '',
//       title: 'Total Stock Value',
//       count: `$${totalStockvalue}`,
//     },
//     {
//       icon: '',
//       title: 'Low Stock Products',
//       count: ` ${totalLowStock}`,
//     },
//     {
//       icon: '',
//       title: 'Out of Stock Products',
//       count: totalOutOfStock,
//     },
//   ];

//   const classes = Styles();
//   return (
//     <Stack direction='row' spacing={1.7}>
//       {items.map((item, index) => {
//         return (
//           <Stack
//             direction='column'
//             spacing={1}
//             className={classes.stock__counter}
//             key={index++}
//           >
//             <h1>{item.icon}</h1>
//             <Typography variant='labelSmall' color='disabled.light'>
//               {item.title}
//             </Typography>
//             <Typography
//               variant='listText'
//               color='disabled.hot'
//               sx={{ fontWeight: '600', lineHeight: '15px' }}
//             >
//               {item.count}
//             </Typography>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }
