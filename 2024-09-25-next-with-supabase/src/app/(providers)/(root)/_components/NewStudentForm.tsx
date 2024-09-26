"use client";

import React from "react";
import { Database } from "../../../../../database.types";
import studentsAPI from "@/api/studentsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function NewStudentForm() {
  const queryClient = useQueryClient();

  const { mutate: addStudent } = useMutation<
    unknown,
    Error,
    Database["public"]["Tables"]["students"]["Insert"]
  >({
    mutationFn: (data) => studentsAPI.addStudent(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"], exact: true }),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitAddStudent = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const age = +e.target.age.value; // number로 변경
    const schoolName = e.target.schoolName.value;
    const gender = e.target.gender.value;
    const isFemale = gender === "여자";

    const data: Database["public"]["Tables"]["students"]["Insert"] = {
      name,
      age,
      schoolName,
      isFemale,
    };

    addStudent(data);

    console.log(e.target.schoolName.value);
  };
  return (
    <>
      <form
        className="flex flex-col items-center gap-y-1"
        onSubmit={handleSubmitAddStudent}
      >
        <input name="name" type="text" placeholder="이름" className="border" />
        <input name="age" type="number" placeholder="나이" className="border" />
        <input
          name="schoolName"
          type="text"
          placeholder="학교"
          className="border"
        />
        <input
          name="gender"
          type="text"
          placeholder="성별"
          className="border"
        />

        <button type="submit" className="border border-black">
          학생 등록하기
        </button>
      </form>
    </>
  );
}

export default NewStudentForm;
