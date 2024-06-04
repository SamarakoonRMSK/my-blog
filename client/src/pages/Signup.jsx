import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import sign from "../assets/sign.png";

export default function Signup() {
  return (
    <div className="min-h-screen pt-20 ">
      <div className="flex flex-col max-w-4xl md:flex-row md:items-center mx-auto p-3 px-5 gap-5 ">
        <div className="flex-1 ">
          <img src={sign} alt="" />
        </div>
        <div className="flex-1">
          <form className="flex  flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="example@gmail.com"
                required
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
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
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
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
