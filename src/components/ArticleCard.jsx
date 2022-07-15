export default function ArticleCard() {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 max-w-sm">
        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
          <img
            class="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        <div class="p-6 text-left">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        </a>
      </div>
    </div>
  );
}
