import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box
      margin="auto"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      spacing={0}
      color={'secondary'}
      direction="column"
    >
      <CircularProgress />
    </Box>
  );
};

// export const Loader = () => {
//   return (
//     <Grid
// container
// spacing={0}
// color={'primary'}
// direction="column"
// alignItems="center"
// justifyContent="center"
//     >
//       <Puff
//         height="160"
//         width="160"
//         radius={1}
//         ariaLabel="puff-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />
//     </Grid>
//   );
// };
