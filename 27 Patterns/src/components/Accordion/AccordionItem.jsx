import { createContext, useContext } from "react";

const AccordionItemContext = createContext(); // 1
export function useAccordionItemContext() { //3
    const ctx = useContext(AccordionItemContext);
    if (!ctx) {
        throw new Error(
            "AccordionItem-related components must be wrapped by <Accordion.Item>."
        );
    }
    return ctx;
}

export default function AccordionItem({ id, className, children }) {
    return (
        // 2
        <AccordionItemContext.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionItemContext.Provider>
    );
}
