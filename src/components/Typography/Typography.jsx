import styled from "styled-components";

const sizeHandler = (props) => {
    const styles = props.size && `font-size: ${props.size};`;
    return styles;
};

const TypographyStyle = styled(({ tag: Tag, ...props }) => <Tag {...props} />)`
  color: ${({ color, theme }) => color || theme.colors.gray};
  ${(props) => sizeHandler(props)}
`;

function Typography({ tag = "h1", color, size, weight, children }) {
  return (
    <TypographyStyle tag={tag} color={color} size={size} weight={weight}>
      {children}
    </TypographyStyle>
  );
}

export default Typography;
