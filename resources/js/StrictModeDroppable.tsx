import { useEffect, useState } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";


export const StrictModeDroppable =  ({children, ...props}: DroppableProps) => {
    const [enabled, setEnable] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnable(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnable(false);
        }

    }, []);

    if (!enabled) {
        return null;
    }

    return <Droppable {...props}>{children}</Droppable>;
};
