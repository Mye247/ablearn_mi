"use client";

import { ComponentProps, useState } from "react";
import humanAPI from "@/api/humanAPI";
import { Database } from "@/database.types";
import { useQuery } from "@tanstack/react-query";
import supabase from "@/app/supabase/client";

function HomePage() {
  const [name, setName] = useState("");
  const [agez, setAgez] = useState("");
  const [school, setSchool] = useState("");

  const age = Number(agez);

  const handleSubmitButton = async () => {
    const data: Database["public"]["Tables"]["human"]["Insert"] = {
      name,
      age,
      school,
    };

    await humanAPI.setHuman(data);
  };

  const { data: human, isLoading } = useQuery({
    queryKey: ["human"],
    queryFn: () => humanAPI.getHuman(),
  });

  // const handleClickDeleteTodo: ComponentProps<"button">["onClick"] = (e) => {
  //   e.stopPropagation();
  //   supabase.from("human").delete().eq("id", human?.id);
  // };

  return (
    <>
      <main>
        <input
          type="text"
          placeholder="이름을 입력해주세요?"
          className="border border-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="나이을 입력해주세요?"
          className="border border-black"
          value={agez}
          onChange={(e) => setAgez(e.target.value)}
        />

        <input
          type="text"
          placeholder="학교을 입력해주세요?"
          className="border border-black"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <button className="border border-black" onClick={handleSubmitButton}>
          업로드하기
        </button>

        <hr />

        {isLoading && <div>로딩중....</div>}

        <ul className="p-5">
          {human?.map((human) => (
            <li key={human.id}>
              <h2>{human.name}</h2>
              <input
                type="text"
                placeholder="수정내용"
                className="border border-black"
              />
              <button className="border border-black">수정</button>
              <button className="border border-black">삭제</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
