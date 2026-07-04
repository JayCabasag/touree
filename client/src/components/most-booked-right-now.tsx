"use client";

import { useRouter } from "next/navigation";

interface Place {
  id: number;
  name: string;
  image: string;
  startingPrice: number;
}

const places: Place[] = [
  {
    id: 1,
    name: "Palawan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBawJFwNAoNxtpq3u191Uma95FM3EQ3j4047FSVQabnVhA9kdBAfOvN4R1j2Isn27NSZqmQ0Fd13huERQfVJrSoNJL9GPf4ZrNYvBTjJkHg1cFlMuMaP2HSb3wWqc_94UISnIu9SO2sz8kaqyCzeAtrDiJ2uQaMeHU3AiDVuxD2UkY5QlW9Uj348OxuC_3fRNPNM3aCmVsF4Pw790WMi4uvnzrqNh8d0R18B8veRAfpocmvHZNTDEMQq_0-gnQWK9PALaZKYXX736o",
    startingPrice: 4500,
  },
  {
    id: 2,
    name: "Boracay",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRzDP1ISWkTTPgUrEzSp2bt7acchyYrS-L-jZv0KGyFR9W-WjMlWyg_uTwfW5h4S9hZKq5LM4TyPMNgkeBZiAzzWJKxsFbv9XuccHzTzquNTV2u_ki6LimYNHU-eSCzHDO9fOjsBuxB8g2qMTyrzmdcd5Vxud_Xwfumn7w8jk2wlqWYVii15c7z824q5ROrl9YStAQgL7_C1VPOpb6L9c73Vb5w83WyKOLR4uOQhbBQbbYlU_joJ33jWKLSH-J7ba0WJoaM1Cn-fg",
    startingPrice: 3200,
  },
  {
    id: 3,
    name: "Siargao",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7xqNQ1bnqh6dJRufrijYj0xeXnZ6EHxvm5hMGrolbvXfUVgBQ8U8K4-a2UtxhiUrPRihi-LK-W5ycZzlHni-qj8ykvIvd8lDFQ7erS4HQHtki-Zqbu7-LUPPHZnUZ0Un6sJf9wHMCMCGGvDMPhZLQdzzqwmeKMtGqrxuFMn99T0uRaWpMpmZiefGwVX9jtYahZyvhgnrLiTUvii_FWFlhJ_OBcKgs9F0NcC59ZrTRlK8Ssd2jmvQTNItEkh-hst-B4InwUUZktv0",
    startingPrice: 5800,
  },
  {
    id: 4,
    name: "Baguio",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCt2ANu68BdCdPLScEnHX_IDroujwOTt_H33BGq_Gvz4xIBCujxK2J5y4OSCy-rDI6V79OZbx_N1ur7LB22j4-6besXzCnAe8XHQTyV84tC0UUdWBeq3dvc6Atui2cUv_RrWwLQDvfrpozIkbV8lM9mCbM3XsnvVFs4oREA43GnjnwyZRKl_I37fxEJSY1EqzKW61Rq6dr1d25jH38-DjbWmWyDh7X0be2_hcKbMAuucv1BrG7Czw-VGZ7i3akx1IAOo_VRUi4sK1Q",
    startingPrice: 2500,
  },
];

function formatPrice(value: number) {
  return `₱${value.toLocaleString()}`;
}

export function MostBookedRightNow() {
  const router = useRouter();

  function handleSelectPlace(placeName: string) {
    const params = new URLSearchParams({ destination: placeName });
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <section className="py-16 px-20 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            Most booked right now
          </h2>
          <p className="text-on-surface-variant max-w-md">
            Discover the destinations our travelers are booking right now.
          </p>
        </div>
        <button
          onClick={() => router.push("/explore")}
          className="text-primary font-bold hover:underline flex items-center gap-2 group"
        >
          View All{" "}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {places.map((place) => (
          <button
            key={place.id}
            onClick={() => handleSelectPlace(place.name)}
            className="group cursor-pointer text-left"
          >
            <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={place.image}
                alt={place.name}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">
                  From {formatPrice(place.startingPrice)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-headline-md text-lg">{place.name}</h3>
              <span className="text-sm text-on-surface-variant">
                from {formatPrice(place.startingPrice)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
