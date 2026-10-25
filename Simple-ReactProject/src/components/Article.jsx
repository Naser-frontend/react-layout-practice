import articleImage1 from "../assets/images/image 18.jpg"
import articleImage2 from "../assets/images/image 19.jpg"
import articleImage3 from "../assets/images/image 20.jpg"

const articles = [
  {
    image: articleImage1,
    imageAlt: "Person working on a laptop at home",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: articleImage2,
    imageAlt: "Laptop, coffee, and notes on a desk",
    title: "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: articleImage3,
    imageAlt: "Person using a laptop at a desk",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
]

function Article() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            Caring is the new marketing
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            The Nextcent blog is the best place to read about the latest membership insights,
            <br className="hidden sm:block" /> trends and more. See who’s joining the community, read about how our community
            <br className="hidden sm:block" /> are increasing their membership income and lot’s more.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            <article key={article.title} className="relative pb-16">
              <img
                className="h-52 w-full rounded-md object-cover sm:h-48"
                src={article.image}
                alt={article.imageAlt}
              />
              <div className="absolute inset-x-4 top-36 flex min-h-40 flex-col items-center justify-between rounded-lg bg-gray-50 px-5 py-4 text-center shadow-lg sm:top-40">
                <h3 className="text-base font-semibold leading-6 text-gray-600">
                  {article.title}
                </h3>
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
                  href="#blog"
                >
                  Readmore <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Article
