import {Container} from "react-bootstrap"
import {CustomButton} from "../../../assets/common/custom-button"

export const HeaderSection = () => {
   return (
      <Container fluid className="mt-5 d-flex flex-column gap-4">
         <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
            <h2 className="fw-bold">Enhance your productivity.</h2>
            <span className="mb-0 fs-6 text-muted text-center">
               Start for free now!
            </span>
         </div>
         <p className="text-muted">
            Unlimited boards and workflows. No credit card needed.
         </p>
         <div>
            <p className="fw-bold text-muted fs-6">
               Create account to kickstart your journey for free!
            </p>
         </div>
         <div>
            <CustomButton
               className="custom-button px-4 py-2 rounded-5"
               path="/auth/register"
               customtext="Get Started"
            />
         </div>
         <div className="mt-4">
            <p>225,000+ customers worldwide rely on</p>
            <p>todo.com</p>
         </div>
      </Container>
   )
}
