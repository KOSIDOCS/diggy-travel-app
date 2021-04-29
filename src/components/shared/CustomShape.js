import styled from "styled-components"

const CustomShape = styled.div`
  position: fixed;
  top: ${(props) => props.top && props.top};
  bottom: ${(props) => props.bottom && props.bottom};
  right: ${(props) => props.right && props.right};
  left: ${(props) => props.left && props.left};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  transform: ${(props) => props.rotatez && `rotateZ(${props.rotatez})`};
  background: ${(props) => props.img && `url("${props.img}")`} no-repeat center;
  background-size: contain;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "-1")};
`;

export default CustomShape;