import { useContext } from 'react'
import { StudentContext } from '../contexts/Student';
function AllStudent() {
    const {
        student,
        dispatch
    } = useContext(StudentContext)
    console.log("student.student: " ,student.student );
    return (
        <>
            <div
                style={{
                    border: "1px solid #000",
                    padding: "20px 50px 20px 50px"
                }}>
                <h3
                    style={{
                        color: '#1d1d1de6',
                        fontSize: '24px',
                        fontWeight: 'bolder',
                        marginBottom: '10px'
                    }}
                >All Student List</h3>
                <ul style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: "space-between",
                    flexDirection: "column"
                }}>
                    {student.student.map((item, i) => (
                        <li key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "space-between",
                            padding: "10px"
                        }}>
                            <span style={{
                                color: "#000",
                                fontSize: "18px",
                                marginRight: "8px",
                                fontWeight: '600'
                            }}>{item.name}</span>
                            <button onClick={() => dispatch({type:"EDIT_STUDENT",payload:{ id:student.id}})} style={{
                                padding: "5px 8px 5px 8px",
                                color: "#fff",
                                background: "#00d0ff",
                                borderRadius: '7px 7px',
                                fontSize: '14px',
                                fontWeight: "500",
                                margin: "5px"
                            }}>Edit</button>
                            <button onClick={() => dispatch({type:"REMOVE_STUDENT",payload:{id:student.id}})} style={{
                                padding: "5px 8px 5px 8px",
                                color: "#FFF",
                                background: "red",
                                borderRadius: '7px 7px',
                                fontSize: '14px',
                                fontWeight: "500",
                                margin: "5px"
                            }}>Delete</button>
                            <button onClick={() => dispatch({type:"PRESENT_STUDENT", payload:{id:student.id}})} style={{
                                padding: "5px 8px 5px 8px",
                                color: "#FFF",
                                background: "green",
                                borderRadius: '7px 7px',
                                fontSize: '14px',
                                ontWeight: "500",
                                margin: "5px"
                            }}>Present</button>
                            <button onClick={() => dispatch({type:"ABSENT_STUDENT", payload:{id:student.id}})} style={{
                                padding: "5px 8px 5px 8px",
                                color: "#FFF",
                                background: "blue",
                                borderRadius: '7px 7px',
                                fontSize: '14px',
                                fontWeight: "500",
                                margin: "5px"
                            }}>Absent</button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AllStudent