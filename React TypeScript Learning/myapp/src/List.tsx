import { useState, useEffect } from "react";
import { IPost } from "./Interface";

const List = () => {
  const [list, setlist] = useState<IPost[]>([]);

  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setlist(data);
    };
    getApiData();
  }, []);

  return (
    <div>
      {list.map((val) => {
        return (
          <div>
            <p>{val.name}</p>
            <p>{val.username}</p>
            <p>{val.email}</p>
            <p>{val.address.zipcode}</p>
            <p>{val.address.geo.lng}</p>
            <p>{val.company.bs}</p>
            <p>{val.phone}</p>
            <p>{val.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
