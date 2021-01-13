import { reactive } from "@vue/composition-api";

export function configureUserStore() {
  const state: StoreModel = reactive({
    // 本当は初期値はundefined
    user: {
      id: 1,
      name: "ほげ 太郎",
      department: "オペレーションテクノロジー部"
    }
  });

  return {
    get user() {
      return state.user;
    },

    set user(user: User | undefined) {
      state.user = user;
    }
  };
}

interface StoreModel {
  user?: User;
}
interface User {
  id: number;
  name: string;
  department: string;
}
