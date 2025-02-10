import express from 'express';
import payrollRoutes from './routes/payrollRoutes.js'
import cors from 'cors'
// Load environment variables


const app = express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
    })
    
app.use('/payroll',payrollRoutes);


// return information

// allows project to be an API
// app.listen(PORT,()=> {
//     console.log ('http://localhost:' + PORT)
//     console.log ('Server is running...')
// });


// import express from 'express'
// import mysql from 'mysql2/promise'
// import {config} from 'dotenv'
// config ()
// import cors from 'cors'
// import payrollRoutes from './.js'
// import { getAttendance } from './model/attendanceModel.js'
// const app = express();
// const port =process.env.port || 5005;
// app.use(cors());
// app.use(express.json());
// //Middleware
// app.use('/attendance',attendanceRouter)
// app.get('/attendance',async (req,res)=>{
//     res.json({attendance: await getAttendance()})
// });
// app.listen(port,()=> {
//     console.log(`http://localhost:${port}`);
// })
// // export {pool}






