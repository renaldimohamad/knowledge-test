import {
   Alert,
   Button,
   Col,
   Container,
   FormSelect,
   FormText,
   Image,
   Row,
} from "react-bootstrap"
import {Link} from "react-router-dom"
import todoimg from "../../../assets/images/todo-photo.png"
import {Controller} from "react-hook-form"
import CustomInput from "../../../assets/common/custom-input"
import {useRegisterHook} from "../../../services/auth/register/use-register-hook"

export const Register = () => {
   const {control, handleSubmitForm, handleSubmit, errors, alert, setAlert} =
      useRegisterHook()

   return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
         <div>
            <Container
               fluid
               className="vh-100 d-flex align-items-center justify-content-center"
            >
               <Row className="vw-100 h-100 shadow-lg">
                  <Col
                     md={7}
                     className="h-100 d-flex align-items-center justify-content-center"
                  >
                     <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-3">
                           <h5 className="text-center fw-bold ">
                              Welcome to Your Productivity Hub!
                           </h5>
                           <p className="text-center">
                              Get started - it's free. No credit card needed.
                           </p>
                        </div>

                        <Col md={5} className="d-flex flex-column gap-3">
                           {alert.show && (
                              <Alert
                                 variant={alert.variant}
                                 onClose={() =>
                                    setAlert({...alert, show: false})
                                 }
                                 dismissible
                              >
                                 {alert.message}
                              </Alert>
                           )}
                           <Controller
                              control={control}
                              name="userName"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="User Name"
                                       {...field}
                                    />
                                    {errors.userName && (
                                       <FormText className="text-danger">
                                          {errors.userName.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />
                           <Controller
                              control={control}
                              name="gender"
                              render={({field}) => (
                                 <>
                                    <FormSelect {...field} className="mb-2">
                                       <option value="" hidden>
                                          Select Gender
                                       </option>
                                       <option value="man">Man</option>
                                       <option value="girl">Girl</option>
                                    </FormSelect>
                                    {errors.gender && (
                                       <FormText className="text-danger">
                                          {errors.gender.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />
                           <Controller
                              control={control}
                              name="email"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="email"
                                       {...field}
                                    />
                                    {errors.email && (
                                       <FormText className="text-danger">
                                          {errors.email.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />

                           <Controller
                              control={control}
                              name="password"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="Password"
                                       type="password"
                                       {...field}
                                    />
                                    {errors.password && (
                                       <FormText className="text-danger">
                                          {errors.password.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />

                           <Button className="button-register" type="submit">
                              Register
                           </Button>

                           <p>
                              Already have an account?{" "}
                              <Link
                                 to="/auth/login"
                                 className="text-decoration-none cursor-pointer"
                                 style={{
                                    color: "rgb(106, 151, 151)",
                                 }}
                              >
                                 Login
                              </Link>
                           </p>
                        </Col>
                     </div>
                  </Col>

                  <Col
                     md={5}
                     className="container-auth p-5 h-100 d-flex align-items-center"
                  >
                     <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <Col md={10} className="text-center">
                           <p className="footer">Achieve Productivity!</p>
                           <Image
                              src={todoimg}
                              alt="todo-img"
                              style={{
                                 width: "50%",
                              }}
                              className="img-fluid"
                           />
                           <div className="mt-2 w-100">
                              <p className="footer">
                                 Embark on your productive journey. Add tasks
                                 and achieve your goals!
                              </p>
                           </div>
                        </Col>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </form>
   )
}
