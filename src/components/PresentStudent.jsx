import {useContext} from 'react'
import { StudentContext } from '../contexts/Student'

function PresentStudent() {
    const {
        student,
        dispatch
    } = useContext(StudentContext)
    console.log(student)
    return (
        <>
            <div style={{ 
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
                >Present Student List</h3>
                <ul style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        justifyContent: "space-between", 
                        flexDirection: "column" 
                    }}>
                    {student?.student.filter((value) => value.isPresent === true)?.map((student, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", padding: "10px" }}>
                            <span style={{ color: "#000", fontSize: "18px", marginRight: "8px", fontWeight: '600' }}>{student.name}</span>
                            <button onClick={() => dispatch({type:"TOGGLE_STUDENT",payload:{id:student.id}})}
                                style={{
                                    padding: "5px 8px 5px 8px", color: "#FFF", background: "red", borderRadius: '7px 7px', fontSize: '14px', fontWeight: "500"
                                }}
                            >Absent </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PresentStudent