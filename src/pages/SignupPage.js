import Signup from "../components/Signup/Signup";
import Layout from "../layout/Layout";
import { useLocation } from "react-router";

const SignupPage = () => {
  return (
    <Layout>
      <div className="signupBox">
        <Signup />
      </div>
    </Layout>
  );
};

export default SignupPage;
