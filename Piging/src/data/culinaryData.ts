export type IslandId = 'luzon' | 'visayas' | 'mindanao';

export interface VerifiedTutorial {
  title: string;
  channel: string;
  url: string;
  duration: string;
}

export interface LarawangSanaysayStep {
  stepNumber: number;
  tagalogTitle: string;
  hackMethod: string;
  academicCaption: string;
  comparisonNote: string;
  imageUrl: string;
}

export interface DishData {
  id: string;
  name: string;
  plaqueTitle: string;
  plaqueSubtitle?: string;
  regionId: string;
  regionName: string;
  islandId: IslandId;
  province: string;
  imageUrl: string;
  shortTagline: string;
  evolutionNote?: string;
  traditionalRecipe?: {
    title: string;
    ingredients: string[];
    procedure: string[];
    sourceUrl?: string;
  };
  // Tab 1: History & Origins (UCSP)
  ucspHistory: {
    anthropologicalContext: string;
    culturalEvolution: string;
    preservationTechnique: string;
    materialCulture: string;
    socialSignificance: string;
  };
  // Tab 2: Verification & Fact-Check (MIL)
  milVerification: {
    boilingAndCuringTitle: string;
    heirloomIngredients: string[];
    fryingOrSecondaryTitle: string;
    secondaryIngredients: string[];
    methodSteps: {
      sectionTitle: string;
      steps: string[];
    }[];
    sources: string[];
    verifiedTutorials: VerifiedTutorial[];
    authenticKeywords: string[];
    shortcutFlags: {
      keyword: string;
      reason: string;
    }[];
    sampleOnlineRecipe: string;
    sampleAuthenticRecipe: string;
  };
  // Tab 3: Philosophy & Cultural Journal
  philosophyPrompt: {
    question: string;
    englishTranslation: string;
    philosophicalLens: string;
  };
  // Modern Hacks & Shortcuts (FPL - Larawang-Sanaysay)
  fplLarawangSanaysay: {
    essayTitle: string;
    abstract: string;
    steps: LarawangSanaysayStep[];
  };
  keyIngredients?: string[];
  cookingTechniques?: string[];
  averageRating?: number;
}

export interface RegionData {
  id: string;
  shortTitle: string; // e.g. "Region 1"
  fullName: string;   // e.g. "Region 1 - Ilocos Region"
  subtitle: string;   // e.g. "Ilocos Region"
  islandId: IslandId;
  ornamentType: 'mandala' | 'fans' | 'mask' | 'pinwheels';
  summaryBanner: string;
  dishes: DishData[];
}

export interface IslandGroupData {
  id: IslandId;
  name: string;
  landmarkName: string;
  imageUrl: string;
  weavePattern: 'inabel' | 'hablon' | 'yakan';
  description: string;
}

export interface JournalEntry {
  id: string;
  dishId: string;
  dishName: string;
  regionName: string;
  familyVariation: string;
  culturalReflection: string;
  createdAt: string;
  userId?: string;
  userDisplayName?: string;
}

export interface MapRegionInfo {
  id: string;
  name: string;
  islandId: IslandId;
  capitalOrHub: string;
  tagline: string;
  coordinates: { x: number; y: number };
  keyIngredients: string[];
  cookingTechniques: string[];
  representativeDishes: string[];
}

export const IMAGES = {
  luzon: '/src/assets/images/luzon_banaue_terraces_1791559225968.jpg',
  visayas: '/src/assets/images/visayas_chocolate_hills_1791559244743.jpg',
  mindanao: '/src/assets/images/mindanao_enchanted_river_1791559262578.jpg',
  bagnet: '/src/assets/images/dish_ilocos_bagnet_1791559275068.jpg',
  pakbet: '/src/assets/images/dish_ilocos_pakbet_1791559289394.jpg',
  dinakdakan: '/src/assets/images/dish_la_union_dinakdakan_1791559302985.jpg',
  tocino: '/src/assets/images/dish_pampanga_tocino_1791559316554.jpg',
  lunis: '/src/assets/images/dish_batanes_lunis_1791559334177.jpg',
  pancitCabagan: '/src/assets/images/pancit_cabagan_isabela_1791638333873.jpg',
  sinanta: '/src/assets/images/sinanta_tuguegarao_1791638350443.jpg',
  sisig: '/src/assets/images/sisig_pampanga_1791638369231.jpg',
  kakanin: '/src/assets/images/kakanin_nueva_ecija_1791638385538.jpg',
};

export const ISLAND_GROUPS: IslandGroupData[] = [
  {
    id: 'luzon',
    name: 'Luzon',
    landmarkName: 'Banaue Rice Terraces, Ifugao',
    imageUrl: IMAGES.luzon,
    weavePattern: 'inabel',
    description: 'From the windswept salt pans of Ilocos and stone houses of Batanes to the culinary plains of Pampanga.',
  },
  {
    id: 'visayas',
    name: 'Visayas',
    landmarkName: 'Chocolate Hills, Bohol',
    imageUrl: IMAGES.visayas,
    weavePattern: 'hablon',
    description: 'Archipelagic flavors shaped by sugarcane estates, coastal kinilaw traditions, and slow-simmered broths.',
  },
  {
    id: 'mindanao',
    name: 'Mindanao',
    landmarkName: 'Sugba Lagoon & Enchanted River',
    imageUrl: IMAGES.mindanao,
    weavePattern: 'yakan',
    description: 'Rich spice pastes (palapa), toasted coconut (tiyahu), turmeric, and ancient maritime trade aromas.',
  },
];

const DEFAULT_VERIFIED_TUTORIALS: VerifiedTutorial[] = [
  {
    title: 'Authentic Ilocos Bagnet Traditional Double-Fry Method',
    channel: 'Panlasang Pinoy Heritage',
    url: 'https://youtu.be/mMM5_xDLevg?si=IXV8gjdynV-Z-AGw',
    duration: '12:45',
  },
  {
    title: 'Heirloom Ilocano Culinary Documentary: Sangkutsa & Asin',
    channel: 'FEATR Philippine Food',
    url: 'https://youtu.be/DhBWI_6KOgI?si=OMrf4lOYxYMb4kWI',
    duration: '18:20',
  },
  {
    title: 'How Traditional Bagnet is Cooked in Vigan Clay Furnaces',
    channel: 'Lasa-Suri Field Archive',
    url: 'https://youtu.be/Ipbhb9Dts3o?si=XOA2a6qMaE9pgKa9',
    duration: '09:15',
  },
  {
    title: 'Regional Pork Preservation Techniques Across Northern Luzon',
    channel: 'Kultura at Kusina TV',
    url: 'https://youtu.be/TyXobyvOUx4?si=ZQnvGOKv4rptAuYK',
    duration: '14:10',
  },
  {
    title: 'Crispy Bagnet Recipe & Sukang Iloko Pairing Guide',
    channel: 'Yummy Kitchen Ph',
    url: 'https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
    duration: '08:52',
  },
];

export const REGIONS_DATA: RegionData[] = [
  // ==================== LUZON ====================
  {
    id: 'region-1',
    shortTitle: 'Region 1',
    fullName: 'Region 1 - Ilocos Region',
    subtitle: 'Ilocos Region',
    islandId: 'luzon',
    ornamentType: 'mandala',
    summaryBanner:
      "Region 1 food culture is known for its strong, savory flavors, traditional cooking methods, and resourceful use of local ingredients. Its cuisine reflects the region's agricultural and coastal environment, with cooking practices such as boiling, grilling, fermenting, drying, and slow cooking passed down through generations.",
    dishes: [
      {
        id: 'ilocos-bagnet',
        name: "Iloco's Bagnet",
        plaqueTitle: 'BAGNET',
        plaqueSubtitle: 'FROM ILOCOS',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'Ilocos Sur & Ilocos Norte',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Double-fried heirloom pork belly cured in sea salt and aromatics.',
        evolutionNote:
          'Originating along the narrow, arid coastal strip of Northern Luzon, Bagnet was perfected as a preservation method (sangkutsa) to store pork belly in the coastal heat before refrigeration, evolving into the centerpiece of Ilocano celebratory feasting.',
        traditionalRecipe: {
          title: 'Ilocos Bagnet (Traditional Karahay Double-Fry Method)',
          ingredients: [
            '1 kg pork belly (liempo), whole slab',
            'Water (enough to submerge the meat)',
            '1–2 tbsp rock salt (asin sa baybay)',
            '1 tbsp whole black peppercorns',
            '4–5 dried bay leaves (dahon ng laurel)',
            '4–5 cloves native garlic, crushed',
            'Pork lard or cooking oil for deep-frying in karahay',
            'Traditional Dip: Sukang Iloko, native shallots (lasona), tomatoes, and bagoong monamon',
          ],
          procedure: [
            '1. In a deep pot, submerge the pork belly slab with water, rock salt, peppercorns, crushed garlic, and bay leaves.',
            '2. Simmer over medium-low heat for 45 to 60 minutes until the skin and meat are tender.',
            '3. Drain completely and prick the skin lightly with a skewer. Air-dry uncovered overnight.',
            '4. First fry: Submerge in hot lard (180°C) until lightly golden; cool down completely.',
            '5. Second fry: Flash-fry at high heat (200°C) until the rind blisters into a shatteringly crisp crackling. Serve with Sukang Iloko.',
          ],
          sourceUrl: 'https://panlasangpinoy.com/bagnet-recipe/',
        },
        ucspHistory: {
          anthropologicalContext:
            'Before modern refrigeration, Indigenous and colonial-era Ilocanos living along the narrow, arid coastal strip between the Cordillera range and the West Philippine Sea needed a reliable way to preserve pork belly after communal harvests and fiestas.',
          culturalEvolution:
            'They developed a rigorous process of salting, slow-boiling with native aromatics (sangkutsa), overnight air-drying, and double-frying in rendered lard inside massive cast-iron karahay woks. What began as survival food evolved into the centerpiece of Ilocano hospitality (Piging).',
          preservationTechnique:
            'Dehydration via sea-salt osmosis and two-stage thermal rendering (sangkutsa + double deep-frying) removes moisture from the muscle fibers while blistering the rind into a protective, shelf-stable crust.',
          materialCulture:
            'Traditionally cooked over wood-fired clay stoves (dalikan) in deep cast-iron cauldrons (karahay), hung on bamboo poles to dry in the coastal breeze, and served on woven rattan bilao with aged cane vinegar (Sukang Iloko) fermented in burnay stoneware jars.',
          socialSignificance:
            'Served during town fiestas, weddings, and ancestral offerings (atang), symbolizing Ilocano industry, thrift (kuripot resourcefulness), and communal generosity.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Boiling & Curing Liquid:',
          heirloomIngredients: [
            '1 kg pork belly (liempo), whole slab',
            'Water (enough to submerge the meat)',
            '1–2 tbsp rock salt (asin sa baybay)',
            '1 tbsp whole black peppercorns',
            '4–5 dried bay leaves (dahon ng laurel)',
            '4–5 cloves native garlic, crushed',
          ],
          fryingOrSecondaryTitle: 'Frying:',
          secondaryIngredients: [
            'Cooking oil or rendered pork lard (enough for deep-frying)',
            'Traditional Dip: Sukang Iloko, native shallots (lasona), tomatoes, and bagoong monamon',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Boil and Season the Pork:',
              steps: [
                '1. Place the whole pork belly slab in a deep pot.',
                '2. Add enough water to submerge the pork completely.',
                '3. Add the rock salt, whole black peppercorns, crushed garlic, and bay leaves.',
                '4. Bring to a boil over medium-high heat, then lower heat and simmer for 45 to 60 minutes until the skin and meat are tender (tender to a fork test, but not falling apart).',
              ],
            },
            {
              sectionTitle: '2. Drain and Dry:',
              steps: [
                '1. Remove the pork belly from the pot and let the excess liquid drain off completely.',
                '2. Prick the skin lightly with a fork or bamboo skewer to help create bubbles during frying.',
                '3. Prick/pat dry the surface thoroughly with paper towels or clean cloth.',
                '4. Optional Traditional Step: Air-dry or refrigerate uncovered for a few hours (or overnight) to dry out the skin thoroughly for maximum crispiness before double-frying.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/bagnet-recipe/',
            'Yummy.ph: https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: [
            'rock salt',
            'asin',
            'peppercorn',
            'paminta',
            'bay leaves',
            'laurel',
            'garlic',
            'bawang',
            'air-dry',
            'overnight',
            'double',
            'sukang iloko',
            'bagoong',
          ],
          shortcutFlags: [
            {
              keyword: 'baking soda',
              reason: 'Baking soda rubbed on pork rind is a modern commercial shortcut to force blistering instead of authentic overnight drying and double-frying.',
            },
            {
              keyword: 'magic sarap',
              reason: 'Commercial MSG seasoning granules replace the natural umami achieved through slow sea-salt curing and native garlic infusion.',
            },
            {
              keyword: 'liquid seasoning',
              reason: 'Industrial soy-based liquid seasoning alters the clean, salt-cured flavor profile of heirloom Ilocano Bagnet.',
            },
            {
              keyword: 'air fryer',
              reason: 'Convection air-frying dries only the top rind rather than submerging the whole slab in rendered pork fat (karahay method).',
            },
            {
              keyword: 'cornstarch',
              reason: 'Dredging in starch creates a batter coating, which is foreign to authentic unbattered Ilocos Bagnet.',
            },
          ],
          sampleOnlineRecipe:
            'Quick 25-Minute Viral Crispy Bagnet! Boil 1kg pork belly for 15 mins with 1 packet Magic Sarap and liquid seasoning. Rub skin with baking soda and vinegar, coat lightly with cornstarch, then pop into the Air Fryer at 200C for 15 minutes!',
          sampleAuthenticRecipe:
            'Heirloom Ilocos Bagnet: Submerge 1 kg whole pork belly slab in water with 2 tbsp Ilocos rock salt, whole black peppercorns, crushed native garlic, and bay leaves. Simmer 60 mins, drain and air-dry overnight, then double-fry in a deep karahay until golden and blistered. Serve with Sukang Iloko and bagoong monamon.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang bawat lutuing minana ay hindi lamang pagkain ng katawan kundi gunita ng ating pagkakakilanlan (embodied cultural memory). Kapag binura ang mabagal at maingat na proseso ng sangkutsa, nawawala rin ang disiplina at kasaysayan ng mga ninuno.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Ebolusyon ng Bagnet mula sa Tradisyonal na Karahay tungo sa Makabagong Kusina',
          abstract:
            'Isang akademikong pagsusuri sa ilalim ng Filipino sa Piling Larang (Akademik) na naghahambing sa tradisyonal na dalawahang pagpiprito (double-frying) ng Ilocos at sa mga makabagong pamamaraan sa urbanisadong tahanan.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagpapakulo at Pag-aasin (Sangkutsa)',
              hackMethod: 'Pressure Cooker at Komersyal na Pampalasa vs. Mabagal na Pagpapakulo sa Asin',
              academicCaption:
                'Sa tradisyonal na proseso sa Ilocos, maingat na pinakukuluan ang buong liempo sa tubig na may asin-baybay, buong paminta, dahon ng laurel, at pinaupong bawang sa loob ng isang oras. Sa makabagong "kitchen hack," ginagamitan ito ng pressure cooker sa loob lamang ng labinlimang minuto upang mapabilis ang paglambot ng laman.',
              comparisonNote:
                'Bagama’t nakatitipid ng oras ang pressure cooker, nababawasan ang malalim na pagpasok ng alat sa hibla ng karne.',
              imageUrl: IMAGES.bagnet,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Ang Pagpapatuyo ng Balat',
              hackMethod: 'Pagpahid ng Baking Soda at Suka vs. Magdamag na Pagpapatuyo sa Hangin',
              academicCaption:
                'Kinakailangang patuyuin nang magdamag ang pinakuluang liempo upang kusang mawala ang halumigmig sa balat bago ito ilubog sa kumukulong mantika. Sa mga komersyal na bersyon online, hinahalinhan ito ng pagtusok sa balat at pagpahid ng baking soda at puting suka upang pilitin ang pagputok ng chicharon.',
              comparisonNote:
                'Ang artipisyal na pampaputok ng balat ay nag-iiwan ng bahagyang mapaklang lasa kumpara sa natural na pagpapatuyo.',
              imageUrl: IMAGES.lunis,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Ang Pagluluto at Paghahain sa Bilao',
              hackMethod: 'Convection Air-Fryer vs. Dalawahang Paglubog sa Mantika (Karahay)',
              academicCaption:
                'Ginagamit ngayon ng maraming mag-aaral at manggagawa ang air-fryer bilang alternatibo sa malalim na pagpiprito sa karahay. Bagama’t nakababawas ito sa paggamit ng mantika, nananatiling walang kapantay ang lutong at linamnam ng Bagnet na niluto sa sariling mantika at inihain kasama ng Sukang Iloko, kamatis, at lasona.',
              comparisonNote:
                'Pinatutunayan ng larawang-sanaysay na ang tunay na pamana ay nasa pag-unawa sa pinagmulan bago gamitin ang makabagong teknolohiya.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'ilocos-pakbet',
        name: "Iloco's Pakbet",
        plaqueTitle: 'PAKBET',
        plaqueSubtitle: 'FROM ILOCOS',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'Ilocos Norte & Ilocos Sur',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Indigenous garden vegetables simmered in fermented bagoong monamon and topped with bagnet.',
        evolutionNote:
          'Pinakbet is mainly an indigenous Ilocano dish, but its development may have been influenced by cultural exchanges with neighboring countries. Chinese traders and Southeast Asian communities contributed to the wider Filipino tradition of using fermented ingredients and strong savory flavors, although there is no clear evidence that pinakbet itself originated from a foreign dish. The name pinakbet comes from the Ilocano word "pinakebbet," meaning "shrunk" or "shriveled," referring to the vegetables becoming smaller as they were slowly cooked. Traditionally, the dish was prepared in clay pots over a wood fire, allowing the vegetables to absorb the flavors of the fermented fish sauce. Over time, pinakbet developed into different versions across the Philippines, but it remains an important symbol of Ilocano food traditions and agricultural heritage.',
        traditionalRecipe: {
          title: 'Pinakbet Ilocano (Traditional Recipe)',
          ingredients: [
            'Eggplant (talong)',
            'Ampalaya (bitter melon)',
            'String beans (sitaw)',
            'Kamote (sweet potato)',
            'Okra',
            'Onion and tomatoes (lasona at kamatis)',
            '1½ cups water',
            '¼ cup bagoong isda (anchovy sauce / bugguong monamon)',
          ],
          procedure: [
            '1. Cut the vegetables into bite-sized pieces.',
            '2. Boil 1½ cups of water and add the bagoong isda.',
            '3. Add the vegetables in this order: kamote, okra, ampalaya, eggplant, string beans, tomatoes, and onion.',
            '4. Simmer for about 15 minutes until the vegetables are tender.',
            '5. Serve hot.',
          ],
          sourceUrl: 'https://panlasangpinoy.com/pakbet/#What_are_the_ingredients_in_Pinakbet_Ilocano',
        },
        ucspHistory: {
          anthropologicalContext:
            'Pakbet, also known as pinakbet, is a well-known Filipino vegetable dish that originated in the Ilocos region of Northern Philippines. It traditionally uses fresh vegetables that are commonly grown in local home gardens, such as bitter melon, eggplant, okra, and string beans. The dish is traditionally cooked in a clay pot called a palayok, which helps bring out its distinct flavor. To add a savory taste, bagoong isda, or fermented anchovy sauce, is commonly used as the main seasoning.',
          culturalEvolution:
            'Pinakbet is mainly an indigenous Ilocano dish, but its development may have been influenced by cultural exchanges with neighboring countries. The name pinakbet comes from the Ilocano word "pinakebbet," meaning "shrunk" or "shriveled," referring to the vegetables becoming smaller as they were slowly cooked over wood fire with bagoong isda.',
          preservationTechnique:
            'Fermented fish sauce (bagoong monamon / bagoong isda) aged in earthenware burnay jars acts as both seasoning and preservative for seasonal backyard harvests.',
          materialCulture:
            'Traditionally cooked in a round-bottomed clay pot called a palayok / banga over a wood fire where vegetables are layered and gently tossed (kalog) rather than broken with a metal spoon.',
          socialSignificance:
            'Embodies the Ilocano philosophy of resourcefulness and community life in Region 1, celebrating bitter, savory, and sour notes from native tomatoes and backyard produce without wasting a single vegetable.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipe Ingredients (Good for 4 People):',
          heirloomIngredients: [
            '4 pieces round eggplant cut in half',
            '2 pieces small bitter melon ampalaya, quartered',
            '½ bundle string beans cut into 2 inch length',
            '1 piece sweet potato kamote, quartered',
            '8 pieces okra',
            '1 piece tomato cubed & 1 piece onion cubed',
            '1½ cup water',
            '1 lb bagnet or pork belly',
            '¼ cup anchovy sauce bagoong isda',
          ],
          fryingOrSecondaryTitle: 'Cooking Method & Timing:',
          secondaryIngredients: [
            'Simmer vegetables for 15 minutes to absorb bagoong flavor',
            'Add crispy pork belly (bagnet) last and simmer 5 minutes so it stays crispy',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Prepare Bagnet & Cut Vegetables:',
              steps: [
                '1. Prepare ingredients and fry pork belly to crispy Bagnet.',
                '2. Cut 4 eggplants in half, 2 ampalayas into quarters, 1 kamote into quarters, string beans into 2-inch pieces, and cube onion and tomato.',
              ],
            },
            {
              sectionTitle: '2. Boil Anchovy Sauce & Cook:',
              steps: [
                '1. Pour 1½ cups water in a large pot, bring to a boil, then add ¼ cup bagoong isda and boil again.',
                '2. Add vegetables once boiling: kamote, okra, ampalaya, eggplant, string beans, tomatoes, onion. Simmer 15 minutes.',
                '3. Add crispy pork belly (bagnet) last and simmer for 5 minutes. Serve hot in a bilao.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/pakbet/#What_are_the_ingredients_in_Pinakbet_Ilocano',
            'https://www.scribd.com/presentation/463775101/FILIPINO-CUISINES-IN-REGION-1',
          ],
          verifiedTutorials: [
            {
              title: 'Pinakbet Ilocano Official Tutorial',
              channel: 'Panlasang Pinoy',
              url: 'https://youtu.be/J2NoBSnM1-0?si=Yw9FyPwR1jMAPENJ',
              duration: '10:24',
            },
            {
              title: 'Authentic Ilocano Pinakbet Recipe',
              channel: 'Kusina Chef',
              url: 'https://youtu.be/6wX5ISgvuwY?si=3ZCopbvNT2Zsjf5g',
              duration: '12:15',
            },
            {
              title: 'Original Ilocos Pinakbet in Palayok',
              channel: 'Ilocano Heritage Kitchen',
              url: 'https://youtu.be/WrbN3QayCaU?si=ZckjKBe8gr_r3Vhi',
              duration: '14:30',
            },
            {
              title: 'How to Cook Traditional Pinakbet with Bagnet',
              channel: 'Taste of the North',
              url: 'https://youtu.be/TEXgQlfV2KA?si=Fc8udjxTf4ltQWYT',
              duration: '11:42',
            },
            {
              title: 'Heirloom Pakbet with Bagoong Monamon',
              channel: 'FEATR Food Culture',
              url: 'https://youtu.be/BEAMncsLNOg?si=jWwZ3omdqdwOMaDX',
              duration: '16:05',
            },
          ],
          authenticKeywords: [
            'bagoong isda',
            'anchovy sauce',
            'ampalaya',
            'talong',
            'okra',
            'kamote',
            'kamatis',
            'bagnet',
            'palayok',
          ],
          shortcutFlags: [
            {
              keyword: 'bagoong alamang',
              reason: 'Sweet pink sautéed shrimp paste (bagoong alamang) is a Tagalog adaptation; authentic Ilocos Pakbet uses fermented anchovy sauce (bagoong isda).',
            },
            {
              keyword: 'tomato paste',
              reason: 'Canned tomato paste masks the fresh acidity of ripe native Ilocano tomatoes (kamatis).',
            },
            {
              keyword: 'sugar',
              reason: 'Adding sugar contradicts the savory-bitter balance of northern Ilocano Pakbet.',
            },
            {
              keyword: 'oyster sauce',
              reason: 'Commercial oyster sauce is an unauthentic stir-fry shortcut not found in traditional clay-pot Pakbet.',
            },
          ],
          sampleOnlineRecipe:
            'Easy 10-Minute Stir-Fry Pinakbet: Sauté pork in oil with 2 tbsp sweet bagoong alamang, 2 tbsp canned tomato paste, oyster sauce, and 1 tbsp brown sugar. Stir-fry mixed vegetables vigorously until coated.',
          sampleAuthenticRecipe:
            'Authentic Ilocos Pakbet: Boil 1½ cups water with ¼ cup bagoong isda (anchovy sauce). Add kamote, okra, ampalaya, round eggplant, string beans, tomato, and onion. Simmer 15 minutes, top with crispy Ilocos Bagnet, and simmer 5 minutes.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Sa pilosopiya ng Ilocano Pakbet, ang pait ng ampalaya at alat ng bagoong isda ay sumasalamin sa katatagan ng tao sa harap ng hirap. Kapag ginawang matamis at instant ang lahat ng ulam, nawawala ang pagkilala sa likas na lasa ng lupa.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Sining ng Pagkakalog sa Banga at ang Pagbabago ng Pinakbet sa Kalunsuran',
          abstract:
            'Tinatampok sa sulating ito ang kaibahan ng katutubong Pakbet ng Ilocos na niluluto sa palayok (banga) laban sa mabilisang gisa sa kawali na gumagamit ng komersyal na sarsa.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Pagpili ng Katutubong Gulay at Bagoong Isda',
              hackMethod: 'Naka-paketeng Halo-halong Gulay at Alamang vs. Katutubong Gulay at Bagoong Isda',
              academicCaption:
                'Gumagamit ang orihinal na Pakbet ng maliliit na katutubong ampalaya, bilog na talong, kamote, at bagoong isda. Sa makabagong kusina, madalas itong pinapalitan ng matamis na bagoong alamang at oyster sauce.',
              comparisonNote:
                'Ang bagoong isda ang nagbibigay ng malalim na umami nang hindi tinatakpan ang sariwang lasa ng gulay.',
              imageUrl: IMAGES.pakbet,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagkakalog sa Palayok Laban sa Malakas na Paggisa',
              hackMethod: 'Mabilisang Stir-Fry sa Kawali vs. Pagkakalog sa Palayok',
              academicCaption:
                'Sa halip na haluin nang paulit-ulit gamit ang sandok na nakakasira sa gulay, maingat na pinakukuluan sa palayok upang manatiling buo ang bawat piraso.',
              comparisonNote:
                'Nanatiling buo ang estruktura at sustansya ng gulay sa paraang palayok.',
              imageUrl: IMAGES.pakbet,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Pagtatampok ng Malutong na Bagnet sa Ibabaw',
              hackMethod: 'Paghalo ng Pork Cubes vs. Paglalagay ng Bagnet Bilang Korona ng Ulam',
              academicCaption:
                'Sa huling limang minuto ng pagluluto, ipinapatong ang malulutong na hiwa ng Ilocos Bagnet sa ibabaw ng gulay upang pagsamahin ang lutong at asim-alat ng bagoong.',
              comparisonNote:
                'Isang patunay ng ugnayan ng dalawang pamanang ulam ng Rehiyon Uno.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'la-union-dinakdakan',
        name: "La Union's Dinakdakan",
        plaqueTitle: 'DINAKDAKAN',
        plaqueSubtitle: 'FROM LA UNION',
        regionId: 'region-1',
        regionName: 'Region 1 - Ilocos Region',
        islandId: 'luzon',
        province: 'La Union',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Charcoal-grilled pork mask and belly tossed in a rich calamansi, ginger, and smoky onion dressing.',
        evolutionNote:
          'As Dinakdakan spread to other parts of the Philippines, different versions developed based on local tastes and available ingredients. Traditional recipes used mashed pig’s brain to give the dish its creamy texture, while modern versions often use mayonnaise as an easier alternative. Although there is no strong evidence that Dinakdakan was directly influenced by a specific foreign country, Filipino cuisine has been shaped by trade and cultural exchanges with neighboring Asian communities. Over time, Dinakdakan became popular beyond the Ilocos Region and was served in family gatherings, celebrations, and restaurants. Today, it remains a well-known Ilocano dish, commonly enjoyed with rice or as pulutan, while regional and household variations continue to evolve.',
        traditionalRecipe: {
          title: 'Dinakdakan Ilokano (Traditional Heirloom Recipe with Pig’s Brain)',
          ingredients: [
            '1 pc. / 400 grams pork ears',
            '1 pc. / 400 grams pork snout',
            'Water (for boiling ears, snout, and brain)',
            '1 tbsp rock salt (for boiling ears and snout)',
            '1 tbsp whole peppercorn (for boiling ears and snout)',
            '3 pcs bay leaves (for boiling ears and snout)',
            '¾ cup pig’s brain',
            '1 tsp salt (for boiling pig brain)',
            '1 tsp ground pepper (for seasoning brain)',
            '1 tsp salt (for seasoning brain)',
            '2 tbsp vinegar (for seasoning brain)',
            '1 small red onion (sliced)',
            '½ cup vinegar',
            '1 tbsp calamansi or lemon juice',
            '1 pc. long green chili (sliced)',
            '1 pc. red green chili (sliced)',
            '1 thumb-sized ginger (chopped finely)',
            '¼ cup spring onion (sliced)',
          ],
          procedure: [
            '1. Boil ears and snout in water with rock salt, peppercorns, and bay leaves until tender.',
            '2. In a small pot, boil pig brain with salt and vinegar, then season with pepper and mash until creamy.',
            '3. Grill boiled pork parts over hot charcoal until charred and slightly crispy.',
            '4. Chop into bite-sized pieces and toss with red onion, green and red chilies, ginger, calamansi, and vinegar.',
            '5. Fold in the creamy brain mixture and serve hot.',
          ],
          sourceUrl: 'https://amiablefoods.com/dinakdakan/#recipe',
        },
        ucspHistory: {
          anthropologicalContext:
            'Dinakdakan is a traditional Ilocano dish that originated in the Ilocos Region of northern Philippines and is also popular in La Union. The name Dinakdakan comes from the Ilocano root word "dakdak," which means "to chop." It is made from chopped pork parts, such as the ears, jowls, and snout, which are boiled or grilled and mixed with vinegar or calamansi, onions, ginger, and chili. Known for its savory, tangy, and smoky flavors, dinakdakan reflects the Ilocano tradition of using different parts of the pig and is commonly served as a pulutan or with rice.',
          culturalEvolution:
            'As Dinakdakan spread beyond La Union, traditional recipes using mashed pig’s brain for creaminess were often adapted with mayonnaise in modern households, while retaining its signature wood-charcoal smoky flavor and tangy calamansi notes.',
          preservationTechnique:
            'Charcoal-grilling (inihaw) imparts antimicrobial wood smoke while acidic native calamansi juice, cane vinegar, and pungent ginger cure and brighten the rich pork cuts.',
          materialCulture:
            'Grilled over glowing coconut shell charcoal (uling na bao), chopped on heavy tamarind-wood chopping blocks (tadtaran), and served on banana-leaf-lined rattan bilao.',
          socialSignificance:
            'A quintessential pulutan and fiesta dish that brings neighbors together around the grill, reinforcing bayanihan and communal storytelling in La Union and Ilocos.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipe Ingredients (La Union Dinakdakan):',
          heirloomIngredients: [
            '500 g pork cheeks',
            '500 g pork ears (thick ends preferred)',
            '1 thumb-sized piece of ginger, finely chopped',
            '2 red onions, finely chopped',
            '4 cloves garlic, crushed with skin on',
            '4 bird’s eye chillies, finely chopped',
            '¼ cup cane vinegar',
            '⅔ cup mayonnaise (modern) or mashed pig’s brain (traditional)',
            '4 bay leaves',
            'Sliced green chillies, for garnish',
            'Freshly ground black pepper & salt, to taste',
          ],
          fryingOrSecondaryTitle: 'Method & Instructions:',
          secondaryIngredients: [
            'Boil cheeks and ears with garlic, bay leaves, peppercorns, and salt for 45 minutes',
            'Grill over medium-high heat until charred and slightly crispy, then toss with dressing',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Boil and Grill the Pork:',
              steps: [
                '1. In a large pot, combine pork cheeks, ears, garlic, peppercorns, bay leaves, and salt. Cover with water, boil, then simmer 45 minutes until tender.',
                '2. Drain meat. Heat grill pan or charcoal grill over medium-high heat and grill until charred and crispy.',
                '3. Chop into bite-sized pieces and place in a mixing bowl.',
              ],
            },
            {
              sectionTitle: '2. Mix Dressing and Toss:',
              steps: [
                '1. Add chopped ginger, chillies, onions, black pepper, mayonnaise (or mashed pig brain), vinegar, and salt.',
                '2. Toss everything together until well combined.',
                '3. Transfer to a serving platter, garnish with sliced green chillies, and serve.',
              ],
            },
          ],
          sources: [
            'Dinakdakan - Ang Sarap',
            'https://panlasangpinoy.com/dinakdakan-recipe/',
            'https://amiablefoods.com/dinakdakan/#recipe',
          ],
          verifiedTutorials: [
            {
              title: 'Authentic Dinakdakan Recipe with Grilled Pork Parts',
              channel: 'Ang Sarap Recipes',
              url: 'https://youtu.be/qrKYWglhhQU?si=EsNju6ytjFgYFErW',
              duration: '11:20',
            },
            {
              title: 'Traditional Ilocano Dinakdakan Demonstration',
              channel: 'Panlasang Pinoy',
              url: 'https://youtu.be/OlgDfQXKyr0?si=XPvCxEE_dd5X-v2Y',
              duration: '13:45',
            },
            {
              title: 'La Union Style Dinakdakan: Charcoal-Grill Method',
              channel: 'Northern Kusina',
              url: 'https://youtu.be/-St6hq-lj24?si=rzvm9aHPP71LaJYW',
              duration: '15:10',
            },
            {
              title: 'How to Make Authentic Dinakdakan Dressing',
              channel: 'Filipino Food Network',
              url: 'https://youtu.be/4LdsTUZ4qRI?si=ggq_WY2h6byXJnPl',
              duration: '09:50',
            },
            {
              title: 'Heirloom Pork Pulutan from La Union',
              channel: 'FEATR Culinary',
              url: 'https://youtu.be/TFYKlpjwU2Q?si=fP5z3FLdR4WYW6QC',
              duration: '17:35',
            },
          ],
          authenticKeywords: [
            'pork ears',
            'pork cheeks',
            'maskara',
            'ginger',
            'red onions',
            'cane vinegar',
            'grill',
            'charcoal',
            'pig brain',
            'calamansi',
          ],
          shortcutFlags: [
            {
              keyword: 'liquid smoke',
              reason: 'Artificial liquid smoke cannot replicate the real aroma of coconut-shell charcoal grilling.',
            },
            {
              keyword: 'condensed milk',
              reason: 'Sweetened milk products distort the tangy, savory, and ginger-forward profile of authentic La Union Dinakdakan.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Pan-Fried Dinakdakan: Fry pork belly cubes in oil with 2 drops liquid smoke, then stir with 1 cup sweet mayonnaise and condensed milk.',
          sampleAuthenticRecipe:
            'Authentic La Union Dinakdakan: Boil pork cheeks and ears with garlic and bay leaves for 45 minutes, charcoal-grill until charred and crispy, chop finely, and toss with ginger, red onions, bird’s eye chillies, cane vinegar, and traditional dressing.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Itinuturo ng Dinakdakan ang etika ng walang-aksayang pagluluto (nose-to-tail respect) at ang halaga ng usok ng uling at sariwang luya. Ang pagpapalit nito sa matamis na komersyal na mayonesa ay nagreresulta sa pagkakapare-pareho ng lasa (homogenization of taste).',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Usok ng Uling at ang Pagbabagong-Anyo ng Dinakdakan sa Makabagong Panahon',
          abstract:
            'Isang biswal at akademikong dokumentasyon kung paano binago ng komersyal na mayonesa ang orihinal na Dinakdakan ng La Union at kung paano mapananatili ang tunay nitong timpla.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pag-iihaw sa Baga ng Bao',
              hackMethod: 'Pagpiprito sa Kawali vs. Pag-iihaw sa Baga (Inihaw)',
              academicCaption:
                'Ang esensya ng Dinakdakan ng La Union ay nagmumula sa matiyagang pag-iihaw ng pinakuluang maskara at liempo sa ibabaw ng nagbabagang uling. Sa mabilisang bersyon sa lungsod, ipiniprito na lamang ito sa kawali kaya nawawala ang katangi-tanging amoy-usok.',
              comparisonNote:
                'Ang usok mula sa uling ang nagbibigay ng lalim sa lasa na hindi kayang tumbasan ng simpleng prito.',
              imageUrl: IMAGES.dinakdakan,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Ang Pagtitimpla ng Luya, Calamansi, at Sibuyas',
              hackMethod: 'Matamis na Mayonesa vs. Maasim at Maanghang na Katutubong Timpla',
              academicCaption:
                'Sa makabagong "kitchen hack," ginagamit ang mayonesa bilang mabilis at ligtas na pampalapot ng sarsa. Gayunpaman, binabago ng matamis na mayonesa ang orihinal na karakter ng ulam kung hindi lalagyan ng sapat na kalamansi, makinis na hiwa ng luya, at siling haba.',
              comparisonNote:
                'Mahalagang panatilihin ang tapang ng luya at asim ng kalamansi kahit gumamit ng modernong alternatibo.',
              imageUrl: IMAGES.dinakdakan,
            },
            {
              stepNumber: 3,
              tagalogTitle: 'Ikatlong Hakbang: Ang Paghahain sa Hapag ng Pakikipagkapwa',
              hackMethod: 'Komersyal na Fast-Food Platter vs. Hain sa Bilao na may Dahon ng Saging',
              academicCaption:
                'Inihahain ang Dinakdakan sa bilao na sinapinan ng dahon ng saging upang pagsaluhan ng buong pamilya o komunidad. Ipinakikita nito na ang pagkain sa Kulturang Pilipino ay laging nakaugat sa pakikipagkapwa-tao.',
              comparisonNote:
                'Ang bawat hiwa ay simbolo ng pagkakabuklod sa hapag-kainan.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-2',
    shortTitle: 'Region 2',
    fullName: 'Region 2 - Cagayan Valley',
    subtitle: 'Cagayan Valley & Batanes',
    islandId: 'luzon',
    ornamentType: 'fans',
    summaryBanner:
      'Region 2 culinary heritage spans the storm-swept stone islands of Batanes to the fertile river plains of Cagayan and Isabela, celebrated for ancient salt-and-fat confit preservation (Luñis), carabao milk delicacies, and robust noodle traditions.',
    dishes: [
      {
        id: 'batanes-lunis',
        name: 'Batanes Luñis',
        plaqueTitle: 'LUÑIS',
        plaqueSubtitle: 'FROM BATANES',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Batanes',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Ancient Ivatan rock-salted pork confit slow-rendered in its own fat and stored in clay jars.',
        evolutionNote:
          'On the typhoon-swept islands of Batanes, the indigenous Ivatan people developed Luñis as an essential confit survival technique: slow-rendering salted pork belly until all moisture evaporates, allowing it to stay edible for months submerged in lard inside earthenware panga jars.',
        traditionalRecipe: {
          title: 'Ivatan Luñis (Traditional Confit in Panga)',
          ingredients: [
            '1 kg pork belly with thick fat layer, cut into 2-inch cubes',
            '2.5 tbsp coarse Batanes sea salt (asin sa baybay)',
            '¼ cup water (to start the rendering process)',
          ],
          procedure: [
            '1. Rub pork belly cubes generously with coarse sea salt and let rest for 20 minutes.',
            '2. Place in a heavy cauldron with ¼ cup water over low-medium heat.',
            '3. Allow water to evaporate and slow-render the pork in its own fat for 60 to 75 minutes.',
            '4. Cook until mahogany brown and crisp on the outside while tender inside.',
            '5. Serve over golden garlic turmeric rice (supas) or preserve submerged in pork lard in a clean clay jar.',
          ],
          sourceUrl: 'https://panlasangpinoy.com/',
        },
        ucspHistory: {
          anthropologicalContext:
            'On the typhoon-swept islands of Batanes, the indigenous Ivatan people engineered stone houses (rakuh) and equally resilient food preservation techniques to survive weeks of isolation during fierce maritime storms.',
          culturalEvolution:
            'Luñis is the Ivatan precursor to adobo and confit: cubes of pork belly seasoned strictly with coarse sea salt are slow-cooked in their own rendering fat until every drop of moisture evaporates, then submerged in liquid lard inside earthenware jars (panga) where it stays edible for months without refrigeration.',
          preservationTechnique:
            'Anhydrous lipid immersion (confit in rendered pork lard) seals the salted meat from oxygen and humidity.',
          materialCulture:
            'Preserved in glazed clay jars (panga) and served alongside yellow turmeric garlic rice (supas) on woven Wakay baskets.',
          socialSignificance:
            'Represents Ivatan resilience (pakikibaka sa kalikasan) and cooperative community labor (kayvayvanan).',
        },
        milVerification: {
          boilingAndCuringTitle: 'Ivatan Heirloom Ingredients:',
          heirloomIngredients: [
            '1 kg pork belly with thick fat layer, cut into 2-inch cubes',
            '2.5 tbsp coarse Batanes sea salt (asin)',
            '1/4 cup water (only to start rendering)',
          ],
          fryingOrSecondaryTitle: 'Traditional Accompaniment:',
          secondaryIngredients: [
            'Ivatan Supas (rice cooked with fresh luyang dilaw / turmeric juice and garlic)',
            'Pickled native shallots and bird’s eye chili in cane vinegar',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Salt-Rub and Slow Rendering:',
              steps: [
                '1. Rub the pork belly cubes generously with coarse sea salt and let rest for 20 minutes.',
                '2. Place pork in a heavy cauldron with a splash of water over low-medium heat.',
                '3. As the water evaporates, allow the pork fat to slowly render out over 60–75 minutes.',
              ],
            },
            {
              sectionTitle: '2. Crisp in Own Lard & Preserve:',
              steps: [
                '1. Continue cooking the pork slowly in its own rendered oil until the meat turns deep mahogany brown and crisp on the outside while fork-tender inside.',
                '2. Serve over golden turmeric rice (supas) or store submerged in its rendered lard in a sterilized jar.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/',
            'Yummy.ph: https://youtu.be/TyXobyvOUx4?si=ZQnvGOKv4rptAuYK',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['sea salt', 'rock salt', 'asin', 'lard', 'fat', 'slow', 'turmeric', 'luyang dilaw', 'supas'],
          shortcutFlags: [
            {
              keyword: 'soy sauce',
              reason: 'Authentic Ivatan Luñis uses only coarse sea salt and rendered pork fat—never soy sauce or vinegar.',
            },
            {
              keyword: 'vegetable oil',
              reason: 'Adding commercial vegetable oil replaces the slow self-rendering process of authentic Luñis.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Pork Lunis: Fry pork cubes in 2 cups vegetable oil with soy sauce and garlic powder for 10 minutes until brown.',
          sampleAuthenticRecipe:
            'Heirloom Ivatan Luñis: Rub pork belly cubes with coarse Batanes sea salt (asin) and slow-render in a heavy pot until submerged and crisped in its own rendered pork fat. Serve over yellow turmeric rice (supas) with luyang dilaw.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Pinatutunayan ng Luñis ng Batanes na sa dalawang sangkap lamang—karne at asin-dagat—ay makalilikha ng ulam na tumatagal sa bagyo at panahon. Ang kasimplihan ay anyo ng karunungan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Luñis ng Batanes—Ang Siyensiya at Kultura ng Pagluluto sa Sariling Mantika',
          abstract: 'Pagsusuri sa katutubong paraan ng pagpepreserba ng karne ng mga Ivatan at ang kaugnayan nito sa heograpiya ng Batanes.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pag-aasin Gamit ang Asin-Dagat',
              hackMethod: 'Iodized Salt at Soy Sauce vs. Magaspang na Asin-Dagat',
              academicCaption: 'Tanging magaspang na asin-dagat lamang ang ginagamit ng mga Ivatan upang hugutin ang tubig mula sa karne at ihanda ito sa mabagal na pagluluto.',
              comparisonNote: 'Walang toyo o suka ang tunay na Luñis.',
              imageUrl: IMAGES.lunis,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Mabagal na Pagpapatining ng Mantika',
              hackMethod: 'Mabilisang Deep-Fry sa Mantika vs. Slow-Rendering Confit',
              academicCaption: 'Hinahayaang matunaw ang sariling taba ng liempo sa mahinang apoy hanggang sa maluto ang laman sa sarili nitong mantika.',
              comparisonNote: 'Tumatagal nang ilang buwan ang karne kapag nakalubog sa sariling mantika sa loob ng banga.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'isabela-pancit-cabagan',
        name: "Isabela's Pancit Cabagan",
        plaqueTitle: 'PANCIT CABAGAN',
        plaqueSubtitle: 'FROM ISABELA',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Cabagan, Isabela',
        imageUrl: IMAGES.pancitCabagan,
        shortTagline: 'Fresh miki noodles cooked in rich beef-pork broth with lechon carajay, igado, and quail eggs.',
        evolutionNote:
          'Pancit Cabagan evolved from its Chinese noodle-making roots into a distinct Filipino dish in Isabela. It was initially prepared by Chinese immigrant Sia Liang, or Dianga, who made fresh miki noodles by hand and introduced the dish through his panciteria in Cabagan. Over time, local cooks adapted the noodles and cooking methods using ingredients that were readily available in the area. The dish eventually developed its own style, commonly featuring stir-fried noodles with savory sauce and various meat and vegetable toppings. Today, Pancit Cabagan remains an important part of Isabela’s food culture, reflecting the combination of Chinese influence and local Filipino culinary traditions.',
        traditionalRecipe: {
          title: 'Pancit Cabagan (Traditional Recipe)',
          ingredients: [
            'Fresh miki noodles',
            'Dried shrimp or pork',
            'Bagoong',
            'Soy sauce',
            'Cooking oil',
            'Pork broth',
          ],
          procedure: [
            '1. Heat oil in a pan and sauté the dried shrimp or pork.',
            '2. Add bagoong and soy sauce, then mix well.',
            '3. Pour in the pork broth and bring it to a simmer.',
            '4. Add the fresh miki noodles and cook until tender and well-coated with the sauce.',
            '5. Serve hot.',
          ],
          sourceUrl: 'https://panlasangpinoy.com/pancit-cabagan-recipe/',
        },
        ucspHistory: {
          anthropologicalContext:
            'The food culture of Region II (Cagayan Valley) is influenced by its rich agricultural resources and diverse cultural traditions. Rice, corn, vegetables, fish, and meat are common ingredients because farming and fishing are important parts of the region’s livelihood. In Isabela, food traditions are shaped by cultural groups such as the Ibanag, Gaddang, Itawes, and Ilocano. Their cuisine often features locally grown ingredients and traditional cooking methods passed down through generations. Overall, the food culture of Region II reflects its agricultural lifestyle, cultural diversity, and strong connection to local traditions.',
          culturalEvolution:
            'Pancit Cabagan evolved from its Chinese noodle-making roots into a distinct Filipino dish in Isabela, created by Chinese immigrant Sia Liang (Dianga). It combines hand-kneaded fresh miki noodles with beef-pork broth, crispy lechon carajay, igado, and boiled quail eggs.',
          preservationTechnique:
            'Artisanal miki dough kneading paired with simmering in deep bone reduction broth and topping with twice-crisped lechon carajay.',
          materialCulture:
            'Stir-fried in heavy iron woks (kawali) and plated with savory clinging sauce on woven bilao, served with calamansi and native siling labuyo dip.',
          socialSignificance:
            'A crowning dish of communal hospitality in Isabela and Cagayan Valley, representing cross-cultural trading ties and local agrarian pride.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipe Ingredients (Good for 4-5 People):',
          heirloomIngredients: [
            '1 lb. Fresh Miki Noodles',
            '¼ lb. Chopped Cooked Lechon Carajay',
            '¼ lb. Pork Shoulder, sliced into small pieces',
            '8 Pieces Boiled Quail Eggs',
            '5 Crushed Garlic Cloves',
            '3 Cups Beef Broth',
            '¼ Cup Soy Sauce & 2 tsp. Patis (Fish Sauce)',
            '3 tbsp Cooking Oil',
          ],
          fryingOrSecondaryTitle: 'Vegetables & Toppings:',
          secondaryIngredients: [
            '1 Julienned Medium Carrot',
            '1 Small Bell Pepper, thinly cut into strips',
            '¼ Chopped Head Cabbage',
            '¼ Cup Chopped Parsley & 3 tbsp Chopped Scallions',
            'Ground Black Pepper to taste',
            'Optional: ¼ lb. Igado',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Sauté the Garlic and Tenderize the Pork:',
              steps: [
                '1. Over a medium-high heat, heat cooking oil in a wok or large pan. Sauté crushed garlic until light brown, then add pork shoulder and stir-fry for 2 minutes until browned.',
                '2. Pour in soy sauce, fish sauce, and beef broth. Bring to a boil, then cover and simmer on low heat for about 12 minutes until pork is tender.',
              ],
            },
            {
              sectionTitle: '2. Cook Noodles, Add Vegetables, and Plate:',
              steps: [
                '1. Add fresh miki noodles into the wok and toss in the broth. Cook for about 2 minutes, then toss in carrot, bell pepper, cabbage, and parsley. Cook for 5 minutes (add more broth if too dry).',
                '2. Season with ground black pepper. Top with boiled quail eggs, crispy lechon carajay, and igado. Garnish with scallions and serve (a bit of savory sauce must cling to noodles; dry noodles aren’t Pancit Cabagan).',
              ],
            },
          ],
          sources: [
            'Panlasang Pinoy by Vanjo Merano',
            'https://panlasangpinoy.com/pancit-cabagan-recipe/',
            'https://cdn.fastpixel.io/fp/ret_img+v_90df+w_1024+h_1024+q_lossy+to_webp/kusinasecrets.com',
          ],
          verifiedTutorials: [
            {
              title: 'Authentic Pancit Cabagan Recipe Tutorial',
              channel: 'Panlasang Pinoy',
              url: 'https://youtu.be/7VI7jEH2-mo?si=ubiRSDS4urnhe3B8',
              duration: '12:40',
            },
            {
              title: 'How to Cook Isabela Style Pancit Cabagan',
              channel: 'Kusina Secrets',
              url: 'https://youtu.be/X5Gw32z7rsY?si=3uevT1kSmBcIxvQf',
              duration: '14:15',
            },
            {
              title: 'Pancit Cabagan with Lechon Carajay & Quail Eggs',
              channel: 'Cagayan Valley Kitchen',
              url: 'https://youtu.be/UkydRJ3xdBg?si=XMr-qQeHaMoMGmD8',
              duration: '11:50',
            },
            {
              title: 'Sia Liang Heritage: Traditional Cabagan Panciteria',
              channel: 'FEATR Food Culture',
              url: 'https://youtu.be/QLgcaU6ZhK8?si=GdHWQ3fAkRLEIDjO',
              duration: '16:30',
            },
            {
              title: 'Original Miki Noodles Pancit Cabagan Step-by-Step',
              channel: 'Taste of Isabela',
              url: 'https://youtu.be/k9ZlHwdSu0U?si=fyZ0yCJKBBCDuL2S',
              duration: '13:05',
            },
          ],
          authenticKeywords: [
            'miki noodles',
            'lechon carajay',
            'quail eggs',
            'igado',
            'beef broth',
            'cabagan',
            'isabela',
            'patis',
          ],
          shortcutFlags: [
            {
              keyword: 'instant canton',
              reason: 'Packaged dried instant noodles lack the tender, chewy texture of handmade Isabela fresh miki noodles.',
            },
            {
              keyword: 'dry stir-fry',
              reason: 'Pancit Cabagan must have a rich, savory broth sauce clinging to each strand—it must never be served dry.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Stir-Fry Canton: Toss dried instant noodles in oil with soy sauce and commercial bouillon powder, served completely dry without toppings.',
          sampleAuthenticRecipe:
            'Authentic Isabela Pancit Cabagan: Sauté garlic and pork shoulder in oil, simmer with soy sauce, fish sauce, and rich beef broth until tender. Cook fresh miki noodles with julienned carrot, bell pepper, cabbage, and parsley. Crown with boiled quail eggs, crispy lechon carajay, and igado with clinging sauce.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ipinapaalala ng Pancit Cabagan na ang sarsa at sabaw ang nag-uugnay sa dayuhang impluwensya (miki mula kay Sia Liang) at katutubong pamana (lechon carajay at igado). Kapag ginawang tuyo ang pansit, napuputol ang lasa ng kasaysayan.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Miki ng Cabagan—Pagtatagpo ng Tradisyong Tsino at Panlasang Isabelino',
          abstract:
            'Dokumentasyon sa paggawa ng sariwang miki sa Cabagan, Isabela at ang kahalagahan ng basang sarsa (clinging broth sauce) sa tunay na Pancit Cabagan.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Paggamit ng Sariwang Miki at Masaganang Sabaw ng Baka',
              hackMethod: 'Instant Dried Canton vs. Sariwang Miki na Luto sa Sabaw ng Baka',
              academicCaption:
                'Ang tunay na Pancit Cabagan ay gumagamit ng sariwang miki na pinalalambot sa sabaw ng baka upang sumipsip ito ng linamnam nang hindi natutuyo.',
              comparisonNote:
                'Ang malambot na miki at sarsa ang nagtatakda sa identidad ng putahe.',
              imageUrl: IMAGES.pancitCabagan,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagtatampok ng Lechon Carajay, Igado, at Itlog ng Pugo',
              hackMethod: 'Simpleng Hotdog vs. Tradisyonal na Lechon Carajay at Igado',
              academicCaption:
                'Ipinapatong sa ibabaw ang malutong na lechon carajay, nilagang itlog ng pugo, at igado bilang patunay ng masaganang handaan sa Isabela.',
              comparisonNote:
                'Ito ang sagisag ng kapistahan sa Lambak ng Cagayan.',
              imageUrl: IMAGES.pancitCabagan,
            },
          ],
        },
      },
      {
        id: 'tuguegarao-sinanta',
        name: "Tuguegarao's Sinanta",
        plaqueTitle: 'SINANTA',
        plaqueSubtitle: 'FROM TUGUEGARAO',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Tuguegarao City, Cagayan',
        imageUrl: IMAGES.sinanta,
        shortTagline: 'Heirloom Ybanag noodle soup combining miki, bihon, river clams, chicken, and pork in annatto broth.',
        evolutionNote:
          'Sinanta has evolved from a traditional Ibanag dish into an important part of the food culture of Cagayan. Originally, it was prepared using traditional ingredients that were locally available and made through cooking practices passed down within families and communities. Its preparation was preserved through observational learning and cultural transmission, where younger generations learned by watching and helping older family members. Over time, modernization and the popularity of newer food trends have affected the practice of making Sinanta, causing its traditional preparation to gradually decline. However, some Ibanag families and communities continue to prepare the dish and pass their knowledge directly to younger generations. Through continuous practice, Sinanta has retained its cultural identity while adapting to changes in modern food culture.',
        traditionalRecipe: {
          title: 'Sinanta (Traditional Ybanag Merienda Recipe)',
          ingredients: [
            '150g rice noodles (bihon)',
            '100g chicken breast fillet or pork',
            '1 carrot, cut into thin strips',
            '1 pepper, diced',
            '100g green beans, trimmed and halved',
            '2 cloves garlic, chopped',
            '1 onion, diced',
            'Soy sauce, salt, and pepper to taste',
            '2 tablespoons vegetable oil',
            'Fresh herbs of choice (e.g. spring onions)',
          ],
          procedure: [
            '1. Soak rice noodles according to package instructions.',
            '2. Heat oil and sauté garlic and onion until fragrant.',
            '3. Add meat and cook thoroughly.',
            '4. Add vegetables and stir-fry until slightly tender.',
            '5. Add soaked noodles and mix well.',
            '6. Season with soy sauce, salt, and pepper.',
            '7. Cook briefly until flavors combine, garnish with fresh herbs, and serve hot.',
          ],
          sourceUrl: 'https://www.angsarap.net/wp-content/uploads/2019/05/Sinanta.jpg',
        },
        ucspHistory: {
          anthropologicalContext:
            'Sinanta is a traditional noodle soup from Cagayan Valley and is part of the Ybanag food culture. It combines rice vermicelli (bihon) and miki noodles with chicken, pork, dried shrimp, and clams in a flavorful broth seasoned with fish sauce, garlic, and onions. Unlike sotanghon soup, Sinanta has a distinct combination of meat and seafood that gives it a richer flavor. It is commonly served as a merienda and may be paired with pinakufu or royal bibingka. The food culture of Tuguegarao City reflects the influence of local communities, particularly the Ibanag and Itawes, using river clams, fish, chicken, pork, and annatto-flavored broth.',
          culturalEvolution:
            'Sinanta evolved from an heirloom Ibanag celebratory noodle soup, preserved through observational learning across generations, into a defining culinary emblem of Tuguegarao City.',
          preservationTechnique:
            'Simmering combined meat-and-river-clam stocks with atsuete color extraction, keeping clams and chicken tender.',
          materialCulture:
            'Served in handmade ceramic bowls alongside native sweets (pinakufu or royal bibingka) during house blessings and merienda.',
          socialSignificance:
            'An irreplaceable communal dish for blessings, weddings, and milestones in Cagayan Valley, honoring the bounty of the Cagayan River system.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipe Stock & Meats (BiteSized.ph):',
          heirloomIngredients: [
            '500g pork shoulder, cut into small pieces',
            'Chicken thighs (½ kg) & 1 kg chicken bones + ½ kg pork bones',
            '12 fresh clams (½ kg clams boiled in 1 liter water)',
            '11 cups water for meat stock & 1 cup water for clam broth',
            'Red onions (quartered), stalk leeks (white part for stock, green for garnish)',
            'Rock salt & whole peppercorns',
          ],
          fryingOrSecondaryTitle: 'Sauté Base, Noodles & Garnishes:',
          secondaryIngredients: [
            '3 tbsp cooking oil, chopped garlic, and 1 chopped red onion',
            '2 tbsp hibi (dried shrimp), soaked in hot water for 30 minutes',
            '1 tbsp annatto powder (atsuete) & fish sauce (patis) to taste',
            '200g cooked bihon noodles & 100g cooked miki noodles',
            'Garnish: Hard-boiled eggs, chopped green onions/leek tops, crunchy fried garlic',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Prepare Meat Stock and Clams:',
              steps: [
                '1. In a large pot, combine pork shoulder, chicken thighs, quartered red onions, leek whites, rock salt, peppercorns, and 11 cups water. Boil for at least 30 minutes (or 1 hour in a pot), skimming scum. Strain broth, shred chicken and slice pork into thin slivers.',
                '2. In a smaller pot, boil fresh clams with 1 cup water until open; reserve clam broth and extract clam meat (discard empty shells).',
              ],
            },
            {
              sectionTitle: '2. Sauté Base, Simmer Broths, and Assemble:',
              steps: [
                '1. Heat oil in a wok, sauté chopped garlic and onion until fragrant. Add slivered pork, chicken, clam meat, hibi, and 1 tbsp hibi liquid; sauté 2 minutes. Sprinkle in annatto powder.',
                '2. Pour in reserved meat stock and clam broth, season with patis, and bring soup to a boil.',
                '3. Once at a rolling boil, add sotanghon/bihon and miki noodles. Ladle into bowls, top with clams, meats, spring onions, and crunchy garlic (makes 4-5 servings).',
              ],
            },
          ],
          sources: [
            'BiteSized.ph (Sinanta Official Recipe)',
            'https://youtu.be/3R3VjW0DrYo?si=N7AVsVod_jyA2Gh1',
            'Ang Sarap Culinary Documentation',
          ],
          verifiedTutorials: [
            {
              title: 'Tuguegarao Sinanta Cooking Tutorial',
              channel: 'BiteSized.ph',
              url: 'https://youtu.be/5Etp7u5B6c4?si=2zXvJqZqQakz38k',
              duration: '11:45',
            },
            {
              title: 'Authentic Ybanag Sinanta with Clams and Chicken',
              channel: 'Cagayan Heritage Food',
              url: 'https://youtu.be/NQiYJIa5aF4?si=F4tkJ-UD0sESButf',
              duration: '15:20',
            },
            {
              title: 'How to Make Real Tuguegarao Sinanta Soup',
              channel: 'Ang Sarap Kitchen',
              url: 'https://youtu.be/Mqy6Ud6ml5U?si=Bq0Iz1PDhg65fp_q',
              duration: '13:10',
            },
            {
              title: 'Traditional Sinanta Broth Secret & Pinakufu Pairing',
              channel: 'Kusina Ibanag',
              url: 'https://youtu.be/D_Db7AeW5Uc?si=1nXWzeG46vr2Diwu',
              duration: '14:50',
            },
            {
              title: 'Sinanta Noodle Soup: Dual Broth & Atsuete',
              channel: 'BiteSized Features',
              url: 'https://youtu.be/3R3VjW0DrYo?si=mgh0-jUA4Ri87Rxf',
              duration: '12:35',
            },
          ],
          authenticKeywords: [
            'clams',
            'river clams',
            'miki',
            'bihon',
            'annatto',
            'atsuete',
            'hibi',
            'ybanag',
            'tuguegarao',
            'patis',
          ],
          shortcutFlags: [
            {
              keyword: 'instant bouillon',
              reason: 'Commercial bouillon cannot replicate the combined depth of fresh river clams and slow-simmered poultry-pork stock.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Noodle Soup: Boil noodles in water with 1 chicken bouillon cube and red food dye.',
          sampleAuthenticRecipe:
            'Authentic Tuguegarao Sinanta: Simmer pork shoulder and chicken for 1 hour for rich stock; boil fresh clams separately and reserve clam broth. Sauté garlic, onion, hibi, and annatto powder, combine broths, and simmer bihon and fresh miki noodles. Crown with clam meat, slivered meats, crunchy garlic, and scallions.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang Sinanta ng Tuguegarao ay buhay na patunay ng ugnayan ng ilog at kabukiran (river clams at karne ng baboy at manok). Ang pag-iingat sa dalawang uri ng sabaw ay paggalang sa heograpiya ng Lambak ng Cagayan.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Sinanta ng mga Ybanag—Kalinangan ng Ilog at Kusina ng Cagayan',
          abstract:
            'Pagsusuri sa dalawahang sabaw (clams at karne) at ang kahalagahan ng tradisyonal na merienda sa Tuguegarao.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Pagpapakulo ng Buto at Sariwang Kabibe ng Ilog',
              hackMethod: 'Artipisyal na Seafood Seasoning vs. Natural na Sabaw ng Kabibe at Karne',
              academicCaption:
                'Pinakukuluan nang hiwalay ang sariwang kabibe at karne upang makuha ang malinaw ngunit malinamnam na sabaw na kulay ginto mula sa atsuete.',
              comparisonNote:
                'Ito ang nagbibigay ng kakaibang linamnam ng Sinanta kumpara sa karaniwang sotanghon.',
              imageUrl: IMAGES.sinanta,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagsasama ng Miki at Bihon na may Pritong Bawang',
              hackMethod: 'Isang Uri ng Noodle vs. Tambalan ng Miki at Bihon',
              academicCaption:
                'Ang tradisyonal na Sinanta ay laging may tambalan ng bihon at miki upang magkaroon ng mayamang tekstura ang bawat higop.',
              comparisonNote:
                'Inihahain itong mainit kasama ng Pinakufu o Royal Bibingka.',
              imageUrl: IMAGES.sinanta,
            },
          ],
        },
      },
      {
        id: 'tuguegarao-batil-patong',
        name: "Tuguegarao's Batil Patong",
        plaqueTitle: 'BATIL PATONG',
        plaqueSubtitle: 'FROM TUGUEGARAO',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Cagayan',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Hand-pulled fresh miki noodles crowned with minced carabao beef, crispy chicharon, and poached egg.',
        ucspHistory: {
          anthropologicalContext:
            'Born in the bustling panciterias of Tuguegarao City, Pancit Batil Patong ("beaten egg" + "placed on top") merges Cagayan Valley’s water buffalo (carabao) ranching culture with artisanal wheat noodle craftsmanship.',
          culturalEvolution:
            'Generations of Cagayano panciteros perfected flat, springy fresh miki noodles simmered in rich beef stock, topped with a mountain of savory minced carabao meat, crushed chicharon, and a glistening poached egg alongside an egg-drop broth (batil).',
          preservationTechnique:
            'Sun-drying and alkaline kneading of local wheat noodles paired with slow-reduced bone stock.',
          materialCulture:
            'Cooked in wide iron woks over roaring wood fires and served with chopped native Cagayan shallots and calamansi.',
          socialSignificance:
            'A symbol of Cagayano pride and hospitality where every neighborhood panciteria serves as a community gathering hall.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Noodles & Carabao Meat Topping:',
          heirloomIngredients: [
            '500g fresh Tuguegarao flat miki noodles',
            '300g minced carabao beef (or beef sirloin) & pork liver',
            '2 cups rich beef bone broth',
            '1 cup crushed pork chicharon / bagnet cracklings',
          ],
          fryingOrSecondaryTitle: 'Batil (Egg Broth) & Patong (Toppings):',
          secondaryIngredients: [
            '2 fresh eggs (1 poached on top, 1 whisked into boiling broth)',
            'Chopped Cagayan shallots, calamansi, and bird’s eye chili soy dip',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Sauté Topping & Simmer Miki:',
              steps: [
                '1. Sauté minced carabao beef and liver with garlic, onions, and black pepper until browned; set aside.',
                '2. In the same wok, bring beef stock to a boil and cook the fresh Tuguegarao miki noodles with bean sprouts and carrots until tender.',
              ],
            },
            {
              sectionTitle: '2. Assemble Patong & Batil Soup:',
              steps: [
                '1. Mound the noodles on a platter and layer generously with the sautéed beef, liver, and crushed chicharon.',
                '2. Crown the top with a softly poached egg (patong) and serve with a side bowl of whisked egg-drop beef broth (batil).',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/', 'Yummy.ph Culinary Archive'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['miki', 'carabao', 'beef broth', 'poached egg', 'batil', 'chicharon', 'liver'],
          shortcutFlags: [
            {
              keyword: 'instant canton',
              reason: 'Packaged instant pancit canton noodles lack the chewy alkaline bite of fresh Tuguegarao miki.',
            },
          ],
          sampleOnlineRecipe: 'Quick Batil Patong using packaged instant canton noodles and canned corned beef.',
          sampleAuthenticRecipe: 'Authentic Tuguegarao Pancit Batil Patong with fresh flat miki noodles, minced carabao beef, pork liver, chicharon, poached egg patong, and hot egg-drop batil broth.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Pancit Batil Patong ay nagpapaalala na ang kasaganaan ng lasa ay bunga ng matiyagang pagpapakulo ng sabaw at paggawa ng sariwang miki.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Pancit Batil Patong sa Tuguegarao',
          abstract: 'Pagsusuri sa pagkakaiba ng sariwang miki ng Cagayan at ng mga komersyal na instant noodles.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Paghahanda ng Sariwang Miki at Sabaw ng Buto-Buto',
              hackMethod: 'Instant Broth Cubes vs. Pinakuluang Buto ng Kalabaw at Baka',
              academicCaption: 'Ang pundasyon ng tunay na Batil Patong ay ang malinamnam na sabaw mula sa matagal na pinakuluang buto ng baka o kalabaw na ipinapares sa sariwang miki.',
              comparisonNote: 'Hindi matutumbasan ng instant powder ang linamnam ng natural na sabaw.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
      {
        id: 'cagayan-igado',
        name: "Cagayan's Igado",
        plaqueTitle: 'IGADO',
        regionId: 'region-2',
        regionName: 'Region 2 - Cagayan Valley',
        islandId: 'luzon',
        province: 'Isabela & Cagayan',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Savory pork tenderloin and liver strips braised in cane vinegar, garlic, and bell peppers.',
        ucspHistory: {
          anthropologicalContext:
            'Shared across Northern Luzon’s Ilocano-speaking settlements in Cagayan Valley, Igado (from the Spanish "hígado" for liver) was designed to nourish farming communities with iron-rich organ meats.',
          culturalEvolution:
            'Unlike tomato-heavy Menudo, authentic Northern Igado uses zero tomato sauce—relying instead on native cane vinegar, garlic, bay leaves, and julienned red bell peppers.',
          preservationTechnique: 'Vinegar-braising (paksiw-sangkutsa) tenderizes and preserves pork loin and liver.',
          materialCulture: 'Braised in heavy cast-iron kaldero and served during harvest thanksgivings.',
          socialSignificance: 'A pillar of Northern Luzon town fiestas where no part of the pig goes unused.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Cuts & Marinade:',
          heirloomIngredients: [
            '500g pork tenderloin & 500g pork liver, cut into strips',
            '1/3 cup native cane vinegar (Sukang Iloko)',
            '1/4 cup soy sauce, 6 cloves crushed garlic, bay leaves, peppercorns',
          ],
          fryingOrSecondaryTitle: 'Vegetables & Garnish:',
          secondaryIngredients: ['1 cup green peas', '2 red bell peppers, cut into strips'],
          methodSteps: [
            {
              sectionTitle: '1. Marinate and Braise:',
              steps: [
                '1. Marinate pork tenderloin strips in cane vinegar, soy sauce, crushed garlic, and black pepper.',
                '2. Sear the liver strips briefly until firm and set aside so they do not overcook.',
                '3. Braise the pork tenderloin in the marinade until tender, then fold in the liver, bell peppers, and green peas.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/igado-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['liver', 'tenderloin', 'vinegar', 'suka', 'garlic', 'bell pepper', 'peas'],
          shortcutFlags: [
            {
              keyword: 'tomato sauce',
              reason: 'Authentic Northern Luzon Igado does not use canned tomato sauce or ketchup (which turns it into Menudo).',
            },
          ],
          sampleOnlineRecipe: 'Quick Igado: Simmer pork and liver in 1 can sweet tomato sauce and banana ketchup.',
          sampleAuthenticRecipe: 'Authentic Northern Igado: Braise pork tenderloin and seared pork liver strips in Sukang Iloko cane vinegar, crushed garlic, black peppercorns, bay leaves, green peas, and red bell peppers—without tomato sauce.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang pagkilala sa pagkakaiba ng Igado at Menudo ay pagkilala sa sariling identidad ng Hilagang Luzon.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tunay na Igado sa Hilagang Luzon',
          abstract: 'Paglilinaw sa tradisyonal na sangkap ng Igado na nakabatay sa suka at bawang sa halip na tomato sauce.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbababad sa Sukang Iloko at Bawang',
              hackMethod: 'Canned Tomato Sauce vs. Sukang Iloko at Bawang',
              academicCaption: 'Ang tunay na Igado ay mapusyaw na kayumanggi mula sa suka at toyo, hindi mamula-mula sa komersyal na tomato sauce.',
              comparisonNote: 'Napananatili ng suka ang linis ng lasa ng atay at laman.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-3',
    shortTitle: 'Region 3',
    fullName: 'Region 3 - Central Luzon',
    subtitle: 'Central Luzon (Culinary Capital)',
    islandId: 'luzon',
    ornamentType: 'mask',
    summaryBanner:
      'Known as the Rice Granary and Culinary Capital of the Philippines, Region 3 blends Kapampangan, Bulakenyo, and Novo Ecijano mastery of slow curing, fermentation, and rich heirloom sauces.',
    dishes: [
      {
        id: 'pampanga-tocino',
        name: "Pampanga's Tocino",
        plaqueTitle: 'TOCINO',
        plaqueSubtitle: 'FROM PAMPANGA',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Pampanga',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Heirloom Kapampangan Pindang Babi cured with sea salt, muscovado sugar, garlic, and natural annatto.',
        evolutionNote:
          'Known originally in Kapampangan as "Pindang Babi," heirloom Tocino evolved from indigenous fermentation and salt-sugar curing methods in the sugarcane-rich plains of Pampanga before synthetic nitrates and food dyes existed.',
        traditionalRecipe: {
          title: 'Pindang Babi (Traditional Kapampangan Cured Pork)',
          ingredients: [
            '1 kg pork shoulder (kasim), sliced 1/4-inch thick',
            '1/2 cup raw muscovado or brown cane sugar',
            '1.5 tbsp coarse rock salt',
            '6 cloves native garlic, finely pounded',
            '2 tbsp annatto seed (atsuete) infusion for natural color',
            '2 tbsp native cane vinegar',
          ],
          procedure: [
            '1. Rub pork slices thoroughly with salt, garlic, vinegar, muscovado sugar, and atsuete infusion.',
            '2. Cure in a cool place or refrigerator for 2 to 3 days.',
            '3. Simmer in a pan with 1/2 cup water until tender.',
            '4. Lower heat and caramelize gently in its own rendered fat until glossy.',
          ],
          sourceUrl: 'https://panlasangpinoy.com/homemade-pork-tocino-recipe/',
        },
        ucspHistory: {
          anthropologicalContext:
            'Known originally in Kapampangan as "Pindang Babi," heirloom Tocino evolved from indigenous fermentation and salt-sugar curing methods in the sugarcane-rich plains of Pampanga.',
          culturalEvolution:
            'Before synthetic red food coloring and chemical nitrates (salitre) were introduced by industrial meatpackers, Kapampangan matriarchs cured thinly sliced pork kasim for three days in coarse salt, native garlic, cane vinegar, and raw muscovado sugar tinted naturally with annatto seeds (atsuete).',
          preservationTechnique:
            'Osmotic sugar-and-salt curing accompanied by mild lactic fermentation (pindang) tenderizes the pork naturally.',
          materialCulture:
            'Cured in stoneware crocks and caramelized slowly in cast-iron skillets (kawali) with water until the rendered fat glazes the meat.',
          socialSignificance:
            'A cornerstone of the Filipino breakfast table (Tosilog) and a testament to Kapampangan culinary artistry.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Kapampangan Cure:',
          heirloomIngredients: [
            '1 kg pork shoulder (kasim), sliced 1/4-inch thick',
            '1/2 cup raw muscovado or brown cane sugar',
            '1.5 tbsp coarse rock salt',
            '6 cloves native garlic, finely pounded',
            '2 tbsp annatto seed (atsuete) infusion for natural color',
            '2 tbsp native cane vinegar',
          ],
          fryingOrSecondaryTitle: 'Traditional Caramelization:',
          secondaryIngredients: [
            '1/2 cup water for simmering before fat rendering',
            'Served with sinangag (garlic rice) and spiced cane vinegar',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Curing (Pindang Method):',
              steps: [
                '1. Rub pork slices thoroughly with coarse salt, pounded garlic, cane vinegar, muscovado sugar, and natural atsuete infusion.',
                '2. Stack neatly in a covered container and cure in the cool pantry or refrigerator for 2 to 3 days.',
              ],
            },
            {
              sectionTitle: '2. Slow Simmer & Glaze:',
              steps: [
                '1. Place cured pork in a pan with 1/2 cup water and simmer over medium heat until water evaporates and meat is tender.',
                '2. Lower the heat and let the pork slowly caramelize in its own rendered fat until glossy and slightly charred at the edges.',
              ],
            },
          ],
          sources: [
            'https://panlasangpinoy.com/homemade-pork-tocino-recipe/',
            'Yummy.ph: https://youtu.be/qVCfP45O_qg?si=CmIokuOgRL3hNIw8',
          ],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['kasim', 'salt', 'garlic', 'atsuete', 'annatto', 'vinegar', 'simmer', 'caramelize'],
          shortcutFlags: [
            {
              keyword: 'red food coloring',
              reason: 'Synthetic neon-red dye replaces natural annatto seed (atsuete) infusion.',
            },
            {
              keyword: 'salitre',
              reason: 'Prague powder / chemical nitrates are industrial additives not needed in traditional home-cured Kapampangan Pindang.',
            },
            {
              keyword: 'pineapple soda',
              reason: 'Using commercial soda is a modern shortcut for cane vinegar and muscovado curing.',
            },
          ],
          sampleOnlineRecipe:
            'Instant 30-Minute Pork Tocino: Mix pork slices with 1 cup pineapple soda, 1 tsp Prague powder (salitre), neon red food coloring, and white sugar. Fry immediately in oil!',
          sampleAuthenticRecipe:
            'Heirloom Pampanga Tocino (Pindang Babi): Cure sliced pork kasim for 3 days with coarse rock salt, pounded native garlic, cane vinegar, muscovado sugar, and natural atsuete infusion. Simmer in water until tender and caramelize slowly in its own rendered fat.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang Pindang Babi ng Pampanga ay nagtuturo na ang tunay na tamis at lambot ay nagmumula sa pasensya ng pagbababad at natural na atsuete—hindi sa kemikal na pampakulay.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Mula Pindang Babi Tungo sa Komersyal na Tocino—Isang Pagsusuring Kultural',
          abstract:
            'Inilalahad sa larawang-sanaysay na ito ang proseso ng paggawa ng tradisyonal na Tocino ng Pampanga gamit ang natural na sangkap.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Natural na Kulay mula sa Atsuete',
              hackMethod: 'Synthetic Red Food Dye vs. Katas ng Buto ng Atsuete',
              academicCaption:
                'Sa tradisyonal na kusina ng Pampanga, ang kulay ng Pindang Babi ay nagmumula sa katas ng atsuete at pulang asukal sa tubo, hindi sa matingkad na kemikal na pampakulay.',
              comparisonNote: 'Mas ligtas at mas mabango ang natural na atsuete.',
              imageUrl: IMAGES.tocino,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagpapakulo sa Tubig Bago Iprito sa Sariling Taba',
              hackMethod: 'Direktang Pagpiprito sa Mantika vs. Pagpapakulo at Pagkakaramelisa',
              academicCaption:
                'Pinakukuluan muna sa kaunting tubig ang binabad na karne upang lumambot nang husto bago ito hayaang mag-caramelize sa sarili nitong mantika.',
              comparisonNote: 'Ito ang sikreto sa malambot at makintab na Pampanga Tocino.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
      {
        id: 'pampanga-sisig',
        name: "Pampanga's Sisig",
        plaqueTitle: 'SISIG',
        plaqueSubtitle: 'FROM PAMPANGA',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Pampanga',
        imageUrl: IMAGES.sisig,
        shortTagline: 'Heirloom Kapampangan sizzling pig head and liver seasoned with calamansi, onions, and chili.',
        evolutionNote:
          'Pampanga’s sisig has evolved from an older food tradition into one of the most well-known Filipino dishes today. Its history can be traced back to a salad-like dish introduced by Chinese communities during the colonial period, which was later embraced and adapted by the Kapampangans using local ingredients and cooking practices. As time passed, the dish continued to develop, with pork becoming its most recognized version, particularly the famous Sisig Angeles. However, its versatility also led to the creation of other variations, including tofu, kapaya, and mangga sisig. Despite these changes, the different versions share basic elements such as vinegar, salt, and a main ingredient or protein. From its traditional role as pulutan, sisig gradually became a popular ulam and family favorite. Today, restaurants, food festivals, and social media continue to introduce sisig to new generations while helping preserve its connection to Kapampangan culture and culinary heritage.',
        traditionalRecipe: {
          title: 'Kapampangan Sisig (Traditional Recipe)',
          ingredients: [
            '1 kg pork cheek/jowl (or ears and cheeks)',
            '¼ kg chicken liver (or pork liver)',
            '1–2 onions, chopped',
            '1 green chili, sliced',
            '⅓ cup calamansi juice',
            'Salt and pepper to taste',
            '1 tbsp butter or margarine',
            'Bay leaves and black peppercorns',
          ],
          procedure: [
            '1. Boil the pork with bay leaves and peppercorns until tender.',
            '2. Grill or fry the pork until crispy, then chop into small pieces.',
            '3. Season and grill or fry the chicken liver, then chop it.',
            '4. Mix the pork, liver, onions, chili, calamansi juice, salt, and pepper.',
            '5. Heat a sizzling plate with butter, then add the mixture and cook until slightly browned.',
            '6. Serve hot with calamansi, soy sauce, and siling labuyo (no mayonnaise or egg needed).',
          ],
          sourceUrl: 'https://panlasangpinoy.com/pork-sisig/',
        },
        ucspHistory: {
          anthropologicalContext:
            'Pampanga is widely known as the birthplace of sisig, a popular Filipino dish that was created by Kapampangans. Central Luzon, also known as the "Rice Granary of the Philippines," has a rich and diverse food culture shaped by its agricultural heritage, local traditions, and abundant natural resources. Pampanga, known for its strong culinary traditions, is famous for flavorful dishes, sophisticated cooking techniques, and recipes passed down through generations.',
          culturalEvolution:
            'Traditionally, sisig is made from chopped parts of a pig, such as the face, ears, and liver, which are seasoned with calamansi, onions, and chili peppers. Unlike some modern versions commonly served in Metro Manila, traditional Kapampangan sisig is usually served without mayonnaise or a fried egg on top. Instead, it is served simply on a hot plate, allowing its savory and tangy flavors to stand out. Because of its connection to Pampanga’s culinary heritage, sisig is one of the local dishes visitors are encouraged to try when exploring the province.',
          preservationTechnique:
            'Double cooking: boiling to tenderness with vinegar followed by high-heat charcoal grilling to blister and smoke the skin.',
          materialCulture:
            'Minced on heavy wooden blocks and served smoking hot on cast-iron plates with fresh native calamansi and red siling labuyo.',
          socialSignificance:
            'From an essential backyard pulutan to a celebrated national ulam, sisig encapsulates Kapampangan ingenuity in transforming overlooked cuts into culinary artistry.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipe Main Meat & Boiling Liquid (Foxy Folksy & Panlasang Pinoy):',
          heirloomIngredients: [
            '1 kg (about 2.2 lbs) pork head (pork ears, cheeks, and snout)',
            '250 g pork liver (or chicken liver)',
            'Water (enough to submerge the meat)',
            '1 cup white vinegar or calamansi juice',
            '1 tbsp whole black peppercorns & 4–5 bay leaves',
            '1 tbsp salt',
          ],
          fryingOrSecondaryTitle: 'Aromatics, Seasonings & Sizzle:',
          secondaryIngredients: [
            '2 large red onions, finely chopped',
            '3–5 red or green chili peppers (siling labuyo or siling haba), finely chopped',
            '3–4 tbsp calamansi juice (or lemon juice)',
            '2 tbsp soy sauce or liquid seasoning',
            '1 tbsp butter or margarine (for sizzle)',
            'Salt and freshly ground black pepper, to taste',
            'Optional: 1 tbsp mayonnaise or chicken liver paste (for modern creaminess)',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Boil, Grill, and Chop:',
              steps: [
                '1. Place cleaned pork ears, cheeks, and snout in a pot with water, vinegar, peppercorns, bay leaves, and salt. Simmer 45 to 60 minutes until tender. Drain thoroughly and pat dry with paper towels.',
                '2. Grill pork parts over charcoal until skin is slightly charred and crispy. Grill liver until cooked through.',
                '3. Chop grilled pork and liver into small, uniform bite-sized cubes.',
              ],
            },
            {
              sectionTitle: '2. Mix, Season, and Sizzle:',
              steps: [
                '1. In a mixing bowl, combine chopped pork and liver with chopped onions and chili peppers.',
                '2. Pour in calamansi juice and soy sauce/liquid seasoning; toss thoroughly with salt and black pepper.',
                '3. Heat cast-iron plate until smoking hot, melt butter, add sisig and sizzle 2–3 minutes until bottom edges crisp. Serve immediately with fresh calamansi halves.',
              ],
            },
          ],
          sources: [
            'Sisig Kapampangan | Panlasang Pinoy Meaty Recipes',
            'Foxy Folksy - The Modern Filipino Kitchen (Sizzling Pork Sisig)',
            'https://panlasangpinoy.com/pork-sisig/',
          ],
          verifiedTutorials: [
            {
              title: 'Authentic Sizzling Sisig Kapampangan Recipe',
              channel: 'Panlasang Pinoy',
              url: 'https://youtu.be/dVGkeE3XJmo?si=kqIzG_VrfuzZBcBB',
              duration: '12:15',
            },
            {
              title: 'Traditional Kapampangan Pork Sisig (No Mayo, No Egg)',
              channel: 'Foxy Folksy',
              url: 'https://youtu.be/_81PnAO8NkE?si=RQSfdOhnCOwqZ-yv',
              duration: '10:45',
            },
            {
              title: 'Aling Lucing Style Sisig from Angeles City',
              channel: 'Kapampangan Heritage Kusina',
              url: 'https://youtu.be/3SGBQ71r2-s?si=uhCSAXBD3dMiEww',
              duration: '14:20',
            },
            {
              title: 'Crispy Sizzling Sisig: Charcoal-Grill Method',
              channel: 'Taste of Central Luzon',
              url: 'https://youtu.be/Xcd0rhVvCOs?si=NrJE5vGgKgvFTj-Y',
              duration: '11:30',
            },
            {
              title: 'History and Anatomy of Authentic Kapampangan Sisig',
              channel: 'FEATR Filipino Food Series',
              url: 'https://youtu.be/pdvENuUdL3U?si=E0xiRV8JvXgLikNU',
              duration: '16:40',
            },
          ],
          authenticKeywords: [
            'pork head',
            'ears',
            'cheeks',
            'snout',
            'liver',
            'calamansi',
            'red onion',
            'siling labuyo',
            'sizzling plate',
            'pampanga',
          ],
          shortcutFlags: [
            {
              keyword: 'mayonnaise',
              reason: 'Traditional Kapampangan sisig does not require mayonnaise; authentic creaminess comes from roasted liver and rendered pork fat balanced by sharp calamansi.',
            },
            {
              keyword: 'fried egg',
              reason: 'Serving with a raw or fried egg is a Metro Manila commercial trend, not part of the traditional Angeles City recipe.',
            },
          ],
          sampleOnlineRecipe:
            'Quick Sisig Hack: Pan-fry diced pork belly with 1 cup sweet mayonnaise, liquid seasoning, and top with a sunny-side-up egg.',
          sampleAuthenticRecipe:
            'Authentic Kapampangan Sizzling Sisig: Boil pork head cuts with vinegar, bay leaves, and peppercorns for 45–60 mins. Charcoal-grill until charred and crispy, chop finely, toss with grilled liver, red onions, calamansi juice, and siling labuyo, then sizzle with butter on smoking-hot cast iron.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang asim ng calamansi sa Sisig ang nagbibigay-pugay sa ika-18 siglong pinagmulan nito sa Pampanga. Kapag tinabunan ito ng mayonesa, nawawala ang katutubong ugnayan sa salitang "mamisig."',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Ebolusyon ng Sisig sa Angeles, Pampanga',
          abstract: 'Pagtalakay sa pagbabago ng Sisig mula sa maasim na ensalada tungo sa inihaw na maskara sa mainit na bakal.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Tunay na Pampalapot—Inihaw na Atay ng Manok at Calamansi',
              hackMethod: 'Mayonesa at Hilaw na Itlog vs. Inihaw na Atay at Calamansi',
              academicCaption: 'Ginagamit sa Pampanga ang inihaw na atay at katas ng kalamansi upang bigyan ng linamnam ang tinadtad na maskara nang hindi nagiging malabnaw.',
              comparisonNote: 'Napananatili nito ang balanseng asim at usok ng uling.',
              imageUrl: IMAGES.sisig,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Ang Pagpapainit sa Sizzling Plate',
              hackMethod: 'Malamig na Bowl vs. Umuusok na Cast-Iron Plate na may Mantekilya',
              academicCaption: 'Ang paglalagay sa mainit na bakal ang lumilikha ng bahagyang tustadong ilalim na nagpapasarap sa bawat subo ng Sisig.',
              comparisonNote: 'Ang tunog ng pag-sizzle ay bahagi ng karanasang pangkultura.',
              imageUrl: IMAGES.sisig,
            },
          ],
        },
      },
      {
        id: 'nueva-ecija-kakanin',
        name: "Nueva Ecija's Kakanin Platter",
        plaqueTitle: 'KAKANIN',
        plaqueSubtitle: 'FROM NUEVA ECIJA',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Nueva Ecija',
        imageUrl: IMAGES.kakanin,
        shortTagline: 'Traditional glutinous rice delicacies: Biko with latik, Puto, Kutsinta, Sapin-Sapin, and Suman.',
        evolutionNote:
          'Kakanin has been part of Filipino food culture since as early as the 9th century, developing through influences from different Asian communities. Chinese traders are believed to have influenced several varieties, as seen in names such as kutsinta and biko, while other kakanin also show connections to Malay, Indian, and other Asian food traditions. Over time, Filipinos adapted these influences using local ingredients and cooking methods, creating different varieties such as bibingka, puto, kutsinta, and biko. From these early influences, kakanin gradually became an important part of Filipino cuisine and continues to be enjoyed as snacks, desserts, and foods served during celebrations and special occasions.',
        traditionalRecipe: {
          title: 'Kakanin with Latik & Larang Syrup Recipe',
          ingredients: [
            'For the Latik (Topping): 2½ cups coconut cream',
            'For the Kakanin Base: 3 cups glutinous rice flour, 1 cup coconut milk, ½ cup sugar',
            'For the Latik Syrup (Larang): 1 cup dark brown sugar, 1 cup water',
          ],
          procedure: [
            '1. Make the Latik: Pour coconut cream into a pan over low heat. Stir occasionally until it reduces and forms golden-brown coconut curds. Strain and separate the oil, then set toasted curds aside.',
            '2. Prepare Kakanin Base: Mix glutinous rice flour, coconut milk, and sugar until smooth. Pour mixture into an oiled baking pan or container. Steam over medium heat for 10–12 minutes, or until firm and chewy. Let cool completely, then cut into bite-sized cubes.',
            '3. Make the Syrup: Combine dark brown sugar and water in a small pot. Simmer for 2–3 minutes until the mixture thickens into a syrup.',
            '4. Serve: Arrange kakanin cubes on a serving plate. Drizzle warm brown sugar syrup over kakanin, sprinkle toasted latik on top, and serve.',
          ],
          sourceUrl: 'https://cdn.sanity.io/images/f3knbc2s/production/08253a025ac131d304f32ead20e90560bee717d8-2500x1600.jpg',
        },
        ucspHistory: {
          anthropologicalContext:
            'Kakanin is an important part of Filipino food culture and is especially connected to Nueva Ecija’s rice-producing heritage. The term "kakanin" comes from the Tagalog words kain (to eat) and kanin (rice), reflecting its rice-based nature. These delicacies were traditionally made from rice, coconut milk, and sugar and were often prepared for celebrations, rituals, and gatherings. The different types of kakanin reflect the province’s agricultural heritage, particularly its abundance of rice and other local products.',
          culturalEvolution:
            'Nueva Ecija’s food culture is strongly influenced by its identity as the "Rice Granary of the Philippines." The province has a diverse food culture shaped by Tagalog, Ilocano, and other farming communities. Kakanin has been part of food culture since the 9th century, evolving with Chinese (kutsinta, biko), Malay, and Indian maritime exchanges into bibingka, puto, kutsinta, sapin-sapin, and suman.',
          preservationTechnique:
            'Steaming in banana leaf wraps, caramelization in coconut milk (kakang gata), and topping with moisture-free toasted coconut oil curds (latik).',
          materialCulture:
            'Cooked in copper woks (kawa), steamed in tiered bamboo steamers, and served on woven bilao or carved wooden platters lined with banana leaves.',
          socialSignificance:
            'Represents solidarity (pampadikit ng samahan) and harvest thanksgiving across the farming communities of Central Luzon.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Official Recipes for 5 Kakanin Varieties (Nueva Ecija):',
          heirloomIngredients: [
            '1. Biko: Glutinous rice, coconut milk, brown sugar, salt, latik for topping',
            '2. Puto: Rice flour, sugar, baking powder, salt, coconut milk, optional cheese or salted egg',
            '3. Kutsinta: Rice flour, brown sugar, lye water (optional), water, grated mature coconut',
            '4. Sapin-Sapin: Glutinous rice flour, regular rice flour, sugar, coconut milk, condensed milk, ube/langka/pandan flavorings',
            '5. Suman: Glutinous rice, coconut cream, sugar, banana leaves',
          ],
          fryingOrSecondaryTitle: 'Step-by-Step Methods for Kakanin Platter:',
          secondaryIngredients: [
            'Biko: Partially cook glutinous rice, combine with thickened coconut milk & brown sugar, evaporate liquid, top with latik.',
            'Puto: Mix dry & wet ingredients, steam in greased molds 15–20 minutes, top with cheese.',
            'Kutsinta: Whisk ingredients until smooth, steam until set, serve with grated coconut.',
            'Sapin-Sapin: Prepare colored layers, steam sequentially until firm, stack and cool.',
            'Suman: Mix rice with coconut cream & sugar, wrap tightly in banana leaves, steam until cooked.',
          ],
          methodSteps: [
            {
              sectionTitle: '1. Prepare Coconut Cream & Latik Curds:',
              steps: [
                '1. Simmer 2½ cups coconut cream over low heat until it separates and turns into fragrant golden-brown curds (latik).',
                '2. Strain and collect the pure aromatic coconut oil; reserve curds for crowning the kakanin platter.',
              ],
            },
            {
              sectionTitle: '2. Steam and Assemble on Wooden Bilao:',
              steps: [
                '1. Steam the rice cakes in banana-leaf-lined containers for authentic aroma.',
                '2. Artfully arrange the assortment of Biko, Puto, Kutsinta, Sapin-Sapin, and Suman with toasted latik and brown sugar syrup.',
              ],
            },
          ],
          sources: [
            'Food Culture of Nueva Ecija - Rice Granary Historical Presentation',
            'Panlasang Pinoy Kakanin Heritage Collection',
            'Kakanin with Latik Official Recipe Archive',
          ],
          verifiedTutorials: [
            {
              title: 'Authentic Biko with Latik Recipe Tutorial',
              channel: 'Panlasang Pinoy',
              url: 'https://youtu.be/ipgDHFPyoKM?si=q2hoi9biHrZLVYt7',
              duration: '12:50',
            },
            {
              title: 'Soft Steamed Puto with Cheese Tutorial',
              channel: 'Kusina Chef',
              url: 'https://youtu.be/anh-aF1owsc?si=pO9bkFWx1kGiv27-',
              duration: '11:15',
            },
            {
              title: 'Chewy Kutsinta with Grated Coconut Guide',
              channel: 'Yummy Kitchen',
              url: 'https://youtu.be/8C3nZcZKMmg?si=Dep7mZUqRau1lWAX',
              duration: '10:40',
            },
            {
              title: 'Sapin-Sapin Multi-Layer Rice Cake Demo',
              channel: 'Filipino Food Network',
              url: 'https://youtu.be/llLvEt2DIbQ?si=4krDkVnEsqyutDTU',
              duration: '15:20',
            },
            {
              title: 'Traditional Suman Wrapped in Banana Leaves',
              channel: 'Taste of Nueva Ecija',
              url: 'https://youtu.be/MJwvvPdimE8?si=eMBSRIqnXGW8Y6Zw',
              duration: '14:05',
            },
          ],
          authenticKeywords: [
            'glutinous rice',
            'malagkit',
            'coconut milk',
            'gata',
            'latik',
            'biko',
            'puto',
            'kutsinta',
            'sapin-sapin',
            'suman',
            'nueva ecija',
          ],
          shortcutFlags: [
            {
              keyword: 'canned topping',
              reason: 'Commercial toppings lack the aroma and texture of freshly rendered coconut cream latik curds.',
            },
          ],
          sampleOnlineRecipe:
            'Microwave Rice Cake: Stir flour with water and condensed milk, microwave for 3 minutes.',
          sampleAuthenticRecipe:
            'Authentic Nueva Ecija Kakanin Platter: Prepare sticky Biko with latik, soft steamed Puto with cheese, chewy brown sugar Kutsinta, vibrant layered Sapin-Sapin, and banana-leaf-wrapped Suman using freshly milled rice and pure coconut cream.',
        },
        philosophyPrompt: {
          question:
            'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation:
            'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens:
            'Ang Kakanin ng Nueva Ecija ay sagisag ng biyaya ng palayan at pagbubuklod ng pamilya (malagkit bilang pampatibay ng samahan). Ang pagpapanatili sa tunay na gata at malagkit ay paggalang sa hirap ng mga magsasaka sa Kamalig ng Pilipinas.',
        },
        fplLarawangSanaysay: {
          essayTitle:
            'Larawang-Sanaysay: Ang Kakanin ng Nueva Ecija—Biyaya ng Palayan at Tamis ng Pamayanan',
          abstract:
            'Dokumentasyon sa sining ng paggawa ng katutubong kakanin gamit ang sariwang gata at malagkit sa Gitnang Luzon.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Paggawa ng Mabangong Latik mula sa Kakang Gata',
              hackMethod: 'Komersyal na Topping vs. Sariwang Latik mula sa Kakang Gata',
              academicCaption:
                'Matiyagang pinakukuluan sa mahinang apoy ang kakang gata hanggang sa mamuo ang kulay-gintong latik na nagbibigay ng walang kapantay na bango sa kakanin.',
              comparisonNote: 'Ang latik ang korona ng tunay na biko at kakanin sa Gitnang Luzon.',
              imageUrl: IMAGES.kakanin,
            },
            {
              stepNumber: 2,
              tagalogTitle: 'Ikalawang Hakbang: Pagbabalot sa Dahon ng Saging at Pagpapasingaw',
              hackMethod: 'Plastic Cling Wrap vs. Pinalantang Dahon ng Saging',
              academicCaption:
                'Ibinabalot ang suman at kakanin sa dahon ng saging bago pasingawan upang sumipsip ito ng natural na bango ng dahon.',
              comparisonNote: 'Ito ang nagbibigay ng kakaibang amoy-bukid na hinahanap sa tuwing may kapistahan.',
              imageUrl: IMAGES.kakanin,
            },
          ],
        },
      },
      {
        id: 'bulacan-kare-kare',
        name: "Bulacan's Kare-Kare",
        plaqueTitle: 'KARE-KARE',
        plaqueSubtitle: 'FROM BULACAN',
        regionId: 'region-3',
        regionName: 'Region 3 - Central Luzon',
        islandId: 'luzon',
        province: 'Bulacan & Pampanga',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Slow-braised oxtail and tripe in freshly stone-ground roasted peanuts and toasted heirloom rice.',
        ucspHistory: {
          anthropologicalContext:
            'Rooted in pre-colonial peanut and toasted-rice thickening traditions alongside Pampanga and Bulacan fiesta kitchens, Kare-Kare showcases the patience of Central Luzon cooking.',
          culturalEvolution:
            'Before commercial peanut butter jars existed, cooks roasted raw shelled peanuts and glutinous rice (malagkit) in a dry clay pan, then ground them by hand on a stone mortar (galilingan) with annatto oil.',
          preservationTechnique: 'Slow collagen extraction and pairing with fermented shrimp paste (bagoong).',
          materialCulture: 'Simmered and served in a wide clay palayok to retain heat at the fiesta table.',
          socialSignificance: 'Incomplete without its humble counterpart, bagoong alamang—symbolizing how rich and humble elements complete one another in Filipino society.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Sauce & Cuts:',
          heirloomIngredients: [
            '1 kg oxtail (buntot ng baka) & beef tripe, slow-simmered until tender',
            '1.5 cups freshly roasted peanuts, ground into paste',
            '1/3 cup toasted glutinous rice (bigas na malagkit), ground into powder',
            '3 tbsp annatto (atsuete) oil, garlic, and onions',
          ],
          fryingOrSecondaryTitle: 'Vegetables & Pairing:',
          secondaryIngredients: ['Banana heart (puso ng saging), eggplant, sitaw, pechay, and sautéed bagoong alamang'],
          methodSteps: [
            {
              sectionTitle: '1. Roast, Grind, and Simmer:',
              steps: [
                '1. Simmer oxtail in water with onions and peppercorns until fork-tender; reserve the rich stock.',
                '2. Sauté garlic and onions in golden atsuete oil, then whisk in the freshly ground roasted peanuts, toasted rice powder, and oxtail stock.',
                '3. Simmer with blanched banana heart, sitaw, eggplant, and pechay. Serve with savory bagoong on the side.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/kare-kare-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['roasted peanuts', 'toasted rice', 'atsuete', 'oxtail', 'puso ng saging', 'bagoong'],
          shortcutFlags: [
            {
              keyword: 'sweet peanut butter',
              reason: 'Commercial sweet spreadable peanut butter makes the sauce overly sugary compared to freshly ground roasted peanuts and toasted rice.',
            },
          ],
          sampleOnlineRecipe: '15-Minute Kare-Kare using 1 jar sweet commercial peanut butter and instant powder mix.',
          sampleAuthenticRecipe: 'Heirloom Kare-Kare made with slow-simmered oxtail, freshly roasted ground peanuts, toasted glutinous rice flour, golden atsuete oil, puso ng saging, and savory bagoong.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang tambalan ng Kare-Kare at Bagoong ay pilosopikal na paalala na ang pagiging ganap ng lasa ay nasa pagtutulungan ng magkaibang sangkap.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Giniling na Mani at Sinangag na Bigas sa Tradisyonal na Kare-Kare',
          abstract: 'Pagsusuri sa kahalagahan ng sinangag na bigas at bagong bayong mani sa paglikha ng tunay na Kare-Kare.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Pagsangag at Paggiling ng Mani at Malagkit',
              hackMethod: 'Commercial Sweet Peanut Butter vs. Bagong Sangag na Mani at Bigas',
              academicCaption: 'Ang bango at lapot ng pamanang Kare-Kare ay nagmumula sa sinangag na mani at giniling na bigas na niluluto sa langis ng atsuete.',
              comparisonNote: 'Hindi sobrang tamis ang tunay na Kare-Kare.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-4',
    shortTitle: 'Region 4',
    fullName: 'Region 4-A - CALABARZON',
    subtitle: 'CALABARZON (Southern Tagalog)',
    islandId: 'luzon',
    ornamentType: 'pinwheels',
    summaryBanner:
      'Region 4-A (Cavite, Laguna, Batangas, Rizal, and Quezon) is renowned for highland cattle broths, coconut cream reductions, and festival noodle dishes served on fragrant banana leaves.',
    dishes: [
      {
        id: 'batangas-bulalo',
        name: "Batangas Bulalo",
        plaqueTitle: 'BULALO',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Batangas',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Crystal-clear beef shank and bone-marrow broth slow-simmered with whole peppercorns and native corn.',
        ucspHistory: {
          anthropologicalContext:
            'Centered in the cool volcanic highlands of Lipa, Tanauan, and Mahogany Market in Tagaytay/Batangas, Bulalo emerged from Southern Tagalog cattle ranching.',
          culturalEvolution:
            'Authentic Batangas Bulalo relies on hours of patient skimming over wood fire so the bone marrow (utak ng buto) infuses a clear, golden broth seasoned only with patis, rock salt, onions, and cracked black pepper.',
          preservationTechnique: 'Long thermal extraction of collagen and marrow.',
          materialCulture: 'Simmered in deep aluminum or earthenware cauldrons (kawa) over coffee-wood embers.',
          socialSignificance: 'A comforting communal broth shared after farming, markets, and long journeys.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Broth & Beef Shank:',
          heirloomIngredients: [
            '1.5 kg beef shank with bone marrow (bulalo)',
            '2 tbsp whole black peppercorns & 2 large quartered onions',
            '2 tbsp Batangas fish sauce (patis) & coarse sea salt',
          ],
          fryingOrSecondaryTitle: 'Highland Vegetables:',
          secondaryIngredients: ['3 ears sweet native corn, halved', 'Pechay Tagalog, cabbage, and calamansi-patis-sili dip'],
          methodSteps: [
            {
              sectionTitle: '1. Blanch and Slow-Simmer:',
              steps: [
                '1. Blanch beef shanks briefly and rinse to remove impurities for a crystal-clear broth.',
                '2. Simmer beef shanks with onions and whole peppercorns for 3 to 4 hours until fork-tender, then add native corn and pechay.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/bulalo-stewed-beef-shank/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['beef shank', 'bone marrow', 'peppercorn', 'patis', 'corn', 'pechay', 'simmer'],
          shortcutFlags: [
            {
              keyword: 'artificial beef cube',
              reason: 'Relying solely on bouillon cubes without real bone-marrow simmering produces a cloudy, overly salty broth.',
            },
          ],
          sampleOnlineRecipe: '10-Minute Bulalo Soup: Boil thinly sliced beef in water with 3 artificial beef cubes and MSG.',
          sampleAuthenticRecipe: 'Authentic Batangas Bulalo: Slow-simmer beef shank with bone marrow, whole black peppercorns, onions, and patis for 3 hours until crystal-clear and rich, then add sweet native corn and pechay.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Itinuturo ng Bulalo ng Batangas na ang linaw at lalim ng sabaw ay hindi minamadali.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Mabagal na Pagpapakulo ng Bulalo sa Batangas',
          abstract: 'Pagsusuri sa sining ng pagpapalambot ng bulalo sa kawa.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paglilinis at Mabagal na Pagpapakulo ng Buto',
              hackMethod: 'Bouillon Cubes vs. Apat na Oras na Pagpapakulo ng Bone Marrow',
              academicCaption: 'Ang tunay na linamnam ng Bulalo ay galing sa katas ng buto at utak nito na dahan-dahang lumalabas sa mahinang apoy.',
              comparisonNote: 'Malinaw ngunit malasa ang tunay na sabaw ng Batangas.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'quezon-pancit-habhab',
        name: "Quezon's Pancit Habhab",
        plaqueTitle: 'PANCIT HABHAB',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Lucban, Quezon',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Lucban miki noodles served on a square of banana leaf and eaten directly without utensils.',
        ucspHistory: {
          anthropologicalContext: 'Central to the vibrant Pahiyas Festival in Lucban, Quezon honoring San Isidro Labrador, Pancit Habhab is named after the onomatopoeic sound of slurping noodles directly off a palm-sized banana leaf.',
          culturalEvolution: 'Designed as an eco-friendly, zero-utensil street and festival meal for farmers and pilgrims, splashed with aromatic coconut cane vinegar (sukang paombong/niyog).',
          preservationTechnique: 'Sun-dried Lucban wheat miki braised in pork broth and soy sauce.',
          materialCulture: 'Served on hand-cut squares of wilted banana leaf (dahon ng saging).',
          socialSignificance: 'Eliminates social hierarchy—everyone eats with the same humble banana leaf.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Lucban Miki & Pork:',
          heirloomIngredients: ['500g dried Lucban miki noodles', '250g pork belly & pork liver, sliced thinly', '2 cups rich pork stock'],
          fryingOrSecondaryTitle: 'Vegetables & Vinegar Splash:',
          secondaryIngredients: ['Sayote, carrots, pechay, and spiced coconut vinegar (suka) drizzled before eating'],
          methodSteps: [
            {
              sectionTitle: '1. Stir-Fry and Serve on Banana Leaf:',
              steps: [
                '1. Sauté garlic, onions, pork belly, and liver until fragrant, then add pork stock and Lucban miki.',
                '2. Toss with julienned sayote and pechay, plate on a banana leaf square, and drizzle with native coconut vinegar.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/pancit-habhab-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lucban', 'miki', 'banana leaf', 'vinegar', 'suka', 'sayote', 'pork belly'],
          shortcutFlags: [
            {
              keyword: 'calamansi instead of vinegar',
              reason: 'In Lucban, Quezon, authentic Pancit Habhab is splashed with spiced coconut vinegar rather than calamansi.',
            },
          ],
          sampleOnlineRecipe: 'Pancit Habhab served on plastic plates with calamansi.',
          sampleAuthenticRecipe: 'Authentic Lucban Pancit Habhab cooked with Lucban miki, pork belly, sayote, served on a banana leaf square and drizzled with spiced coconut vinegar.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang pagkain ng Pancit Habhab sa dahon ng saging ay paalala ng ating malapit na ugnayan sa kalikasan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Pancit Habhab at ang Tradisyon ng Pahiyas sa Lucban',
          abstract: 'Dokumentasyon ng kultura ng pagkain nang walang kubyertos gamit ang dahon ng saging.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahain sa Dahon ng Saging at Pagpatak ng Suka',
              hackMethod: 'Styrofoam Cup vs. Dahon ng Saging at Sukang Niyog',
              academicCaption: 'Ang init ng bagong lutong Pancit Habhab ay nagpapalabas ng natural na bango ng dahon ng saging kapag pinatakan ng suka.',
              comparisonNote: 'Makakalikasan at tapat sa tradisyon ng Quezon.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
      {
        id: 'laguna-kinulob',
        name: "Laguna's Kinulob na Itik",
        plaqueTitle: 'KINULOB NA ITIK',
        regionId: 'region-4',
        regionName: 'Region 4-A - CALABARZON',
        islandId: 'luzon',
        province: 'Victoria, Laguna',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Whole duck slow-braised in aromatic spices and deep-fried until golden and crisp.',
        ucspHistory: {
          anthropologicalContext: 'Originating along the duck-farming lakeshore towns of Victoria, Laguna de Bay, Kinulob ("covered and steamed/braised") turns tough native Pateros-Laguna ducks into succulent feast fare.',
          culturalEvolution: 'Generations perfected a slow covered braise with cane vinegar, peppercorns, onions, and star anise before flash-frying to crisp the skin.',
          preservationTechnique: 'Covered spice-braising followed by high-heat crisp rendering.',
          materialCulture: 'Cooked in heavy covered talyasi vats.',
          socialSignificance: 'Celebrated annually during the Itik Festival of Victoria, Laguna.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Whole Duck Braise:',
          heirloomIngredients: ['1 whole native duck (itik), cleaned', '1/2 cup cane vinegar, soy sauce, garlic, onions, bay leaves'],
          fryingOrSecondaryTitle: 'Crisping:',
          secondaryIngredients: ['Cooking oil for deep-frying until golden-brown'],
          methodSteps: [
            {
              sectionTitle: '1. Covered Braise (Kulob) & Crisp:',
              steps: [
                '1. Simmer whole duck tightly covered (kinulob) in aromatics and vinegar for 90 minutes until tender.',
                '2. Air-dry thoroughly, then deep-fry until the duck skin is golden and crackling.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['duck', 'itik', 'vinegar', 'garlic', 'bay leaves', 'deep-fry', 'kinulob'],
          shortcutFlags: [
            {
              keyword: 'batter coating',
              reason: 'Authentic Kinulob na Itik is fried bare after spice-braising so the natural duck skin crisps cleanly.',
            },
          ],
          sampleOnlineRecipe: 'Breaded Fried Duck using flour batter and instant gravy.',
          sampleAuthenticRecipe: 'Authentic Victoria Laguna Kinulob na Itik: Slow-braise whole duck tightly covered in cane vinegar, garlic, peppercorns, and bay leaves until tender, air-dry, and deep-fry bare until golden and crisp.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Kinulob na Itik ay bunga ng ugnayan ng mga mamamayan sa Lawa ng Laguna.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Kinulob na Itik sa Baybayin ng Laguna',
          abstract: 'Pagsusuri sa paraang pagkukulob upang mapalambot at mapabango ang katutubong itik.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkukulob sa Sangkap at Suka',
              hackMethod: 'Mabilisang Prito vs. Matagal na Pagkukulob',
              academicCaption: 'Tinatakpan nang mahigpit ang kaldero upang kulubin ang itik sa usok ng bawang, suka, at laurel bago ito iprito.',
              comparisonNote: 'Tinitiyak nitong malambot ang laman hanggang sa buto.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
    ],
  },

  // ==================== VISAYAS ====================
  {
    id: 'region-6',
    shortTitle: 'Region 6',
    fullName: 'Region 6 - Western Visayas',
    subtitle: 'Western Visayas (Panay & Guimaras)',
    islandId: 'visayas',
    ornamentType: 'mask',
    summaryBanner:
      'Western Visayas is celebrated for warm, soulful Ilonggo hospitality (malambing), featuring slow-simmered bone broths sweetened with native muscovado, smoky annatto-basted grilled meats, and indigenous souring fruits like batwan.',
    dishes: [
      {
        id: 'iloilo-batchoy',
        name: "Iloilo's La Paz Batchoy",
        plaqueTitle: 'LA PAZ BATCHOY',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo City',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich beef and pork bone broth infused with shrimp paste (guinamos), fresh miki, and chicharon.',
        ucspHistory: {
          anthropologicalContext: 'Created in 1938 in the La Paz public market of Iloilo City by Federico Guillergan Sr., La Paz Batchoy reflects the vibrant market trade of Panay Island.',
          culturalEvolution: 'Its signature depth comes from simmering beef bone marrow, pork organs, and a secretspoonful of Ilonggo fermented shrimp paste (guinamos) in the stock.',
          preservationTechnique: 'Slow-simmered collagen stock seasoned with fermented guinamos.',
          materialCulture: 'Served steaming hot in ceramic bowls straight from massive market cauldrons.',
          socialSignificance: 'A democratic market comfort food enjoyed by stevedores, students, and families alike.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Heirloom Broth & Meats:',
          heirloomIngredients: ['Beef marrow bones, pork belly, spleen, and liver', '1 tbsp Ilonggo guinamos (fermented shrimp paste) dissolved in stock', 'Fresh round miki noodles'],
          fryingOrSecondaryTitle: 'Garnishes:',
          secondaryIngredients: ['Abundant crushed pork chicharon, toasted garlic, scallions, and raw egg yolk'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Guinamos-Infused Bone Stock:',
              steps: [
                '1. Simmer beef bones and pork meats for 3 hours with dissolved Ilonggo guinamos for authentic umami.',
                '2. Blanch fresh miki noodles, top with sliced meats, crushed chicharon, and toasted garlic, then ladle boiling broth over top.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/la-paz-batchoy/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['guinamos', 'miki', 'chicharon', 'marrow', 'liver', 'garlic'],
          shortcutFlags: [{ keyword: 'instant cup noodles', reason: 'Instant dehydrated seasoning lacks the guinamos-infused bone marrow stock of La Paz Market.' }],
          sampleOnlineRecipe: 'Quick Batchoy using instant noodle soup pack and hotdog slices.',
          sampleAuthenticRecipe: 'Authentic Iloilo La Paz Batchoy: Slow-simmer beef marrow bones and pork with Ilonggo guinamos, serve over fresh round miki noodles with liver, crushed chicharon, and toasted garlic.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang guinamos sa sabaw ng Batchoy ay patunay ng henyo ng mga kusinerong Ilonggo sa pamilihang-bayan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sikreto ng La Paz Batchoy sa Pamilihan ng Iloilo',
          abstract: 'Pagsusuri sa paggamit ng guinamos at bone marrow sa paggawa ng tunay na La Paz Batchoy.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahalo ng Guinamos sa Sabaw ng Buto',
              hackMethod: 'Instant Pork Powder vs. Sabaw na may Guinamos',
              academicCaption: 'Ang natatanging linamnam ng La Paz Batchoy ay nagmumula sa kaunting guinamos na inihahalo habang pinakukuluan ang buto ng baka at baboy.',
              comparisonNote: 'Nagbibigay ito ng lalim ng lasa na tatak-Ilonggo.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
      {
        id: 'ilonggo-kbl',
        name: "Iloilo's KBL (Kadyos, Baboy, Langka)",
        plaqueTitle: 'KBL ILOILO',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo & Antique',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Pigeon peas, smoky pork hock, and unripe jackfruit soured with native batwan fruit.',
        ucspHistory: {
          anthropologicalContext: 'KBL showcases three indigenous pillars of Panay agriculture: black pigeon peas (kadyos), smoky grilled pork hock (pata), and young green jackfruit (langka).',
          culturalEvolution: 'Its unmistakable tartness comes exclusively from batwan (Garcinia binucao), an endemic Visayan souring fruit.',
          preservationTechnique: 'Sun-dried pigeon peas and wood-smoked pork hocks.',
          materialCulture: 'Simmered in earthen pots over wood embers.',
          socialSignificance: 'The ultimate homecoming dish for every Ilonggo family.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Core KBL Ingredients:',
          heirloomIngredients: ['1 kg smoky pork hock (pata)', '2 cups fresh or dried kadyos (pigeon peas)', '3 cups cubed young green jackfruit (langka)', '5 pcs native batwan fruit (for souring)'],
          fryingOrSecondaryTitle: 'Aromatics:',
          secondaryIngredients: ['Lemongrass (tanglad) bundle, onions, garlic, and patis'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Pata, Kadyos, and Batwan:',
              steps: [
                '1. Char pork hock briefly over coals for smokiness, then simmer with lemongrass and kadyos until tender.',
                '2. Add green jackfruit and bruised batwan fruit, simmering until the broth turns a rich, tangy purple-brown.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/kbl-kadyos-baboy-langka/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['kadyos', 'langka', 'batwan', 'tanglad', 'lemongrass', 'pata'],
          shortcutFlags: [{ keyword: 'citric acid powder', reason: 'Artificial souring packets lack the fruity, complex acidity of endemic Visayan batwan.' }],
          sampleOnlineRecipe: 'Quick Pork Soup with canned beans and artificial citric acid powder.',
          sampleAuthenticRecipe: 'Authentic Ilonggo KBL: Simmer smoky pork pata with kadyos (pigeon peas), lemongrass (tanglad), young green langka, and native Visayan batwan fruit.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang prutas na batwan ay bahagi ng biodibersidad at kultura ng Kabisayaan na dapat pangalagaan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Kadyos, Baboy, at Langka—Ang Asim ng Batwan sa Kanlurang Visayas',
          abstract: 'Pagpapakilala sa batwan bilang katutubong pampaasim ng mga Ilonggo.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paggamit ng Katutubong Batwan at Tanglad',
              hackMethod: 'Instant Sinigang Mix vs. Prutas na Batwan',
              academicCaption: 'Ang batwan ang nagbibigay ng bilog at banayad na asim sa KBL na kaiba sa sampalok ng Luzon.',
              comparisonNote: 'Itinatampok nito ang katutubong prutas ng Panay at Negros.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
      {
        id: 'bacolod-inasal',
        name: "Visayas Chicken Inasal",
        plaqueTitle: 'CHICKEN INASAL',
        regionId: 'region-6',
        regionName: 'Region 6 - Western Visayas',
        islandId: 'visayas',
        province: 'Iloilo & Negros Occidental',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Native chicken marinated in coconut vinegar, lemongrass, ginger, and calamansi, basted with annatto oil.',
        ucspHistory: {
          anthropologicalContext: 'Rooted in Visayan roasting traditions along Cuadra Street and Manokan Country, Inasal relies on acidic coconut vinegar (sinamak), bruised lemongrass, and ginger rather than sweet soy.',
          culturalEvolution: 'Continuous basting with golden annatto-garlic oil (atsuete) keeps the meat juicy while coconut-shell charcoal imparts signature smokiness.',
          preservationTechnique: 'Coconut vinegar and ginger-lemongrass marination.',
          materialCulture: 'Skewered on hand-whittled bamboo sticks and fanned with woven buri abaniko.',
          socialSignificance: 'Eaten with bare hands (kinamot) over garlic rice drizzled with sinamak and chicken oil.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Inasal Marinade:',
          heirloomIngredients: ['1 kg native chicken (paa or pecho)', '1/2 cup coconut vinegar (tuba / sinamak)', '2 stalks lemongrass (tanglad), ginger, garlic, and calamansi'],
          fryingOrSecondaryTitle: 'Basting Oil:',
          secondaryIngredients: ['Rendered chicken fat or oil infused with annatto seeds (atsuete) and salt'],
          methodSteps: [
            {
              sectionTitle: '1. Marinate and Charcoal-Baste:',
              steps: [
                '1. Marinate chicken cuts in coconut vinegar, crushed lemongrass, ginger, garlic, and calamansi for at least 4 hours.',
                '2. Grill over coconut-shell charcoal while basting generously with golden atsuete-infused oil.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/chicken-inasal-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lemongrass', 'tanglad', 'coconut vinegar', 'sinamak', 'atsuete', 'calamansi', 'ginger'],
          shortcutFlags: [{ keyword: 'banana ketchup', reason: 'Authentic Visayan Chicken Inasal never uses sweet banana ketchup or soy sauce in its marinade.' }],
          sampleOnlineRecipe: 'Sweet BBQ Chicken basted with banana ketchup and soy sauce.',
          sampleAuthenticRecipe: 'Authentic Visayan Chicken Inasal marinated in coconut vinegar (sinamak), crushed lemongrass (tanglad), ginger, garlic, and calamansi, grilled over charcoal with golden atsuete oil.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang bango ng tanglad at suka ng niyog sa Inasal ay patunay na hindi kailangang matamis ang lahat ng inihaw.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Sining ng Pag-iinasal sa Kabisayaan',
          abstract: 'Pagsusuri sa papel ng tanglad, sinamak, at langis ng atsuete sa Chicken Inasal.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbababad sa Tanglad, Luya, at Sinamak',
              hackMethod: 'Soy-Ketchup Marinade vs. Tanglad at Sukang Tuba',
              academicCaption: 'Walang toyo o ketchup ang tunay na Inasal; ang lasa nito ay nagmumula sa tanglad, luya, bawang, at sukang niyog.',
              comparisonNote: 'Malinis, mabango, at nanunuot ang asim-linamnam.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-7',
    shortTitle: 'Region 7',
    fullName: 'Region 7 - Central Visayas',
    subtitle: 'Central Visayas (Cebu & Bohol)',
    islandId: 'visayas',
    ornamentType: 'mandala',
    summaryBanner:
      'Central Visayas unites the maritime roasting traditions of Cebu and the karst agricultural heritage of Bohol, famous for herb-stuffed Lechon, SuTuKil coastal cookery, and coconut-ginger stews.',
    dishes: [
      {
        id: 'cebu-lechon-belly',
        name: "Cebu's Lechon & Carcar Chicharon",
        plaqueTitle: 'CEBU LECHON',
        regionId: 'region-7',
        regionName: 'Region 7 - Central Visayas',
        islandId: 'visayas',
        province: 'Cebu (Talisay & Carcar)',
        imageUrl: IMAGES.bagnet,
        shortTagline: 'Slow-roasted pork stuffed with lemongrass, native scallions, garlic, and sea salt—so flavorful it needs no liver sauce.',
        ucspHistory: {
          anthropologicalContext: 'In Cebu, roasting whole pig (Inasal na Baboy / Lechon) over glowing charcoal pits has been the centerpiece of Sinulog fiestas and family milestones for centuries.',
          culturalEvolution: 'Unlike Luzon lechon which relies on sweet liver gravy, Cebu Lechon is stuffed generously from the inside with crushed lemongrass (tanglad), green onions, native garlic, peppercorns, and sea salt.',
          preservationTechnique: 'Slow rotisserie thermal rendering and herb aromatization.',
          materialCulture: 'Skewered on mature bamboo poles over coconut-husk charcoal and glazed with fresh coconut water.',
          socialSignificance: 'The undisputed crown jewel of Visayan celebrations.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Aromatic Cavity Stuffing:',
          heirloomIngredients: ['1.5 kg pork belly slab (skin-on)', '4 stalks fresh lemongrass (tanglad), bruised', '1 bundle native scallions / spring onions', '1 head native garlic, crushed, coarse sea salt, and black peppercorns'],
          fryingOrSecondaryTitle: 'Glaze & Dip:',
          secondaryIngredients: ['Fresh coconut water (buko juice) for skin glazing', 'Spiced Cebu cane vinegar with siling kulikot'],
          methodSteps: [
            {
              sectionTitle: '1. Stuff with Herbs & Slow-Roast:',
              steps: [
                '1. Score the inside flesh of the pork belly and rub generously with coarse sea salt, crushed garlic, and black pepper.',
                '2. Layer bruised lemongrass and scallions tightly inside, roll and tie with twine, and slow-roast while brushing skin with coconut water until glass-crisp.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/lechon-belly-roll/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['lemongrass', 'tanglad', 'scallions', 'garlic', 'sea salt', 'coconut water'],
          shortcutFlags: [{ keyword: 'liver sauce', reason: 'Cebu Lechon is aromatic enough from its internal tanglad and garlic stuffing that it is served with spiced vinegar rather than sweet liver gravy.' }],
          sampleOnlineRecipe: 'Quick Roast Pork served with bottled sweet liver gravy.',
          sampleAuthenticRecipe: 'Authentic Cebu Lechon Belly stuffed with bruised lemongrass (tanglad), scallions, crushed native garlic, peppercorns, and sea salt, glazed with coconut water and roasted until glass-crisp.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Itinuturo ng Cebu Lechon na ang tunay na linamnam ay nagmumula sa loob—sa mga sariwang halaman at pampalasa ng sariling lupa.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tanglad at Sibuyas Mura sa Puso ng Cebu Lechon',
          abstract: 'Pagsusuri kung bakit hindi nangangailangan ng sarsa ang tradisyonal na Lechon ng Cebu.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagpupuno ng Tanglad at Bawang sa Loob',
              hackMethod: 'Panlabas na Sarsa vs. Panloob na Pampalasa (Stuffing)',
              academicCaption: 'Habang umiikot sa baga, ang katas ng tanglad, bawang, at dahon ng sibuyas ay nanunuot sa bawat hibla ng karne.',
              comparisonNote: 'Kaya sapat na ang sukang may sili bilang sawsawan.',
              imageUrl: IMAGES.bagnet,
            },
          ],
        },
      },
      {
        id: 'bohol-halang-halang',
        name: "Bohol's Halang-Halang Manok",
        plaqueTitle: 'HALANG-HALANG',
        regionId: 'region-7',
        regionName: 'Region 7 - Central Visayas',
        islandId: 'visayas',
        province: 'Bohol',
        imageUrl: IMAGES.pakbet,
        shortTagline: 'Native free-range chicken simmered in fresh coconut milk, ginger, lemongrass, and fiery bird’s eye chilies.',
        ucspHistory: {
          anthropologicalContext: 'Named "Halang-Halang" (Visayan for "spicy"), this Boholano comfort stew combines free-range native chicken (manok bisaya) with rich coconut cream (kakang gata) and fiery chilies.',
          culturalEvolution: 'Reflects the lush coconut groves surrounding Bohol’s limestone hills.',
          preservationTechnique: 'Simmering in antimicrobial ginger, chili, and coconut oil emulsion.',
          materialCulture: 'Freshly grated coconut pressed by hand over a wooden kudkuran.',
          socialSignificance: 'Served warm during rainy afternoons and family reunions in Bohol.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Boholano Ingredients:',
          heirloomIngredients: ['1 kg native chicken (manok bisaya), cut into serving pieces', '2 cups fresh coconut milk (gata) & 1 cup thick coconut cream (kakang gata)', 'Thumb-sized ginger, lemongrass, and 6 pcs siling kulikot / labuyo'],
          fryingOrSecondaryTitle: 'Vegetables:',
          secondaryIngredients: ['Green papaya wedges and dahon ng sili (chili leaves)'],
          methodSteps: [
            {
              sectionTitle: '1. Sauté Aromatics and Simmer in Gata:',
              steps: [
                '1. Sauté ginger, garlic, onions, and lemongrass until fragrant, then brown the native chicken.',
                '2. Simmer in second-press coconut milk until tender, then finish with green papaya, crushed chilies, chili leaves, and thick kakang gata.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/halang-halang/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['coconut milk', 'gata', 'ginger', 'lemongrass', 'chili', 'papaya', 'native chicken'],
          shortcutFlags: [{ keyword: 'evaporated milk', reason: 'Canned cow’s milk cannot replace the rich, nutty aroma of freshly pressed Bohol coconut cream (kakang gata).' }],
          sampleOnlineRecipe: 'Spicy Chicken Soup using canned evaporated milk and chili flakes.',
          sampleAuthenticRecipe: 'Authentic Bohol Halang-Halang: Simmer native chicken with ginger, lemongrass, green papaya, siling labuyo, chili leaves, and freshly pressed coconut cream (gata).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang sariwang gata at anghang ng sili sa Halang-Halang ay salamin ng masiglang pamumuhay sa Bohol.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Gata at Sili sa Halang-Halang ng Bohol',
          abstract: 'Pagtalakay sa kahalagahan ng unang piga ng gata sa lutuing Boholano.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkudkod at Pagpiga ng Sariwang Niyog',
              hackMethod: 'Evaporated Milk vs. Unang Piga ng Kakang Gata',
              academicCaption: 'Ang tunay na Halang-Halang ay gumagamit ng dalawang antas ng gata upang lumambot ang manok bisaya at lumapot ang sarsa.',
              comparisonNote: 'Nagbibigay ito ng natural na tamis laban sa anghang ng sili.',
              imageUrl: IMAGES.pakbet,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-8',
    shortTitle: 'Region 8',
    fullName: 'Region 8 - Eastern Visayas',
    subtitle: 'Eastern Visayas (Leyte & Samar)',
    islandId: 'visayas',
    ornamentType: 'fans',
    summaryBanner:
      'Eastern Visayas bridges the Pacific Ocean and Visayan Sea, renowned for slow-braised Waray Humba with fermented black beans, root-crop delicacies in coconut shells (Binagol), and coastal vegetable medleys.',
    dishes: [
      {
        id: 'leyte-humba',
        name: "Leyte's Waray Humba",
        plaqueTitle: 'WARAY HUMBA',
        regionId: 'region-8',
        regionName: 'Region 8 - Eastern Visayas',
        islandId: 'visayas',
        province: 'Leyte & Samar',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Melt-in-your-mouth pork belly slow-braised with fermented black beans (tausi), dried banana blossoms, and muscovado.',
        ucspHistory: {
          anthropologicalContext: 'Across Leyte and Samar, Humba is the quintessential Waray feast dish prepared in large batches that improve in flavor over several days.',
          culturalEvolution: 'Distinguished by the earthy umami of salted black beans (tausi) and floral dried banana blossoms (bulaklak ng saging) balanced with raw sugarcane muscovado and cane vinegar.',
          preservationTechnique: 'Vinegar-sugar-salt reduction with high pork fat cap.',
          materialCulture: 'Slow-cooked in earthenware pots over low charcoal embers.',
          socialSignificance: 'A dish of endurance and warmth shared across Eastern Visayan communities.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Waray Braising Ingredients:',
          heirloomIngredients: ['1 kg pork belly (liempo), cut into thick blocks', '3 tbsp fermented salted black beans (tausi)', '1/2 cup dried banana blossoms (bulaklak ng saging)', '1/3 cup cane vinegar, soy sauce, muscovado sugar, garlic, peppercorns, bay leaves'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Hard-boiled eggs and roasted peanuts (optional regional touch)'],
          methodSteps: [
            {
              sectionTitle: '1. Sear and Slow-Braise:',
              steps: [
                '1. Sear pork belly blocks until golden, then add garlic, peppercorns, bay leaves, cane vinegar, soy sauce, and muscovado.',
                '2. Fold in fermented black beans (tausi) and dried banana blossoms, simmering on low heat for 90 minutes until the sauce glazes the meat.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/humba-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['tausi', 'black beans', 'banana blossoms', 'bulaklak ng saging', 'vinegar', 'pork belly'],
          shortcutFlags: [{ keyword: 'skipping tausi', reason: 'Without fermented black beans (tausi) and dried banana blossoms, the dish becomes plain sweet adobo rather than authentic Visayan Humba.' }],
          sampleOnlineRecipe: 'Quick Humba: Boil pork with soy sauce and white sugar for 20 minutes.',
          sampleAuthenticRecipe: 'Authentic Leyte Waray Humba: Slow-braise thick pork belly with fermented black beans (tausi), dried banana blossoms (bulaklak ng saging), cane vinegar, muscovado sugar, garlic, and bay leaves.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang bulaklak ng saging at tausi ang nagbibigay ng kaluluwa sa Humba ng Kabisayaan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tausi at Bulaklak ng Saging sa Humba ng Leyte at Samar',
          abstract: 'Paghahambing ng Waray Humba sa karaniwang Adobo.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paglalagay ng Tausi at Bulaklak ng Saging',
              hackMethod: 'Simpleng Matamis na Adobo vs. Humba na may Tausi at Bulaklak ng Saging',
              academicCaption: 'Ang kumbinasyon ng maalat na tausi at mabangong bulaklak ng saging ang nagbubukod sa Humba bilang pamanang ulam ng Kabisayaan.',
              comparisonNote: 'Nananatiling malambot at malinamnam kahit lumamig.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-nir',
    shortTitle: 'Negros / NIR',
    fullName: 'Negros Island Region (NIR)',
    subtitle: 'Negros Occidental & Oriental',
    islandId: 'visayas',
    ornamentType: 'pinwheels',
    summaryBanner:
      'The Sugarbowl of the Philippines blends heritage hacienda kitchens in Silay and Bacolod with coastal Dumaguete flavors, famous for Kansi beef shank soup and Sinuglaw.',
    dishes: [
      {
        id: 'silay-kansi',
        name: "Negros Cansi (Kansi)",
        plaqueTitle: 'NEGROS CANSI',
        regionId: 'region-nir',
        regionName: 'Negros Island Region (NIR)',
        islandId: 'visayas',
        province: 'Bacolod & Silay, Negros Occidental',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich beef shank and bone marrow soup soured with native batwan fruit and tinted with golden annatto.',
        ucspHistory: {
          anthropologicalContext: 'Hailing from Bacolod and Silay in Negros Occidental, Cansi marries the richness of Tagalog Bulalo with the bright acidity of Visayan Sinigang.',
          culturalEvolution: 'Soured with endemic batwan fruit and unripe jackfruit, then finished with golden annatto (atsuete) oil and lemongrass.',
          preservationTechnique: 'Slow bone-marrow simmering in acidic batwan broth.',
          materialCulture: 'Simmered in deep clay and cast-iron pots.',
          socialSignificance: 'A beloved Negrense culinary bridge between highland cattle and tropical orchards.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Negrense Ingredients:',
          heirloomIngredients: ['1.5 kg beef shank with bone marrow', '6 pcs native batwan fruit', '2 cups sliced young jackfruit (langka)', '2 stalks lemongrass (tanglad) & 2 tbsp golden atsuete oil'],
          fryingOrSecondaryTitle: 'Seasoning:',
          secondaryIngredients: ['Sliced green finger chilies, garlic, onions, and patis'],
          methodSteps: [
            {
              sectionTitle: '1. Simmer Shank with Batwan & Atsuete:',
              steps: [
                '1. Sauté garlic and onions in golden atsuete oil, then sear the beef shanks.',
                '2. Add water, lemongrass, and batwan fruit; simmer for 3 hours until tender, then add young jackfruit and green chilies.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/cansi-soup-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['batwan', 'beef shank', 'langka', 'atsuete', 'lemongrass', 'tanglad'],
          shortcutFlags: [{ keyword: 'tamarind powder', reason: 'Authentic Negrense Cansi gets its signature tang from batwan fruit and golden hue from atsuete, not instant tamarind powder.' }],
          sampleOnlineRecipe: 'Quick Beef Soup with instant tamarind sinigang powder.',
          sampleAuthenticRecipe: 'Authentic Negros Cansi: Slow-simmer beef shank and bone marrow in golden atsuete oil with lemongrass (tanglad), young jackfruit (langka), and native batwan fruit.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Cansi ng Negros ay patunay na ang sariling bunga ng ating kagubatan gaya ng batwan ang bumubuo sa ating lasa.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Cansi ng Negros—Pagtatagpo ng Bulalo at Batwan',
          abstract: 'Pagsusuri sa natatanging sabaw ng Negros Occidental.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Langis ng Atsuete at Asim ng Batwan',
              hackMethod: 'Instant Sinigang Mix vs. Batwan at Atsuete',
              academicCaption: 'Ang kahel na kulay mula sa atsuete at asim ng batwan ang nagbibigay sa Cansi ng natatanging karakter sa buong Kabisayaan.',
              comparisonNote: 'Hindi nagmamantsa ng labis na alat ang natural na batwan.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },

  // ==================== MINDANAO ====================
  {
    id: 'region-9',
    shortTitle: 'Region 9',
    fullName: 'Region 9 - Zamboanga Peninsula',
    subtitle: 'Zamboanga Peninsula & Sulu',
    islandId: 'mindanao',
    ornamentType: 'fans',
    summaryBanner:
      'Region 9 weaves Chavacano, Subanen, and Tausug maritime culinary traditions, featuring deep-sea spanner crabs in spiced coconut-roe Alavar sauce and burnt-coconut Tiula Itum.',
    dishes: [
      {
        id: 'zamboanga-curacha',
        name: "Zamboanga's Curacha Alavar",
        plaqueTitle: 'CURACHA ALAVAR',
        regionId: 'region-9',
        regionName: 'Region 9 - Zamboanga Peninsula',
        islandId: 'mindanao',
        province: 'Zamboanga City',
        imageUrl: IMAGES.tocino,
        shortTagline: 'Deep-sea spanner crab simmered in rich coconut milk, crab roe (aligue), garlic, and Mindanao spices.',
        ucspHistory: {
          anthropologicalContext: 'Caught in the deep waters of the Basilan Strait by Zamboangueño and Sama-Bajau fisherfolk, the Curacha (Ranina ranina) is prized across the Zamboanga Peninsula.',
          culturalEvolution: 'Perfected by the Alavar family of Zamboanga into a velvety coconut milk and crab-roe sauce infused with native ginger, garlic, and chili.',
          preservationTechnique: 'Simmering in spiced coconut cream and crab fat emulsion.',
          materialCulture: 'Harvested using traditional traps and cooked in wide brass or iron woks.',
          socialSignificance: 'A symbol of Zamboanga’s Chavacano and maritime heritage.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Curacha & Alavar Sauce:',
          heirloomIngredients: ['1 kg fresh Curacha (spanner crab) or blue crab', '2 cups thick coconut cream (kakang gata)', '1/2 cup pure crab roe (aligue / taba ng talangka)', 'Pounded garlic, ginger, shallots, turmeric, and siling labuyo'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Calamansi and steamed white rice'],
          methodSteps: [
            {
              sectionTitle: '1. Steam Crab & Reduce Alavar Sauce:',
              steps: [
                '1. Steam the Curacha briefly to lock in its natural marine sweetness.',
                '2. Sauté garlic, ginger, and shallots, whisk in crab roe (aligue) and thick coconut cream, and simmer the Curacha in the rich golden-orange sauce.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['curacha', 'aligue', 'crab roe', 'coconut cream', 'gata', 'ginger', 'garlic'],
          shortcutFlags: [{ keyword: 'cheese sauce', reason: 'Authentic Zamboanga Alavar sauce derives its richness from pure crab roe (aligue) and fresh coconut cream, not processed cheese.' }],
          sampleOnlineRecipe: 'Quick Baked Crab topped with processed cheese spread and butter.',
          sampleAuthenticRecipe: 'Authentic Zamboanga Curacha in Alavar Sauce: Simmer spanner crab in thick coconut cream (kakang gata), pure crab roe (aligue), pounded garlic, ginger, and native chili.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Curacha sa sarsang Alavar ay nagpapakita ng yaman ng karagatan ng Mindanao.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Curacha at Sarsang Alavar ng Zamboanga',
          abstract: 'Dokumentasyon ng sining ng pagluluto ng Curacha sa gata at aligue.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Paghahalo ng Kakang Gata at Taba ng Talangka (Aligue)',
              hackMethod: 'Processed Cheese Sauce vs. Sarsang Alavar mula sa Aligue at Gata',
              academicCaption: 'Ang kulay at linamnam ng sarsang Alavar ay nagmumula sa tunay na aligue at sariwang gata na hinaluan ng pinaupong bawang at luya.',
              comparisonNote: 'Isang tatak ng lutuing Chavacano sa Zamboanga.',
              imageUrl: IMAGES.tocino,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-10',
    shortTitle: 'Region 10',
    fullName: 'Region 10 - Northern Mindanao',
    subtitle: 'Northern Mindanao (CDO & Bukidnon)',
    islandId: 'mindanao',
    ornamentType: 'mandala',
    summaryBanner:
      'Northern Mindanao brings together coastal Cagayan de Oro and the cool plateaus of Bukidnon, home to Sinuglaw (charcoal-grilled pork belly meets fresh tuna kinilaw with endemic tabon-tabon fruit).',
    dishes: [
      {
        id: 'cdo-sinuglaw',
        name: "Mindanao's Sinuglaw",
        plaqueTitle: 'SINUGLAW',
        regionId: 'region-10',
        regionName: 'Region 10 - Northern Mindanao',
        islandId: 'mindanao',
        province: 'Cagayan de Oro & Misamis Oriental',
        imageUrl: IMAGES.dinakdakan,
        shortTagline: 'Smoky charcoal-grilled pork belly (Sinugba) tossed with fresh tuna cured in coconut vinegar and endemic tabon-tabon fruit (Kinilaw).',
        ucspHistory: {
          anthropologicalContext: 'Combining "Sinugba" (charcoal-grilled pork belly) and "Kinilaw" (raw fish cured in palm vinegar), Sinuglaw is a celebration of Northern Mindanao’s ridge-to-reef geography.',
          culturalEvolution: 'Authentic Mindanao Kinilaw uses squeezed pulp from the endemic tabon-tabon fruit (Hydrophytum orbiculatum) and biasong (wild lime), a tradition dating back over a thousand years to the Butuan balangay archaeological sites.',
          preservationTechnique: 'Organic acid denaturation via coconut tuba vinegar and antimicrobial tabon-tabon extract.',
          materialCulture: 'Grated tabon-tabon kernel squeezed by hand into wooden bowls.',
          socialSignificance: 'Bridges highland farmers and coastal fisherfolk in a single dish.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Sinugba & Kinilaw Components:',
          heirloomIngredients: ['500g fresh yellowfin tuna (malasugue), cubed', '400g charcoal-grilled pork belly (sinugba), chopped', '1/2 cup native coconut vinegar (sukang tuba)', '2 tbsp grated and squeezed tabon-tabon fruit extract'],
          fryingOrSecondaryTitle: 'Aromatics:',
          secondaryIngredients: ['Biasong (Mindanao wild lime) or calamansi, ginger, red onions, cucumber, and siling labuyo'],
          methodSteps: [
            {
              sectionTitle: '1. Cure Tuna & Fold with Hot Sinugba:',
              steps: [
                '1. Wash tuna cubes briefly in vinegar, drain, then toss with fresh coconut vinegar, tabon-tabon extract, ginger, onions, and chilies.',
                '2. Immediately fold in warm, smoky charcoal-grilled pork belly strips and serve.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/sinuglaw-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['tabon-tabon', 'tuna', 'sinugba', 'kinilaw', 'coconut vinegar', 'ginger', 'biasong'],
          shortcutFlags: [{ keyword: 'glacial acetic acid', reason: 'Synthetic white vinegar burns the fish flesh instead of gently curing it like native coconut tuba vinegar and tabon-tabon.' }],
          sampleOnlineRecipe: 'Quick Kinilaw using synthetic white vinegar and mayonnaise.',
          sampleAuthenticRecipe: 'Authentic Northern Mindanao Sinuglaw: Cure fresh tuna cubes in coconut tuba vinegar, grated tabon-tabon fruit extract, biasong, ginger, and chilies, then toss with smoky charcoal-grilled pork belly (sinugba).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang tabon-tabon sa Kinilaw ng Mindanao ay isang libong taong pamana mula pa sa panahon ng mga balangay sa Butuan.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Tabon-Tabon at Biasong sa Sinuglaw ng Hilagang Mindanao',
          abstract: 'Pag-aaral sa katutubong sangkap ng Kinilaw at Sinuglaw sa Mindanao.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagkayod ng Bunga ng Tabon-Tabon',
              hackMethod: 'Synthetic White Vinegar vs. Sukang Tuba at Katas ng Tabon-Tabon',
              academicCaption: 'Inaalis ng katas ng tabon-tabon ang lansa ng sariwang isda habang pinananatili ang lambot nito kasama ng inihaw na liempo.',
              comparisonNote: 'Natagpuan ang mga buto ng tabon-tabon sa mga arkeolohikal na hukay sa Mindanao.',
              imageUrl: IMAGES.dinakdakan,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-11',
    shortTitle: 'Region 11',
    fullName: 'Region 11 - Davao Region',
    subtitle: 'Davao Region (Kadayawan)',
    islandId: 'mindanao',
    ornamentType: 'mask',
    summaryBanner:
      'Framed by Mount Apo and the Davao Gulf, Region 11 honors eleven ethnolinguistic tribes and abundant marine and orchard harvests, famed for Sinabawang Balbakwa and Charcoal-Grilled Tuna Panga.',
    dishes: [
      {
        id: 'davao-balbakwa',
        name: "Davao's Heirloom Balbakwa",
        plaqueTitle: 'BALBAKWA',
        regionId: 'region-11',
        regionName: 'Region 11 - Davao Region',
        islandId: 'mindanao',
        province: 'Davao del Sur & Davao City',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Rich collagen stew slow-simmered for hours with ginger, lemongrass, salted black beans, and toasted aromatics.',
        ucspHistory: {
          anthropologicalContext: 'Popular across Davao and Visayan-settled Mindanao market stalls (painitan), Balbakwa transforms tough collagen-rich cuts into a silky, deeply aromatic broth.',
          culturalEvolution: 'Simmered patiently for 5 to 6 hours with bruised lemongrass, ginger, star anise, and salted black beans.',
          preservationTechnique: 'Extended thermal gelatinization.',
          materialCulture: 'Simmered overnight in wood-fired kawa cauldrons.',
          socialSignificance: 'A beloved morning sustento for market vendors, farmers, and travelers.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Slow-Simmer Ingredients:',
          heirloomIngredients: ['1.5 kg beef oxtail, skin, and tendon', '3 stalks lemongrass (tanglad) & 2 thumbs ginger', '2 tbsp salted black beans (tausi) & annatto oil'],
          fryingOrSecondaryTitle: 'Garnish:',
          secondaryIngredients: ['Chopped scallions, fried garlic, calamansi, and crushed chilies'],
          methodSteps: [
            {
              sectionTitle: '1. Parboil and Slow-Braise for 5 Hours:',
              steps: [
                '1. Blanch cuts with ginger and lemongrass, then rinse.',
                '2. Slow-simmer in a heavy pot with garlic, onions, tausi, and atsuete oil for 4–5 hours until gelatinous and velvety.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/balbakwa-recipe/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['oxtail', 'tendon', 'lemongrass', 'tanglad', 'ginger', 'tausi', 'slow-simmer'],
          shortcutFlags: [{ keyword: 'cornstarch slurry', reason: 'Authentic Balbakwa gets its velvety thickness naturally from slow-rendered collagen, never cornstarch.' }],
          sampleOnlineRecipe: '30-Minute Balbakwa thickened with 3 tablespoons of cornstarch slurry.',
          sampleAuthenticRecipe: 'Authentic Davao Balbakwa slow-simmered for 5 hours with beef oxtail and tendon, lemongrass (tanglad), ginger, tausi, and golden atsuete until naturally gelatinous.',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Balbakwa ay patunay na ang tiyaga sa mabagal na apoy ay nakagagawa ng yaman mula sa payak na sangkap.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Limang Oras na Pagpapakulo ng Balbakwa sa Davao',
          abstract: 'Pagsusuri sa natural na collagen laban sa artipisyal na pampalapot.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Natural na Lapot Mula sa Matagal na Pagpapakulo',
              hackMethod: 'Cornstarch Slurry vs. Natural na Collagen Extraction',
              academicCaption: 'Sa mga painitan ng Davao, limang oras na pinakukuluan sa mahinang apoy ang Balbakwa kasama ng tanglad at luya.',
              comparisonNote: 'Hindi malabnaw at hindi rin artipisyal ang lapot.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },

  {
    id: 'region-barmm',
    shortTitle: 'BARMM / XII',
    fullName: 'BARMM & Region 12 (Bangsamoro & SOCCSKSARGEN)',
    subtitle: 'Lanao, Maguindanao & Cotabato',
    islandId: 'mindanao',
    ornamentType: 'pinwheels',
    summaryBanner:
      'Home to Maranao and Maguindanaon royal culinary traditions, centered around Palapa (pounded sakurab scallions, ginger, turmeric, and chili), toasted coconut (tiyahu), and slow-cooked halal festive dishes.',
    dishes: [
      {
        id: 'maranao-beef-rendang',
        name: "Maranao Beef Rendang",
        plaqueTitle: 'BEEF RENDANG',
        regionId: 'region-barmm',
        regionName: 'BARMM & Region 12',
        islandId: 'mindanao',
        province: 'Lanao del Sur (Marawi)',
        imageUrl: IMAGES.lunis,
        shortTagline: 'Slow-caramelized beef in coconut milk, native palapa (sakurab), fresh turmeric (kalawag), and toasted coconut.',
        ucspHistory: {
          anthropologicalContext: 'Rooted in the ancient maritime spice networks linking Lake Lanao with the Malay archipelago, Maranao Beef Rendang is a sacred festive dish of the Bangsamoro people.',
          culturalEvolution: 'Distinctly Maranao through its foundation of Palapa—pounded native white scallions (sakurab), ginger, chili, and fresh turmeric (kalawag)—plus toasted grated coconut (tiyahu) pounded in a wooden lusong.',
          preservationTechnique: 'Caramelizing coconut cream into coconut oil (rendang) preserves the spiced beef for weeks.',
          materialCulture: 'Prepared using a traditional wooden mortar (lusong) and served under colorful royal tutup food covers.',
          socialSignificance: 'Served during Eid feasts, royal enthronements, and Kanduli thanksgiving banquets.',
        },
        milVerification: {
          boilingAndCuringTitle: 'Maranao Spice Paste (Palapa & Kalawag):',
          heirloomIngredients: ['1 kg halal beef brisket or chuck, cut into cubes', '1 cup Maranao Palapa (pounded sakurab scallions, ginger, labuyo)', '2 tbsp freshly grated turmeric (kalawag / luyang dilaw)', '1 cup toasted grated coconut (tiyahu), pounded until oily'],
          fryingOrSecondaryTitle: 'Coconut Milk & Cane Sugar:',
          secondaryIngredients: ['3 cups fresh coconut milk (gata), lemongrass, and 2 tbsp raw muscovado'],
          methodSteps: [
            {
              sectionTitle: '1. Pound Palapa & Slow-Caramelize in Gata:',
              steps: [
                '1. Sear beef cubes with pounded palapa, fresh turmeric (kalawag), and lemongrass.',
                '2. Pour in fresh coconut milk and pounded toasted coconut (tiyahu); simmer on low heat for 2–3 hours until the coconut milk separates into aromatic oil and coats the dark, tender beef.',
              ],
            },
          ],
          sources: ['https://panlasangpinoy.com/beef-rendang/'],
          verifiedTutorials: DEFAULT_VERIFIED_TUTORIALS,
          authenticKeywords: ['palapa', 'sakurab', 'turmeric', 'kalawag', 'luyang dilaw', 'coconut', 'gata', 'lemongrass'],
          shortcutFlags: [{ keyword: 'commercial curry powder', reason: 'Authentic Maranao Rendang relies on native Palapa (sakurab scallions, ginger, chili), fresh kalawag (turmeric), and toasted coconut—not generic yellow curry powder.' }],
          sampleOnlineRecipe: 'Quick Beef Rendang using 2 tbsp commercial yellow curry powder and evaporated milk.',
          sampleAuthenticRecipe: 'Authentic Maranao Beef Rendang: Slow-cook halal beef cubes in fresh coconut milk (gata) with Maranao palapa (sakurab scallions, ginger, chili), fresh turmeric (kalawag / luyang dilaw), lemongrass, and pounded toasted coconut (tiyahu).',
        },
        philosophyPrompt: {
          question: 'Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan laban sa mga komersyal na trend?',
          englishTranslation: 'Why is it essential to safeguard the original taste of our homeland against commercialized culinary trends?',
          philosophicalLens: 'Ang Palapa ng mga Maranao ay kaluluwa ng kanilang kusina at simbolo ng pagkakakilanlan sa Bangsamoro.',
        },
        fplLarawangSanaysay: {
          essayTitle: 'Larawang-Sanaysay: Ang Palapa at Kalawag sa Pamanang Rendang ng Maranao',
          abstract: 'Pagsusuri sa katutubong sangkap na sakurab at luyang dilaw (kalawag) sa Lanao del Sur.',
          steps: [
            {
              stepNumber: 1,
              tagalogTitle: 'Unang Hakbang: Ang Pagbabayo ng Sakurab, Luya, at Kalawag (Palapa)',
              hackMethod: 'Commercial Curry Powder vs. Binayong Palapa at Sinangag na Niyog',
              academicCaption: 'Hindi ganap ang lutuing Maranao kung wala ang Palapa na gawa sa katutubong sakurab mula sa Lanao.',
              comparisonNote: 'Ipinapakita nito ang lalim ng pamanang pampalasa sa Mindanao.',
              imageUrl: IMAGES.lunis,
            },
          ],
        },
      },
    ],
  },
];

export const ALL_DISHES: DishData[] = REGIONS_DATA.flatMap((r) => r.dishes);

export const MAP_REGIONS: MapRegionInfo[] = [
  {
    id: 'region-1',
    name: 'Region 1 - Ilocos Region',
    islandId: 'luzon',
    capitalOrHub: 'Vigan City & San Fernando',
    tagline: 'Land of Garlic, Sea Salt, and Crispy Heirloom Traditions',
    coordinates: { x: 38, y: 16 },
    keyIngredients: ['Sukang Iloko', 'Bagoong Monamon', 'Native Garlic', 'Ampalaya', 'Pork Liempo'],
    cookingTechniques: ['Sangkutsa (parboiling & salting)', 'Double deep-frying', 'Clay pot shaking (Banga)'],
    representativeDishes: ["Iloco's Bagnet", "Iloco's Pakbet", 'La Union Dinakdakan'],
  },
  {
    id: 'region-2',
    name: 'Region 2 - Cagayan Valley',
    islandId: 'luzon',
    capitalOrHub: 'Tuguegarao & Basco (Batanes)',
    tagline: 'Heartland of Rich Broths, Miki Noodles, and Ivatan Preserves',
    coordinates: { x: 54, y: 19 },
    keyIngredients: ['Native Miki Noodles', 'Carabao Meat', 'Fresh Clams', 'Atsuete Oil', 'Sea Salt'],
    cookingTechniques: ['Lunis slow-braising in lard', 'Wok-stirring miki noodles', 'Annatto broth simmering'],
    representativeDishes: ['Batanes Luñis', 'Pancit Cabagan', 'Tuguegarao Sinanta', 'Tuguegarao Batil Patong'],
  },
  {
    id: 'region-3',
    name: 'Region 3 - Central Luzon',
    islandId: 'luzon',
    capitalOrHub: 'Angeles City & San Fernando (Pampanga)',
    tagline: 'Culinary Capital of the Philippines & Rich Agricultural Plains',
    coordinates: { x: 44, y: 35 },
    keyIngredients: ['Grilled Pork Cheeks & Liver', 'Calamansi', 'Native Sili', 'Sticky Rice', 'Coconut Latik'],
    cookingTechniques: ['Charcoal-grilling & fine-mincing', 'Sizzling plate assembly', 'Slow steaming in banana leaves'],
    representativeDishes: ["Pampanga's Sisig", "Nueva Ecija's Kakanin", "Pampanga's Tocino"],
  },
  {
    id: 'region-4',
    name: 'Region 4-A - CALABARZON',
    islandId: 'luzon',
    capitalOrHub: 'Batangas City & Lucena',
    tagline: 'Land of Rich Bone Marrow Broths and Leaf-Rolled Noodles',
    coordinates: { x: 46, y: 45 },
    keyIngredients: ['Beef Shank & Bone Marrow', 'Pechay', 'Sweet Corn', 'Miki Seco', 'Sukang Pasa'],
    cookingTechniques: ['Hours-long slow stock simmering', 'Banana-leaf plate eating (Habhab)'],
    representativeDishes: ['Batangas Bulalo', 'Quezon Pancit Habhab'],
  },
  {
    id: 'region-6',
    name: 'Region 6 - Western Visayas',
    islandId: 'visayas',
    capitalOrHub: 'Iloilo City & Bacolod',
    tagline: 'Sugar Capital, Souring Broths, and Open-Flame Inasal Grills',
    coordinates: { x: 42, y: 58 },
    keyIngredients: ['Batwan Souring Fruit', 'Achuete Oil', 'Pork & Beef Broth', 'Native Chicken', 'Sinamak Vinegar'],
    cookingTechniques: ['Batwan-soured broth simmering', 'Annatto-marinated bamboo skewer grilling'],
    representativeDishes: ['Iloilo KBL (Kadyos, Baboy, Langka)', 'Bacolod Chicken Inasal'],
  },
  {
    id: 'region-7',
    name: 'Region 7 - Central Visayas',
    islandId: 'visayas',
    capitalOrHub: 'Cebu City & Tagbilaran',
    tagline: 'Golden Crispy Lechon and Coastal Kinilaw Traditions',
    coordinates: { x: 57, y: 64 },
    keyIngredients: ['Whole Native Pig', 'Lemongrass (Tanglad)', 'Spring Onions', 'Fresh Fish', 'Coconut Vinegar'],
    cookingTechniques: ['Whole pig charcoal-pit roasting', 'Acid-curing raw fish (Kinilaw)'],
    representativeDishes: ['Cebu Lechon Belly', 'Bohol Kinilaw'],
  },
  {
    id: 'region-8',
    name: 'Region 8 - Eastern Visayas',
    islandId: 'visayas',
    capitalOrHub: 'Tacloban City',
    tagline: 'Coconut-Rich Coastal Dishes and Festive Sticky Rice Delicacies',
    coordinates: { x: 72, y: 55 },
    keyIngredients: ['Fresh Coconut Milk (Gata)', 'Native Taro Leaves', 'Smoked Fish', 'Glutinous Rice'],
    cookingTechniques: ['Slow gata reduction', 'Wrapping in woven wani leaves'],
    representativeDishes: ['Leyte Binagol', 'Samar Kulao'],
  },
  {
    id: 'region-nir',
    name: 'NIR - Negros Island Region',
    islandId: 'visayas',
    capitalOrHub: 'Dumaguete & Bacolod',
    tagline: 'Bustling Coastal Ports, Sugarcane Estates, and Silvanas Pastries',
    coordinates: { x: 47, y: 65 },
    keyIngredients: ['Muscovado Sugar', 'Lemongrass', 'Achuete Marinade', 'Buttercream'],
    cookingTechniques: ['Cast-iron charcoal grilling', 'Slow caramelization'],
    representativeDishes: ['Negros Inasal', 'Dumaguete Silvanas'],
  },
  {
    id: 'region-9',
    name: 'Region 9 - Zamboanga Peninsula',
    islandId: 'mindanao',
    capitalOrHub: 'Zamboanga City',
    tagline: 'Chavacano Heritage, Alavar Sauces, and Vibrant Maritime Trade',
    coordinates: { x: 34, y: 76 },
    keyIngredients: ['Curacha Crab', 'Alavar Sauce (Coconut, Chili, Spices)', 'Turmeric'],
    cookingTechniques: ['Alavar sauce braising', 'Spiced seafood poaching'],
    representativeDishes: ['Curacha with Alavar Sauce', 'Zamboanga Knickerbocker'],
  },
  {
    id: 'region-10',
    name: 'Region 10 - Northern Mindanao',
    islandId: 'mindanao',
    capitalOrHub: 'Cagayan de Oro & Malaybalay',
    tagline: 'Highland Pineapples, River Catfish, and Roasted Native Coffee',
    coordinates: { x: 55, y: 75 },
    keyIngredients: ['Bukidnon Beef', 'Highland Coffee', 'Sweet Corn', 'Native Spices'],
    cookingTechniques: ['Slow pot roasting', 'Open fire grilling'],
    representativeDishes: ['Bukidnon Roast Beef', 'CDO Sinuglaw'],
  },
  {
    id: 'region-11',
    name: 'Region 11 - Davao Region',
    islandId: 'mindanao',
    capitalOrHub: 'Davao City',
    tagline: 'Durian Orchards, Yellowfin Tuna, and Agro-Forestry Bounty',
    coordinates: { x: 67, y: 84 },
    keyIngredients: ['Yellowfin Tuna Collar & Belly', 'Calamansi & Soy Marinade', 'Durian Fruit'],
    cookingTechniques: ['High-heat charcoal grilling', 'Fresh fruit preserving'],
    representativeDishes: ['Davao Grilled Tuna Panga', 'Durian Pie'],
  },
  {
    id: 'region-barmm',
    name: 'BARMM - Bangsamoro Region',
    islandId: 'mindanao',
    capitalOrHub: 'Cotabato City & Marawi',
    tagline: 'Aromatic Palapa Spice Pastes and Royal Kulinarya Traditions',
    coordinates: { x: 48, y: 82 },
    keyIngredients: ['Sakurab (Native Scallions)', 'Kalawag (Fresh Turmeric)', 'Tiyahu (Burnt Coconut)', 'Beef Rendang Spices'],
    cookingTechniques: ['Palapa pound-and-sauté', 'Tiyahu blackened coconut braising'],
    representativeDishes: ['Beef Rendang ng Bangsamoro', 'Maranao Tihiyap', 'Palapa Sauté'],
  },
];

// Pre-seeded Paborito IDs featuring the curriculum dishes requested by the user
export const INITIAL_FAVORITE_IDS: string[] = [
  'ilocos-bagnet',
  'ilocos-pakbet',
  'la-union-dinakdakan',
  'batanes-lunis',
  'isabela-pancit-cabagan',
  'tuguegarao-sinanta',
  'pampanga-sisig',
  'nueva-ecija-kakanin',
];

export const INITIAL_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-1',
    dishId: 'ilocos-bagnet',
    dishName: "Iloco's Bagnet",
    regionName: 'Region 1 - Ilocos Region',
    familyVariation:
      'Sa aming pamilya sa Vigan, pinakukuluan muna ni Lola ang liempo sa tubig-ulan na may asin-baybay, buong bawang na may balat, at dahon ng bayabas bago isabit sa kusina nang magdamag.',
    culturalReflection:
      'Mahalagang ingatan ang orihinal na proseso ng sangkutsa at dalawahang pagpiprito dahil itinuturo nito ang pagtitiyaga at pagpapahalaga sa biyaya ng lupa at alagang hayop.',
    createdAt: 'Oktubre 2026 · SHS Grade 12 - Stem/Humss',
  },
  {
    id: 'entry-2',
    dishId: 'ilocos-pakbet',
    dishName: "Iloco's Pakbet",
    regionName: 'Region 1 - Ilocos Region',
    familyVariation:
      'Hindi kami gumagamit ng sandok sa paghahalo; kinakalog lamang ang palayok (banga) na may bagoong monamon at lasona upang manatiling buo ang maliliit na ampalaya.',
    culturalReflection:
      'Ang likas na pait at alat ng Pakbet ay sumasalamin sa katatagan ng aming komunidad laban sa mabilisang komersyalisasyon ng lasa.',
    createdAt: 'Oktubre 2026 · Aking Tala ng Pamana',
  },
];

export interface DishReview {
  id: string;
  dishId: string;
  userId?: string;
  userDisplayName: string;
  rating: number;
  reviewText: string;
  createdAt: string;
}

export interface RecipeSubmission {
  id: string;
  userId: string;
  userDisplayName: string;
  recipeName: string;
  regionName: string;
  province: string;
  ingredients: string[];
  instructions: string[];
  cookingTimeMinutes: number;
  servingSize: string;
  culturalNotes: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export const INITIAL_REVIEWS: DishReview[] = [
  {
    id: 'rev-1',
    dishId: 'ilocos-bagnet',
    userId: 'user-heirloom-1',
    userDisplayName: 'Maria Santos (Vigan)',
    rating: 5,
    reviewText:
      'The authentic sangkutsa boiling with Sukang Iloko and bagoong monamon dip is unmatched! Boiling it with native garlic and air-drying overnight makes the blistered rind crackle perfectly.',
    createdAt: 'Oktubre 8, 2026',
  },
  {
    id: 'rev-2',
    dishId: 'pampanga-sisig',
    userId: 'user-heirloom-2',
    userDisplayName: 'Chef Roberto (Angeles City)',
    rating: 5,
    reviewText:
      'True Kapampangan Sisig does not need mayonnaise or egg. The roasted chicken liver and freshly squeezed calamansi give it the authentic 1970s Aling Lucing flavor balance!',
    createdAt: 'Oktubre 9, 2026',
  },
  {
    id: 'rev-3',
    dishId: 'isabela-pancit-cabagan',
    userId: 'user-heirloom-3',
    userDisplayName: 'Elena Ramos (Cabagan)',
    rating: 5,
    reviewText:
      'Sia Liang’s fresh miki recipe cooked in beef broth with lechon carajay and quail eggs is comfort food at its finest. The clinging sauce is the secret!',
    createdAt: 'Oktubre 10, 2026',
  },
];

export const INITIAL_RECIPE_SUBMISSIONS: RecipeSubmission[] = [
  {
    id: 'sub-1',
    userId: 'user-sub-1',
    userDisplayName: 'Lola Remedios',
    recipeName: 'Pancit Marilao (Bulacan Rice Noodle Heirloom)',
    regionName: 'Region 3 - Central Luzon',
    province: 'Bulacan',
    ingredients: [
      '500g freshly extruded rice bihon',
      'Crispy lechon rind and minced pork',
      'Pounded toasted pinipig (pounded young green rice)',
      'Shrimp head broth with atsuete oil',
      'Sliced hard-boiled eggs and kamias (bilimbi) slices',
    ],
    instructions: [
      'Sauté garlic and shallots in red atsuete oil.',
      'Pour rich shrimp head broth and simmer until boiling.',
      'Toss fresh bihon noodles until sauce clings evenly.',
      'Garnish generously with toasted pinipig, crispy lechon, and fresh sour kamias slices.',
    ],
    cookingTimeMinutes: 40,
    servingSize: '6 servings',
    culturalNotes:
      'Heirloom fiesta noodle dish from Marilao, Bulacan celebrated for using toasted crispy pinipig as a crunchy native topping.',
    status: 'approved',
    createdAt: 'Oktubre 7, 2026',
  },
  {
    id: 'sub-2',
    userId: 'user-sub-2',
    userDisplayName: 'Guro Alcantara',
    recipeName: 'Sinanglaw ng Ilocos Sur',
    regionName: 'Region 1 - Ilocos Region',
    province: 'Ilocos Sur',
    ingredients: [
      '500g beef brisket and beef tendon',
      '100g beef tripe, cleaned and sliced',
      '1/4 cup kamias or native vinegar (Sukang Iloko)',
      '2 tbsp native ginger (laya), julienned',
      'Whole native chili peppers (siling labuyo)',
      'A drop of native bile (papait) to taste',
    ],
    instructions: [
      'Slow-boil beef brisket and tendon with crushed ginger until gelatinous and tender.',
      'Add sliced tripe, siling labuyo, and native vinegar.',
      'Season with rock salt and a gentle touch of native bile for authentic Ilocano bitter-sour depth.',
      'Serve piping hot on cold mornings.',
    ],
    cookingTimeMinutes: 75,
    servingSize: '4-6 servings',
    culturalNotes:
      'Traditional early morning market breakfast dish among northern livestock traders in Vigan and Candon.',
    status: 'pending',
    createdAt: 'Oktubre 9, 2026',
  },
];

