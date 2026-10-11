import icon1 from "../assets/images/icons/Icon (3).svg"
import icon2 from "../assets/images/icons/Icon (4).svg"
import icon3 from "../assets/images/icons/Icon (5).svg"
import icon4 from "../assets/images/icons/Icon (6).svg"

function Overview(){
    return(
        <section className="bg-gray-100 flex justify-around  items-center  h-64">
            <div className=" flex flex-col ml-auto">
                 <h2 className="font-bold text-[35px]">Helping a local </h2> 
                 <h2 className="text-green-600 text-2xl">business reinvent itself</h2> 
                 <p className="text-[20px]">We reached here with our hard work and dedication</p>
            </div>
            <div className="flex ml-auto flex-col m-auto ml-10">

               <div className="flex ">
                 <div className="w-35 flex">
                    <img className="w-10 self-center " src={icon1} alt="" />
                   <div className="flex flex-col p-2 justify-center">
                     <p className="text-[20px]">2,245,341 </p>
                     <p>Members</p>
                   </div>
                </div>
                <div className="w-35 flex">
                    <img className="w-25 self-center " src={icon2}  alt="" />
                   <div className="flex flex-col p-2 justify-center">
                     <p  className="text-[20px]">828,867</p>
                    <p>Bookings</p>
                   </div>
                </div>
               </div>
                
                <div className="flex">
                    
                <div className="w-35 flex">
                    <img className="w-10 self-center " src={icon3}  alt="" />
                   <div className="flex flex-col p-2 justify-center">
                     <p  className="text-[20px]">46,328</p>
                    <p>Clubs</p>
                   </div>
                </div>
                <div className="w-35 flex">
                    <img className="w-10 self-center " src={icon4}  alt="" />
                  <div className="flex flex-col p-2 justify-center">
                      <p  className="text-[20px]">1,926,436</p>
                    <p>Payments</p>
                  </div>
                </div>
                </div>

            </div>
        </section>
    )
}
export default Overview