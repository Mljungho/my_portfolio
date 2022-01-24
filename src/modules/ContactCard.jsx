import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function FormPropsTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ padding: "20px 0" }}>

      <div>
        <TextField
          required
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name..."
        />
      </div>

      <div>
        <TextField
          required
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email..."
        />
      </div>

      <div>
        <TextField
          name="message"
          value={message}
          onChange={this.handleChange}
          placeholder="Message"
          multiline
        />
      </div>

      <p>
        <button type="submit">Send</button>
      </p>
    </Box>
  );
}



 // From Class component to Functional.

{/* <div
  style={{
    background: "grey",
  }}
>
  <form onSubmit={this.handleSubmit} netlify name="contact">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>
        Your Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
      </label>
    </p>
    <p>
      <label>
        Your Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
      </label>
    </p>
    <p>
      <label>
        Your message:
        <br />
        <textarea
          name="message"
          value={message}
          onChange={this.handleChange}
          rows="4"
          cols="50"
          padding="50px"
        />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</div>; */}
