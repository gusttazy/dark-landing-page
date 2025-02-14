import InstaIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-white/80">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li className="opacity-40 hover:opacity-60 transition-all ease-in-out duration-300">
              <a href="https://github.com/gusttazy">
                <GithubIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="opacity-40 hover:opacity-60 transition-all ease-in-out duration-300">
              <a href="https://www.linkedin.com/in/gustaguiar/">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="opacity-40 hover:opacity-60 transition-all ease-in-out duration-300">
              <a href="https://www.instagram.com/gusttazy/">
                <InstaIcon className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
