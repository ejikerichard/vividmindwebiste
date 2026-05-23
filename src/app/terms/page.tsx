const sections = [
  {
    id: 1,
    title: 'Use of Our Website',
    content:
      'Our website is provided for informational purposes about our studio and projects. You agree not to use the site for any unlawful purpose or in any way that could harm our reputation or services.',
  },
  {
    id: 2,
    title: 'Intellectual Property',
    content:
      'All content on this site, including text, graphics, logos, and game concepts, is the property of VividMindGames and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from our content without our express permission.',
  },
  {
    id: 3,
    title: 'Disclaimer of Warranties',
    content:
      'This website is provided "as is," without any warranties of any kind. We do not guarantee that the site will be error-free or uninterrupted.',
  },
  {
    id: 4,
    title: 'Governing Law',
    content:
      'These terms are generally guided by the principles of the laws of the Federal Republic of Nigeria. Any disputes will be handled amicably.',
  },
];

const Terms = () => {
  return (
    <section className="section max-w-[65ch]">
      <div className="text-center">
        <h1 className="text-header-small lg:text-header-large">
          Terms of Service
        </h1>
        <p className="mt-2">
          Welcome to VividMindGames! By using our website, you agree to these
          terms. This is a general overview, not a legally binding contract.
        </p>
      </div>
      <ul className="mt-12 grid gap-6">
        {sections.map((section, index) => {
          return (
            <li key={index}>
              <h2 className="text-2xl text-secondary">{section.title}</h2>
              <p className="mt-2">{section.content} </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Terms;
