// import {
//   Box,
//   Paper,
//   TableContainer,
//   Table as MuiTable,
//   TableBody,
//   TableRow,
//   TableCell,
//   Checkbox,
// } from "@mui/material";

// import TableActions from "./TableActions";
// import TableToolbar from "./TableToolbar";
// import TableHead from "./TableHead";
// import React from "react";
// import { TableHeadCell } from "./types";

// export interface TableProps {
//   headCells: TableHeadCell[];
//   data: Model[];
// }

// export default function Table({ data, headCells }: TableProps) {
//   const [selected, setSelected] = React.useState<readonly number[]>([]);
//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelected = data.map((n) => (n as any).id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   return (
//     <Box>
//       {/* ACTIONS */}
//       <TableActions />
//       <Paper sx={{ width: "100%" }}>
//         {/* TABLE_SEARCH_FILTERS */}
//         <TableToolbar numSelected={selected.length} />

//         {/* TABLE */}
//         <TableContainer>
//           <MuiTable
//             sx={{ minWidth: 750 }}
//             aria-labelledby="users-table"
//             size={"medium"}
//           >
//             {/* TABLE_HEAD */}
//             <TableHead<Model>
//               numSelected={selected.length}
//               onSelectAllClick={handleSelectAllClick}
//               // order={order}
//               // orderBy={orderBy}
//               // onRequestSort={handleRequestSort}
//               rowCount={data.length}
//               headCells={headCells}
//             />
//             <TableBody<Model>>
//               {data.map((row, index) => {
//                 const isItemSelected = isSelected(+row.id);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     // onClick={() => handleClick(+row.id)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.id}
//                     selected={isItemSelected}
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           "aria-labelledby": labelId,
//                         }}
//                         // onChange={() => handleClick(+row.id)}
//                       />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.id}
//                     </TableCell>
//                     <TableCell align="center">{row.username}</TableCell>
//                     <TableCell align="center">{row.email}</TableCell>
//                     <TableCell align="center">{row.status}</TableCell>
//                     <TableCell align="center">{row.type}</TableCell>
//                     <TableCell align="center">{row.created_at}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: 53 * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//             {/* TABLE_BODY */}
//           </MuiTable>
//         </TableContainer>

//         {/* TABLE_PAGINATION */}
//       </Paper>
//     </Box>
//   );
// }
