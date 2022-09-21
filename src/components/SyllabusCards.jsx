import React from "react";

export default function SyllabusCards(props) {
    return <div>
    {/* Between 800 and 1200 is two rows of 2*/}
    {/*For the gradient have it so the colours go into eahc other. i.e.e the dark blue meets in the middle*/}
    <div>
        <div class='flex flex-row px-[10%] pb-10 hidden md:flex xl:hidden justify-center'>
            <div class="text-center py-5">
                <div class="flex justify-center mb-3 p-4">
                    <div class='flex flex-col'>
                        <div class="shadow-md bg-sky-500 rounded-3xl">
                        <div class="shadow-md bg-gradient-to-r from-indigo-300 to-blue-800 max-w-lg rounded-3xl">
                            <div class="border-b border-white-300 rounded-t-md">
                            <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                <div class='pb-3'>Upcoming Events</div>
                                <p id="event" class="justify-center items-center bg-sky-100 text-base font-normal text-black w-[100%] h-48 pt-7 px-5">
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
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
                        <div class="shadow-md bg-gradient-to-r from-indigo-300 to-blue-800 max-w-lg rounded-3xl">
                            <div class="border-b border-white-300 rounded-t-md">
                            <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                                <div class='pb-3'>Upcoming Events</div>
                                <p id="event" class="justify-center items-center bg-sky-100 text-base font-normal text-black w-[100%] h-48 pt-7 px-5">
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
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


    {/*1200 px and larger is one row of 4*/}
    {/*For the gradient, same as above but outer two are the same but going in, inner two are the same but going in*/}
    <div class='flex flex-row px-[10%] pb-10 hidden xl:flex md:hidden'>
        <div class="text-center py-5 w-96">
            <div class="flex justify-center mb-3 p-4">
                <div class='flex flex-col'>
                    <div class="shadow-md bg-sky-500 rounded-3xl">
                    <div class="shadow-md bg-gradient-to-r from-indigo-300 to-blue-800 max-w-lg rounded-3xl">
                        <div class="border-b border-white-300 rounded-t-md">
                        <div class="flex flex-col justify-center items-center text-xl text-white font-bold pt-2">
                            Upcoming Events <br/>
                            <p id="event" class="justify-center items-center bg-sky-100 text-base font-normal text-black w-[100%]">
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='px-[10%]'>hello</div>
        <div class='px-[10%]'>hello</div>
        <div class='px-[10%]'>hello</div>
    </div>


    </div>
}