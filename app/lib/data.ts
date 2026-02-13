/**
 * Site content data structures for Physio PS.
 * Source: physiops.com content (medical_conditions_by_specialty / new_site_architecture).
 */

// --- Types -------------------------------------------------------------------

export type Product = {
  title: string;
  slug: string;
  features: string[];
  benefits: string[];
  /** Image URL for listing/cards (e.g. Parallax Cards) */
  image?: string;
};

export type Condition = {
  title: string;
  description: string;
};

export type Specialty = {
  title: string;
  slug: string;
  conditions: Condition[];
  /** Image URL for listing/cards (e.g. Parallax Cards) */
  image?: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdown = {
  label: string;
  items: { label: string; href: string }[];
};

// --- 1. Products --------------------------------------------------------------

export const products: Product[] = [
  {
    title: "Clinical Monitoring Unit",
    slug: "clinical-monitoring-unit",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    features: [
      "The perfect addition to any clinic",
      "Offer your patients greater insight",
      "Enhance preventive health measures",
      "Physio PS ANS Test increases revenue",
      "Many purchase options",
      "FDA 510(k) Cleared",
      "Supported by fundable billing codes",
      "Research options available",
    ],
    benefits: [
      "Improve diagnostic capability",
      "Prioritize therapy planning",
      "Increase practice revenue",
      "Meet demand for autonomic testing",
    ],
  },
  {
    title: "Remote Monitoring Unit",
    slug: "remote-monitoring-unit",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    features: [
      "Bring Physio PS on the go",
      "Improve quality of life",
      "Compact and Convenient",
      "Operates with battery power",
      "Physio PS ANS Test increases revenue",
      "Great for in-home care providers",
      "Perfect for sports medicine",
      "Many purchase options",
    ],
    benefits: [
      "Portable autonomic testing",
      "In-home and mobile use",
      "Flexible deployment",
      "Battery-powered operation",
    ],
  },
  {
    title: "Portable Autonomic Lab",
    slug: "portable-autonomic-lab",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    features: [
      "Portable & deployable",
      "Perfect for the clinician on the go",
      "Physio PS available anywhere",
      "Multiple power options",
      "Compact and convenient",
      "Offer patients more personalized care",
    ],
    benefits: [
      "Deploy anywhere",
      "Multiple power options",
      "Personalized care on the go",
    ],
  },
];

// --- 2. Specialties (medical conditions by specialty) -------------------------

const specialtyImages = [
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
];

export const specialties: Specialty[] = [
  {
    title: "Neurology",
    slug: "neurology",
    image: specialtyImages[0],
    conditions: [
      {
        title: "Headaches",
        description:
          "There are numerous reasons for headaches: medication mismanagement, neurologic, cardiologic, etc. P&S Monitoring provides more information to further differentiate. Whether P or S, P&S-mediated headaches are associated with improper brain perfusion (too little or too much, respectively), triggering the neurological effects that underlie headache. P&S Monitoring specifies which and enables more specific therapy. Once P&S balance is established, any remaining symptoms are due to a brain disorder.",
      },
      {
        title: "Tension Headache",
        description:
          "There are numerous reasons for tension headaches. Tension tends to indicate high SB or challenge SE.",
      },
      {
        title: "Migraine",
        description:
          "Like headache, there are many forms of migraine, some Parasympathetically-mediated and some Sympathetically mediated. Whether P or S, P&S-mediated migraines are associated with improper brain perfusion (too little or too much, respectively), triggering the neurological effects that underlie migraine. P&S Monitoring specifies which and enables more specific therapy. Once P&S balance is established, any remaining symptoms are due to a brain disorder.",
      },
      {
        title: "ADD/ADHD",
        description:
          "ADD/ADHD is characterized by a dynamic (challenge) PE that causes a challenge SE that is responsible for both the attention deficit and the hyperactivity. In essence, the PE induces a form of depression due to PE-induced marginal or poor brain perfusion. The secondary SE causes the \"adrenaline storm\" that underlies the attention deficit and the hyperactivity. We have had success switching these patients from the standard therapies (characterized by high dose, long-term) to low-dose, short-term anti-cholinergic therapy, and have relieved the disorder within 18 months. Once P&S balance is established, any remaining symptoms are due to a brain disorder.",
      },
      {
        title: "Parkinsonism, Parkinson's Disease",
        description:
          "As a catecholaminergic disorder, the P&S nervous systems are involved. While P&S balance helps to maintain quality of life longer, it does not always help to slow the disease process. P&S Monitoring will identify autonomic neuropathy, including Cardiovascular Autonomic Neuropathy, to help minimize mortality risk.",
      },
      {
        title: "Depression",
        description:
          "Depression is characterized by PE, either resting or challenge, or both. All antidepressants are types of anti-cholinergics. The less the BP effect of these medications, the less of a P&S effect. Depression that persists after P&S are balanced, is psychological. P&S imbalance is the physiologic component and is associated marginal or poor brain perfusion. Once P&S balance is established, any remaining symptoms are psychological issues.",
      },
      {
        title: "Bipolar Disease",
        description:
          "From a P&S perspective, Bipolar Disease is a primary PE disorder; therefore, a primary depression disorder. Once the PE is normalized, the SE (secondary to PE) is typically relieved organically, without additional medication. With P&S imbalance, the anxiety phases of Bipolar Disease are cycled when brain perfusion becomes too low, typically after an event that is associated with increased Parasympathetic tone (after large meals, before bedtime, after emotional responses). Once P&S balance is established, any remaining symptoms are psychological issues.",
      },
      {
        title: "Anxiety",
        description:
          "There are two underlying P&S forms: (1) resting high SB (indicating resting SE) as the primary P&S disorder; and (2) challenge PE, causing secondary SE, releasing excess adrenaline causing anxiety secondary to the challenge PE. The latter involves depression. The commonly experienced heart palpitations, in either case, are due to the associated SE, but are typically not life threatening due to SE that is not critical. Once P&S balance is established, any remaining symptoms are psychological issues.",
      },
      {
        title: "Post-Traumatic Stress Disorder (PTSD)",
        description:
          "PTSD is associated with what are known as \"Quality of Life\" (QoL) symptoms: sleep, GI, bladder and bowel dysfunction, lightheadedness upon standing, sex dysfunction, high BP, and depression. The opposing symptoms of depression and high BP help to confirm that PTSD involves both PE and SE; specifically challenge PE, leaving the SE as secondary. While P&S monitoring and guided therapy help to normalize QoL symptoms, it does not directly address the \"trigger\"; however, it has been found that once the QoL symptoms are normalized, patients are significantly better able to manage the trigger.",
      },
      {
        title: "Sleep Disorders",
        description:
          "Disorders characterized by night-time sleeplessness are associated with SE, and disorders characterized by day-time sleepiness are associated with PE. Once P&S balance is established, any remaining symptoms may be psychological, hormonal, or neurological issues.",
      },
      {
        title: "Shy-Drager Syndrome (Orthostatic Hypotension with Multisystem Degeneration, aka Multiple System Atrophy (MSA))",
        description:
          "MSA and Parkinson's Disease are nearly identical in the early stages. Treating one with the therapy for the other, accelerates the progression of the one. Since Parkinson's Disease preserves Sympathetic innervation to the heart, P&S Monitoring differentiates the two earlier, helping to ensure proper therapy planning. Once P&S balance is established, any remaining symptoms are due to the disorder itself.",
      },
      {
        title: "Idiopathic Peripheral Autonomic Neuropathy",
        description:
          "Idiopathic Peripheral Autonomic Neuropathy is one of the earliest signs of P&S dysfunction, enabling earlier and more aggressive therapy to slow or stay the progression of autonomic neuropathy by establishing and maintaining P&S balance.",
      },
      {
        title: "Chronic Regional Pain Syndrome (CRPS) or Reflex Sympathetic Dystrophy (RSD)",
        description:
          "CRPS is characterized by pain with both SE and PE. The SE due to the \"stress\" of pain and the PE due to compromised blood flow (e.g., due to plexus damage) to one or multiple regions of the body.",
      },
      {
        title: "Multiple Sclerosis",
        description:
          "While P&S balance helps to maintain quality of life longer, it does not always help to slow the disease process. P&S Monitoring will identify autonomic neuropathy, including Cardiovascular Autonomic Neuropathy, to help minimize mortality risk.",
      },
      {
        title: "Polyneuropathy: Diabetic, Idiopathic, or other",
        description:
          "Sensory and motor neuropathies are preceded by autonomic neuropathy causing poor circulation inducing or exacerbating the others.",
      },
      {
        title: "Myasthenic Syndrome (Eaton-Lambert)",
        description:
          "This disease also affects the P&S systems. While P&S balance helps to maintain quality of life longer, it does not always help to slow the disease process. P&S Monitoring will identify autonomic neuropathy, including Cardiovascular Autonomic Neuropathy, to help minimize mortality risk.",
      },
      {
        title: "Orthostatic Hypotension",
        description:
          "In general, Orthostatic dysfunction is associated with alpha-sympathetic (adrenergic) insufficiency (Sympathetic Withdrawal, or SW) causing lower extremity vascular dysfunction upon standing, which causes a drop in BP upon standing (head-up postural change). P&S Monitoring quantitatively specifies SW, helping to differentiate Orthostatic dysfunction, including Orthostatic Intolerance, Orthostatic Hypotension, Orthostatic Hypertension, and Postural Orthostatic Tachycardia Syndrome (POTS), from other causes of dizziness and lightheadedness (including Syncope). Treat the SW to relieve any of the forms of Orthostatic dysfunction. Note, the majority of patients with Orthostatic dysfunction are found to simply be dehydrated. Consider proper daily hydration as the primary recommendation.",
      },
      {
        title: "Syncope and Collapse",
        description:
          "In general, Syncope is (beta-) SE with standing (head-up postural change), in other words, a cardiac issue. P&S Monitoring can positively identify Vasovagal Syncope (stand SE with PE), and Neurogenic Syncope (stand SE with an abnormal HR response to stand). Cardiogenic Syncope is a diagnosis by omission. While Neurocardiogenic Syncope is the most commonly diagnosed form, P&S Monitoring helps differentiate the neuro component from the cardio. Treat PE for Vasovagal syncope. Treat the HR abnormality for Neurogenic. Consider additional cardiac testing, including tilt table, to positively diagnose and treat Cardiogenic Syncope.",
      },
      {
        title: "Tachycardia (Postural, POTS)",
        description:
          "POTS and Vasovagal Syncope are difficult to differentiate, even with tilt-table. P&S Monitoring quantitates the Sympathetic response to stand (head-up, postural change), differentiating stand SW (indicating orthostatic dysfunction, including POTS) from stand SE (indicating Syncope). This is more information that enables more individualized therapy planning, including the possibility of both Orthostatic dysfunction and Syncope concurrently.",
      },
      {
        title: "Chronic Hypotension",
        description:
          "Chronic Hypotension is characterized by low SB or challenge PE. Once P&S balance is established, any remaining symptoms are cardiovascular issues.",
      },
      {
        title: "Dizziness, Lightheadedness and Vertigo",
        description:
          "As indicated above there are multiple reasons for lightheadedness and dizziness, including Vestibular dysfunction, especially in geriatrics. Consider both Vestibular testing and P&S Monitoring to fully document and diagnose and determine therapy.",
      },
      {
        title: "Chronic Fatigue Syndrome",
        description:
          "Chronic Fatigue Syndrome is characterized by low SB or challenge PE.",
      },
    ],
  },
  {
    title: "Pulmonology",
    slug: "pulmonology",
    image: specialtyImages[1],
    conditions: [
      {
        title: "Sleep Disturbances (e.g., Central or Obstructive Sleep Apnea)",
        description:
          "Sleep Disturbances are characterized by Parasympathetic insufficiency followed by SE. Parasympathetic insufficiency underlies the collapse of the soft palate, and then the stress of not breathing while sleeping and then not sleeping causes the SE. Note, sleep apnea therapies (e.g., CPAP) are not direct sympatholytics; therefore, they only relieve the \"stress\" of not sleeping. They are not sufficient to reduce the SE associated with typical co-morbidities associated with sleep apnea: hypertension, diabetes, obesity, etc. Additional Sympathetic therapies are needed to normalize the mortality and morbidity risk of sleep apnea. P&S Monitoring is often necessary to properly titrate the additional sympatholytic therapy.",
      },
      {
        title: "Asthma",
        description:
          "Is it a bronchial issue and therefore a Sympathetic dysfunction? The non-steroidal therapies may involve beta-2 adrenergic agonists to broncho-dilate. However, beta-2 adrenergic agonists also affect the heart, increasing HR or BP by causing SE. The associated SE that may be induced, precedes the increase in HR or BP, and P&S Monitoring helps to titrate the asthma therapy to manage the disease without inducing heart diseases via the induced SE. Once P&S balance is established, any remaining symptoms may be pulmonary.",
      },
      {
        title: "COPD (Asthma with Chronic Obstruction)",
        description:
          "The non-steroidal COPD therapies may involve beta-2 adrenergic agonists to broncho-dilate. However, beta-2 adrenergic agonists also affect the heart, increasing HR or BP by causing SE. The associated SE that may be induced, precedes the increase in HR or BP, and P&S Monitoring helps to titrate the COPD therapy to manage the disease without inducing heart diseases via the induced SE. Once P&S balance is established, any remaining symptoms may be pulmonary.",
      },
    ],
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    image: specialtyImages[2],
    conditions: [
      {
        title: "Hypertension",
        description:
          "BP is controlled by Baroreceptor Reflex (BRR), which is controlled by the Sympathetics. Hypertension is typically characterized by SE driving up BRR and then BP. At first, hypertension is due to both an initial decline in resting Parasympathetic activity causing high SB (indicating resting SE) and a (protective) challenge PE causing a secondary challenge SE, then it is due to the continuing effects of SE.",
      },
      {
        title: "Post-MI",
        description: "MI causes SE; therefore, post-MI symptoms are due to SE.",
      },
      {
        title: "Angina",
        description:
          "The vasculature is uniquely controlled by the Sympathetic nervous system: peripheral vasoconstriction is a function of increased Sympathetic tone increasing BP and shunting blood to the core; peripheral vasodilation is a function of decreased Sympathetic tone decreasing BP and enabling blood flow to the periphery. Angina is a form of Coronary Artery Disease (CAD) and is a function of SE, either due to excess vasoconstriction or due to blockages from atherosclerotic build up.",
      },
      {
        title: "Atherosclerosis",
        description:
          "Atherosclerosis induces SE. It may be induced by SE as SE may involve endothelial dysfunction.",
      },
      {
        title: "Mitral Valve Prolapse Syndrome",
        description:
          "Mitral Valve Prolapse Syndrome is empirically associated with PE, if not a structural cardiac issue.",
      },
      {
        title: "Cardiomyopathy",
        description:
          "Cardiomyopathy is characterized by SE, however, its different forms may be induced by other disorders. For example, Hypertrophic Cardiomyopathy is genetically facilitated, with the disorder turning symptomatic if and when Orthostatic dysfunction (associated with α-SW upon standing) or Syncope (associated with α-SE upon standing) is demonstrated.",
      },
      {
        title: "Cardiac Dysrhythmias",
        description:
          "Cardiac Dysrhythmias are varied and, in part, associated with P&S dysfunction. It is accepted that approximately 80% of atrial dysrhythmias also involve the P&S systems (only 20% are purely cardiogenic). Of the 80% that involve the P&S, approximately 20% are Sympathetically-mediated and 80% are Parasympathetically-mediated. Ventricular dysrhythmias are accepted to also involve the Sympathetics, except repolarizing ventricular dysrhythmias, which are accepted to also involve the Parasympathetics. P&S monitoring helps to specify which branch is involved. Once P&S balance is restored, the remaining symptoms are cardiogenic.",
      },
      {
        title: "Congestive Heart Failure",
        description:
          "CHF is characterized by high SB, indicating a resting SE. Note, resting SE (high SB) precedes even the 3% weight gain indicator and which may be prevented with early intervention, including a temporary increase in diuretic, if the increase in SB is noted (up to 4 days) before the weight gain. This helps to avoid hospitalization.",
      },
    ],
  },
  {
    title: "Endocrinology",
    slug: "endocrinology",
    image: specialtyImages[3],
    conditions: [
      {
        title: "Thyroid Disorders",
        description:
          "The P&S systems are intimately associated with the hormonal systems. Hyperthyroidism is characterized by SE (at least in part) causing the over-production of thyroid hormones. Hypothyroidism is characterized by PE (at least in part) shutting down the production of thyroid hormones.",
      },
      {
        title: "(Premature) Menopausal Symptoms or Syndromes",
        description:
          "The P&S systems are intimately associated with the hormonal systems. From a P&S perspective, menopausal abnormality is characterized by challenge PE, (at least in part) shutting down the production of estrogen and progesterone. Once P&S balance is established, any remaining symptoms are end-organ issues.",
      },
      {
        title: "Diabetes",
        description:
          "By the time of diagnosis, both forms of Diabetes (types I & II) are characterized by SE: (1) at first due to both an initial decline in resting Parasympathetic activity causing high SB (indicating resting SE) and a (protective) challenge PE causing a secondary challenge SE, (2) then due to the continuing effects of sugar acidosis on the more highly exposed Vagus Nerve which comprises the majority of the Parasympathetic Nervous System. In type II Diabetes, Prediabetes is characterized by challenge PE shutting down (at least in part) the production of insulin. Once P&S balance is established, any remaining symptoms are end-organ issues.",
      },
    ],
  },
  {
    title: "Nephrology",
    slug: "nephrology",
    image: specialtyImages[4],
    conditions: [
      {
        title: "Hypertensive Renal Disease or Renal Failure",
        description:
          "Both are typically characterized by SE: (1) at first due to both an initial decline in resting Parasympathetic activity causing high SB (indicating resting SE) and a (protective) challenge PE causing a secondary challenge SE, (2) then due to the continuing effects of uremia toxicity on the more highly exposed Vagus Nerve which comprises the majority of the Parasympathetic Nervous System. In Hypertensive Renal Disease, resting SE is exacerbated either causing, or caused by, the hypertension.",
      },
    ],
  },
  {
    title: "Internal Medicine",
    slug: "internal-medicine",
    image: specialtyImages[5],
    conditions: [
      {
        title: "Morbid Obesity",
        description:
          "There are two underlying P&S forms: (1) stress induced, challenge PE (as a protective mechanism), causing secondary SE, releasing cortisol, putting the body into \"starvation mode\"; and (2) resting low SB (indicating resting PE) keeping metabolism low. Both may involve depression. The former is typically the difficult-to-manage type. The latter is the type that best responds to typical diet programs and is easier to keep off the weight.",
      },
      {
        title: "Unspecified Immunity Deficiency",
        description:
          "The Parasympathetic nervous system provides the immune system its memory and helps to control and coordinate immune responses. Weak P-Activity (including high SB, at rest) promotes immune deficiency.",
      },
      {
        title: "GERD",
        description:
          "The gastric system is uniquely controlled by the Parasympathetics. GERD as a result of PE is due to overactive gastric motility. GERD as a result of Parasympathetic insufficiency is due to forms of gastroparesis. Once P&S balance is established, any remaining symptoms may be specifically gastric (end-organ) issues (e.g., smooth muscle, excess gastric secretion, bacterial, etc.).",
      },
      {
        title: "Gastroparesis",
        description:
          "The gastric system is uniquely controlled by the Parasympathetics. Gastroparesis is (at least in part) a result of Parasympathetic insufficiency. Once P&S balance is established, any remaining symptoms may be specifically gastric (end-organ) issues (e.g., smooth muscle, excess gastric secretion, bacterial, etc.).",
      },
      {
        title: "Irritable Bowel Syndrome",
        description:
          "The intestinal system is uniquely controlled by the Parasympathetics. IBS with constipation is (at least in part) a result of Parasympathetic insufficiency, causing low motility. IBS with diarrhea is (at least in part) a result of PE, causing excess motility. Once P&S balance is established, any remaining symptoms may be specifically gastric (end-organ) issues (e.g., smooth muscle, excess gastric secretion, bacterial, etc.).",
      },
      {
        title: "Fibromyalgia",
        description:
          "Fibromyalgia is now accepted as an autonomic dysfunction, typically characterized by challenge PE. The associated SE (associated with the amplified pain responses) is typically secondary to the PE and is the main reason why it is difficult to control or respond, seemingly paradoxically, to anti-cholinergic therapy.",
      },
      {
        title: "Edema",
        description:
          "Lower body edema is typically associated with SW, causing pooling of blood in the lower vasculature and may result in varicose or spider veins; more generalized edema is associated with PE.",
      },
      {
        title: "Sex Dysfunction",
        description:
          "Sex function requires proper coordination between the P&S systems: P for \"point\", responsible for erection and vaginal lubrication, and S for \"shoot\", responsible for ejaculation and orgasm. Once P&S balance is established, any remaining symptoms may be vascular, psychologic, or hormonal.",
      },
    ],
  },
];

// --- 3. Main navigation (with dropdowns for Products and Specialties) ----------

export const mainNavigation = {
  topLevel: [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products",
      dropdown: products.map((p) => ({
        label: p.title,
        href: `/products/${p.slug}`,
      })),
    },
    { label: "Integration", href: "/ans-monitoring-integration" },
    { label: "Contact", href: "/contact-us" },
    { label: "Log In", href: "/log-in" },
  ] as (NavLink & { dropdown?: { label: string; href: string }[] })[],
  productsDropdown: {
    label: "Products",
    href: "/products",
    items: [
      { label: "All Products", href: "/products" },
      ...products.map((p) => ({ label: p.title, href: `/products/${p.slug}` })),
    ],
  } as NavDropdown & { href: string },
  specialtiesDropdown: {
    label: "Specialties",
    href: "/specialties",
    items: [
      { label: "All Specialties", href: "/specialties" },
      ...specialties.map((s) => ({ label: s.title, href: `/specialties/${s.slug}` })),
    ],
  } as NavDropdown & { href: string },
};

// --- 4. Homepage sections content ----------------------------------------------

export const homepageContent = {
  hero: {
    headline:
      "Complete Autonomic Function Testing Has Never Been More Convenient!",
    subheadline:
      "Physio PS provides the most innovative option for autonomic function testing.",
    tagline: "Software designed for better care.",
  },
  intro: {
    paragraph:
      "The Physio PS, Inc. P&S Monitoring technology is used by physicians and medical providers to non-invasively monitor the Autonomic Nervous System, specifically the Parasympathetic & Sympathetic (P&S) Nervous Systems, independently, simultaneously & quantitatively, using an algorithmic measurement of the LFa & RFa.",
  },
  monitoring: {
    title: "Physio PS, Inc. Autonomic Function Monitoring",
    subtitle:
      "Providing physicians and healthcare providers more information to improve their diagnostic capability and prioritize therapy planning for a broad spectrum of diseases, such as:",
    conditionsList: [
      "Heart Disease",
      "Hypertension",
      "Diabetes",
      "Depression / Anxiety",
      "Post-COVID / Long-COVID",
      "COPD",
      "Orthostatic Intolerance",
      "Syncope",
      "Exercise Intolerance",
      "Disorders of the Brain / Traumatic Brain Injury",
      "Nervous System Disorders",
      "Sweating Abnormalities",
      "Hormone Imbalances",
      "POTS",
      "EDS",
      "Dysautonomia",
    ],
  },
  valueProposition: {
    paragraph:
      "Physio PS utilizes advanced parasympathetic and sympathetic nervous system monitoring technology to detect autonomic dysfunction and autonomic neuropathy, as well as underlying illnesses that aren't as easily detected by existing technology on the market today.",
    supportingParagraph:
      "This assists in the prevention, diagnosis, and treatment of people (90M+) with Autonomic Dysfunction from a variety of causes, including the diagnosis and treatment of people suffering post-Covid symptoms.",
    ctaPrimary: "Request A Demo",
  },
  convenience: {
    headline:
      "Physio PS Provides The Best Ability to Test Autonomic Patients with a Simple & Non-Invasive 15 Minute Monitoring Session",
    ctaLink: "Click Here To Learn More About Autonomic Nervous System Monitoring",
  },
  improvedOutcomes: {
    headline: "Improved Outcomes",
    subheadline:
      "Physio PS provides the most innovative option for autonomic nervous system (ANS) monitoring.",
    body: [
      "Autonomic nervous system (ANS) monitoring is an integral component of the clinical evaluation of patients with autonomic disorders. Monitoring also identifies previously unknown autonomic dysfunction that can improve outcomes in a vast area of patient care.",
      "Most drugs and diseases affect only one of the two autonomic branches. Only Physio PS parasympathetic and sympathetic (P&S) monitoring quantifies the individual patient's responses to disease and therapy, unlike other forms of autonomic monitoring that only measure the sympathetic nervous system or heart rate variability (HRV).",
      "Physio PS offer the only parasympathetic and sympathetic (P&S) testing available on the market.",
      "Quantitative data of both parasympathetic and sympathetic (P&S) branches enables a more scientific approach to individualized healthcare, potentially reducing medication load, hospitalization, and re-hospitalization, and promoting preventative, proactive healthcare, thereby reducing healthcare costs both to patients and the nation.",
    ],
  },
  applications: {
    headline: "Wide Spanning Applications",
    items: [
      {
        category: "Medical Doctors",
        examples: "Cardiologists, GPs, Pain Management, Trauma, Psychologists, etc.",
      },
      {
        category: "Urgent Care Clinics",
        examples:
          "Effectively treat anxiety and fatigue when patients can't be treated by normal hospital visits",
      },
      {
        category: "Insurance Companies/Corporate Organizations",
        examples: "Health assessment programs to reduce risk and save cost",
      },
      {
        category: "Assisted Living, Nurse Care, Independent Living",
        examples: "Identify potential fall victims, more effectively manage medications",
      },
      {
        category: "Veterans Administration",
        examples: "Addiction, PTSD treatment",
      },
      {
        category: "Fitness Centers",
        examples: "Add physiological measurement to health assessment programs",
      },
      {
        category: "Sports Medicine",
        examples: "Concussion detection and treatment, increased performance outcomes",
      },
    ],
    cta: "Speak With An Expert About Your Needs",
  },
  solutions: {
    headline: "Integrate ANS Function Testing Into Your Business With",
    subheadline: "Solutions Simplified For All",
    productCards: products.map((p) => ({
      title: p.title,
      slug: p.slug,
      features: p.features,
      cta: "Request A Demo",
    })),
  },
  report: {
    headline: "Multi-Parameter Graph Report",
    description:
      "Equipped with state-of-the-art autonomic monitoring tools, Physio PS is able to provide its clients with unparalleled insights into their autonomic nervous system function.",
  },
  providerFocus: {
    title: "Provider Focus",
    description:
      "Our technology is able to provide physicians more information to improve their assessment and prioritize therapy planning for a broad spectrum of diseases such as heart disease, hypertension, diabetes, depression, anxiety, COPD, orthostatic intolerance, syncope, exercise intolerance, disorders of the brain (e.g. brain injury, including concussion) and nervous system (e.g., MSA, Alzheimer's, Parkinson's), sweating abnormalities, hormone imbalances, and early detection of sepsis.",
  },
  patientFocus: {
    title: "Patient Focus",
    description:
      "Living with autonomic dysfunction can be challenging. But imagine a world where technology empowers you to take control of your health. Physio PS is dedicated to making this vision a reality. We provide state-of-the-art autonomic monitoring software that allows patients to track their symptoms, monitor their progress, and gain insights into their condition.",
  },
  learnMoreCta: "Click to Learn More About The Autonomic Nervous System & It's Functions",
  // Integration page (ANS Monitoring Integration)
  integrationPage: {
    intro:
      "Physio PS autonomic function testing can be integrated into your practice, clinic, or organization. Our technology non-invasively monitors the Parasympathetic & Sympathetic (P&S) Nervous Systems independently, simultaneously, and quantitatively to improve diagnostic capability and therapy planning.",
    whyIntegrate: {
      headline: "Why Integrate ANS Monitoring",
      paragraphs: [
        "Autonomic nervous system (ANS) monitoring is an integral component of the clinical evaluation of patients with autonomic disorders. It identifies previously unknown autonomic dysfunction that can improve outcomes across a vast area of patient care.",
        "Only Physio PS parasympathetic and sympathetic (P&S) monitoring quantifies the individual patient's responses to disease and therapy, unlike other forms of autonomic monitoring that only measure the sympathetic nervous system or heart rate variability (HRV).",
        "Quantitative data of both P&S branches enables a more scientific approach to individualized healthcare, potentially reducing medication load, hospitalization, and re-hospitalization, and promoting preventative, proactive care.",
      ],
    },
    whoItsFor: {
      headline: "Wide Spanning Applications",
      items: [
        { category: "Medical Doctors", examples: "Cardiologists, GPs, Pain Management, Trauma, Psychologists, etc." },
        { category: "Urgent Care Clinics", examples: "Effectively treat anxiety and fatigue when patients can't be treated by normal hospital visits" },
        { category: "Insurance Companies / Corporate Organizations", examples: "Health assessment programs to reduce risk and save cost" },
        { category: "Assisted Living, Nurse Care, Independent Living", examples: "Identify potential fall victims, more effectively manage medications" },
        { category: "Veterans Administration", examples: "Addiction, PTSD treatment" },
        { category: "Fitness Centers", examples: "Add physiological measurement to health assessment programs" },
        { category: "Sports Medicine", examples: "Concussion detection and treatment, increased performance outcomes" },
      ],
    },
    solutions: {
      headline: "Integrate ANS Function Testing Into Your Business With",
      subheadline: "Solutions Simplified For All",
      productCards: products.map((p) => ({
        title: p.title,
        slug: p.slug,
        features: p.features,
        cta: "Request A Demo",
      })),
    },
    providerFocus: {
      title: "Provider Focus",
      description:
        "Our technology is able to provide physicians more information to improve their assessment and prioritize therapy planning for a broad spectrum of diseases such as heart disease, hypertension, diabetes, depression, anxiety, COPD, orthostatic intolerance, syncope, exercise intolerance, disorders of the brain (e.g. brain injury, including concussion) and nervous system (e.g., MSA, Alzheimer's, Parkinson's), sweating abnormalities, hormone imbalances, and early detection of sepsis.",
    },
    cta: "Contact us to learn how Physio PS technology can be integrated with your existing systems and workflows, or request a demo to get started.",
  },
  workWithUs: {
    tagline: "It's Time To",
    headline: "Work With Us If...",
    items: [
      "You are looking for options to improve patient care",
      "You need a easy to use system",
      "You need a reliable partner",
      "You are interested in expanding your services",
    ],
  },
  tryIt: {
    headline: "Try It For Yourself",
    description:
      "Contact us to set up a demo or to discuss how Physio PS could improve your practice!",
    formLabels: {
      firstName: "First Name",
      phone: "Phone *",
      email: "Email *",
      submit: "Start the Conversation",
      consent:
        "By checking this box, I consent to receive communications from Physio PS, Inc. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.",
    },
  },
  testimonials: {
    headline: "Testimonials",
    items: [
      {
        quote:
          "Physio PS has been a gamechanger in uncovering the hidden autonomic dysfunctions that often underlie chronic fatigue, persistent pain, anxiety symptoms, and delayed recovery after whiplash and concussion. It's given us answers when nothing else could — and a clear path to true healing.",
        author: "Sean O. Flannagan",
        credentials:
          "PT, DPT, Cert. SMT, Cert. DN, MAACP",
      },
      {
        quote:
          "As a VA Electrophysiologist, I've used ANSAR's Parasympathetic and Sympathetic Monitoring for years with outstanding results. It delivers diagnostic insights no other tool can provide. One case—a Navy SEAL suffering from severe dizziness and disability—was accurately diagnosed and effectively treated using ANSAR technology, after traditional tests failed. The patient regained his health, quality of life, and independence. This tool is a game-changer for patient care and healthcare efficiency.",
        author: "Heather Bloom",
        credentials:
          "MD, FACC, Director of Cardiac Electrophysiology, Atlanta VAMC Associate Professor, Emory University School of Medicine",
      },
      {
        quote:
          "I cannot say enough good things about Physio PS! This technology has done so much for me. I used to have terrible anxiety storms that would cause me to have high fevers. With this simple test, my doctor was able to find the root cause of my symptoms and prescribe a very low-dose medicine for about nine months to correct the primary problem. I have not had a high fever in four years!",
        author: "Michael Stopyra",
        credentials: "Patient",
      },
    ],
    cta: "Share Your Success Story",
  },
  footer: {
    headline: "Autonomic function monitoring. Better outcomes for patients.",
    newsletterHeadline: "Stay updated on Physio PS news and product updates.",
    newsletterDisclaimer:
      "*By completing this form you are signing up to receive our emails and can unsubscribe at any time.",
    navigation: {
      column1: [
        { label: "Home", href: "/" },
        { label: "Product", href: "/products" },
        { label: "Integration", href: "/ans-monitoring-integration" },
        { label: "Book A Demo", href: "/contact-us" },
        { label: "About Us", href: "/about-us" },
        { label: "Log In", href: "/log-in" },
      ],
      column2: [
        { label: "Patient Resources", href: "/patient-resources" },
        { label: "Clinical Resources", href: "/clinical-resources" },
        { label: "Research Center", href: "/research-center" },
      ],
    },
    contact: {
      phone: "603-287-1817",
      email: "info@physiops.com",
      address: "80 Nashua Rd Building C Unit G1, Londonderry, NH 03053",
    },
    cta: "Become An Authorized Distributor",
    copyright: "Copyright 2026 Physio PS, Inc. All Rights Reserved.",
    legal:
      "The material and information provided by Physio PS is for general information purposes only. You should not rely upon this material or information for basis of making healthcare, treatment, or diagnosis decisions. While Physio PS strives to provide the most correct and up-to-date information and data, Physio PS makes no representations or warranties of any kind, expressed or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information, products, services, or related graphics contained. Any reliance placed on such material is therefore strictly at your own risk. Reporting Information is supplied under license by NCRC LLC. * 'RFa' is known to be a measure of Parasympathetic activity and 'LFa' is known to be a measure of Sympathetic activity, based on reference: Colombo J, Arora RR, DePace NL, Vinik AI, Clinical Autonomic Dysfunction: Measurement, Indications, Therapies, and Outcomes. Springer Science + Business Media, New York, NY; 2014.",
  },
};

// --- Route slugs (for reference) ----------------------------------------------

export const routeSlugs = {
  home: "",
  products: "products",
  integration: "ans-monitoring-integration",
  contact: "contact-us",
} as const;
