import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import "./SignLogin.css"
function SignLogin() {
  const { signCompanion, loginCompanion } = useContext(HospitalsContext)
  return (
    <Row>
      <Col  sm={6}>
        <div class="containerr">
          <div class="screenn">
            <div class="screen__content">
              <form class="login" onSubmit={signCompanion}>
                <h3 className="h3">Sign Up</h3>
                <div class="login__fielld">
                  <i class="login__icon fas fa-user"></i>
                  <input type="firstName" class="login__input" name="firstName" placeholder="First Name" />
                </div>
                <div class="login__field">
                  <i class="login__icon fas fa-user"></i>
                  <input type="lastName" class="login__input" name="lastName" placeholder="Last Name" />
                </div>

                <div class="login__fielld">
                  <i class="login__icon fas fa-user"></i>
                  <input type="url" class="login__input" name="avatar" placeholder="Avatar" />
                </div>
                <div class="login__fielld">
                  <i class="login__icon fas fa-user"></i>
                  <input type="text" class="login__input" name="patientFile" placeholder="File Number Patient" />
                </div>
                <div class="login__fielld">
                  <i class="login__icon fas fa-user"></i>
                  <input type="email" class="login__input" name="email" placeholder="Email" />
                </div>
                <div class="login__fielld">
                  <i class="login__icon fas fa-lock"></i>
                  <input type="password" class="login__input" name="password" placeholder="Password" />
                </div>
                <button type="submit" value="login" class="button login__submit">
                  <span class="button__text"> Sign Up Now</span>
                  <i class="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div class="screen__background">
              <span class="screen__background__shape screen__background__shape4"></span>
              <span class="screen__background__shape screen__background__shape3"></span>
              <span class="screen__background__shape screen__background__shape2"></span>
              <span class="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Col>

      <Col  sm={6}>
        <div class="containerr">
          <div class="screenn">
            <div class="screen__content">
              <form class="login" onSubmit={loginCompanion}>
                <h3 className="h3"> Login</h3>
                <div class="login__fielld">
                  <i class="login__icon fas fa-user"></i>
                  <input type="email" class="login__input" name="email" placeholder="Email" />
                </div>
                <div class="login__fielld">
                  <i class="login__icon fas fa-lock"></i>
                  <input type="password" class="login__input" name="password" placeholder="Password" />
                </div>
                <button type="submit" value="login" class="button login__submit">
                  <span class="button__text">Log In Now</span>
                  <i class="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div class="screen__background">
              <span class="screen__background__shape screen__background__shape4"></span>
              <span class="screen__background__shape screen__background__shape3"></span>
              <span class="screen__background__shape screen__background__shape2"></span>
              <span class="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default SignLogin
