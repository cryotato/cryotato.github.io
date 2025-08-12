// --- Seamless Random Marquee Text (JavaScript Animation) ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeContainer = document.querySelector('.masthead__marquee');
  const marqueeContent = document.querySelector('.seamless-marquee__content');
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');

  if (!marqueeContainer || !marqueeContent || !marqueeText1 || !marqueeText2) {
    console.error("Marquee elements not found!");
    return; // Exit if elements are missing
  }

  const marqueeMessages = [
    // "I SAW A SAVIOR, A SAVIOR COME MY WAY 嘗見救者至兮, I THOUGHT I'D SEE IT AT THE COLD LIGHT OF DAY 意謂白日可鑒, BUT NOW I REALIZE THAT I'M ONLY FOR ME 而今方悟，吾唯顧己. IF ONLY I COULD SEE YOU TURN MYSELF TO ME 願得返觀我身, AND RECOGNIZE THE POISON IN MY HEART 且識心中之蠱毒. THERE IS NO OTHER PLACE 四顧無地, NO ONE ELSE I FACE 孑然獨立, NO REMEDY WILL AGREE WITH HOW I FEEL 縱有靈藥，莫契我情. HERE IN MY REFLECTING, WHAT MORE CAN I SAY? 撫心內省，復有何言？ FOR I AM GUILTY FOR THE VOICE THAT I OBEY 蓋吾有罪，屈從心欲, TOO SCARED TO SACRIFICE A CHOICE CHOSEN FOR ME 惶恐而不敢捨天與之途. IF ONLY I COULD SEE YOU TURN MYSELF TO ME 願得返觀我身, AND RECOGNIZE THE POISON IN MY HEART 且識心中之蠱毒. THERE IS NO OTHER PLACE 四顧無地, NO ONE ELSE I FACE 孑然獨立. NO REMEDY TO AGREE WITH HOW I FEEL 縱有靈藥，莫契我情.",
    "POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中",
    // "NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!",
    // "I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦",
    "付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて 付け睫毛付け睫毛 付け睫毛付ける ぱちぱち 付け睫毛付けて ",
    "CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 ",
    // "YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.   YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.   YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.   YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.",
    "WELCOME TO MY ISLAND 蒞吾嶼 SEE THE PALM TREES WAVE IN THE WIND 觀棕櫚兮風中搖 WELCOME TO MY ISLAND 蒞吾嶼 HOPE YOU LIKE ME, YOU AIN'T LEAVIN' 願君悅我，無由離此   WELCOME TO MY ISLAND 蒞吾嶼 SEE THE PALM TREES WAVE IN THE WIND 觀棕櫚兮風中搖 WELCOME TO MY ISLAND 蒞吾嶼 HOPE YOU LIKE ME, YOU AIN'T LEAVIN' 願君悅我，無由離此",
    // "나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士 나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士 나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士 나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士 나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士 나는 빠리의 택시運轉士다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 運轉士",
    "好きよ好きやよ好きやよ好きよ貴方之事が大好きよ何で此んな事に成って仕舞って居たのやろ 朝、開く、私は、夜、育つ。枯渇為た、脳を構築為て行く。ずるずると何時迄も、私は、凡庸、凡庸、茫洋で有る。好きよ好きやよ好きやよ好きよ貴方之事が大好きよ何で此んな事に成って仕舞って居たのやろ 朝、開く、私は、夜、育つ。枯渇為た、脳を構築為て行く。ずるずると何時迄も、私は、凡庸、凡庸、茫洋で有る。",
    // "YEAH, I JUST POPPED A BEAN, WATCH MY EYES GROW 噫，吾方吞靈丹，觀我目張 SIPPIN' HELLA LEAN, SMOKIN' HYDRO (YUH) 飲瓊漿兮復吸嘉禾 WHEN I HIT THE REEF, TURN IT TIDAL 及吾觸礁石，波濤頓起 GARY IS MY SHADOW, BITCH, HE GO WHEREVER I GO 加里隨我影，彼從吾所之 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW (OOH, AHHH) 喵，喵，喵 (嗚，啊)",
    "¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫¸¸♬·¯·♩¸¸♪·¯·♫¸¸¸♬·¯·♩¸¸♪·¯·♫",
    "왜 깼는지 머리맡 톱니바퀴 깨졌는지 안개밟고… 어두워도 희미해도 검은 막 뒤 가려진 天地 손을 건넬지? 오 안개밟고 안개밟고 해는 뜨고 흘러 떠내려가 썰물이 빠져나가듯 묽혀진 記憶 밤길을 向해 떠내려 보내 호젓함 오 호젓함, 느낄 수 있니? 이것조차 희미하니? 왜 깼는지 머리맡 톱니바퀴 깨졌는지 안개밟고… 어두워도 희미해도 검은 막 뒤 가려진 天地 손을 건넬지? 오 안개밟고 안개밟고 해는 뜨고 흘러 떠내려가 썰물이 빠져나가듯 묽혀진 記憶 밤길을 向해 떠내려 보내 호젓함 오 호젓함, 느낄 수 있니? 이것조차 희미하니?",
    "OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂 OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂 OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂 OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂 OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂 OVXX ON BANDCAMP, NOW 100% OFF!! 可免費下載の音樂",
    // "无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁 无产阶级文化大革命万岁",
    "YOU ARE NOT HELPLESS YOU ARE NOT MENTALLY ILL YOU ARE INJURED YOU ARE NOT HELPLESS YOU ARE NOT MENTALLY ILL YOU ARE INJURED YOU ARE NOT HELPLESS YOU ARE NOT MENTALLY ILL YOU ARE INJURED YOU ARE NOT HELPLESS YOU ARE NOT MENTALLY ILL YOU ARE INJURED YOU ARE NOT HELPLESS YOU ARE NOT MENTALLY ILL YOU ARE INJURED",
    "BE STRONG BE HARD RESIST TEMPTATION STICK YOUR HAND IN YOUR EYE CLOSE YOUR FIST RESIST WALK ON THIS LINE LOOK STRAIGHT AHEAD FLEX YOUR MUSCLES FLEX YOUR MUSCLES UUYUGHH FLEX YOUR MUSCLES FLEX YOUR MUSCLES BE HARD BE STRONG BE HARD BE HARD HARD HARD AAND COME BACK FOR MORE UUUCOME BACK COME BACK FLEX YOUR MUSCLES",
    "我는 我가 見고 싶은 君 貌을 見았네 其이 決코 君가 非임을 知지 못한 채 我는 我가 見고 싶은 君 貌을 見았네 其이 決코 君가 非임을 知지 못한 채 我는 汝를 愛했었나 我는 我를 愛했었나 此이 多 何 所用인가 結局 多 하는 虛言 我等은 相互를 欺고 生活하는 人 我等은 相互를 欺고 愛하는 人 我等은 相互를 欺고 生活하는 人 我等은 相互를 欺고 愛하는 人"
  ];

  // --- Configuration ---
  const pixelsPerSecond = 30; // Adjust speed here

  // --- State Variables ---
  let currentPosition = 0;
  let lastTimestamp = 0;
  let animationFrameId = null;
  let isPaused = false;
  let spanWidth = 0; // To store the width of one text span

  // --- Setup ---
  function setupMarquee() {
    // Pick random message
    const randomIndex = Math.floor(Math.random() * marqueeMessages.length);
    const randomMessage = marqueeMessages[randomIndex] + "\u00A0\u00A0\u00A0"; // Add spacing

    // Set text for both spans
    marqueeText1.textContent = randomMessage;
    marqueeText2.textContent = randomMessage;

    // Ensure styles are applied and get width *after* text is set
    // Use setTimeout to allow browser rendering time
    setTimeout(() => {
        spanWidth = marqueeText1.offsetWidth;
        if (spanWidth === 0) {
            console.error("Could not measure marquee span width. Animation might not work correctly.");
            // Optionally try again or set a default width?
            return;
        }
        // Reset position and start animation
        currentPosition = 0;
        marqueeContent.style.transform = `translateX(${currentPosition}px)`;
        lastTimestamp = performance.now(); // Use high-resolution timer
        startAnimation();
    }, 0);
  }

  // --- Animation Loop ---
  function animate(timestamp) {
    if (isPaused || spanWidth === 0) {
      animationFrameId = null; // Stop requesting frames if paused or width unknown
      return;
    }

    const deltaTime = (timestamp - lastTimestamp) / 1000; // Time elapsed in seconds
    lastTimestamp = timestamp;

    // Calculate movement
    const moveDistance = pixelsPerSecond * deltaTime;
    currentPosition -= moveDistance;

    // Check if the first span is completely off-screen
    // We check if the negative currentPosition exceeds the spanWidth
    if (currentPosition <= -spanWidth) {
      // Reset position by adding the width of one span
      // This makes the start of the second span appear exactly where the first one started
      currentPosition += spanWidth;
    }

    // Apply the new position
    marqueeContent.style.transform = `translateX(${currentPosition}px)`;

    // Request the next frame
    animationFrameId = requestAnimationFrame(animate);
  }

  // --- Control Functions ---
  function startAnimation() {
    if (!animationFrameId && !isPaused) { // Only start if not already running and not paused
        lastTimestamp = performance.now(); // Reset timestamp when resuming
        animationFrameId = requestAnimationFrame(animate);
    }
  }

  function pauseAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // --- Event Listeners ---
  marqueeContainer.addEventListener('mouseenter', () => {
    isPaused = true;
    pauseAnimation();
  });

  marqueeContainer.addEventListener('mouseleave', () => {
    isPaused = false;
    startAnimation(); // Restart animation loop
  });

  // --- Initial Setup ---
  setupMarquee();

});

// FILTH LYRISCS WOULD BE FUNNY