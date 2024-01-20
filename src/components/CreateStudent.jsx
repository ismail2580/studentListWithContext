import { useContext } from 'react'
import { StudentContext } from '../contexts/Student';

function CreateStudent() {
    const {
        student,
        dispatch
    } = useContext(StudentContext)

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                student.editMode ? dispatch({ type: "UPDATE_STUDENT", payload: student.studentName }) : dispatch({ type: "CREATE_STUDENT" })
            }} style={{ margin: "20px" }}>
                <input 
                style={{ 
                    padding: "5px 10px 5px 10px", 
                    border: "1px solid #645f5f" 
                }} placeholder='Enter a Name' type="text" value={student.studentName} onChange={(e) => dispatch({type:"CHANGE_STUDENT_NAME", payload:{title: e.target.value}})} />
                <button
                    style={{
                        color: "#000",
                        backgroundColor: "#fff",
                        border: '2px solid gray',
                        margin: "5px",
                        padding: "5px 10px 5px 10px",
                        '--hover-opacity': 0.5
                    }} type='submit' onClick={(e) => {
                        e.preventDefault();
                        student.editMode ? dispatch({ type: "UPDATE_STUDENT", payload: e.target.value }) : dispatch({ type: "CREATE_STUDENT" })
                    }
                    }>{student.editMode ? "Update Student" : "Add Student"}</button>
            </form >
        </>
    )
}

export default CreateStudent