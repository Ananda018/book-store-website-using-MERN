import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
function Favourites() {
  const [FavouriteBook, setFavouriteBook] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://thinkbound.onrender.com/api/v1/get-favurite-book",
        { headers }
      );
      setFavouriteBook(response.data.data);
    };
    fetch();
  }, [FavouriteBook]);
  return (
    <>
      {FavouriteBook && FavouriteBook.length === 0 && (
        <div className="text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full ">
          No Favourite Book
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {FavouriteBook &&
          FavouriteBook.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
      </div>
    </>
  );
}
export default Favourites;
