import { create } from "zustand"
interface Card {
    title: string,
    id: string,
  
  }
interface Store{
    todo:Card[];
    ongoing:Card[];
    completed:Card[];

    settodo:(e:string,t:string)=>void;
    setongoing:(e:string,t:string)=>void;
    setcompleted:(e:string,t:string)=>void;

    removeCard:(section:string,id:string)=>void,
}

export const useCardStore = create<Store>()((set) => ({
    todo: [],
    ongoing: [],
    completed: [],
  
    settodo: (incomingtitle: string, incomingid: string) =>
      set((state) => ({
        todo: [...state.todo, { title: incomingtitle, id: incomingid }],
      })),
    setongoing: (incomingtitle: string, incomingid: string) =>
      set((state) => ({
        ongoing: [...state.ongoing, { title: incomingtitle, id: incomingid }],
      })),
    setcompleted: (incomingtitle: string, incomingid: string) =>
      set((state) => ({
        completed: [...state.completed, { title: incomingtitle, id: incomingid}],
      })),

       removeCard:(section:string,cardId:string)=>{
        if(section==='todo'){
        //   set(todo.filter(item=>item.id!=cardId));
          set((state) => ({
            todo: state.todo.filter(item=>item.id!=cardId),
          }));
        }
        else if(section==='ongoing'){
            set((state) => ({
                ongoing: state.ongoing.filter(item=>item.id!=cardId),
              }));
        }
        else if(section==='completed'){
            set((state) => ({
                completed: state.completed.filter(item=>item.id!=cardId),
              }));
        }
    
      }

  }));

