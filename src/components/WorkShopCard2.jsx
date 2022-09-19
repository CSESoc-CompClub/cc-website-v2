import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import security from './../assets/events/security.jpg';


export default function WorkShopCard2(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div class='w-3/4 h-64 rounded-lg '>
            <Accordion allowZeroExpanded='true' class='text-center rounded-sm'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-[#0F182A] to-blue-800 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem class='pt-1'>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-blue-900 to-indigo-500 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem class='pt-1'>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-indigo-500 to-indigo-300 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem class='pt-1'>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-indigo-300 to-indigo-200 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>


                {/*$$$$$$$$$$$*/}

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-[#0F182A] to-blue-800 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem class='pt-1'>
                    <AccordionItemHeading>
                        <AccordionItemButton class='bg-gradient-to-r from-indigo-300 to-blue-800 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                            Security
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>


            
            
        </div>
    )
}