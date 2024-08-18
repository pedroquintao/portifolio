import styled from "styled-components";

const sizingHandler = (props) => {
  return {
    size: props.size && `font-size: ${props.size}px`,
    weight: props.weight && `font-weight: ${props.weight};`
  };
};

const TypographyStyle = styled(({ tag: Tag, ...props }) => <Tag {...props} />)`
  color: ${({ color, theme }) => color || theme.colors.gray};
  ${(props) => sizingHandler(props).size};
  ${(props) => sizingHandler(props).weight};
  margin-top: 0;
  margin-bottom: 0;
`;

function Typography({ tag = "p", color, size, weight, children }) {
  return (
    <TypographyStyle tag={tag} color={color} size={size} weight={weight}>
      {children}
    </TypographyStyle>
  );
}

export default Typography;
