import { Flex, Text } from "@chakra-ui/react"
import { useDraggable } from "@dnd-kit/core"
import { useEffect } from "react";
import {CSS} from '@dnd-kit/utilities';

interface DraggableCardInterface{
    title:string,
    id:string,
    section:string,
}


export const DraggableCard :React.FC<DraggableCardInterface>=({title,id,section})=>{

    const {setNodeRef,listeners,attributes,isDragging,transform}=useDraggable({
        id:id,
        data:{
            title:title,
            section:section,// from which section it belongs to 
        }
        
    });

    useEffect(()=>{
        console.log("Dragging statuts",isDragging)
    },[isDragging])

    return(
        <>

            <Flex 
                backgroundColor="grey"
                padding={2}
                margin={2}
                borderRadius={8}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                transform={CSS.Translate.toString(transform)}
                border="2px solid black.500"
                
            >
                <Text
                    color="white"
                >{title}</Text>
            </Flex>
        </>
    )
}