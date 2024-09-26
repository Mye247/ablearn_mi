import supabase from "@/app/supabase/client";
import { Database } from "@/database.types";

async function getHuman() {
  const response = await supabase.from("human").select("*");
  const human = response.data;

  console.log(human);
  return human;
}

async function setHuman(data: Database["public"]["Tables"]["human"]["Insert"]) {
  const response = await supabase.from("human").insert(data);
  const result = response.data;
  console.log(result);
}

const humanAPI = {
  getHuman,
  setHuman,
};

export default humanAPI;
