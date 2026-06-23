"use client";

const stories = [
  {
    id: 1,
    category: "Culture & Heritage",
    title: "Hidden Gems of the Mediterranean Coast",
    description:
      "Discover the secret villages that tourists often miss on their way to the popular coastal cities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYDzAQ7A8RYVQwUJZ6jTgoDQvC7MNBWVko-FBHUjaE1wJhcBvimBM4nvprPTYR3SGIydr0BHTVKCSHtlrket7qLjIvXDaRd7pDE_J2PccRyx0M46uWubYYjtG5VSioIRDZj8iB9GuidfUK7frUADcGna1MPQdU6_tAGIA3qagAycpEBDkqDf5rEPrliA8ry0MppneRWYGTbPaD6QpYy19KTf6OhVkJaLkRzMj2dZk9JpIJYIzb7KT-47d2-QAwDdsEDjm9KvjI82g",
  },
  {
    id: 2,
    category: "Gastronomy",
    title: "A Culinary Journey Through Japan",
    description:
      "From Michelin-starred sushi to local street food, explore the tastes of Tokyo and beyond.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUNwQErSFmKzm9XkRDXrYYW-lJMOoKANqPuWGp9dAIeESyzKkNxM5IMTvSg9T0inJ-uZhqB3GMq15RLM3ojy_tHX4NcDLYpLmWqzbt2GWtkjgZLmgzAJb2Fwe3eskJzmArN6LY6PNcB2MuZtobX2EgUV59IlnAK9KxL_Y310n8JQAdbSgEhDJJMjK7rwsx9i8x17Ebv_wHjpC6hasnm4LBWihdnOsBl4nFh1pHU8bNGdDuR4vaLFnI3YR6Lsrr5MuI3QG1oEMt6HI",
  },
  {
    id: 3,
    category: "Nature",
    title: "Iceland: Land of Fire and Ice",
    description:
      "Experience the raw beauty of Iceland's volcanic landscapes and majestic waterfalls.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOJMwx0auia-QcbBW3fjLD9fbwj7F67IoiNW-Lypc3fuH5dDflYSZQvuGftBjc1xXTQPFW6TVZCkGR5XGPQUHXMdJCljbyAbYYYjEbIUgELOZYXnnNGehwcUZtSXi7ikiFaDcsZvFPX0bMbm60LhvrTM6R_iQwkPzjVjY0o_csUHFFg1KTnCjKgQ6XWZHeEidv9jKWP6x22SX9-l5XXXDbt9Ejh4IZVzfF3yewrHxEUM7dgk4d2YLxpr5LvIHNHKdlXgl2mGOxJ0I",
  },
];

export function TravelStories() {
  return (
    <section className="py-[4rem] bg-surface-container-low/50">
      <div className="px-6 md:px-[2rem] lg:px-[5rem] max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            Travel Stories
          </h2>
          <p className="text-on-surface-variant">
            Inspiration for your next great adventure from our global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[1.5rem]">
          {stories.map((story) => (
            <div key={story.id} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden aspect-video mb-6 shadow-sm group-hover:shadow-lg transition-all">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={story.image}
                  alt={story.title}
                />
              </div>
              <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest mb-2 block">
                {story.category}
              </span>
              <h3 className="font-headline-md text-xl mb-3 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-on-surface-variant line-clamp-2">
                {story.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
