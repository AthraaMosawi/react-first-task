
function StudentsList(){
    let stu = ["Rusul", "Ula", "Sarah", "Yasmin"];
    let result = stu.map((st) =>
    <div>
        <li><p>{st}</p>
        <button onClick={() => alert(st + ' is here!')}>call {st}</button>
        </li>
    </div>
    );
    return(<ul>{result}</ul>);
}



export default StudentsList;