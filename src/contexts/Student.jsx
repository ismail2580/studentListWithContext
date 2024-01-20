import { createContext, useState, useReducer } from "react";
import { students } from '../data/data';


export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {

    const initializerValue = {
        student: students,
        studentName: "",
        editMode: false,
        editableStudent: null,

    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "CREATE_STUDENT":
                {
                    if (!state.studentName) {
                        alert("Please enter a student name");
                    }
                    const newStudent = {
                        id: students.length + 1,
                        name: state?.studentName,
                        age: 19
                    };
                    console.log(newStudent);
                    return {
                        ...state,
                        student: [...state.student, newStudent],
                        studentName: ""
                    }
                }

            case "UPDATE_STUDENT": {
                return {
                    ...state,
                    student: state.student.map((item) => {
                        if (item.id == state?.editableStudent?.id) {
                            item.studentName = action.payload;
                        }
                        return item
                    })
                }
            };
            case "EDIT_STUDENT": {
                const toBeEdidtedStudent = state.student.find((item) => item.id === action.payload.id);
                console.log("state.student",  action.payload.id);
                return {
                    ...state,
                    editMode: true,
                    editableStudent: toBeEdidtedStudent,
                    studentName: toBeEdidtedStudent
                }
            }
            case "REMOVE_STUDENT": {
                const deletedStudent = state.student.filter((item) => item.id !== action.payload.id)
                return {
                    student: deletedStudent
                }
            };
            case "PRESENT_STUDENT": {
                const newStudent = state.student.map(item => {
                    if (item.id === action.payload.id) {
                        if (item.isPresent === undefined) {
                            item.isPresent = true;
                        } else if (item.isPresent === true) {
                            alert("This student is already in present list")
                        } else if (item.isPresent === false) {
                            alert("Please Click Present")
                        }
                    }
                    return item
                }
                )
                return {
                    student: newStudent
                }
            };
            case "ABSENT_STUDENT": {
                const newStudent = state.student.map(item => {
                    if (item.id === action.payload.id) {
                        if (item.isPresent === undefined) {
                            item.isPresent = false;
                        } else if (item.isPresent === false) {
                            alert("This student is already in absent list")
                        } else if (item.isPresent === true) {
                            alert("Please Click Absent ")
                        }
                    }
                    return item
                }
                )
                return {
                    student: newStudent
                }
            };
            case "TOGGLE_STUDENT": {
                const newStudent = state.student?.map(item => {
                    if (item.id === action.payload.id) {
                        item.isPresent ? item.isPresent = false : item.isPresent = true;
                    }
                    return item
                })
                console.log("newStudent from toggle: " + newStudent);
                return {
                    student: newStudent
                }
            };
            case "CHANGE_STUDENT_NAME": {
                return{
                    ...state,
                    studentName: action.payload.title
                }
            }
            default: {
                return state;
            }


        }
    }
    const [student, dispatch] = useReducer(reducer, initializerValue)
    console.log(student);
    return (
        <StudentContext.Provider value={{
            student,
            dispatch
        }}>
            {children}
        </StudentContext.Provider>
    )
}
export default StudentContextProvider