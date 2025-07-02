import { axiosInstance } from "@/utils/axiosINstance";
import { Button, Form, Input } from "antd"
import { Link ,useNavigate} from "react-router-dom";

const handleOnSubmit=async(values:any,navigate:any)=>{
    
    const userdata={
        email:values.email,
        username:values.username,
        password:values.password,
    }
    try {
      const res=await axiosInstance.post("/user/signup",userdata);
      console.log("user signup success ");
      navigate("/task");

    } catch (error) {
      console.error("Error during signup:", error);
    }
    

    

}

const SignUpPage: React.FC = () => {
   
    const navigate = useNavigate();

  return (
    <>
    <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        
        style={{ maxWidth: 600 }}
        onFinish={
          (values)=>handleOnSubmit(values,navigate)
        }



        >

            

        <Form.Item label={<span style={{ color: 'white' }}>email</span>} name="email" >
          <Input />
        </Form.Item>
        <Form.Item label={<span style={{ color: 'white' }}>email</span>} name="username">
          <Input />
        </Form.Item>
        <Form.Item label={<span style={{ color: 'white' }}>password</span>} name="password">
          <Input />
        </Form.Item>

        <Form.Item label="Button">
            <Button htmlType='submit' >Submit</Button>
        </Form.Item>
            
        {<span style={{ color: 'white' }}>Already have an account  <Link to="/login">Login</Link></span>}
         
       

    </Form>
    </>
  );
};

export default SignUpPage;