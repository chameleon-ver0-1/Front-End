import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import download_off from "../../../../assets/doc/download_off.png";
import "./conferencedocdetail.style.css";

const pxToMm = px => {
  return Math.floor(px / document.getElementById("myMm").offsetHeight);
};

const mmToPx = mm => {
  return document.getElementById("myMm").offsetHeight * mm;
};

const range = (start, end) => {
  return Array(end - start)
    .join(0)
    .split(0)
    .map(function(val, id) {
      return id + start;
    });
};

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
        const inputHeightMm = pxToMm(input.offsetHeight);
        const a4WidthMm = 250;
        const a4HeightMm = 297;
        const a4HeightPx = mmToPx(a4HeightMm);
        const numPages =
          inputHeightMm <= a4HeightMm
            ? 1
            : Math.floor(inputHeightMm / a4HeightMm) + 1;
        console.log({
          input,
          inputHeightMm,
          a4HeightMm,
          a4HeightPx,
          numPages,
          range: range(0, numPages),
          comp: inputHeightMm <= a4HeightMm,
          inputHeightPx: input.offsetHeight
        });

        html2canvas(input).then(canvas => {
          const imgData = canvas.toDataURL("image/png");

          // Document of a4WidthMm wide and inputHeightMm high
          if (inputHeightMm > a4HeightMm) {
            // elongated a4 (system print dialog will handle page breaks)
            const pdf = new jsPDF("p", "mm", "a4");
          } else {
            // standard a4
            const pdf = new jsPDF("p", "mm", "a4");
          }
          const pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 0, 0);
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
