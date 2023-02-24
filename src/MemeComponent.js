import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function MemeComp(props) {
  const stepStyle = {
    "& .MuiStepLabel-root .MuiStepIcon-root": {
      color: "secondary.main",
    },
    "& .MuiStepLabel-root .MuiStepIcon-root.MuiStepIcon-active": {
      color: "primary.main",
    },
    "& .MuiStepLabel-label": {
      color: "black",
    },
  };

  return (
    <>
      <Box sx={{ height: 300, float: "left", marginRight: "30px" }}>
        <Stepper orientation="vertical" sx={{ float: "left" }}>
          <Step active={true} sx={stepStyle}>
            <StepLabel>
              {" "}
              <span> Select template </span>
            </StepLabel>
          </Step>
          <Step active={true} sx={stepStyle}>
            <StepLabel> Add texts</StepLabel>
            <div style={{ height: "50px" }}>
              <div
                style={{
                  borderLeft: "1px solid #ccc",
                  height: "100%",
                  marginLeft: "12px",
                }}
              ></div>
            </div>
          </Step>
          <Step active={true} sx={stepStyle}>
            <StepLabel> Position text</StepLabel>
            <div style={{ height: "40px" }}>
              <div
                style={{
                  borderLeft: "1px solid #ccc",
                  height: "100%",
                  marginLeft: "12px",
                }}
              ></div>
            </div>
          </Step>
          <Step active={true} sx={stepStyle}>
            <StepLabel> Download </StepLabel>
          </Step>
        </Stepper>
      </Box>
      <div className="meme-container">
        <div>
          <form className="meme-form">
            <Button
              variant="contained"
              size="small"
              onClick={props.imgSelector}
              sx={{ marginBottom: "25px", marginTop: "5px" }}
            >
              New template
            </Button>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Top Text:- </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="topText"
                      onChange={props.handleChange}
                      value={props.data.topText}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Bottom Text:- </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="bottomText"
                      onChange={props.handleChange}
                      value={props.data.bottomText}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </form>

          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Top Text(Horizontal):-</label>
                </td>
                <td>
                  <input
                    type="range"
                    /*min="100px"
            max="700px"*/
                    name="topStyle1"
                    onChange={props.sliderAlign}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Bottom Text(Horizontal):-</label>
                </td>
                <td>
                  <input
                    type="range"
                    /*min="100px"
            max="700px"*/
                    name="bottomStyle1"
                    onChange={props.sliderAlign}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Top Text(Vertical):-</label>
                </td>
                <td>
                  <input
                    type="range"
                    max="66"
                    name="topStyle1"
                    onChange={props.sliderAlignVertical}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Bottom Text(Vertical):-</label>
                </td>
                <td>
                  <input
                    type="range"
                    max="70"
                    name="bottomStyle1"
                    onChange={props.sliderAlignVertical}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button
            variant="contained"
            size="small"
            onClick={props.download}
            sx={{ marginTop: "30px" }}
          >
            Download Meme
          </Button>
        </div>
        <div className="meme">
          <svg
            id="svg_ref"
            height="500px"
            width="500px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <image
              xlinkHref={props.data.randomImg}
              height="500px"
              width="500px"
              preserveAspectRatio="none"
            />
            <text
              id="textStyle"
              x={props.data.topStyle1.left}
              y={props.data.topStyle1.top}
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {props.data.topText}
            </text>
            <text
              id="textStyle"
              dominantBaseline="middle"
              textAnchor="middle"
              x={props.data.bottomStyle1.left}
              y={props.data.bottomStyle1.bottom}
            >
              {props.data.bottomText}
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}

export default MemeComp;
