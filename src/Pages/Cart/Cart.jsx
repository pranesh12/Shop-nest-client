import {
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Box,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

import Payment from "../Payment/Payment";

import { useDispatch, useSelector } from "react-redux";

import { green, red } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { addTocart, removeFromCart } from "../../redux/actions/cartAction";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const total = Math.floor(
    cartItems.reduce((acc, current) => acc + current.total, 0)
  );

  const dispatch = useDispatch();

  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography sx={{ marginBottom: 2 }} variant="h5">
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Remove Item</TableCell>
            </TableRow>
          </TableHead>
          {cartItems?.map((item) => {
            return (
              <TableBody key={item._id}>
                <TableRow>
                  <TableCell>
                    <Avatar alt={item.name} variant="square" src={item.img} />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box p={2}>{item.count}</Box>
                    </Box>
                  </TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>${Math.floor(item.total)}</TableCell>
                  <TableCell>
                    <DeleteOutlineIcon
                      style={{ color: red[600], cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(item._id))}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}

          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Total</TableCell>
              <TableCell>${total}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ marginTop: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Link to="/">
            <Button variant="contained">Continue Shopping</Button>
          </Link>

          <Box>
            <Payment total={total} itemOrder={cartItems}></Payment>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Cart;
