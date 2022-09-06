export default function ResourceCard() {
  return (
    <div>
      <div class="shadow-md bg-sky-100 rounded-3xl">
        <div class="shadow-md bg-sky-500 max-w-lg rounded-3xl">
          <div class="border-b border-white-300 rounded-t-md p-4">
            <div class="flex justify-center text-2xl text-white font-bold">
              Summer Workshop
            </div>
          </div>
          <div class="flex justify-center bg-sky-100 p-4">
            Held at March 23, 2022. This workshop covers basic web-development
            (HTML, CSS) and Python!
          </div>
          <div class="flex justify-center px-4 py-2 bg-sky-100 rounded-b-xl">
            <a href="/shrek">
              <button class="bg-violet-500 text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                Link to Folder
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
