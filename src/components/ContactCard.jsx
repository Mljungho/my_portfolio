import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="name" label="Required" placeholder="Name..." />
      </div>

      <div>
        <TextField
          required
          id="email"
          label="Required"
          placeholder="Email..."
        />
      </div>

      <div>
        <TextField
          id="message"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </div>
    </Box>
  );
}
