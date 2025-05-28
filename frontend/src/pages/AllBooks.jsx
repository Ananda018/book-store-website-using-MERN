import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
import Loader from "../components/Loader/Loader";

function AllBooks() {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://thinkbound.onrender.com/api/v1/get-all-book"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="bg-zinc-900  min-h-screen px-12 py-8">
      <h4 className="text-3xl text-yellow-100">All books</h4>
      {!Data && (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      )}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default AllBooks;
