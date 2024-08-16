import styled from "styled-components";

const levels = [
    { 
        backgroundColor: "${(props) => props.$backgroundcolor}"
    },
    {
        backgroundColor: "transparent",
        border: "1px solid red"
    }
    ,
    {
        backgroundColor: "transparent",
        border: "none"
    }
];

const ButtonStyle = styled.button`
  all: unset; /* Removendo 'none' para evitar reset excessivo */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  border-radius: ${({ theme }) => theme.sizes.xs};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => levels[props.$level].backgroundColor};
  border: ${(props) => levels[props.$level].border};
`;

function Button({ height, width, color, $backgroundcolor, $level, children }) {
    console.log(levels[$level].backgroundColor)
    console.log(ButtonStyle.componentStyle)
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
