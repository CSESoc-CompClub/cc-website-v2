import React from "react";

export default function SyllabusCards(props) {
    return <div>
    {/* Between 800 and 1200 is two rows of 2*/}
    {/*For the gradient have it so the colours go into eahc other. i.e.e the dark blue meets in the middle*/}
        <div>
            {/*row one*/}
            <div class='flex flex-row px-[10%] pb-10 hidden md:flex justify-center'>
                <div class="text-center py-5">
                    <div class="flex justify-center mb-3 p-4">
                        <div class='flex flex-col'>
                            <div class="shadow-md bg-sky-500 rounded-3xl">
                            <div class="shadow-md bg-gradient-to-r from-blue-800 to-indigo-300 max-w-lg rounded-3xl">
                                <div class="border-b border-white-300 rounded-t-md">
                                <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                    <div class='pb-3'>Coding Basics</div>
                                    <p id="event" class="justify-center items-center bg-sky-100 lg:text-base md:text-sm font-normal text-black w-[100%] h-[210px] lg:pt-7 md:pt-3 px-5">
                                        Do you want to learn the basics of Computer Science? 
                                        At Compclub, we run introductory workshops on the coding languages C and Python, 
                                        to help introduce students to coding through practical 
                                        teaching of the worlds most used programming languages. 
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center py-5">
                    <div class="flex justify-center mb-3 p-4">
                        <div class='flex flex-col'>
                            <div class="shadow-md bg-sky-500 rounded-3xl">
                            <div class="shadow-md bg-gradient-to-r from-indigo-300 blue-800  to-blue-800 max-w-lg rounded-3xl">
                                <div class="border-b border-white-300 rounded-t-md">
                                <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                    <div class='pb-3'>Web Dev</div>
                                    <p id="event" class="justify-center items-center bg-sky-100 lg:text-base md:text-sm font-normal text-black w-[100%] h-[210px] lg:pt-7 md:pt-3 px-5">
                                        Ever wanted to build your own website?
                                        Come and learn about the wild wacky world of Web development.
                                        You’ll gain insight into the HTML and CSS languages, the backbones of
                                        the entire internet, allowing you to not only create your own website, but
                                        personalise it to fit any vision you have.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*row two*/}
            <div class='flex flex-row px-[10%] pb-10 hidden md:flex justify-center'>
                <div class="text-center py-5">
                    <div class="flex justify-center mb-3 p-4">
                        <div class='flex flex-col'>
                            <div class="shadow-md bg-sky-500 rounded-3xl">
                            <div class="shadow-md bg-gradient-to-r from-blue-800 to-indigo-300 max-w-lg rounded-3xl">
                                <div class="border-b border-white-300 rounded-t-md">
                                <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                    <div class='pb-3'>Security</div>
                                    <p id="event" class="justify-center items-center bg-sky-100 lg:text-base md:text-sm font-normal text-black w-[100%] h-[210px] lg:pt-7 md:pt-3 px-5">
                                        Staying safe online is a lot more then just making sure your passwords 
                                        include a number and a special character! <br/>
                                        Learn about the world of online security, 
                                        with an introduction into encryption and cryptography through a special competition
                                        called Capture The Flag. 
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center py-5">
                    <div class="flex justify-center mb-3 p-4">
                        <div class='flex flex-col'>
                            <div class="shadow-md bg-sky-500 rounded-3xl">
                            <div class="shadow-md bg-gradient-to-r from-indigo-300 blue-800 to-blue-800 max-w-lg rounded-3xl">
                                <div class="border-b border-white-300 rounded-t-md">
                                <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                    <div class='pb-3'>Game Dev</div>
                                    <p id="event" class="justify-center items-center bg-sky-100 lg:text-base md:text-sm font-normal text-black w-[100%] h-[210px] lg:pt-7 md:pt-3 px-5">
                                        Ever wanted to see how computer games are made? 
                                        Come and learn about different aspects
                                        of game design and what it takes
                                        to make a game fun. With this new knowledge, 
                                        you will then get the chance to make your own game yourself!
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>


    </div>
}