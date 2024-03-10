// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { Form } from './Form';
// import { useState } from 'react';

// type Budget = {
//   source: string;
//   amount: number;
//   date: string;
// };
// type BudgetWrapperProps = {
//   label: string;
// };

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   /**---------------------------------------- */
//   const [budgets, setBudgets] = useState<Budget[]>([]);

//   const [source, setSource] = useState('');
//   const [amount, setAmount] = useState(0);
//   const [date, setDate] = useState('');
//   console.log(budgets);
//   // create  a variable called total income , total expense
//   const [totalBudget, setTotalIncome] = useState(0);
//   // const [totalExpense, setTotalExpense] = useState(0);

//   const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSource(value);
//   };
//   const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value);
//     setAmount(value);
//   };
//   const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setDate(value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     const newBudget = {
//       source: source,
//       amount: amount,
//       date: date,
//     };

//     setBudgets([...budgets, newBudget]);
//     setTotalIncome(totalBudget + newBudget.amount);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries((formData as any).entries());
//             const email = formJson.email;
//             console.log(email);
//             handleClose();
//           },
//         }}
//       >
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here.
//             We will send updates occasionally.
//           </DialogContentText>
//           <Form
//             label="hi"
//             handleChangeSource={handleChangeSource}
//             handleChangeAmount={handleChangeAmount}
//             // handleChangeDate={handleChangeDate}
//             handleSubmit={handleSubmit}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit" onClick={handleSubmit}>
//             ADD
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
