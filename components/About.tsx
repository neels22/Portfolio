import Image from "next/image";
export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <Image src="/neel2.jpeg" height={400} width={400} alt="image" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 py-6 max-w-xl">
              I'm a Software Engineering graduate student from San Jose State
              University, I have experience working in backend, full stack and
              on iOS apps. I'm passionate about building scalable, efficient and
              robust systems. I love improving user experience of software. my
              interests lie in backend development , distributed systems , full
              stack development , web application development{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
