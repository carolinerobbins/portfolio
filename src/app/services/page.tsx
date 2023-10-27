import Header from "../../components/header";

export default function Services() {
  return (
    <div className="tawney-travels-bg">
      <Header />
      <section className="bg-gray-100 bg-opacity-80 p-10 m-10 rounded-lg shadow-md">
        <h1 className="text-murky-teal text-4xl font-extrabold mb-4">
          Services
        </h1>
        <div className="mb-8">
          <h2 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            Web Development
          </h2>
          <p className="text-lg text-gray-800 mb-2">
            Need a slick, user-friendly website for your hospitality business?
            Let&apos;s chat! I specialize in creating compelling web experiences
            that convert visitors into customers.
          </p>
          <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            Hospitality Consulting
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            With nearly a decade of experience at Expedia and Airbnb, I&apos;ve got the
            insider perspective on what it takes to excel in this space. If
            you&apos;re a hotel looking to transition into the vacation rental
            market, or an Airbnb host looking to optimize, I&apos;m your go-to
            expert. My expertise is pricing and revenue management, but I can
            also support marketing, content, social media, and technology recommendations.
          </p>
          <h3 className="text-murky-teal text-2xl font-semibold text-custom-olive mb-2">
            Travel Planning
          </h3>
          <p className="text-lg text-gray-800 mb-2">
            Love the idea of travel but overwhelmed by the planning? I offer
            personalized travel planning services to make your next adventure a
            breeze.
          </p>
        </div>
      </section>
    </div>
  );
}
