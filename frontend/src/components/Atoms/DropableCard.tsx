import { Card, Flex, Text } from "@chakra-ui/react"
import { useDroppable } from "@dnd-kit/core"
import { DraggableCard } from "./DraggableCard"

interface Card{
    title:string,
    id:string,

}

interface DropableCardInterface{
    title:string
    items:Card[]
}

export const DropableCard : React.FC<DropableCardInterface>=({
    title,
    items
})=>{

    const{setNodeRef}=useDroppable({
        id:title,
    })
    return (
        <Flex
            flexDir='column'
            backgroundColor='black'
            margin={2}
            padding={2}
           
        >
            <Text color="white">
                {title}
            </Text>

            <Flex
                padding="2"
                minH="15rem"
                ref={setNodeRef}
                flexDir='column'
                
            >

                {items.map((c:Card)=>(
                    <DraggableCard section={title} title={c.title} id={c.id}/>
                ))}


            </Flex>

        </Flex>
    )
}