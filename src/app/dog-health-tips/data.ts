export interface HealthArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  intro: string;
  sections: { heading: string; content: string; }[];
  tips: string[];
  relatedSearches: string[];
}

const articles: Record<string, HealthArticle> = {
  'dog-nutrition-guide': {
    slug: 'dog-nutrition-guide',
    title: 'Complete Guide to Dog Nutrition: What to Feed Your Dog at Every Age',
    metaTitle: 'Complete Guide to Dog Nutrition: What to Feed Your Dog at Every Age',
    metaDescription: 'Ultimate dog nutrition guide covering kibble vs raw, portion sizes, foods to avoid, homemade diets, and nutritional needs for puppies, adults, and senior dogs.',
    category: 'Dog Health Tips',
    intro: 'Good nutrition is the foundation of your dog\'s health and longevity. What you put in your dog\'s bowl directly impacts their energy levels, coat quality, immune system, and lifespan. With so many conflicting opinions about dog food — kibble vs. raw, grain-free vs. grain-inclusive, homemade vs. commercial — it can be overwhelming for even experienced dog owners.',
    sections: [
      {
        heading: 'Understanding Canine Nutritional Needs',
        content: 'Dogs are omnivores with carnivorous tendencies. Unlike obligate carnivores like cats, dogs have evolved alongside humans and can digest a wider variety of foods including grains, vegetables, and fruits. A balanced dog diet requires six essential nutrients: protein (for muscle maintenance and repair), fats (for energy and coat health), carbohydrates (for quick energy), vitamins (for metabolic functions), minerals (for bone health and fluid balance), and water (the most critical nutrient of all).',
      },
      {
        heading: 'Kibble vs. Wet Food vs. Raw: Which Is Best?',
        content: 'High-quality commercial kibble is the most popular choice for good reason: it is convenient, shelf-stable, nutritionally balanced, and affordable. Look for brands that list a named meat as the first ingredient and meet AAFCO standards. Wet food has higher moisture content (beneficial for dogs that do not drink enough water) and tends to be more palatable for picky eaters. Raw diets have passionate advocates who cite shinier coats and better dental health, but they carry real risks of bacterial contamination (Salmonella, E. coli) and nutritional imbalances if not carefully formulated. The best choice depends on your dog\'s individual needs, your budget, and your comfort level.',
      },
      {
        heading: 'Foods That Are Toxic to Dogs',
        content: 'Several common human foods are dangerous or even fatal to dogs. Chocolate contains theobromine and caffeine, which dogs cannot metabolize — dark chocolate is most dangerous. Grapes and raisins can cause sudden kidney failure even in small amounts. Onions, garlic, chives, and leeks damage red blood cells and cause anemia. Xylitol, a common sugar substitute in sugar-free gum, peanut butter, and baked goods, causes rapid insulin release leading to life-threatening hypoglycemia and liver failure. Macadamia nuts cause weakness, vomiting, and hyperthermia. Alcohol, raw dough, moldy foods, and excessive salt are also dangerous.',
      },
      {
        heading: 'Portion Control and Feeding Frequency',
        content: 'Overfeeding is the most common nutritional mistake dog owners make. Obesity affects over 50% of dogs in the United States and shortens lifespan by up to 2.5 years. Puppies need 3-4 small meals daily to support rapid growth without overwhelming their digestive systems. Adult dogs do well with 2 meals per day. Use the feeding guidelines on dog food packaging as a starting point, but adjust based on your dog\'s body condition — you should be able to feel (but not see) their ribs. Senior dogs may benefit from smaller, more frequent meals as their metabolism slows.',
      },
      {
        heading: 'Supplements: What Your Dog Actually Needs',
        content: 'A balanced commercial diet should provide all necessary nutrients without supplementation. However, certain supplements have proven benefits for specific conditions. Glucosamine and chondroitin support joint health, especially in large breeds and senior dogs. Omega-3 fatty acids from fish oil reduce inflammation and promote coat and skin health. Probiotics can help dogs with digestive issues or those on antibiotics. Always consult your veterinarian before adding any supplement — some can interfere with medications or cause toxicity in excess.',
      },
    ],
    tips: [
      'Choose a food that meets AAFCO standards and lists a named meat as the first ingredient',
      'Measure portions precisely — do not free-feed or eyeball amounts',
      'Keep toxic foods completely out of your dog\'s reach, especially chocolate, grapes, and xylitol products',
      'Transition to new foods slowly over 7-10 days to prevent digestive upset',
      'Provide fresh, clean water at all times and wash water bowls daily',
      'Adjust food intake based on activity level, age, and body condition score',
      'Store dry food in its original bag inside an airtight container to maintain freshness',
    ],
    relatedSearches: [
      'dog nutrition guide',
      'best dog food for health',
      'foods toxic to dogs',
      'dog feeding schedule',
      'homemade dog food recipes',
      'dog supplements guide',
    ],
  },

  'common-dog-illnesses': {
    slug: 'common-dog-illnesses',
    title: 'Most Common Dog Illnesses: Symptoms and When to See a Vet',
    metaTitle: 'Most Common Dog Illnesses: Symptoms, Treatment, and Prevention',
    metaDescription: 'Learn to recognize the 12 most common dog illnesses including ear infections, kennel cough, pancreatitis, and more. Early warning signs every dog owner should know.',
    category: 'Dog Health Tips',
    intro: 'Dogs cannot tell us when they feel sick, so recognizing the subtle signs of illness is a critical skill for every dog owner. Many common canine illnesses are highly treatable when caught early, but can become serious or even fatal if ignored. This guide covers the most frequent health problems seen in veterinary clinics and the warning signs you should never ignore.',
    sections: [
      {
        heading: 'Ear Infections (Otitis Externa)',
        content: 'Ear infections are the single most common reason dogs visit the vet. Floppy-eared breeds (Cocker Spaniels, Basset Hounds, Golden Retrievers) and dogs with allergies are at highest risk. Signs include head shaking, scratching at ears, redness, foul odor, and dark discharge. Ear infections are painful and will not resolve without treatment — typically medicated ear drops and cleaning. Left untreated, chronic infections can lead to permanent hearing loss and require surgery.',
      },
      {
        heading: 'Kennel Cough (Canine Infectious Tracheobronchitis)',
        content: 'Kennel cough is a highly contagious respiratory infection comparable to the common cold in humans. The hallmark symptom is a persistent, dry, honking cough that sounds like something is stuck in the dog\'s throat. It spreads rapidly in places where dogs congregate: boarding facilities, dog parks, grooming salons, and shelters. Most cases resolve on their own within 1-3 weeks, but puppies, seniors, and immunocompromised dogs may develop pneumonia. The Bordetella vaccine provides protection against the most common strain.',
      },
      {
        heading: 'Pancreatitis',
        content: 'Pancreatitis is inflammation of the pancreas that can range from mild discomfort to life-threatening organ failure. Miniature Schnauzers, Yorkshire Terriers, and Cocker Spaniels have genetic predispositions. A high-fat meal (like table scraps or getting into the trash) is the most common trigger. Classic signs include vomiting, hunched posture, praying position (front end down, rear up), abdominal pain, and lethargy. Treatment requires hospitalization with IV fluids, pain management, and fasting.',
      },
      {
        heading: 'Dental Disease (Periodontal Disease)',
        content: 'By age 3, over 80% of dogs have some degree of dental disease, making it the most common preventable health problem in dogs. It begins with plaque buildup that hardens into tartar, leading to gingivitis (red, swollen gums) and eventually periodontitis where the supporting structures of teeth are destroyed. Signs include bad breath, yellow-brown teeth, bleeding gums, difficulty eating, and tooth loss. The bacteria from dental disease can enter the bloodstream and damage the heart, liver, and kidneys. Daily brushing and professional cleanings prevent this condition.',
      },
      {
        heading: 'When to See a Vet Immediately',
        content: 'While some symptoms can be monitored at home, certain signs require emergency veterinary attention: difficulty breathing or choking, collapse or inability to stand, severe bleeding that does not stop within 5 minutes, suspected poisoning or toxin ingestion, bloated or distended abdomen with unproductive retching (possible GDV/bloat), inability to urinate (especially in male dogs), seizures lasting more than 5 minutes, and any sudden behavior change accompanied by other symptoms. When in doubt, always call your veterinarian.',
      },
    ],
    tips: [
      'Perform weekly at-home health checks: examine ears, eyes, mouth, skin, and paws',
      'Know your dog\'s normal resting respiratory rate (10-35 breaths per minute)',
      'Keep a pet first aid kit with gauze, antiseptic wipes, tweezers, and your vet\'s number',
      'Never give human medications without veterinary approval — many are toxic to dogs',
      'Schedule annual wellness exams including blood work for early disease detection',
      'Learn your dog\'s normal behavior — subtle changes are often the first sign of illness',
    ],
    relatedSearches: [
      'common dog illnesses',
      'dog illness symptoms',
      'when to take dog to vet',
      'dog ear infection symptoms',
      'kennel cough treatment',
      'dog pancreatitis symptoms',
    ],
  },

  'dog-dental-care-guide': {
    slug: 'dog-dental-care-guide',
    title: 'Dog Dental Care: How to Brush Your Dog\'s Teeth and Prevent Disease',
    metaTitle: 'Dog Dental Care Guide: Brushing, Cleaning, and Preventing Dental Disease',
    metaDescription: 'Complete dog dental care guide. Learn how to brush your dog\'s teeth, choose dental chews, prevent periodontal disease, and recognize signs of dental problems.',
    category: 'Dog Health Tips',
    intro: 'Dental disease is the most common health problem in dogs, affecting over 80% of dogs by age 3. Yet it is also one of the most preventable. Poor dental health does not just cause bad breath — the bacteria from infected gums enter the bloodstream and can damage the heart, liver, and kidneys, potentially shortening your dog\'s life by 2-3 years. The good news: a simple daily routine can prevent almost all canine dental problems.',
    sections: [
      {
        heading: 'Why Dog Dental Care Matters',
        content: 'Periodontal disease develops in stages. Stage 1 begins with plaque — a sticky bacterial film that forms on teeth within hours of eating. If not removed, plaque mineralizes into tartar within 48-72 hours. Stage 2: Tartar irritates gums, causing gingivitis (redness and swelling). Stage 3: Inflammation spreads below the gum line, creating pockets where bacteria thrive. Stage 4: The supporting bone and tissue are destroyed, leading to loose teeth, abscesses, and severe pain. The systemic effects of this chronic infection can reduce lifespan by 2-3 years.',
      },
      {
        heading: 'How to Brush Your Dog\'s Teeth',
        content: 'Brushing is the gold standard of dental care. Start slowly over 2-4 weeks. Week 1: Let your dog lick pet toothpaste (never human toothpaste — it contains fluoride and xylitol which are toxic) off your finger. Week 2: Gently rub your finger along the gums and teeth. Week 3: Introduce a finger brush or soft dog toothbrush with toothpaste. Week 4: Begin proper brushing using circular motions at a 45-degree angle to the gum line. Focus on the outer surfaces of the upper teeth where plaque accumulates fastest. Brush for 30-60 seconds. Daily brushing is ideal, but 3-4 times per week still provides significant benefits.',
      },
      {
        heading: 'Dental Chews, Treats, and Water Additives',
        content: 'Dental chews and treats are supplements to brushing, not replacements. Look for products with the Veterinary Oral Health Council (VOHC) seal of approval, which indicates proven plaque and tartar reduction. Effective options include dental chews with mechanical scraping action, rubber chew toys with nubs that massage gums, and prescription dental diets with larger kibble designed to fracture against teeth. Water additives containing enzymes or chlorhexidine can reduce bacterial load but should not be relied upon as the sole dental care method. Avoid antlers, bones, and hard nylon chews that can fracture teeth.',
      },
      {
        heading: 'Professional Dental Cleanings',
        content: 'Even with excellent home care, most dogs need professional dental cleanings every 1-3 years. This procedure requires general anesthesia — which sounds scary but is very safe with modern protocols — to allow thorough cleaning below the gum line where disease hides. A complete dental prophylaxis includes: pre-anesthetic blood work, IV catheter, full-mouth dental X-rays (which find 60% more disease than visual exam alone), ultrasonic scaling, subgingival cleaning, polishing, and fluoride treatment. The cost ranges from $300 to $1,000 depending on your location and the severity of disease.',
      },
      {
        heading: 'Signs of Dental Problems',
        content: 'Watch for these warning signs: persistent bad breath (halitosis), yellow or brown tartar on teeth, red, swollen or bleeding gums, reluctance to eat or chewing on one side, dropping food while eating, pawing at the mouth, facial swelling, loose or missing teeth, and decreased interest in chew toys. Small breed dogs (under 20 pounds) are particularly susceptible to dental disease because their teeth are crowded in small jaws. If you notice any of these signs, schedule a veterinary dental exam promptly.',
      },
    ],
    tips: [
      'Use only dog-specific toothpaste — human toothpaste is toxic to dogs',
      'Establish a daily brushing routine at the same time each day',
      'Look for VOHC seal on dental products as proof of effectiveness',
      'Schedule professional dental cleanings as recommended by your vet',
      'Never use antlers, bones, or ice cubes for chewing — they crack teeth',
      'Start dental care in puppyhood for the best long-term results',
    ],
    relatedSearches: [
      'dog dental care',
      'how to brush dogs teeth',
      'dog dental chews recommendations',
      'dog teeth cleaning cost',
      'dog periodontal disease',
      'best dog toothpaste',
    ],
  },
};

export default articles;

export const getArticle = (slug: string): HealthArticle | undefined => {
  return articles[slug];
};

export const getAllSlugs = (): string[] => {
  return Object.keys(articles);
};
