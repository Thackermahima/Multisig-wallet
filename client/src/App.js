import React, { useEffect, useState } from "react";
import { getWeb3, getWallet } from "./Utils";
import Header from "./Header";
import NewTransfer from "./NewTransfer";
import TransferList from "./TransferList";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Stack,
  LinearProgress,
} from "@mui/material";
function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);


  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);

  
  const createTransfer = async (transfer) => {
  
    await wallet.methods
       .createTransfer(transfer.amount, transfer.to)
      .send({ from: accounts[0] });
      const transfers = await wallet.methods.getTransfers().call();
      setTransfers(transfers);
          
  };
  const approveTransfer = async (transferId) => {

   await wallet.methods
    .approveTransfer(transferId)
    .send({ from: accounts[0] });
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  };

  if (
    typeof web3 === "undefined" ||
    typeof accounts === "undefined" ||
    typeof wallet === "undefined" ||
    approvers.length === 0 ||
    typeof quorum === "undefined"
  ) {
    return (
      <div>
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      </div>
    );
  }
  return (
    <div>
      <Box>
        <AppBar
          position="static"
          style={{ background: "#AC7D88", alignItems: "center" }}
        >
          <Toolbar>
            <AccountBalanceWalletIcon fontSize="large" />
            <Typography
              align="center"
              variant="h4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Multisig Wallet
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer} />
    </div>
  );
}

export default App;
