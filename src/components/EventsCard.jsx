
export default function UpcomingEvent(props) {
    return (
      <div id="event" class="flex justify-center bg-sky-100 p-4">
        <div> 
            <div id="name" class="text-lg font-bold">
              {props.name}
            </div>
            <div id="shortdescrip">
              {props.description}
            </div>
            <div id="details">
              <br/>
              <div id="header" class="font-semibold">
                === Event Details ===
              </div>
              <div>
                Date: {props.date} <br/>
                Location: {props.location} <br/>
                Time: {props.time} <br/>
              </div>
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