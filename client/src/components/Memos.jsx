import { useState, useEffect } from "react";
import "./Memos.css"
const Memos = ({ state }) => {
	const [memos, setMemos] = useState([]);
	const { contract } = state;
	useEffect(() => {
		const memosMessage = async () => {
			const memos = await contract.getMemos();
			setMemos(memos)
			//console.log(memos)
		}
		contract && memosMessage()
	}, [contract])
	return (
		<div className="container-fluid">
			<h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>
			<table className="table">
				<tbody>
					{memos.map((memo) => {
						return (
							<tr className="tr" key={memo.name}>
								<td	className="td" style={{width: "100px"}}>
									{memo.name}
								</td>
								<td className="td" style={{width: "800px"}}>
									{new Date(memo.timestamp * 1000).toLocaleString()}
								</td>
								<td className="td" style={{width: "300px"}}>
									{memo.message}
								</td>
								<td className="td" style={{width: "400px"}}>
									{memo.from}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default Memos;