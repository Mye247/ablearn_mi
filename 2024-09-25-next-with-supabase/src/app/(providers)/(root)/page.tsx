"use client";

import studentsAPI from "@/api/studentsAPI";
import { useQuery } from "@tanstack/react-query";
import NewStudentForm from "./_components/NewStudentForm";

function HomePage() {
  // const [students, setStudents] = useState<
  //   Database["public"]["Tables"]["students"]["Row"][] | null
  // >([]);

  // useEffect(() => {
  //   studentsAPI.getStudents().then((students) => setStudents(students));
  // }, []);

  const { data: students, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: () => studentsAPI.getStudents(),
  });

  return (
    <div>
      <NewStudentForm />
      <hr />
      <h1>학생들 목록</h1>
      {isLoading && <p>학생들 목록을 불러오는 중...</p>}
      <ul>
        {students?.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      <section></section>
    </div>
  );
}

export default HomePage;
