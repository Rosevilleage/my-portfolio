import Link from "next/link";
import {
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
  AiFillRead,
  AiOutlineLink,
} from "react-icons/ai";

interface ConTactProps {
  contact: {
    email: string;
    github: string;
    blog: string;
  };
}

const icon = {
  email: <AiFillMail />,
  github: <AiFillGithub />,
  blog: <AiFillRead />,
};

type ContactKey = "email" | "github" | "blog";

export default function ContactBox({ contact }: ConTactProps) {
  const contactKeys = Object.keys(contact);
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] w-full mt-5 mx-auto">
      {contactKeys.map((key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center flex-grow p-2 m-5 border-2 border-black rounded-md basis-1/6"
        >
          <div className="flex items-center mb-3 text-3xl">
            {icon[key as ContactKey]}
            <h3 className="ml-1 ">{key}</h3>
          </div>
          {key !== "github" && key !== "blog" && (
            <p>{contact[key as ContactKey]}</p>
          )}
          {(key === "github" || key === "blog") && (
            <Link
              href={contact[key]}
              target="_blank"
              className="flex items-center text-lg cursor-pointer"
            >
              <span className="mr-1">
                <AiOutlineLink />
              </span>
              바로 가기
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
