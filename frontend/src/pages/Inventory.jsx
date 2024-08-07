import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();

  const handleAddCards = () => {
    navigate("/addCards");
  };

  return (
    <>
      <h1>Welcome!</h1>
      <Button text="Add Cards" onClick={handleAddCards} />
      <LogoutButton />
      <Table />
    </>
  );
};

export default Inventory;
