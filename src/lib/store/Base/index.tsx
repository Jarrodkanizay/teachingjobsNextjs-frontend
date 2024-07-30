import axios from 'axios';

// alert(process.env.NEXT_PUBLIC_DEPLOY_MODE);
// console.log(
//   'process.env.NEXT_PUBLIC_DEPLOY_MODE=========================',
//   process.env.NEXT_PUBLIC_DEPLOY_MODE
// );

export const baseURL =
  process.env.NEXT_PUBLIC_DEPLOY_MODE === 'development'
    ? 'http://localhost:3500/api'
    : 'https://api3.sciencejobs.com.au/api';//'http://localhost:3500/api'// 'https://api2.sciencejobs.com.au/api'; // //'https://api2.sciencejobs.com.au/api' //

export const BaseApi = axios.create({
  baseURL,
});


