import Navbar from "./components/Navbar"
import { Route, Routes, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import "./App.css"
import SectionOne from "./components/SectionOne"
import SignLogin from "./pages/SignLogin"
import PatientLogin from "./pages/PatientLogin"
import EmployeeLogin from "./pages/EmployeeLogin"

import Home from "./pages/Home"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import HospitalsContext from "./utils/HospitalsContext"
import Menu from "./pages/Menu"
import AllLogin from "./pages/AllLogin"
import DietitianLogin from "./pages/DietitianLogin"
import Meals from "./pages/Meals"
import ProfileEmplyee from "./pages/ProfileEmplyee"
import ProfileEmployee from "./pages/ProfileEmplyee"

// imoprt navigate

function App() {
  const [types, setTyps] = useState([])

  const [ingredients, setIngredients] = useState([])

  const [meals, setMeals] = useState([])
  const [profileEmployee, setProfileEmplyee] = useState([])
  const navigate = useNavigate()

  ///Get Ingredients
  const getIngredients = async () => {
    const response = await axios.get("http://localhost:5000/api/admin/ingredients")

    setIngredients(response.data)
    console.log(response.data)
  }

  /////Types
  const getTypes = async () => {
    const response = await axios.get("http://localhost:5000/api/types")

    setTyps(response.data)
    console.log(response)
  }

  const getMeals = async () => {
    const response = await axios.get("http://localhost:5000/api/meals")
    setMeals(response.data)
    console.log(response)
  }

  useEffect(() => {
    getIngredients()
    getTypes()
    getMeals()
    if (localStorage.tokenFood) {
    getProfileEmployee()
    }
  }, [])

  //////Employee Login
  const employeLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const employeeBody = {
        employeeId: form.elements.employeeId.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/employees/login`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenFood,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///profile Employee
 
  const getProfileEmployee = async (employeeId) => {
    try {
      const response = await axios.get( `http://localhost:5000/api/employees/profile${employeeId}`, {
        headers: {
          Authorization: localStorage.tokenFood,
        },
      })
      setProfileEmplyee(response.data)
    } catch (error) {
      console.log(error.response?.data)
    }
  }
  /////Patient Login
  const patientLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const patientBody = {
        fileNumber: form.elements.fileNumber.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/patients/login`, patientBody, {
        headers: {
          Authorization: localStorage.tokenFood,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////Dietitian LogiN
  const dietitianLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const dietitianBody = {
        employeeId: form.elements.employeeId.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/dietitians/login`, dietitianBody, {
        headers: {
          Authorization: localStorage.tokenFood,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  ///Sign Up Companion
  const signCompanion = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companionBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: form.elements.photo.value,
        patientFile: form.elements.patientFile.value,
      }
      await axios.post("http://localhost:5000/api/companions/signup", companionBody)
      console.log("sign up success")
      navigate("/companion-login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
/////Login Companion
  const loginCompanion = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companionBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/companions/login`, companionBody, {
        headers: {
          Authorization: localStorage.tokenFood,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

    /////////logout///////////
    const logout = () => {
      localStorage.removeItem("tokenFood")
       navigate("/")
    }
  ////////stor
  const store = {
    employeLogin,
    dietitianLogin,
    patientLogin,
    signCompanion, ///ماشتغل
    loginCompanion,
    logout,
    ////
    ingredients,
    types,
    meals,
    profileEmployee,
  }

  return (
    <>
      <HospitalsContext.Provider value={store}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meals" element={<Meals />} />
        
          <Route path="/all-login" element={<AllLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/companion-login" element={<SignLogin />} />
          <Route path="/dietitian-login" element={<DietitianLogin />} />
          <Route path="/patient-login" element={<PatientLogin />} />

          <Route path="/profile-employee" element={<ProfileEmployee />} />




        </Routes>
      </HospitalsContext.Provider>
    </>
  )
}

export default App
