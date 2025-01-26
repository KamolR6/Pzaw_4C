import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// Import photos dynamically
const photos = Array.from({ length: 12 }, (_, i) => require(`./photos/photo${i + 1}.jpg`));

// Fetch photos with different loading durations based on whether the photo has been loaded before
const fetchPhotos = async (index) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(photos.slice(index, index + 5));
    }, loadedIndices.has(index) ? 1000 : 3000); // 1 second for previously loaded, 3 seconds for new ones
  });
};

let loadedIndices = new Set();

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [loadingState, setLoadingState] = useState({}); // Track loading state of individual photos
  const [previousIndex, setPreviousIndex] = useState(null); // Track previous index for comparison

  const { data, isFetching } = useQuery({
    queryKey: ["photos", index],
    queryFn: () => {
      return fetchPhotos(index); // Fetch the current set of photos
    },
    onSuccess: () => {
      // Mark the new set of photos as loaded after fetching
      data?.forEach((photo) => {
        loadedIndices.add(photo); // Mark each photo as loaded
      });
    },
  });

  const handleChangeIndex = (direction) => {
    const newIndex = index + direction;
    setIndex(Math.max(0, Math.min(newIndex, photos.length - 5))); // Ensure index stays within bounds
  };

  // Only newly shown photos should show loading, others should not
  useEffect(() => {
    if (previousIndex !== null) {
      const newLoadingState = { ...loadingState };
      const oldPhotos = photos.slice(previousIndex, previousIndex + 5);
      const newPhotos = data || [];

      // For newly added photos, set loading state to true (if they weren't loaded before)
      newPhotos.forEach((photo) => {
        if (!loadedIndices.has(photo)) {
          newLoadingState[photo] = true;
        }
      });

      // Update the loading state based on the newly loaded photos
      setLoadingState(newLoadingState);
    }
  }, [data, previousIndex]); // Re-run when data changes

  useEffect(() => {
    if (data) {
      // Reset loading state for previously loaded photos after loading time
      Object.keys(loadingState).forEach((photo) => {
        if (loadingState[photo]) {
          const loadingTime = loadedIndices.has(photo) ? 1000 : 3000;
          setTimeout(() => {
            setLoadingState((prevState) => ({
              ...prevState,
              [photo]: false, // Remove loading state after the timeout
            }));
          }, loadingTime);
        }
      });
    }
  }, [loadingState, data]); // Re-run whenever loading state changes

  useEffect(() => {
    // Update previousIndex to the current index after the change
    setPreviousIndex(index);
  }, [index]);

  return (
    <div>
      <div style={{ display: "flex", margin: "auto", padding: "auto" }}>
        <button
          onClick={() => handleChangeIndex(-1)}
          disabled={index === 0}
        >
          Left
        </button>

        <div style={{ display: "flex" }}>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data?.map((photo, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {loadingState[photo] && (
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <span>Loading...</span>
                  </div>
                )}
                <img
                  src={photo}
                  alt={`Photo ${index + idx + 1}`}
                  style={{ width: "150px", height: "150px", margin: "5px" }}
                />
              </div>
            ))
          )}
        </div>

        <button
          onClick={() => handleChangeIndex(1)}
          disabled={index >= photos.length - 5}
        >
          Right
        </button>
      </div>
    </div>
  );
}
