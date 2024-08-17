import styled from "styled-components";

const getLevels = (props) => {
  switch(props.$level) {
    case 2: 
      return `
        background-color: transparent;
        border: 1px solid white
      `;
    case 3:
      return `
        background-color: transparent;
        border: none;
      `;
    default:
      return `
        background-color: ${props.$backgroundcolor || props.theme.colors.orange}
      `;
  }
};

const ButtonStyle = styled.button`
  all: unset;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  
  border-radius: ${({ theme }) => theme.sizes.xs};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "none"};
  color: ${(props) => props.color || props.theme.colors.white};
  ${(props) => {getLevels(props)}};

  > * {
    margin: 0
  }
`;

function Button({ height, width, color, $backgroundcolor, $level, children }) {
  return (
    <ButtonStyle
      height={height}
      width={width}
      color={color}
      $backgroundcolor={$backgroundcolor}
      $level={$level}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
