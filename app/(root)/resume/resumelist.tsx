import { Clock2, FilePlus, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResumeList = ({ resumes }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold text-gray-800 mb-4">Resume List</h1>
      {resumes.map((resume) => (
        <Link href={`/resume/${resume.id}`} key={resume.id}>
          <div className="w-full mx-auto overflow-hidden mb-4 transition-transform transform hover:scale-105">
            <div className="p-6 flex flex-col justify-evenly">
              <div className="text-gray-600 space-y-4 flex-col items-start">
                <p className="flex items-center">
                  <FilePlus className="text-green-700" size={32} />
                  <span className="pl-3 text-xl font-bold text-black">
                    Resumes:{" "}
                    <span className="text-lg font-normal">File_name</span>
                  </span>
                </p>

                <p className="flex items-center">
                  <Clock2 className="text-green-700" size={32} />
                  <span className="pl-3 text-xl font-bold text-black">
                    Validate Till:{" "}
                    <span className="text-lg font-normal">28/12/2024</span>
                  </span>
                </p>

                <p className="flex items-center">
                  <WalletCards className="text-green-700" size={32} />
                  <span className="pl-3 text-xl font-bold text-black">
                    Payment: <span className="text-lg font-normal">Done</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResumeList;
