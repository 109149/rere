import React from "react";
import styled from "styled-components";

const Div = styled.div`
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  &:hover {
    svg {
      fill: rgb(235, 25, 110);
      transform: scale(1.5);
    }
  }

  div {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:before {
      transform: scale(0);
    }
  }

  div:before {
    content: "";
    width: 44px;
    height: 44px;
    display: block;
    border-radius: 100%;
    background: linear-gradient(45deg, #ff003c, #c648c8);
    box-shadow: 1px 1px 12px rgba(235, 25, 110, 1);
    transition: all 265ms ease-out;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  svg {
    z-index: 1;
    fill: ${(props) => props._fill};
    transition: all 265ms ease-out;
  }
`;

const Nodejs = ({ fill = "#3c873a", width = "24px", height = "24px" }) => {
  return (
    <Div>
      <a href="https://nodejs.org" target="_blank" rel="noreferrer">
        <div>
          <svg width={width} height={height} viewBox="0 0 266 300" fill={fill}>
            <g id="g1056">
              <path
                d="m 126,298.30461 c -2.79156,-1.00031 -44,-25.74152 -44,-26.41724 0,-0.36881 1.2375,-0.97183 2.75,-1.34005 1.5125,-0.36823 6.013005,-2.27088 10.001123,-4.22812 l 7.251127,-3.55861 15.44834,9.20995 c 8.49659,5.06548 15.80858,9.01506 16.24888,8.77686 0.44029,-0.2382 25.89122,-14.95817 56.55763,-32.71104 l 55.7571,-32.27794 -0.2571,-66.098 -0.2571,-66.098011 -14,-8.10702 C 157.98878,32.887035 133.6637,19.012041 132.66792,19.081692 132.02557,19.126622 106.525,33.641579 76,51.337151 l -55.5,32.173767 -0.257105,66.142352 -0.257105,66.14236 14.881379,8.59479 c 18.916384,10.92522 22.584792,12.56065 28.234948,12.58762 5.110247,0.0244 9.773142,-2.534 13.305935,-7.30056 2.065556,-2.78692 2.09554,-3.65064 2.376693,-68.46246 0.2176,-50.16156 0.571311,-65.822031 1.5,-66.412164 1.615802,-1.026757 14.867015,-0.993199 16.498112,0.04178 1.028154,0.652394 1.226698,14.597084 1,70.234684 L 97.5,234.5 94.689051,240.22425 C 89.198027,251.40623 80.259896,256.23939 65.163398,256.18981 54.625391,256.1552 50.18201,254.63658 33.5,245.36819 11.093758,232.91946 7.7239776,230.6053 4.5,225.45276 l -3,-4.79458 -0.279679,-69.07909 C 0.90855129,74.573791 0.66293203,77.60857 7.7582945,70.798371 12.790918,65.96801 122.598,2.3818233 128.45285,0.90755458 134.13792,-0.52396133 140.17396,0.82494809 148,5.2758723 198.08784,33.762447 257.15428,68.764004 259.70283,71.468671 c 6.38929,6.78066 6.3964,6.875569 6.08108,81.153869 -0.28165,66.34422 -0.30112,66.90935 -2.44233,70.87746 -1.18713,2.2 -3.43713,5.16746 -5,6.59436 -2.9651,2.70714 -109.91207,64.99258 -115.86869,67.48141 -3.29801,1.378 -13.41241,1.82551 -16.47289,0.72884 z m 22.5,-87.70925 C 124.78283,206.62644 113.09324,196.72662 110.08777,178.06435 108.69197,169.39727 109.1248,169 119.96331,169 h 8.71843 l 1.1886,5.31124 c 2.33265,10.42334 8.20639,15.47243 20.695,17.78946 7.27094,1.34899 32.35716,0.62754 37.91211,-1.09031 10.55783,-3.26495 16.08578,-16.44716 9.61192,-22.92102 -3.0972,-3.0972 -12.35725,-5.94176 -24.79565,-7.6169 -33.38007,-4.49545 -40.50366,-6.18916 -48.60751,-11.55692 -8.80632,-5.83307 -12.72537,-16.60106 -10.62574,-29.19533 2.03195,-12.1883 10.35607,-20.874697 24.63183,-25.703822 5.46426,-1.848422 9.69014,-2.396894 21.41408,-2.779307 23.43519,-0.764411 37.4766,3.096492 47.06745,12.941929 5.54895,5.69624 9.00192,13.89205 9.19337,21.82098 l 0.1328,5.5 -8.75368,0.28899 c -8.32403,0.2748 -8.79721,0.17664 -9.64072,-2 -4.73674,-12.22293 -7.56961,-15.42548 -16.26434,-18.3868 -6.37409,-2.17094 -27.84219,-2.55238 -34.44022,-0.61193 -9.40582,2.76621 -14.37993,9.17828 -12.96613,16.71448 1.22959,6.55426 7.16339,8.58618 37.93723,12.9909 39.75532,5.69026 49.47286,12.88386 48.44989,35.866 -0.34546,7.76121 -0.84767,9.94593 -3.33254,14.49716 -4.98904,9.13782 -14.1997,15.36201 -27.66573,18.69538 -8.70327,2.1544 -31.27326,2.72306 -41.32376,1.04118 z"
                id="path1060"
              />
            </g>
          </svg>
        </div>
      </a>
    </Div>
  );
};

export default Nodejs;
