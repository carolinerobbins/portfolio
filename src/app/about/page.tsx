import Header from "../../components/header";

export default function About() {
  return (
    <div className="tawney-travels-bg">
      <Header />
      <section className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md">
        <h1 className="text-murky-teal text-4xl font-extrabold mb-4">
          About Caroline
        </h1>
        {/* Who I Am */}
        <div className="mb-8">
          <h2 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            Who I Am
          </h2>
          <p className="text-lg text-gray-800 mb-2">
            Hey there! I&apos;m Caroline, a seasoned professional in travel tech
            and software development. With a decade of industry experience under
            my belt, I&apos;ve worn many hats — from managing accounts at
            leading companies like Expedia and Airbnb, to diving deep into the
            world of software development.
          </p>
          <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            My Passion
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Ever since I was a child, inspired by shows like &quot;Great
            Hotels,&ldquo; I knew I was destined for the travel industry. From
            mimicking TV hosts on family vacations to pursuing formal education
            at the Hotel School at Cornell, my journey has been one for the
            books (or perhaps a travel blog).
          </p>
          <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            My Skills
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            I&apos;m proficient in TypeScript, React, React Native, Python, AWS,
            and databases (SQL & NoSQL). But my tech skills aren&apos;t the only
            thing that defines me. My knack for team collaboration, project
            management, and communication helps me create innovative solutions
            that enhance user experiences and tackle real-world challenges.
          </p>
        </div>
      </section>
    </div>
  );
}
