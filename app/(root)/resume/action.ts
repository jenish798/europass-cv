"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SERVER_API_URL } from "@/app/constants";
// import { getErrorMessage } from "@/lib/utils";
import { revalidateTag } from "next/cache";

export async function createResume(prevState: any, formData: FormData) {
  let jsonObject = Object.fromEntries(formData.entries());

  const access_token = cookies().get("access");

  const res = await fetch(`${SERVER_API_URL}/resumes/`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(jsonObject),
  });

  if (res.status == 422) {
    const resJson = await res.json();
    console.log(resJson);
    resJson.detail.map((error: any) => {
      console.log(error.loc);
      // console.log(error.input)
    });
  }

  if (res.status === 401) redirect("/login");

  if (res.status !== 201) {
    const error = await res.json();
    return {
      fieldErrors: null,
      type: "Error",
    //   message: getErrorMessage(error.detail),
    };
  }

  revalidateTag("Resume");

  if (res.status === 201) {
    return {
      fieldErrors: null,
      type: "Success",
      message: "Resume Created Successfully",
    };
  }
  // if (res.status === 201) redirect("/dashboard/branches");
}

export async function updateResume(id:number|string , formData: any) {
  // let jsonObject = Object.fromEntries(formData.entries());

  const access_token = cookies().get("access");

  const res = await fetch(`${SERVER_API_URL}/resumes/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(formData),
  });

  if (res.status == 422) {
    const resJson = await res.json();
    console.log(resJson);
    resJson.detail.map((error: any) => {
      console.log(error.loc);
      // console.log(error.input)
    });
  }

  if (res.status === 401) redirect("/login");

  if (res.status !== 204) {
    const error = await res.json();
    return {
      fieldErrors: null,
      type: "Error",
    //   message: getErrorMessage(error.detail),
    };
  }

  revalidateTag("Resume");

  if (res.status === 204) {
    return {
      fieldErrors: null,
      type: "Success",
      message: "Resume Updated Successfully",
    };
  }
  // if (res.status === 201) redirect("/dashboard/branches");
}

export async function updateWorkExperience(id:number|string,formData: any) {
  // let jsonObject = Object.fromEntries(formData.entries());

  const access_token = cookies().get("access");

  const res = await fetch(`${SERVER_API_URL}/experiences`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 422) {
    const resJson = await res.json();
    console.log(resJson);
    resJson.detail.map((error: any) => {
      console.log(error.loc);
    });
  }

  if (res.status === 401) redirect("/login");

  if (res.status !== 201) {
    const error = await res.json();
    return {
      fieldErrors: null,
      type: "Error",
    };
  }

  revalidateTag("Resume");

  return {
    fieldErrors: null,
    type: "Success",
    message: "Work Experience Added Successfully",
  };
}

export async function updateEducation(id:number|string, formData: any) {
  // let jsonObject = Object.fromEntries(formData.entries());
  const access_token = cookies().get("access");

  const res = await fetch(`${SERVER_API_URL}/education/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 422) {
    const resJson = await res.json();
    console.log(resJson);
    resJson.detail.map((error: any) => {
      console.log(error.loc);
    });
  }

  if (res.status === 401) redirect("/login");

  if (res.status !== 201) {
    const error = await res.json();
    return {
      fieldErrors: null,
      type: "Error",
    };
  }

  revalidateTag("Resume");

  return {
    fieldErrors: null,
    type: "Success",
    message: "Education Added Successfully",
  };
}

export async function updateAdditionalInfo(id:number|string,formData: any) {
  // let jsonObject = Object.fromEntries(formData.entries());
  const access_token = cookies().get("access");

  const res = await fetch(`${SERVER_API_URL}/additional-info/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token?.value}`,
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 422) {
    const resJson = await res.json();
    console.log(resJson);
    resJson.detail.map((error: any) => {
      console.log(error.loc);
    });
  }

  if (res.status === 401) redirect("/login");

  if (res.status !== 201) {
    const error = await res.json();
    return {
      fieldErrors: null,
      type: "Error",
    };
  }

  revalidateTag("Resume");

  return {
    fieldErrors: null,
    type: "Success",
    message: "Additional Information Added Successfully",
  };
}


