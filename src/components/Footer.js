import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "10px", background: "#333", color: "white", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} Moringa Pathway. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
