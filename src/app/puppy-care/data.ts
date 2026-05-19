export interface CareArticle {
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

const articles: Record<string, CareArticle> = {
  'new-puppy-checklist': {
    slug: 'new-puppy-checklist',
    title: 'New Puppy Checklist: Everything You Need for the First Week',
    metaTitle: 'New Puppy Checklist: Essential Supplies and First Week Care Guide',
    metaDescription: 'Complete new puppy checklist covering supplies, vet visits, house training, sleep schedules, and everything you need to prepare for your new puppy\'s first week home.',
    category: 'Puppy Care',
    intro: 'Bringing home a new puppy is one of life\'s great joys — but also one of its great challenges. That adorable ball of fur needs far more than a food bowl and a bed. The first week sets the tone for your entire life together, and being prepared makes all the difference between a smooth transition and a stressful scramble. This comprehensive checklist covers everything you need before your puppy arrives and everything you need to do in those critical first seven days.',
    sections: [
      {
        heading: 'Supplies to Buy Before Your Puppy Arrives',
        content: 'Start shopping at least one week before pickup day. Essentials include: a properly sized crate with divider (puppies should have just enough room to stand, turn around, and lie down), a comfortable washable bed, stainless steel food and water bowls (avoid plastic which harbors bacteria), high-quality puppy food (ask the breeder what they have been feeding), a 6-foot nylon or leather leash, a flat buckle collar or harness, ID tag with your phone number, puppy-safe chew toys (Kong, Nylabone), enzymatic cleaner for accidents (Nature\'s Miracle or similar), baby gates to restrict access, and puppy training pads if you plan to use them.',
      },
      {
        heading: 'Puppy-Proofing Your Home',
        content: 'Puppies explore the world with their mouths, and everything at their level is fair game. Get down on your hands and knees and see your home from a puppy\'s perspective. Secure electrical cords behind furniture or with cord protectors. Remove toxic houseplants (lilies, sago palm, dieffenbachia, philodendron). Store all cleaning supplies, medications, and human foods in closed cabinets. Use trash cans with secure lids. Block access behind appliances, under decks, and into any space where a curious puppy could get stuck. Remove small objects that could be swallowed: coins, batteries, hair ties, children\'s toys, and remote controls.',
      },
      {
        heading: 'The First Vet Visit',
        content: 'Schedule your puppy\'s first vet visit within 48-72 hours of bringing them home — even if the breeder says they have had a checkup. Bring any medical records from the breeder and a fresh stool sample. The vet will perform a full physical exam, check for congenital issues, discuss the vaccination schedule (typically a series of 3-4 rounds starting at 6-8 weeks), recommend a deworming protocol, discuss spay/neuter timing, and answer your questions about feeding, training, and socialization. This first visit establishes your veterinary relationship and gives you peace of mind.',
      },
      {
        heading: 'Crate Training and First Night',
        content: 'The first night is often the hardest — for both puppy and owner. Place the crate in your bedroom where your puppy can see and hear you. Make it cozy with a soft blanket and a toy that smells like the litter. Expect crying — this is normal. Resist the urge to take the puppy into your bed (unless that is your long-term plan, as habits form fast). Instead, place your fingers through the crate door for comfort, or place the crate on a chair next to your bed where you can reach in. Take the puppy out for a potty break every 2-3 hours during the night for the first few weeks. Never use the crate as punishment — it should be a safe, positive space.',
      },
      {
        heading: 'House Training Schedule',
        content: 'Consistency is everything in house training. Puppies have tiny bladders and limited control. A general rule: a puppy can hold their bladder for roughly their age in months plus one (a 2-month-old puppy = about 3 hours maximum). Take your puppy outside: first thing in the morning, after every meal, after every nap, after play sessions, before bedtime, and every 30-60 minutes in between. Use a consistent potty command like "go potty" and reward success immediately with high-value treats and enthusiastic praise. Accidents will happen — clean them with enzymatic cleaner to eliminate the scent, never punish the puppy, and simply reinforce the outdoor routine.',
      },
    ],
    tips: [
      'Set up your puppy\'s crate and supplies before pickup day — have everything ready',
      'Take 2-3 days off work for the transition — puppies need round-the-clock supervision at first',
      'Schedule the first vet visit within 48-72 hours of bringing your puppy home',
      'Establish a consistent daily routine from day one: feeding, potty, play, and sleep',
      'Introduce family members one at a time in a calm environment',
      'Get down on the floor to interact — bending over can intimidate small puppies',
    ],
    relatedSearches: [
      'new puppy checklist',
      'first week with puppy',
      'puppy supplies list',
      'puppy crate training',
      'new puppy vet visit',
      'puppy proofing home',
    ],
  },

  'puppy-feeding-schedule': {
    slug: 'puppy-feeding-schedule',
    title: 'Puppy Feeding Schedule by Age: How Much and How Often',
    metaTitle: 'Puppy Feeding Schedule by Age: Complete Feeding Guide for Puppies',
    metaDescription: 'Complete puppy feeding schedule broken down by age (8 weeks to 12 months). Learn how much to feed, how often, best food choices for small and large breeds.',
    category: 'Puppy Care',
    intro: 'Feeding a puppy is both art and science. Feed too little and your puppy will not grow properly. Feed too much — especially with large breeds — and you risk lifelong joint problems from too-rapid growth. The right feeding schedule changes almost monthly as your puppy grows, and it differs significantly between tiny Chihuahuas and massive Great Danes. This guide breaks down exactly what, when, and how much to feed your puppy at every stage.',
    sections: [
      {
        heading: '8-12 Weeks: The Foundation Phase',
        content: 'During this critical period, your puppy transitions from mother\'s milk to solid food. Feed puppy-specific food (not adult food) — it has higher protein, fat, and calories to support rapid growth. Feed 4 meals per day, spaced evenly. For toy and small breeds, moisten kibble with warm water to make it easier to eat. Large and giant breeds need large-breed puppy food that promotes slow, controlled growth to protect developing joints. Portions: follow the feeding guide on the package based on your puppy\'s current weight and expected adult weight. Weigh your puppy weekly and adjust.',
      },
      {
        heading: '3-4 Months: Growth Acceleration',
        content: 'Your puppy is growing fast — some breeds gain 1-2 pounds per week at this stage. Reduce to 3 meals per day. Continue with puppy food appropriate for your dog\'s breed size. This is when many owners unknowingly overfeed — a roly-poly puppy is NOT a healthy puppy. You should be able to feel (but not see) the ribs. For large breeds, this is the danger zone for too-rapid growth; err on the side of lean. Introduce a variety of textures and flavors within the same brand to prevent pickiness later.',
      },
      {
        heading: '5-6 Months: Approaching Adult Size',
        content: 'Most small and medium breeds have reached about 75% of their adult size by 6 months. Continue 3 meals daily. Large breeds may stay on 3 meals until 12 months. This is a good time to introduce puzzle feeders and slow-feed bowls if your puppy gulps food. Begin transitioning from puppy food to adult food for small breeds around 9-12 months — ask your vet for breed-specific timing. Large and giant breeds stay on puppy food longer (12-24 months) because their growth plates close later.',
      },
      {
        heading: '7-12 Months: Transitioning to Adult Feeding',
        content: 'For small breeds under 20 pounds, you can reduce to 2 meals per day around 7-9 months and begin transitioning to adult food around 10-12 months. Medium breeds (20-50 pounds) transition at 12 months. Large breeds (50+ pounds) stay on large-breed puppy food and 2-3 meals until 12-15 months. Giant breeds (90+ pounds) remain on giant-breed puppy food until 18-24 months. Never switch foods abruptly — transition over 7-10 days by gradually mixing increasing amounts of the new food with the old.',
      },
      {
        heading: 'Treats and Training Rewards',
        content: 'Treats should make up no more than 10% of your puppy\'s daily calories. Break training treats into pea-sized pieces — puppies care about the taste, not the size. Excellent low-calorie options include: small pieces of plain cooked chicken, freeze-dried liver treats broken into tiny bits, baby carrots (for teething puppies), and commercial training treats under 3 calories each. Avoid: grapes, raisins, chocolate, macadamia nuts, onions, garlic, and anything containing xylitol — all are toxic to dogs.',
      },
    ],
    tips: [
      'Feed puppy food appropriate for your breed size — large-breed puppy food for breeds over 50 lbs',
      'Use a kitchen scale to weigh portions rather than using measuring cups for accuracy',
      'Adjust food amounts based on body condition, not just the bag guidelines',
      'Feed meals at the same times every day — puppies thrive on routine',
      'Always provide fresh water — change it at least twice daily',
      'Never feed a growing puppy adult dog food — it lacks the nutrients they need',
    ],
    relatedSearches: [
      'puppy feeding schedule',
      'how much to feed a puppy',
      'puppy feeding chart by age',
      'best puppy food',
      'large breed puppy feeding',
      'how often to feed puppy',
    ],
  },

  'puppy-training-basics': {
    slug: 'puppy-training-basics',
    title: 'Puppy Training Basics: Housebreaking, Commands, and Socialization',
    metaTitle: 'Puppy Training Basics: Complete Guide to Housebreaking, Commands, and Socialization',
    metaDescription: 'Master puppy training with this complete guide covering housebreaking, basic commands (sit, stay, come), crate training, socialization windows, and correcting problem behaviors.',
    category: 'Puppy Care',
    intro: 'The first 16 weeks of your puppy\'s life are the most critical learning period they will ever experience. What they learn — and what they do not learn — during this window shapes their adult personality. A well-trained puppy becomes a confident, well-behaved adult dog. A puppy that misses this window may develop anxiety, aggression, or other behavioral problems that are much harder to correct later. This guide covers the essential training every puppy needs.',
    sections: [
      {
        heading: 'The Critical Socialization Window (3-16 Weeks)',
        content: 'The socialization window is a developmental period when puppies are most receptive to new experiences. During this time, expose your puppy to: different types of people (men, women, children, people in uniforms, people with hats, sunglasses, beards), different environments (grass, concrete, stairs, car rides, elevators), different sounds (doorbells, vacuums, traffic, thunderstorms), other vaccinated friendly dogs, and gentle handling of paws, ears, mouth, and tail. Aim for 100+ positive new experiences before 16 weeks. Make every experience positive with treats and praise. A poorly socialized puppy often becomes a fearful or reactive adult dog.',
      },
      {
        heading: 'Housebreaking: The Complete Method',
        content: 'Successful housebreaking requires consistency above all else. Take your puppy out: immediately upon waking, after eating or drinking, after playing, after coming out of the crate, and every 30-60 minutes when active. Always go to the same spot outside. Use a verbal cue like "go potty." When they go, reward immediately with a high-value treat and enthusiastic praise within 3 seconds. Supervise constantly indoors — tether the puppy to you with a leash or use baby gates. At night, remove water 2 hours before bedtime and take out just before bed. Expect accidents — it is part of the process. Never yell, rub their nose in it (this is an outdated myth), or punish accidents you find after the fact.',
      },
      {
        heading: 'Basic Commands Every Puppy Should Learn',
        content: 'Start training the day your puppy comes home. Keep sessions short (3-5 minutes) and positive. Sit: Hold a treat above your puppy\'s nose and slowly move it back over their head — as the head goes up, the bottom goes down. Say "sit" as they sit, then reward. Come: Run a few steps away, call your puppy\'s name followed by "come!" in a happy voice, and reward heavily when they reach you. Never call your puppy to come for something they will not like (bath, nail trimming, crate time). Stay: Start with just 1-2 seconds, gradually increasing duration. Down: With puppy in a sit, lower a treat to the floor between their paws — they will follow it down. Leave It: Place a treat in a closed fist, let them sniff and paw, the moment they stop and look at you or pull back, mark "yes!" and reward from your other hand.',
      },
      {
        heading: 'Dealing with Problem Behaviors',
        content: 'Most puppy "problem behaviors" are actually normal puppy behaviors that need to be redirected, not punished. Biting/Mouthing: Puppies explore with their mouths. When teeth touch skin, say "ouch!" in a high-pitched voice and immediately stop play for 15-30 seconds. Provide appropriate chew toys as alternatives. Jumping: Turn your back and cross your arms whenever the puppy jumps — give attention only when all four paws are on the floor. Chewing: Puppies need to chew — it is how they explore and soothe teething pain. Provide plenty of appropriate chew toys and supervise constantly. If they chew something inappropriate, redirect to an appropriate item and praise them for chewing the right thing.',
      },
      {
        heading: 'Puppy Classes and When to Start',
        content: 'Puppy kindergarten classes are invaluable for both training and controlled socialization. Most classes accept puppies from 8-16 weeks. Benefits include: professional guidance on training techniques, supervised play with other puppies, exposure to new people and environments, and troubleshooting specific behavioral issues. Look for classes that use positive reinforcement (treats, praise, play) rather than punishment-based methods. Continue training beyond puppyhood — dogs thrive on mental stimulation and learning new things throughout their lives.',
      },
    ],
    tips: [
      'Keep training sessions short (3-5 minutes) and always end on a success',
      'Use high-value treats for training — tiny pieces of chicken, cheese, or freeze-dried liver',
      'Train in different locations to generalize commands (home, yard, park, sidewalk)',
      'Be consistent — all family members must use the same commands and rules',
      'Never punish a puppy for behaviors you have not taught them are wrong',
      'Socialize extensively before 16 weeks — after that, the window begins to close',
    ],
    relatedSearches: [
      'puppy training basics',
      'how to housebreak a puppy',
      'puppy obedience commands',
      'puppy socialization guide',
      'puppy crate training tips',
      'puppy classes near me',
    ],
  },
};

export default articles;

export const getArticle = (slug: string): CareArticle | undefined => {
  return articles[slug];
};

export const getAllSlugs = (): string[] => {
  return Object.keys(articles);
};
