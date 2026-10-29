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

function Clients() {
  const clientLogos = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];
  const groups = [
    [Icon8, "Membership Organisations"],
    [Icon9, "National Associations"],
    [Icon10, "Clubs And Groups"],
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10">
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-gray-700 sm:text-4xl">Our Clients</h2>
          <p className="mt-2 text-gray-600">We have been working with some Fortune 500+ clients</p>
        </header>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between">
          {clientLogos.map((logo, index) => <img key={index} className="h-8 w-8 object-contain sm:h-9 sm:w-9" src={logo} alt="Client logo" />)}
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <h2 className="text-3xl font-semibold leading-tight text-gray-700 sm:text-4xl">Manage your entire community<br className="hidden sm:block" /> in a single system</h2>
          <p className="mt-3 text-gray-600">Who is Nextcent suitable for?</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {groups.map(([icon, title]) => <article key={title} className="rounded-lg px-5 py-6 text-center shadow-sm"><img className="mx-auto h-12 w-12 object-contain" src={icon} alt="" /><h3 className="mx-auto mt-4 max-w-[230px] text-2xl font-bold leading-tight text-gray-700">{title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">Our membership management software provides full automation of membership renewals and payments.</p></article>)}
        </div>

        <div className="mt-16 grid items-center gap-8 sm:mt-20 md:grid-cols-2 md:gap-12">
          <div className="flex justify-center"><img className="w-full max-w-[420px]" src={Icon11} alt="People using a membership platform" /></div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-gray-700 sm:text-4xl">The unseen of spending three years at Pixelgrade</h2>
            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="mt-6 rounded-md bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
