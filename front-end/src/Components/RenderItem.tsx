interface RenderItemProps {
    condition: boolean,
    children: any
}
function RenderItem(props: RenderItemProps) {
    const { children, condition } = props;
    return condition ? children : null
}

export default RenderItem