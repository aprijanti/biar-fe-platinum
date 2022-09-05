import styled from "@emotion/styled";

const StyleButton = styled.button`
  border: none;
  border-radius: 2px;
  background: #5CB85F;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 36px;
  padding: 8px 8px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
function Button(props){
  return(
      <StyleButton onClick={() => props.klikLogOut()}>{props.text}</StyleButton>
    )
}

export default Button;