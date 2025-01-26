import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

//tablica z awatarami z twittera
const photos = Array.from({ length: 12 }, (_, i) => require(`./photos/photo${i + 1}.jpg`));

//czas ladowania fotek
const fetchPhotos = async (index) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(photos.slice(index, index + 5));
    }, loadedIndices.has(index) ? 1000 : 3000);
  });
};

let loadedIndices = new Set();

//wczytanie fotek od razu
export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [loadedState, setLoadedState] = useState(
    photos.reduce((acc, photo) => {
      acc[photo] = true;
      return acc;
    }, {})
  );

  const { data, isFetching } = useQuery({
    queryKey: ["photos", index],
    queryFn: () => {
      loadedIndices.add(index);
      return fetchPhotos(index);
    },
  });

  //przelaczenie stanu fotek
  const toggleLoaded = (photo) => {
    setLoadedState((prev) => ({
      ...prev,
      [photo]: !prev[photo],
    }));
  };

  return (
    <div >
      <div style={{display:"flex", margin:"auto", padding:"auto"}}>
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          disabled={index === 0}
          style={{ width: "150px", height: "150px" }}
        >
          &lt;
        </button>

        <div style={{display:"flex"}}>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data.map((photo, idx) => (
              <div key={idx} >
                {loadedState[photo] ? (
                  <img
                    src={photo}
                    alt={`Photo ${index + idx + 1}`}
                    style={{ width: "150px", height: "150px" }}
                    
                    onClick={() => toggleLoaded(photo)}
                  />
                ) : (
                  <div
                    
                    onClick={() => toggleLoaded(photo)}
                  >
                    <span>Click to load photo</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <button
          onClick={() => setIndex((prev) => Math.min(prev + 1, photos.length - 5))}
          disabled={index >= photos.length - 5}
          style={{ width: "150px", height: "150px" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
