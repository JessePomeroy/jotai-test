import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { themeAtom } from "./App";
import { getUsers } from "./api";

const PopularUsers = () => {
  const { data: users = [] } = useQuery(["users"], getUsers);
  const [theme] = useAtom(themeAtom);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <div>Our theme is {theme}</div>
    </div>
  );
};

export default PopularUsers;
