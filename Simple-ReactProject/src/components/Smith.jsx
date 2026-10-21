import img from "../assets/images/image 9.jpg"
import Icon3 from "../assets/images/icons/Logo (6).svg"
import Icon4 from "../assets/images/icons/Logo (3).svg"
import Icon5 from "../assets/images/icons/Logo (4).svg"
import Icon6 from "../assets/images/icons/Logo (5).svg"
import Icon7 from "../assets/images/icons/Logo (2).svg"
import Icon8 from "../assets/images/icons/Logo.svg"

function Smith() {
  const customerLogos = [Icon3, Icon4, Icon5, Icon6, Icon7, Icon8]

  return (
    <section className="bg-gray-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[minmax(220px,300px)_1fr] md:gap-12">
        <div className="flex justify-center">
          <img
            className="h-48 w-48 rounded-md object-cover shadow-md sm:h-56 sm:w-56"
            src={img}
            alt="Tesla logo"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h2 className="mt-4 text-lg font-semibold text-green-600">Tim Smith</h2>
          <p className="mt-1 text-sm text-gray-500">British Dragon Boat Racing Association</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            {customerLogos.map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                src={logo}
                alt={`Customer ${index + 1}`}
              />
            ))}
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
              href="#customers"
            >
              Meet all customers <span aria-hidden="true">?</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Smith
