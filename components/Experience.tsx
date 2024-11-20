export default function Experience() {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experience/internships</h2>
  
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left Section */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">JAN 2024 - JUN 2024</p>
            </div>
  
            {/* Right Section */}
            <div className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-3 font-semibold">
                Associate Software Engineer Intern -{" "}
                <span className="text-sm text-purple-100">Coditas Solutions</span>
              </h6>
  
              {/* Description with justification */}
              <p className="mb-4 text-neutral-400 text-justify">
                • Developed RAG (Retrieval-Augmented Generation) systems using data from PDFs, websites, YouTube
                videos, and SQL databases, integrating OpenAI API, Whisper model, and Langchain technology for enhanced
                content retrieval, transcription, and data interaction.
                <br />
                • Designed and implemented a robust SQL database RAG system that enabled natural language queries,
                leading to a 50 percent reduction in time spent on data retrieval and enhancing decision-making speed across
                teams.
                <br />
                • Utilized Langchain technology to build custom pipelines for RAG systems, integrating various large
                language models (LLMs) and embedding models, enhancing system flexibility and performance.
                <br />
                • Learned Python, HTML, CSS, JavaScript, SQL, and Django through training sessions, applying this knowledge
                to industry-level projects and building APIs and applications, demonstrating practical AI and web
                development skills.
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
        </div>
      </div>
    );
  }
  