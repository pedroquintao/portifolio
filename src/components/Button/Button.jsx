import styled from "styled-components";

const getLevels = (props) => {
  switch(props.$level) {
    case 2: 
      return `
        background-color: transparent;
        border: 1px solid white;
      `;
    case 3:
      return `
        background-color: transparent;
        border: none;
      `;
    default:
      return `
        background-color: ${props.$backgroundColor || props.theme.colors.orange};
      `;
  }
};

const ButtonStyle = styled.button`
  all: unset;
  margin: 0;
  padding: 0.5em 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  gap: 1em;
  border-radius: ${({ theme }) => theme.sizes.xs};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "none"};
  color: ${(props) => props.color || props.theme.colors.white};
  ${(props) => { return getLevels(props)}};

  > * {
    margin: 0
  }
`;

function Button({ height, width, color, $backgroundColor, $level, children }) {
    
  return (
    <ButtonStyle
      height={height}
      width={width}
      color={color}
      $backgroundColor={$backgroundColor}
      $level={$level}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
