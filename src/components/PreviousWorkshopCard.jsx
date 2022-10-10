export default function ResourceCard() {
  return (
    <div>
      <div class="shadow-md bg-sky-100 rounded-3xl">
        <div class="shadow-md bg-gradient-to-r from-blue-600 to-[#0c0539] max-w-lg rounded-3xl">
          <div class="border-b border-white-300 rounded-t-md p-4">
            <div class="flex justify-center text-2xl text-white font-bold">
              Previous Workshops
            </div>
          </div>
          <div class="flex justify-center bg-sky-100 p-4">
            If you would like to look at the resources from the previous workshops, click the link below!
          </div>
          <div class="flex justify-center px-4 py-2 bg-sky-100 rounded-b-xl">
            <a href="/shrek">
            <button class="bg-gradient-to-r from-blue-600 to-[#0c0539] text-white hover:bg-green-500 hover:underline text-md font-normal rounded-xl px-2 py-1">
                Link to Folder
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
