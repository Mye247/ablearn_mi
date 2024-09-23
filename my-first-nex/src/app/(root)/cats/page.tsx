/* eslint-disable @next/next/no-img-element */

import { getCatBreeds } from "@/api/cat.api";
import { Breeds } from "@/types/cats-api-types";
import Link from "next/link";

async function HomePage() {
  const breeds = await getCatBreeds();

  // const response = await fetch("https://api.thecatapi.com/v1/breeds", {
  //   headers: {
  //     "x-api-key":
  //       "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  //   },
  // });
  // const breeds = (await response.json()) as Breeds;

  console.log(breeds);

  return breeds ? (
    <>
      <div>
        <ul>
          {breeds.map((breed) => (
            <>
              <li key={breed.id} className="mb-5">
                <article className="border">
                  <h2 className="font-bold text-lg">
                    <Link
                      href={`/cats/${breed.id}`}
                      className="text-blue-200 underline"
                    >
                      고양이 이름 {breed.name}
                    </Link>
                  </h2>
                  <p className="text-sm">
                    <a href={breed.wikipedia_url} target="_blank">
                      {breed.description}
                    </a>
                  </p>
                </article>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <h4>실패</h4>
  );
}

export default HomePage;
