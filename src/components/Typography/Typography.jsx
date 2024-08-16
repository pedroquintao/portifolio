import styled from "styled-components";

const TypographyStyle = styled(({tag: Tag, ...props}) => <Tag {...props} />)`
    color: ${({color, theme}) => color || theme.colors.gray};
`

function Typography({tag = "h1", color, children}) {

    return<TypographyStyle tag={tag} color={color}>{ children }</TypographyStyle>
}

export default Typography;