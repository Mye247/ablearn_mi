/* eslint-disable @next/next/no-img-element */
import { Breed, cat } from "@/types/cats-api-types";
import React from "react";

const fetchOptions = {
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  },
};

async function CatsOnBreedPage(props: { params: { breed: string } }) {

  

  const response1 = await fetch(
    `https://api.thecatapi.com/v1/breeds/${props.params.breed}`,
    fetchOptions
  );

  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${props.params.breed}`,
    fetchOptions
  );

  const breed = (await response1.json()) as Breed;
  const cats = await response.json();
  //console.log(cats)

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl  p-4">{breed.name}</h1>
      <p className="mb-5">{breed.description}</p>
      <p className="text-left p-3">고양이좋아요 </p>
      <ul className="grid grid-cols-4 gap-x-3 px-2">
        {cats.map((cat: cat) => (
          <li key={cat.id} className="mb-5">
            <img
              src={cat.url}
              alt={cat.id}
              width={cat.width}
              height={cat.height}
              className="h-[300px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsOnBreedPage;
