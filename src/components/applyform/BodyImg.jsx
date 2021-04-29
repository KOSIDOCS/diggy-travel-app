import React from 'react'

const BodyImg = () => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100vh"
          viewBox="0 0 960 1080"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="a"
              x2="1"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#4734e1" />
              <stop offset="1" stop-color="#8e27ea" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="0.088"
              y1="0.219"
              x2="0.924"
              y2="0.767"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#ee3d3d" />
              <stop offset="1" stop-color="#f26565" />
            </linearGradient>
          </defs>
          <path d="M0,0H906l54,208.8L858,810.4,960,1080H0Z" fill="url(#a)" />
        </svg>
    )
}

export default BodyImg
