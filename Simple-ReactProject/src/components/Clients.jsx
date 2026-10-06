import Icon1 from "../assets/images/icons/Logo.svg";
import Icon2 from "../assets/images/icons/Logo (1).svg";
import Icon3 from "../assets/images/icons/Logo (6).svg";
import Icon4 from "../assets/images/icons/Logo (3).svg";
import Icon5 from "../assets/images/icons/Logo (4).svg";
import Icon6 from "../assets/images/icons/Logo (5).svg";
import Icon7 from "../assets/images/icons/Logo (6).svg";
import Icon8 from "../assets/images/icons/Icon.svg";
import Icon9 from "../assets/images/icons/Icon (1).svg";
import Icon10 from "../assets/images/icons/Icon (2).svg";
import Icon11 from "../assets/images/icons/Frame 35.svg";


function Clients(){
    return(
        <section>
            <div className=" flex flex-col items-center mt-10">
                <h2 className="text-4xl">Our Clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div>
                <div className="flex justify-around mt-10 items-center">
                    <img src={Icon1} alt="icon1" />
                    <img src={Icon2} alt="icon2" />
                    <img src={Icon3} alt="icon3" />
                    <img src={Icon4} alt="icon4" />
                    <img src={Icon5} alt="icon5" />
                    <img src={Icon6} alt="icon6" />
                    <img src={Icon7} alt="icon7" />

                </div>
            </div>

            <div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl mt-12">Manage your entire communityin <br /> </h2>
                    <p className="mt-5">Who is Nextcent suitable for?</p>
                </div>

               <div className="flex mt-7 justify-around  items-center ">

                 <div className="text-center w-[300px] ">
                    <img className="mx-auto " src={Icon8} alt="icon8" />
                    <h3 className="text-3xl mt-7">Membership Organisations</h3>
                    <p  className="mt-5">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                  <div className="text-center w-[300px] ">
                    <img className="mx-auto" src={Icon9} alt="icon9" />
                    <h3 className="text-3xl mt-7">National Associations</h3>
                    <p  className="mt-5">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                  <div className="text-center w-[300px] ">
                    <img className="mx-auto" src={Icon10} alt="icon1-" />
                    <h3 className="text-3xl mt-7">Clubs And Groups</h3>
                    <p  className="mt-5">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

               

               </div>
                 <div className="flex items-center justify-center mt-10 h-[500px]">
                    <div className="w-[400px] mr-34"><img  className="w-4xl" src={Icon11} alt="" /></div>
                    <div className="w-[600px]">
                        <h2 className="text-4xl ">The unseen of spending three years at Pixelgrade</h2>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed 
                        accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed 
                        porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam 
                        quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className="bg-green-600 mt-7 p-2 px-5 text-white rounded-[5px]">Learn More</button>
                    </div>
                 </div> 
            </div>
        </section>
    )
}
export default Clients;