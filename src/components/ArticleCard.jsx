export default function ArticleCard(props) {
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 max-w-sm">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img class="rounded-t-lg min-w-full h-[200px]" src={props.img} alt={props.alt} />
          <div class="p-6 text-left">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {props.title}
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}
