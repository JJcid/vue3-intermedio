import {
  Category,
  Status,
  type Character,
} from "@/characters/interfaces/characters";
import { reactive } from "vue";

interface Store {
  characters: {
    list: Character[];
    count: number;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
  };
  startLoadingCharacters: () => void;
  loadedCharacters: (data: Character[]) => void;
  loadCharactersFailed: (error: string) => void;
}

const characterStore = reactive<Store>({
  characters: {
    list: [],
    count: 0,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  },
  async startLoadingCharacters() {
    //! Eliminar cuando funcione el end-point
    const defaultList: Character[] = [
      {
        char_id: 1,
        name: "Walter White",
        birthday: "09-07-1958",
        occupation: ["High School Chemistry Teacher", "Meth King Pin"],
        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        status: Status.Deceased,
        appearance: [1, 2, 3, 4, 5],
        nickname: "Heisenberg",
        portrayed: "Bryan Cranston",
        category: Category.BetterCallSaul,
        better_call_saul_appearance: [1],
      },
    ];

    const getCharacters = async (): Promise<Character[]> => {
      if (this.characters.count) return this.characters.list;
      // const { data } = await breakindBadApi.get<Character[]>("/characters");
      // return data;
      //! descomentar cuando funcione el end-point
      return defaultList;
    };
    const data = await getCharacters();
    this.loadedCharacters(data);
  },
  loadedCharacters(data: Character[]) {
    const list = data.filter((el) => ![14, 17, 39].includes(el.char_id));
    this.characters = {
      list,
      count: list.length,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    };
  },
  loadCharactersFailed(error: string) {},
});
characterStore.startLoadingCharacters();
export default characterStore;
