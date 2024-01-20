import { useContext } from 'react';
import { StudentContext } from '../contexts/Student';
import CreateStudent from '../components/CreateStudent';
import AllStudent from '../components/AllStudent';
import PresentStudent from '../components/PresentStudent';
import AbsentStudent from '../components/AbsentStudent';

function Students() {
    
    const {student, setStudent} = useContext(StudentContext)

    // const toggleHandler = (id) => {
    //     const newStudent = student?.map(item => {
    //         if (item.id === id) {
    //             item.isPresent ? item.isPresent = false : item.isPresent = true;
    //         }
    //         return item
    //     })
    //     console.log("newStudent from toggle: " + newStudent);
    //     setStudent(newStudent);
    // }


    return (
        <div>
            <CreateStudent/>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
                <AllStudent />
                <PresentStudent />
                <AbsentStudent />
            </div>
        </div>
    )
}

export default Students