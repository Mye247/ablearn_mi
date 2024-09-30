import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ol className="list-inside list-decimal">
        <li>
          <Link href={"/dayjs"}>dayjs</Link>
        </li>
        <li>
          <Link href={"/useRef"}>useRef의 또 다른 사용법 </Link>
        </li>
        <li>
          <Link href={"/immer"}>immer.js (불변성 관리)</Link>
        </li>
        <li>
          <Link href={"/axios"}>axios</Link>
        </li>
      </ol>
    </div>
  );
}
