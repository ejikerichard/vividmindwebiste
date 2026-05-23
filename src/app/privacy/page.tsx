import Link from 'next/link';

const sections = [
  {
    title: 'Information We Collect',
    content:
      'When you use our contact form or subscribe to our newsletter, we may collect personal information you provide, such as your name and email address. We only collect what is necessary to respond to your inquiries and send you updates you&apos;ve requested.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to communicate with you, provide customer support, and, if you opt-in, send you newsletters and marketing materials about our projects. We will never sell your personal information to third parties.',
  },
  {
    title: 'Data Security',
    content:
      'We take reasonable measures to protect your information from unauthorized access or disclosure. However, no internet-based site can be 100% secure, so we cannot guarantee absolute security.',
  },
  {
    title: 'Your Rights',
    content:
      'In line with Nigerian data protection principles, you have the right to access, correct, or request the deletion of your personal data. To make such a request, please contact us at',
    email: 'info@vividmindgames.com',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page.',
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="section max-w-[65ch]">
      <div className="text-center">
        <h1 className="text-header-small lg:text-header-large">
          Privacy Policy
        </h1>
        <p className="mt-2">
          Your privacy is important to us. This policy explains what data we
          collect and why, how we use it, and how we keep it safe. This is a
          general overview, not a legally binding document.
        </p>
      </div>
      <ul className="mt-12 grid gap-6">
        {sections.map((section, index) => {
          return (
            <li key={index}>
              <h2 className="text-2xl text-secondary">{section.title}</h2>
              <p className="mt-2">
                {section.content}{' '}
                <Link
                  href={`mailto:${section?.email}`}
                  className="text-primary"
                >
                  {section.email && `${section.email}`}
                </Link>{' '}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
