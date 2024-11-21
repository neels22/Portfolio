import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div>
        {/* first project  */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">RAG</p>
            <Link href="https://github.com/neels22/gen-ai-projects">
              <Image
                src={"/projects/gen-ai.png"}
                alt="img1"
                width={250}
                height={250}
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/4 max-w-xl">
            <h6 className="mb-3 font-semibold">
              Retrieval Augmented Generation Systems
            </h6>

            {/* Description with justification */}
            <p className="mb-4 text-neutral-400 text-justify">
              • Developed RAG (Retrieval-Augmented Generation) systems using
              data from PDFs, websites, YouTube videos, and SQL databases,
              integrating OpenAI API, Whisper model, and Langchain technology
              for enhanced content retrieval, transcription, and data
              interaction.
              <br />
              • Designed and implemented a robust SQL database RAG system that
              enabled natural language queries, leading to a 50 percent
              reduction in time spent on data retrieval and enhancing
              decision-making speed across teams.
              <br />
              • Utilized Langchain technology to build custom pipelines for RAG
              systems, integrating various large language models (LLMs) and
              embedding models, enhancing system flexibility and performance.
              <br />
            </p>

            {/* Tags */}
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Generative-ai
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Langchain
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Postgres
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              LLM's
            </span>
          </div>
        </div>

        {/* second project  */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">Travelapp-ui</p>
            <Link href="https://travelapp.indraneelsarode.com/">
              <Image
                src={"/projects/travelapp.png"}
                alt="img1"
                width={250}
                height={250}
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/4 max-w-xl">
            <h6 className="mb-3 font-semibold">Travelapp-ui Porject</h6>

            {/* Description with justification */}
            <p className="mb-4 text-neutral-400 text-justify">
              • Developed a responsive travel app UI using Next.js, React, and
              Tailwind CSS, showcasing interactive features like camp area
              highlights and reviews. Deployed on Vercel for fast and reliable
              performance, the design emphasizes user engagement and seamless
              navigation for adventure planning.
              <br />• This is just a UI website currently has not functionality.
            </p>

            {/* Tags */}
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Nextjs
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              React
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Tailwind CSS
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Vercel
            </span>
          </div>
        </div>

        {/* third project  */}

        <div className="mb-8 flex flex-wrap lg:justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">BubbleGame</p>
            <Link href="https://bubblegame-neeljsproject.netlify.app/">
              <Image
                src={"/projects/game.png"}
                alt="img1"
                width={250}
                height={250}
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/4 max-w-xl">
            <h6 className="mb-3 font-semibold">
              BubbleGame - Javascript based game
            </h6>

            {/* Description with justification */}
            <p className="mb-4 text-neutral-400 text-justify">
              • Developed a Game using Javscript
              <br />
              • Utilized 
              <br />
            </p>

            {/* Tags */}
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Javascript
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
           
          </div>
        </div>

        {/* fourth project */}

        <div className="mb-8 flex flex-wrap lg:justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">NewsExpress</p>
            <Link href="https://newsxpress-neelproject-36ab75.netlify.app/">
              <Image
                src={"/projects/news.png"}
                alt="img1"
                width={250}
                height={250}
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/4 max-w-xl">
            <h6 className="mb-3 font-semibold">NewsExpress - news website</h6>

            {/* Description with justification */}
            <p className="mb-4 text-neutral-400 text-justify">
              • Designed and developed NewsXpress, a news website that fetches up
              to 10 real-time news articles, including images, sources, and
              descriptions. This innovation significantly reduces the time users
              spend browsing multiple news websites.
              <br />
              • Linked news articles to
              official sources for enhanced credibility.
              <br />
              • NewsXpress leverages the NewsAPI to dynamically retrieve the latest news data based on user-specified keywords.
              <br />
            </p>

            {/* Tags */}
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              JavaScript
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
           
          </div>
        </div>

        {/* fifth project  */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">Landing-page</p>
            <Link href="https://confident-quicker-781805.framer.app/">
              <Image
                src={"/projects/shop.png"}
                alt="img1"
                width={250}
                height={250}
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-3/4 max-w-xl">
            <h6 className="mb-3 font-semibold">Landing-Page using Framer</h6>

            {/* Description with justification */}
            <p className="mb-4 text-neutral-400 text-justify">
              • Creadted a Landing Page for a Automobiles Shop using the Framer webiste builder
            </p>

            {/* Tags */}
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Framer
            </span>

          </div>
        </div>


      </div>
    </div>
  );
}
