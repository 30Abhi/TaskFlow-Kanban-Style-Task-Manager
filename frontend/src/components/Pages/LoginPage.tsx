import { axiosInstance } from "@/utils/axiosINstance";
import { Button, Form, Input } from "antd"
import { Link, useNavigate } from "react-router-dom";

const handleOnSubmit=async(values:any,navigate:any)=>{

    const userdata={
        email:values.email,
        password:values.password,
    }
    try {
        const user=await axiosInstance.post("/user/login",userdata);
        // @ts-ignore
        
        console.log("user login success ",user);
        // @ts-ignore
        localStorage.setItem("tokken",user.data.jwtToken);
        // @ts-ignore
        localStorage.setItem("userName",user.data.user.username);
        // @ts-ignore
        localStorage.setItem("userEmail",user.data.user.email);
        // @ts-ignore
        localStorage.setItem("userid",user.data.user._id);

        navigate('/task');

    } catch (error) {
        alert("wrong username or password");
    }

}

const LoginPage: React.FC = () => {
   
    const navigate=useNavigate();

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
        
        <Form.Item label={<span style={{ color: 'white' }}>password</span>} name="password">
          <Input />
        </Form.Item>

        <Form.Item label="Button">
            <Button htmlType='submit' >Submit</Button>
        </Form.Item>
            
        {<span style={{ color: 'white' }}> NEW USER SIGNUP  <Link to="/login">Login</Link></span>}


    </Form>
    </>
  );
};

export default LoginPage