import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import sign from "../assets/sign.png";
import { useState } from "react";
import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
                <Label value="Your username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
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
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>

            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
          <div className="flex items-center gap-2 mt-2">
            <Label className="flex">
              Do you have an account?&nbsp;
              <Link
                to="/signin"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                sign in
              </Link>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
