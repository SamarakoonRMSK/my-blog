import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border-t-2 border-cyan-400 ">
      <div className="w-full">
        <div className="grid w-full  sm:flex sm:justify-between items-center md:flex md:grid-cols-1">
          <div>
            <Link
              to="/"
              className="whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="self-center p-1 whitespace-nowrap text-xl font-semibold text-white bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg">
                SKS
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2  gap-8 mt-7 sm:mt-4 sm:grid-cols-3 sm:gap-14">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/dashboard?tab=profile">Profile</Footer.Link>
                <Footer.Link href="/">Home</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/SamarakoonRMSK"
                  target="_blank"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/saman-k-rathnayaka-0b04131ab/"
                  target="_blank"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Saman K Rathnayaka" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100011332955502"
              icon={BsFacebook}
            />

            <Footer.Icon
              href="https://github.com/SamarakoonRMSK"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/saman-k-rathnayaka-0b04131ab/"
              target="_blank"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
