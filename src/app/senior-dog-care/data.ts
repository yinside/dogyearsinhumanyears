export interface SeniorArticle {
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

const articles: Record<string, SeniorArticle> = {
  'senior-dog-nutrition': {
    slug: 'senior-dog-nutrition',
    title: 'Senior Dog Nutrition: Adjusting Your Older Dog\'s Diet for Healthy Aging',
    metaTitle: 'Senior Dog Diet and Nutrition Guide: What to Feed an Aging Dog',
    metaDescription: 'Complete guide to senior dog nutrition. Learn what to feed an older dog, best supplements for joint and cognitive health, weight management for seniors, and signs of nutritional deficiencies.',
    category: 'Senior Dog Care',
    intro: 'Just as your nutritional needs changed from childhood to adulthood, your dog\'s dietary requirements shift significantly as they enter their senior years. A 7-year-old Labrador has very different metabolic needs than they did at age 3. The right senior diet can help manage arthritis, maintain a healthy weight, support cognitive function, and potentially extend your dog\'s quality years. The wrong diet can accelerate age-related decline.',
    sections: [
      {
        heading: 'When Is a Dog Considered a Senior?',
        content: 'The senior threshold varies dramatically by breed size. Small dogs (under 20 pounds) typically become seniors around 10-12 years old. Medium dogs (20-50 pounds) around 8-10 years. Large dogs (50-90 pounds) around 7-9 years. Giant breeds (90+ pounds) as early as 5-7 years. This is important because your dog may still look and act young but internally their metabolism and nutritional needs have already begun to shift. Transitioning to senior-focused nutrition should begin around these age markers, even if your dog seems perfectly healthy.',
      },
      {
        heading: 'Key Nutritional Changes for Senior Dogs',
        content: 'Senior dogs need fewer calories — metabolism slows by 20-30% in older dogs, and reduced activity levels mean fewer calories burned. However, they need higher-quality protein (not less) to maintain muscle mass, which naturally declines with age. Look for senior foods with 25-30% protein from named animal sources. Increased fiber supports digestive health and helps with weight management by creating a feeling of fullness. Omega-3 fatty acids (EPA and DHA) reduce inflammation in aging joints and support brain health. Controlled phosphorus levels help protect aging kidneys, which become less efficient at filtering waste. Moderate sodium supports cardiovascular health.',
      },
      {
        heading: 'Managing Weight in Older Dogs',
        content: 'Obesity is the most common nutritional problem in senior dogs, and it is a disease accelerator. Excess weight increases strain on arthritic joints, makes breathing harder, increases surgical and anesthesia risks, shortens lifespan by up to 2.5 years, and contributes to diabetes, heart disease, and cancer. Conversely, unexplained weight loss is equally concerning and can signal underlying disease. Weigh your senior dog monthly. You should be able to feel their ribs easily with a thin fat covering. If you cannot feel ribs, reduce portions by 10% and reassess. If weight is dropping unexpectedly, see your veterinarian promptly.',
      },
      {
        heading: 'Supplements for Senior Dogs',
        content: 'The most evidence-backed supplements for seniors include: Glucosamine and chondroitin sulfate for joint health (look for products with proven bioavailability), Omega-3 fatty acids (fish oil rich in EPA/DHA) for inflammation control and cognitive support (dose based on EPA content: approximately 40mg EPA per kg body weight), SAM-e (S-adenosylmethionine) for cognitive function and liver health, medium-chain triglycerides (MCTs) showing promise for canine cognitive dysfunction, and probiotics for aging digestive systems. Always consult your veterinarian before starting any supplement — some interact with medications or affect organ function.',
      },
      {
        heading: 'Special Diets for Common Senior Conditions',
        content: 'Many senior dogs develop age-related health conditions that benefit from therapeutic diets. Kidney disease: Prescription renal diets with reduced phosphorus, moderate high-quality protein, and added omega-3s. Heart disease: Low-sodium diets with added taurine and L-carnitine for cardiac muscle support. Arthritis: Foods with added glucosamine/chondroitin, omega-3s, and green-lipped mussel. Cognitive dysfunction: Diets enriched with antioxidants, omega-3s, and MCTs. Diabetes: High-fiber, low-fat prescription diets with consistent carbohydrate content to stabilize blood sugar. Cancer: High-protein, moderate-fat, low-carbohydrate formulations to support lean body mass.',
      },
    ],
    tips: [
      'Transition to senior food at the appropriate age for your dog\'s breed size',
      'Weigh your senior dog monthly — catch weight changes before they become serious',
      'Choose senior foods with named animal proteins and moderate fat levels',
      'Add omega-3 supplements (fish oil) for joint and brain health with vet approval',
      'Feed 2-3 smaller meals if your senior has digestive issues or reduced appetite',
      'Request annual blood work including kidney, liver, and thyroid values',
    ],
    relatedSearches: [
      'senior dog nutrition',
      'best food for older dogs',
      'senior dog supplements',
      'older dog weight loss',
      'dog kidney diet',
      'arthritis diet for dogs',
    ],
  },

  'senior-dog-exercise': {
    slug: 'senior-dog-exercise',
    title: 'Exercise Guide for Senior Dogs: Staying Active Without Overdoing It',
    metaTitle: 'Senior Dog Exercise Guide: Safe Ways to Keep Your Older Dog Active',
    metaDescription: 'Complete exercise guide for senior dogs. Learn appropriate activity levels for aging dogs, low-impact exercises, recognizing pain, and adapting walks for joint health.',
    category: 'Senior Dog Care',
    intro: 'The old saying "use it or lose it" applies to dogs as much as humans. Regular appropriate exercise helps senior dogs maintain muscle mass, keep joints mobile, manage weight, stimulate mental health, and preserve quality of life. But the line between "enough" and "too much" narrows with age — overdoing it causes pain and injury while underdoing it accelerates decline. Finding the right balance is the key to keeping your senior dog active and happy.',
    sections: [
      {
        heading: 'How Much Exercise Does a Senior Dog Need?',
        content: 'There is no one-size-fits-all answer — it depends on breed, health status, and individual fitness. As a general guideline: Small senior dogs typically need 20-30 minutes of total daily activity. Medium senior dogs need 30-45 minutes. Large senior dogs need 30-60 minutes, though large and giant breeds with arthritis may need less. The key shift from adult exercise is breaking this time into shorter, gentler sessions. Instead of one long walk, take two or three shorter walks. Instead of running, walk on softer surfaces. Instead of fetch with high jumps, play gentle scent games.',
      },
      {
        heading: 'Best Low-Impact Exercises for Senior Dogs',
        content: 'Swimming is the gold standard of senior dog exercise — it provides resistance training for muscle maintenance with zero impact on joints. A 10-15 minute swim equals a 30-minute walk in terms of exercise value. Controlled leash walks on soft surfaces (grass, dirt, sand) are gentler on joints than pavement. Gentle indoor games like hide-and-seek with treats stimulate the mind without physical strain. Scent work — hiding treats around the house or yard and letting your dog sniff them out — engages their most powerful sense and is deeply satisfying. Short training sessions (5 minutes) reinforce mental sharpness and the human-canine bond.',
      },
      {
        heading: 'Recognizing When Your Dog Has Had Enough',
        content: 'Senior dogs may not show pain the way we expect. Watch for these subtle signs during and after exercise: slowing down or lagging behind on walks, lying down mid-walk and refusing to continue, limping during or after activity, heavy panting that persists after exercise ends, stiffness the morning after exercise (this is a key sign of overdoing it), reluctance to get up or climb stairs, and decreased enthusiasm for walks. If you notice any of these, reduce the duration or intensity of exercise and consult your veterinarian about pain management options.',
      },
      {
        heading: 'Adapting Your Home for Senior Mobility',
        content: 'Environmental modifications can significantly improve quality of life for senior dogs: ramps or pet stairs for furniture, cars, and outdoor steps, non-slip rugs or yoga mats on slippery floors (hardwood and tile are treacherous for arthritic dogs), orthopedic beds with memory foam to reduce pressure on joints, raised food and water bowls (at elbow height) for dogs with neck or back pain, night lights to help dogs with declining vision navigate in the dark, and keeping essentials — bed, food, water — on one floor to minimize stair climbing.',
      },
      {
        heading: 'Weather Considerations for Senior Dogs',
        content: 'Senior dogs are less efficient at regulating body temperature. In hot weather (above 75°F/24°C), exercise during the coolest parts of the day (early morning or evening), walk on grass rather than hot pavement, and bring water on walks. Senior dogs with thick coats, dark fur, or brachycephalic faces (Pugs, Bulldogs) are especially vulnerable to heat stroke. In cold weather, short-haired seniors need a coat or sweater, dogs with arthritis experience more stiffness and pain in cold and damp conditions (keep walks shorter), and booties protect paws from ice, salt, and chemical de-icers.',
      },
    ],
    tips: [
      'Break exercise into shorter, more frequent sessions rather than one long outing',
      'Swimming is the single best exercise for senior dogs — zero impact on joints',
      'Watch for stiffness the day after exercise — this means you overdid it',
      'Add non-slip rugs to hard floors to prevent slipping and make walking easier',
      'Exercise your senior in cool temperatures — they overheat faster than young dogs',
      'Always warm up with 5 minutes of slow walking before any activity',
    ],
    relatedSearches: [
      'senior dog exercise',
      'exercises for older dogs',
      'swimming for dogs arthritis',
      'dog mobility aids',
      'senior dog joint pain',
      'how much exercise for old dog',
    ],
  },

  'caring-for-aging-dogs': {
    slug: 'caring-for-aging-dogs',
    title: 'Complete Guide to Caring for Aging Dogs: Health, Comfort, and Quality of Life',
    metaTitle: 'Caring for Aging Dogs: Complete Guide to Senior Dog Health and Comfort',
    metaDescription: 'Ultimate guide to caring for aging dogs. Learn about cognitive dysfunction, managing chronic conditions, pain recognition, end-of-life care, and how to give your senior dog their best years.',
    category: 'Senior Dog Care',
    intro: 'Watching your dog grow old is both a privilege and a heartbreak. The gray muzzle, the slower gait, the longer naps — these are signs of a life well-lived. Caring for an aging dog is different from caring for an adult dog. It requires more vigilance, more patience, and more tenderness. This guide covers everything you need to know about giving your senior dog comfort, dignity, and the best possible quality of life in their golden years.',
    sections: [
      {
        heading: 'Understanding Canine Cognitive Dysfunction (Dog Dementia)',
        content: 'Canine Cognitive Dysfunction (CCD) affects up to 28% of dogs aged 11-12 and 68% of dogs aged 15-16. It is similar to Alzheimer\'s in humans. Signs include: disorientation (getting stuck in corners, staring at walls), changes in sleep patterns (restlessness at night, sleeping more during the day), house soiling (forgetting housetraining), decreased social interaction (not greeting you at the door), anxiety and restlessness, and changes in activity level. There is no cure, but management strategies include: maintaining consistent routines, using night lights, providing puzzle toys and scent games for mental stimulation, discussing medications like selegiline (Anipryl) with your vet, and feeding a diet enriched with antioxidants and omega-3s.',
      },
      {
        heading: 'Managing Chronic Pain in Senior Dogs',
        content: 'Dogs are masters at hiding pain — it is a survival instinct. By the time a dog limps, they have likely been in pain for months. Signs of chronic pain include: reluctance to jump on furniture or climb stairs, difficulty rising after resting, changes in posture (hunched back, tucked tail), decreased appetite, irritability when touched in certain areas, excessive licking of specific joints, and withdrawal from family interaction. Pain management is not optional — it is a basic welfare requirement. Options include: NSAIDs (non-steroidal anti-inflammatory drugs) prescribed by your vet with regular blood monitoring, joint supplements (glucosamine/chondroitin), Adequan injections for cartilage protection, physical therapy including underwater treadmill, acupuncture for some dogs, and maintaining a lean body weight.',
      },
      {
        heading: 'The Importance of Regular Veterinary Care',
        content: 'Senior dogs should see the veterinarian at minimum twice per year — every 6 months. A lot can change in a senior dog\'s health in six months, which equals about 3-4 human years in terms of physiological aging. Every senior visit should include: a comprehensive physical exam (including thorough dental exam), complete blood count (CBC) and chemistry panel, urinalysis, thyroid panel (T4 and TSH), blood pressure measurement, and an eye exam. Additional testing based on breed risks may include chest X-rays, abdominal ultrasound, or cardiac echocardiogram. Catching diseases early — before clinical symptoms appear — is the single best way to extend quality years.',
      },
      {
        heading: 'Grooming and Hygiene for Senior Dogs',
        content: 'Senior dogs need gentler, more frequent grooming attention. Their skin becomes thinner and more sensitive — use softer brushes and shorter sessions. Nail trims become more critical as reduced activity means less natural wear; overgrown nails change gait and increase joint pain. Regular ear cleaning prevents infections, especially in dogs with chronic allergies or floppy ears. Dental care remains essential — periodontal disease bacteria affect the heart, kidneys, and liver. Senior dogs may need their sanitary areas trimmed more frequently if they have trouble grooming themselves or have incontinence. Warm (not hot) baths with senior-specific shampoos can soothe arthritic joints.',
      },
      {
        heading: 'Making the Hardest Decision: Quality of Life Assessment',
        content: 'The most loving decision we can make for our dogs is also the hardest. A quality of life assessment helps determine when it is time. Consider these factors: Is your dog still eating and drinking willingly? Can they stand, walk, and eliminate without assistance or obvious pain? Do they still show interest in family, toys, or favorite activities? Are they having more good days than bad days? Is their pain well-managed with medication? Tools like the HHHHHMM Scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More Good Days Than Bad) provide an objective framework. Talk openly with your veterinarian — they can provide perspective you may be too emotionally close to see. Remember: better a week too early than a day too late.',
      },
    ],
    tips: [
      'Schedule veterinary exams every 6 months — do not wait a full year for seniors',
      'Maintain predictable daily routines — senior dogs find comfort in consistency',
      'Use night lights to help dogs with declining vision navigate after dark',
      'Elevate food and water bowls to elbow height for dogs with neck or back pain',
      'Keep a journal of good days vs. bad days to objectively assess quality of life',
      'Spend quality time every day — petting, brushing, or just sitting together',
    ],
    relatedSearches: [
      'caring for aging dogs',
      'senior dog health guide',
      'dog dementia symptoms',
      'senior dog pain management',
      'quality of life dog assessment',
      'end of life care for dogs',
    ],
  },
};

export default articles;

export const getArticle = (slug: string): SeniorArticle | undefined => {
  return articles[slug];
};

export const getAllSlugs = (): string[] => {
  return Object.keys(articles);
};
