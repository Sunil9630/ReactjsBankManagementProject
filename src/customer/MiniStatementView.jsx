
const MiniStatementView = (props) => {
    return (
        <>
            <tr>
                <td> {props.trnDate} </td>
                <td> {props.withdraAmt} </td>
                <td> {props.subAmt} </td>
            </tr>
        </>
    );
}


export default MiniStatementView;
