import { memo } from "react"
import { Result } from "../interface"
import { Card } from "./"

interface Props { data: Result[] }

export const LayoutCards = memo(({data}:Props) => {
    return (
        <>
            {
                (data.length > 0) && data.map( character => (
                    <Card {...character} key={character.id}/>
                ))
            }
        </>
    )
})