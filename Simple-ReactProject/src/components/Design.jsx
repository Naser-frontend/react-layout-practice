 import designimg from "../assets/images/icons/Frame 35.svg"
function Design (){
    return(
        <section className="flex justify-around items-center">
            <div>
                <img className="w-lg " src={designimg} alt="" />
            </div>
            <div className="w-2xl ">
                <h2 className="text-4xl">How to design your site footer like we did</h2>
                <p className="text-sm mt-5">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt 
                molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at 
                libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta 
                nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer 
                 in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi 
                 ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="bg-green-600 mt-7 p-2 px-5 rounded-[5px]">Learn More</button>
            </div>
        </section>
    )
}
export default Design;