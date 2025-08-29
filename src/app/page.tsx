import Image from "next/image";

const petImagesNames = [
  "220805-border-collie-play.webp",
  "cat-orange.jpg",
  "cat2.webp",
  "GoldenRetriever.webp",
  "Orange-colored-cat.webp",
  "senior-cat-is-your-older-cat-getting-enough-exercise-.webp",
  "small-breeds-hero.jpg",
];

const petImages = petImagesNames.map((name, index) => {
  return {
    id: index + 1,
    url: `/pets/${name}`,
  };
});

export default function HomePage() {
  return (
    <main className="">
      <div className="grid-gap-4 grid grid-cols-3 justify-items-center">
        {petImages.map((pet) => (
          <div key={pet.id} className="m-2">
            <Image
              src={pet.url}
              alt={`Pet ${pet.id}`}
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
