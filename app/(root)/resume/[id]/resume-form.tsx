"use client";
import { useState } from "react";
import {
  SubmitHandler,
  useForm,
  useFieldArray,
  FieldValues,
} from "react-hook-form";
import Preview from "./preview";
import PreviewPdf from "./preview-pdf-new";
import ImageUploader from "@/components/image/image_uploader";
import StepperComponent from "@/components/stepper/dynamic";
import PersonalInformation from "./forms/personalinformation";
import WorkExperience from "./forms/workexperience";
import Education from "./forms/education";
import Training from "./forms/additional";
import { Award } from "lucide-react";
import AddSection from "./add-section";
import {toast} from 'sonner';
import Language from "./forms/language";
import DrivingLicense from "./forms/drivinglicense";
import Others from "./forms/others";
import License from "./forms/license";
import Link from "next/link";

type FormValues = {
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  nationality: string;
  gender: string;
  experience: number;
  add1: string;
  add2: string;
  about: string;
  email: string;
  contact: number;
  workemail: string;
  code: string;
  city: string;
  country: string;
  position: string;
  companyName: string;
  workfrom: string;
  workto: String;
  location: string;
  workabout: string;
  workwebsite: string;
  workdepartment: String;
  workaddress: string;
  jobappliedfor: string;
  workfrom1: string;
  workto1: string;
  companyName1: string;
  aboutcompany1: string;
  about1: string;
  position1: string;
  location1: string;
  workwebsite1: string;
  workdepartment1: string;
  workaddress1: string;

  mothertongue: string;
  otherlanguage: string;
  othertitle: string;
  otherdesc: string;
  mainTitle: string;
  language:{
    mothertongue: string;
    otherlanguage: string;
  }
  others:{
    othertitle: string;
  otherdesc: string;
  mainTitle: string;
    };
  education: {
    qualification: string;
    organisation: string;
    educationfrom: string;
    educationto: string;
    educationcity: string;
    educationcountry: string;
  }[];
  workExperience1:{
    workfrom1: string;
    workto1: string;
    companyName1: string;
    aboutcompany1: string;
    about1: string;
    position1: string;
    location1: string;
    workwebsite1: string;
    workdepartment1: string;
    workaddress1: string;
  }[]

  experiences: {
    years: number;
    description: string;
    workfrom: string;
    workto: String;
    companyName: string;
    aboutcompany: string;
    about2: string;
    position: string;
    location: string;
    workwebsite: string;
    workdepartment: String;
    workaddress: string;
  }[];
  training: {
    title: string;
    Hobbies: string;
    institute: string;
    trainingfrom: string;
    trainingto: string;
    traininglocation: string;
    trainingskills: string;
  }[];
  lic:{
    license: string,
      daterange: {
        datefrom: string;
        dateto: string;
      }
  }[];
};


const Resume = ({resume}) => {


const [section,setSection] =useState(false)

const handleSection = () =>{
  setSection(true)
}

  const [selectedSection, setSelectedSection] = useState([]);

  const [showPreview, setShowPreview] = useState(false);

  const [show, setShow] = useState(0);

  const [data, setData] = useState({
    personalInformation:null,
    workExperience:[],
      workExperience1: [],
    jobappliedfor:undefined,

    education:[],
    training:[],
    language:undefined,
    others: [],
    lic:[],
  });

  //first letter capital
  const [text, setText]=useState({
    a:'',
    b:{
      field1:'',
      field2:'',
    },
  });

  const handleChange = (event,key,subkey) => {
const value = event.target.value;
const updatedValue = value.charAt(0).toUpperCase()+value.slice(1);
setText(prevValues =>{
  if(subkey){
    return{
      ...prevValues,
      b:{
        ...prevValues.b,
        [subkey]: updatedValue,
      },
    };
  }else{
    return{
  ...prevValues,
  [key]: updatedValue,
    }
  }
});
  };

  const [additionalTitle, setAdditionalTitle] = useState('');

  const handleInputChange = (event) => {
    setAdditionalTitle(event.target.value);
  };


  const [showFields, setShowFields] = useState(true);

  const formComponents = {
    // "personal":<PersonalInformation setData={setData} personalInformation={data.personalInformation}/>,
  "work": <WorkExperience selectedSection={selectedSection} setSelectedSection={setSelectedSection} setData={setData} setShowPreview={setShowPreview} workExperience={data.workExperience} data={data}/>, 
 "education":<Education selectedSection={selectedSection} setSelectedSection={setSelectedSection}  setData={setData} setShowPreview={setShowPreview} education={data.education}/>, 
  "additional":<Training selectedSection={selectedSection} setSelectedSection={setSelectedSection}  setData={setData} setShowPreview={setShowPreview} training={data.training}/>,
  "language": <Language selectedSection={selectedSection} setSelectedSection={setSelectedSection} setShowPreview={setShowPreview} setData={setData} language={data.language}/>,
  'drivinglicense':<License selectedSection={selectedSection} setSelectedSection={setSelectedSection} setShowPreview={setShowPreview}  setData={setData} lic= {data.lic}/>,
  'others':<Others selectedSection={selectedSection} setSelectedSection={setSelectedSection} setShowPreview={setShowPreview} setData={setData} others={resume} additionalTitle={data.others} />
}

 //home page

 const handleHome = () => {
  window.location.href='/'
}

  // handler for dropdown change
  
  const addSections = (sectionName) => {
    setSelectedSection((prevState)=>([...prevState,sectionName]));
  };

  //--validation function for date year range--

  const validateDateRange = (value) => {
    const minDate = new Date("1950-01-01");
    const maxDate = new Date("2100-12-31");
    const selectedDate = new Date(value);

    if (selectedDate < minDate || selectedDate > maxDate) {
      return "please enter valid Year";
    }
    return true;
  };

  //--validation for input field--

  const handleNext = async () => {
    // const isValid = await trigger();
    // if(isValid){
    if(data.personalInformation===null){
      toast.error('Please Enter Personal Information', {
        duration: 10000,
        closeButton: true,
      });
      return
    }
    setShow(show + 1);
    setSection(true);
  };
  // };

  const handlePrevious = () => {
    setShow(show - 1);
  };

  const handleReset = () => {
    setShow(0);
  };

  const toggleFields = () => {
    setShowFields(!showFields);
  };

  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageChange = (imageurl) => {
    setUploadedImage(imageurl);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    setData({ ...data, profileImage: uploadedImage });
    handleNext();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setShow(4);
    setShowPreview(true);
  };

  const handleEdit = async () => {
    console.log('Going back with data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    console.log('Previous data state:', data);
  
    setShow(0); 
    setShowPreview(false);
  };



  return (
    <div className="w-9/12 shadow-2xl  border-gray-300 text-justify mx-auto my-7">
      <StepperComponent step={show} />

  {show === 0 && (
        <div className="p-8">
          <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            {/* <h4>{resume.resume_title}</h4> */}
            <div>

              <hr className="mb-2" />
              <PersonalInformation setData={setData} personalInformation={resume} setShowPreview={setShowPreview} text={text.a} handleChange={(event)=>handleChange(event,'a')}/>
            </div>

            {selectedSection.map((selected) => (
              <div key={selected}>
                {formComponents[selected]}

              </div>
            ))}
            {selectedSection.includes('others') && data.others.length &&
                    data.others.map((other) => (
                      <div className="p-6 space-y-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="text-black text-2xl font-bold uppercase">
                          {other.mainTitle}
                        </p>
            
                        <p className="text-lg font-semibold text-gray-800">
                          Title : <span className="font-light capitalize">{other.othertitle}</span>
                        </p>
            
                        <p className="text-lg font-semibold text-gray-800">
                          Description :{" "}
                          <span className="font-light capitalize">{other.otherdesc}</span>
                        </p>
            
                        <div className="flex gap-4">
                          {/* <button
                            onClick={() => setShowForm(true)}
                            type="button"
                            className="w-24 bg-white text-black hover:text-white hover:bg-green-600 p-2 font-bold rounded-md border border-gray-300"
                          >
                            Edit
                          </button> */}
                        </div>
                      </div>
                    ))}
            
          </div>
          <div className="my-3">
              {showPreview ? <AddSection addSections={addSections} setShowPreview={setShowPreview} showPreview={showPreview} selectedSection={selectedSection} handleInputChange={handleInputChange} additionalTitle={additionalTitle} /> : null}

            </div>
            <div className="flex mx-6 my-10">
              <button
                type="button"
                className="w-24 items-center capitalize bg-white hover:bg-green-600 text-black p-2 hover:text-slate-100 font-bold rounded-md"
                onClick={handleHome}
              >
                Exit
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="w-24 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2  mx-10 font-bold rounded-md"
              >Next
              </button>
            </div>
            </div>
)} 

        <div>
          {show === 1 && (
            <div>
              <Preview
                data={data}
                handleNext={handleNext}
                image={uploadedImage}
              />
              {/* <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button> */}
              <div className="flex py-4 px-8">
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                  onClick={handleEdit}
                  // onClick={() => setShowForm(true)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
                  onClick={handleNext}
                >
                  next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* {show ===2 && (
          <div>
            <CheckoutPage handleNext={handleNext}/>

            <div className="flex py-4 px-8">
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                  onClick={handlePrevious}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
                  onClick={handleNext}
                >
                  next
                </button>
              </div>

            </div>
        )} */}


      {show === 2 && (
        <div>
          <PreviewPdf data={data} handleNext={handleNext} />

          <div className="flex py-4 px-8">
                {/* <button
                  type="button"
                  className="w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md"
                  onClick={handlePrevious}
                >
                  Edit
                </button> */}
                {/* <button
                  type="button"
                  className="w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md"
                  onClick={handleNext}
                >
                  next
                </button> */}
                <Link href='/profile'
                 className="w-28 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md inline-flex justify-center"
                >Go To Profile</Link>
              </div>

        </div>
      )}
    </div>
  );
};

export default Resume;
