import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { buttonColorAtom, themeAtom } from "./App";
import { getUsers } from "./api";

const Users = () => {
  const { data: users = [] } = useQuery(["users"], getUsers);
  const [theme, setTheme] = useAtom(themeAtom);
  const [buttonColor] = useAtom(buttonColorAtom);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <div>
        our theme is {theme}{" "}
        <button onClick={toggleTheme} style={{ background: buttonColor }}>
          toggle theme
        </button>
      </div>
    </div>
  );
};

export default Users;
