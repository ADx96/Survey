import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <span className="footer">Kuwait - Ardiya Industrial Area Direct</span>
      <br />
      <span style={{ fontSize: "20px" }}>
        Direct & WhatsApp :
        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
          00965 22204506 – Cell : 00965 99728823
        </span>
      </span>
      <br />
      <a className="footer" href="http://info@mastersolutions-kw.com">
        info@mastersolutions-kw.com
      </a>
    </div>
  );
};

export default Footer;
