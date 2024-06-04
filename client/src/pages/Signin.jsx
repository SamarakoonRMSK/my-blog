import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import sign from "../assets/sign.png";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.log("wada na");
      return;
    }
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(res);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen pt-20 ">
      <div className="flex flex-col max-w-4xl md:flex-row md:items-center mx-auto p-3 px-5 gap-5 ">
        <div className="flex-1 ">
          <img src={sign} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="flex">
                Don't Have an account?&nbsp;
                <Link
                  to="/signup"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  sign up
                </Link>
              </Label>
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
