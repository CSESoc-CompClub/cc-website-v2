import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import security from './../assets/events/security.jpg';


export default function SyllabusAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div class='pt-7 pb-7 flex flex-row items-center justify-center w-50 h-500 block md:hidden'>
            <div class='w-3/4 h-64 rounded-lg'>
                <Accordion allowZeroExpanded='true' class='text-center rounded-sm'>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton class='bg-gradient-to-r from-[#0F182A] to-blue-800 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                                Coding Basics
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Do you want to learn the basics of Computer Science? 
                                At Compclub, we run introductory workshops on the coding languages C and Python, 
                                to help introduce students to coding through practical 
                                teaching of the worlds most used programming languages. 
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem class='pt-1'>
                        <AccordionItemHeading>
                            <AccordionItemButton class='bg-gradient-to-r from-blue-900 to-indigo-500 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                                Web Dev
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Ever wanted to build your own website?
                                Come and learn about the wild wacky world of Web development.
                                You’ll gain insight into the HTML and CSS languages, the backbones of
                                the entire internet, allowing you to not only create your own website, but
                                personalise it to fit any dream you have.
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
                                Staying safe online is a lot more then just making sure your passwords 
                                include a number and a special character! 
                                Learn about the world of online security, 
                                with an introduction into encryption and cryptography through a special competition
                                called Capture the flag. 
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem class='pt-1'>
                        <AccordionItemHeading>
                            <AccordionItemButton class='bg-gradient-to-r from-indigo-300 to-indigo-200 text-white hover:bg-[#466fc2] hover:underline text-md font-normal rounded-xl px-2 py-1'>
                                Game Dev
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Ever wanted to see how computer games are made? 
                                Come and learn about different aspects
                                of game design and what it takes
                                to make a game fun. With this new knowledge, 
                                you will then get the chance to make your own game yourself!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}