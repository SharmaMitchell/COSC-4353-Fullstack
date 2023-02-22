import { Snackbar, Alert } from "@mui/material";

export const UserAlert = (props) => {
    // const [open, setOpen] = useState(false);
    const { open, setOpen, message, severity } = props;
    const handleClose = () => {
        setOpen(false);
    };
    return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert elevation={6} severity={severity} onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    );
}