import UpcomingEvent from './EventsCard.jsx';
import MentorRecruitment from '../assets/about-us/mentor-recruitment.png';
import SubComRecruitment from '../assets/about-us/subcom-recruitment.png';

export default function EventsCard(props) {
  return (
    <div id="event" class="flex justify-center p-4">
    <div> 
        <img src={MentorRecruitment} alt='' class='object-contain' />
        <div id="name" class="text-lg font-bold">
          {props.name}
        </div>
        <div id="shortdescrip">
          {props.description}
        </div>
        <br/>
        <div id="link">
          <a href={props.link} target="_blank">
            <button class="bg-[#0f182a] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
              Learn more and sign up!
            </button>
          </a>
        </div>
    </div>
  </div>
  );
}