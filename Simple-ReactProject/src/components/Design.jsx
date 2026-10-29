import designimg from "../assets/images/icons/Frame 35.svg";

function Design() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12 lg:px-10">
        <div className="flex justify-center"><img className="w-full max-w-[420px]" src={designimg} alt="Illustration of a person designing a website" /></div>
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-gray-700 sm:text-4xl">How to design your site footer like we did</h2>
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button className="mt-6 rounded-md bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Design;
