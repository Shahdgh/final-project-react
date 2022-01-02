import { Col, Row,Image } from "react-bootstrap";
import HospitalsContext from "../utils/HospitalsContext";
import { useContext } from "react"
import styles from "./EmployeeInformation.module.css"
function EmployeeInformation() {
    const { profileEmployee } = useContext(HospitalsContext)
    return ( <>
    <div className={styles.background}>
        
        <Row xs={1} md={3} style={{}}>
          <Col>
            <Image src={profileEmployee.avatar} height="250px" className={styles.imageprofile} />
          </Col>
          <Col>
            <div className={styles.information}>
              <h2>
                {profileEmployee.firstName} {profileEmployee.lastName}
              </h2>
              <p>{profileEmployee.email}</p>
            </div>
          </Col>
        </Row>
     
    </div>
    </> );
}

export default EmployeeInformation;
