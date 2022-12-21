import banner from "../assets/home/compclub_banner.png"
import penguin from "../assets/error/teacherpenguin.PNG"

export default function Error() {
  return (
    <div>
        <img src={banner} class='object-contain h-1/4 w-full'/>
        <h3 class='mt-10 text-3xl font-sans font-bold text-center pt-[75px] my-5'>
            Error: Page not found <br/> <br/> Please use the navbar above to redirect to a proper page
        </h3>

        <img src={penguin} class="sm:h-[600px] sm:w-[600px] w-[400px] h-[400px] justify-center align-center m-auto"/>
        <div id="buffer" class='sm:pb-[200px] pb-[400px]'></div>
    </div>
  );
}
