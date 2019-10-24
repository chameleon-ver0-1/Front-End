import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import download_off from "../../../../assets/doc/download_off.png";
import "./conferencedocdetail.style.css";

const PrintButton = ({ id, label }) => (
  <div className="tc mb4 mt2">
    {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
    <div id="myMm" style={{ height: "1mm" }} />

    <div
      className="sum-div"
      onClick={() => {
        const input = document.getElementById(id);

        html2canvas(input).then(canvas => {
          const imgData = canvas.toDataURL("image/png");

          const pdf = new jsPDF("p", "mm", [canvas.width, canvas.height]);

          pdf.addImage(imgData, "PNG", 10, 3, imgData.width, imgData.height);
          pdf.save(`${id}.pdf`);
        });
      }}
    >
      <button className="save_button1">
        <img src={download_off} className="downloadimg" />
        {label}
      </button>
    </div>
  </div>
);

export default PrintButton;
