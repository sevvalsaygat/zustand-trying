import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { nanoid } from "nanoid";

type UseUsersStateType = {
  users: Array<{ id: string; name: string }>;
  addUser: (name: string) => void;
  removeUser: (id: string) => void;
};

const useUsersStore = create<UseUsersStateType>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        addUser: (name) =>
          set((state) => ({
            users: [
              ...state.users,
              {
                id: nanoid(),
                name,
              },
            ],
          })),
        removeUser: (id) =>
          set((state) => ({
            users: state.users.filter((user) => user.id !== id),
          })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUsersStore;
