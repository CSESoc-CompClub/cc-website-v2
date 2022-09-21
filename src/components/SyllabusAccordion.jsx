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
        <div class='py-10 flex flex-row items-center justify-center w-50 h-500 block md:hidden'>
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
                                Staying safe online is a lot more then just making sure your passwords are strong! 
                                Learn about the world of online security, as well as introduction into 
                                encryption and cryptography 
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
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}