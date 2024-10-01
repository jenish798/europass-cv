import { lessThanExpiryDate } from "@/lib/utils";
import { SERVER_API_URL } from "@/app/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddResumeForm from "./addresumeform";
import ResumeList from "./resumelist";

export async function getData() {
  const cookiesStore = cookies();
  const access = cookiesStore.get("access");

  console.log(access);
  const res = await fetch(`${SERVER_API_URL}/resumes/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access?.value}`,
    },
    next: {
      tags: ["Resume"],
    },
  });

  if (!res.ok) {
    console.log("error");
  }

  if (res.status === 401) {
    // redirect("/resume/[id]");
    // redirect('/resume')
  }
  if (res.status !== 200) {
    // redirect("/resume/[id]");
    // redirect('/login')
    console.log(res);
  }

  const resumes = await res.json();
  console.log(resumes);

  return resumes;
}

type Data = [];

const Page = async () => {
  const resumes: Data = await getData();
  return (
    <>
      <div className="w-9/12 shadow-2xl border-gray-300 text-justify mx-auto my-7">
        {resumes.length ?  <ResumeList resumes={resumes}/> : <AddResumeForm /> }
      </div>
    </>
  );
};

export default Page;
