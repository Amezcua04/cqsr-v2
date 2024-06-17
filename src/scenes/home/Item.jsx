import { Paper } from "@mui/material";

const Item = (props) => {
  return (
    <Paper>
      <img src={props.item.url} />
    </Paper>
  );
};

export default Item;
