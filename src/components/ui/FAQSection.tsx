const FAQSection = () => {
  const faqs = [
    {
      q: "How do you calculate dog years in human years?",
      a: "The traditional '1 dog year = 7 human years' rule is outdated and inaccurate. Modern veterinary science shows that dogs age much faster in their first two years of life, then the aging rate varies significantly based on the dog's breed size. Our calculator uses a scientifically-backed formula: the first year equals approximately 15 human years for small and medium dogs, the second year adds about 9 more human years, and each subsequent year adds 4-5 human years for small/medium dogs or 6-7 for large dogs."
    },
    {
      q: "Is the 7-year rule for dog years accurate?",
      a: "No, the 7-year rule is a myth that has been debunked by veterinary researchers. This oversimplified rule fails to account for the non-linear nature of canine aging and the significant differences between dog breeds and sizes. A 1-year-old dog is developmentally closer to a 15-year-old human, not a 7-year-old. Different breeds age at dramatically different rates &mdash; smaller dogs generally live longer and mature more slowly after their first two years."
    },
    {
      q: "Why do small dogs live longer than large dogs?",
      a: "This is one of the most interesting phenomena in canine biology. Scientists believe larger dogs age faster due to higher growth rates and metabolic demands during development. Large breed puppies grow much more rapidly, which may accelerate cellular aging. Research also suggests that large dogs may have higher levels of growth hormone IGF-1, which is associated with shorter lifespans across many species. Small dogs typically live 12-16 years while giant breeds often live only 8-10 years."
    },
    {
      q: "How old is my 1-year-old dog in human years?",
      a: "A 1-year-old dog is approximately 15 human years old for small and medium breeds, and about 14 human years for large breeds. At this age, your dog has reached sexual maturity and is developmentally similar to a teenager. They have most of their adult teeth, can reproduce, but are still learning and developing emotionally and socially. This is a critical period for continued socialization and training."
    },
    {
      q: "How old is my 10-year-old dog in human years?",
      a: "A 10-year-old small dog (under 20 lbs) is approximately 56 human years old. A 10-year-old medium dog (20-50 lbs) is approximately 64 human years old. A 10-year-old large dog (over 50 lbs) is approximately 80 human years old. At this age, your dog is a senior and may need adjustments to diet, exercise routines, and more frequent veterinary checkups to maintain good health."
    },
    {
      q: "What are the life stages of a dog?",
      a: "Dogs go through five main life stages: Puppy (0-1 year, equivalent to human infancy through childhood), Young Adult (1-2 years, equivalent to human teenage/young adult years), Adult (2+ years, equivalent to human ages ~24-50), Senior (varies by size, roughly equivalent to human ages ~50-70), and Geriatric (varies by size, equivalent to human ages ~70+). The transition ages differ by breed size. Small dogs enter seniorhood later (around 10 years) while large dogs become seniors much earlier (around 6 years)."
    },
    {
      q: "What is the average lifespan of different dog breeds?",
      a: "Dog lifespans vary dramatically by breed and size. Small breeds like Chihuahuas (14-16 years), Toy Poodles (14-16 years), and Dachshunds (12-15 years) live the longest. Medium breeds like Beagles (12-15 years), Border Collies (12-14 years), and Bulldogs (8-10 years) have moderate lifespans. Large breeds like German Shepherds (9-12 years), Golden Retrievers (10-13 years), and Labrador Retrievers (10-12 years) live shorter lives. Giant breeds like Great Danes (8-10 years), Saint Bernards (8-10 years), and Irish Wolfhounds (6-8 years) have the shortest lifespans. Mixed-breed dogs often live 1-2 years longer than purebreds due to genetic diversity."
    },
    {
      q: "How can I help my dog live longer?",
      a: "Several key factors can help extend your dog's healthy lifespan: 1) Maintain a healthy weight through proper diet and portion control &mdash; obesity reduces lifespan by up to 2.5 years. 2) Provide regular exercise appropriate for your dog's breed and age. 3) Schedule annual veterinary checkups and stay current on vaccinations and preventatives. 4) Practice good dental hygiene &mdash; dental disease can lead to heart, liver, and kidney problems. 5) Feed high-quality, age-appropriate nutrition. 6) Provide mental stimulation and socialization. 7) Spay or neuter your dog, which has been associated with longer lifespans in some studies."
    },
    {
      q: "At what age is a dog considered a senior?",
      a: "The age at which a dog is considered senior depends on their size. Small dogs are generally considered senior around 10-12 years old. Medium-sized dogs become seniors around 8-10 years old. Large and giant breed dogs are considered seniors as early as 6-8 years old. Once your dog reaches senior status, veterinarians recommend more frequent checkups (every 6 months) and may suggest screening for age-related conditions like arthritis, kidney disease, and cognitive decline."
    },
    {
      q: "Do male and female dogs age differently?",
      a: "There is no significant difference in aging rates between male and female dogs. However, spayed and neutered dogs tend to live slightly longer than intact dogs, with studies showing neutered males live 13.8% longer and spayed females live 26.3% longer on average. This is likely due to reduced risks of reproductive cancers and infections, as well as reduced risk-taking behavior that can lead to accidents and injuries."
    }
  ];

  return (
    <section id="faq" className="section-box">
      <h2>Frequently Asked Questions About Dog Years</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question">{index + 1}. {faq.q}</div>
          <div className="faq-answer">{faq.a}</div>
        </div>
      ))}
    </section>
  );
};

export default FAQSection;