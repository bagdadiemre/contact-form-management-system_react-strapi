import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../services/authApi";
import MessagesPaginatedTable from "../components/MessagesPaginatedPage/MessagesPaginatedTable";
import { Container } from "@mui/material";

const MessagesPage = () => {
  const navigate = useNavigate();
  const { context, setContext } = useContext(AuthContext);
  useEffect(() => {
    const handleCheckLogin = async () => {
      try {
        const data = await checkLogin();
        setContext(data.data.user);
      } catch (error) {
        console.error("Check Login failed:", error);
        console.log(context);
        navigate("/unauthorized");
      }
    };

    handleCheckLogin();
  }, []);

  return (
    <div>
      <Container>
        <MessagesPaginatedTable />
      </Container>
    </div>
  );
};

export default MessagesPage;
