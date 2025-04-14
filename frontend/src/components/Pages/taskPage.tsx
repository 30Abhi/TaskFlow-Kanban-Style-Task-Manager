import { Flex, HStack } from "@chakra-ui/react"
import { DropableCard } from "../Atoms/DropableCard"
import { useEffect, useState } from "react"
import { DndContext, rectIntersection } from "@dnd-kit/core"
import CreateTaskModal from "../Modals/CreateTaskModal"

import { getTask, modifyTask } from "@/utils/modifyTask"

interface Card {
  title: string,
  id: string,
  
}

function TaskPage() {

  const[todo,settodo]=useState<Card[]>([]);
  const[ongoing,setongoing]=useState<Card[]>([]);
  const[completed,setcompleted]=useState<Card[]>([]);
  const[userID,setuserID]=useState<string | undefined>();
  const[authToken,setauthToaken]=useState<string | undefined>();

  useEffect(()=>{

    const userId = localStorage.getItem('userid');
    const token = localStorage.getItem('tokken');
    setuserID(userId || undefined);
    setauthToaken(token || undefined);

    if (userId && token) {
      LoadTask(userId, token); // Pass userId and token directly
    }

  },[]);

  async function LoadTask(userID:string,authToken:string){

    const{todoTasks,ongoingTasks,completedTasks}=await getTask(userID,authToken);

    
    settodo(todoTasks);
    setongoing(ongoingTasks);
    setcompleted(completedTasks);

  }

  return (
    <>

      <DndContext  
        onDragEnd={(e)=>{

          console.log(e);

          const id=e.active?.id;// card being dragged

          const title=e.active.data.current?.title; // title of card being dragged

          const prevStatus=e.active.data.current?.section; // pev container/section of card

          const currentStatus=e.over?.id ||"";// section on which card is dropped on

          if(currentStatus && currentStatus!=prevStatus){
              
              if(userID && authToken){
                modifyTask(id.toString(),currentStatus.toString(),authToken?.toString()||"");
                LoadTask(userID,authToken)
              }
          }

        }}

        collisionDetection={rectIntersection}
      
      >
        <Flex
          backgroundColor="grey"

          padding={2}

        >
          <HStack>
            <DropableCard title="todo" items={todo} />
            <DropableCard title="ongoing" items={ongoing} />
            <DropableCard title="completed" items={completed} />
          </HStack>
        </Flex>
      </DndContext>

       <CreateTaskModal />

    </>
 
  )
}

export default TaskPage
