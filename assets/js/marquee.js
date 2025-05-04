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
    "I SAW A SAVIOR, A SAVIOR COME MY WAY 嘗見救者至兮, I THOUGHT I'D SEE IT AT THE COLD LIGHT OF DAY 意謂白日可鑒, BUT NOW I REALIZE THAT I'M ONLY FOR ME 而今方悟，吾唯顧己. IF ONLY I COULD SEE YOU TURN MYSELF TO ME 願得返觀我身, AND RECOGNIZE THE POISON IN MY HEART 且識心中之蠱毒. THERE IS NO OTHER PLACE 四顧無地, NO ONE ELSE I FACE 孑然獨立, NO REMEDY WILL AGREE WITH HOW I FEEL 縱有靈藥，莫契我情. HERE IN MY REFLECTING, WHAT MORE CAN I SAY? 撫心內省，復有何言？ FOR I AM GUILTY FOR THE VOICE THAT I OBEY 蓋吾有罪，屈從心欲, TOO SCARED TO SACRIFICE A CHOICE CHOSEN FOR ME 惶恐而不敢捨天與之途. IF ONLY I COULD SEE YOU TURN MYSELF TO ME 願得返觀我身, AND RECOGNIZE THE POISON IN MY HEART 且識心中之蠱毒. THERE IS NO OTHER PLACE 四顧無地, NO ONE ELSE I FACE 孑然獨立. NO REMEDY TO AGREE WITH HOW I FEEL 縱有靈藥，莫契我情.",
    "POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中     POWER IN MISERY TRAVERSING THE GRID OF DEATH     威生於厄，涉死網中",
    "MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!",
    "NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!",
    "I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦     I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART     解放巴勒斯坦",
    "つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて    つけまつけま つけまつける ぱちぱち つけまつけて",
    "CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 CONSUME 抏 ",
    "YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.   YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.   YOU HAVE REACHED A PUPPY 4 PUPPY ZONE. ALL CATS ARE BEAUTIFUL. ALL PIGS DIE.",
    "WELCOME TO MY ISLAND 蒞吾嶼 SEE THE PALM TREES WAVE IN THE WIND 觀棕櫚兮風中搖 WELCOME TO MY ISLAND 蒞吾嶼 HOPE YOU LIKE ME, YOU AIN'T LEAVIN' 願君悅我，無由離此   WELCOME TO MY ISLAND 蒞吾嶼 SEE THE PALM TREES WAVE IN THE WIND 觀棕櫚兮風中搖 WELCOME TO MY ISLAND 蒞吾嶼 HOPE YOU LIKE ME, YOU AIN'T LEAVIN' 願君悅我，無由離此",
    "나는 빠리의 택시운전사다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 운전사 나는 빠리의 택시운전사다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 운전사 나는 빠리의 택시운전사다 어쩌고저쩌고 어쩌고저쩌고 어쩌고저쩌고 빠리의 택시 운전사",
    "好きよ好きやよ好きやよ好きよあなたの事が大好きよなんでこんな事になってしもてたんやろ 朝、ひらく、私は、夜、育つ。枯渇した、脳を構築していく。ずるずるといっつまでも、私は、凡庸、凡庸、茫洋です。",
    "YEAH, I JUST POPPED A BEAN, WATCH MY EYES GROW 噫，吾方吞靈丹，觀我目張 SIPPIN' HELLA LEAN, SMOKIN' HYDRO (YUH) 飲瓊漿兮復吸嘉禾 WHEN I HIT THE REEF, TURN IT TIDAL 及吾觸礁石，波濤頓起 GARY IS MY SHADOW, BITCH, HE GO WHEREVER I GO 加里隨我影，彼從吾所之 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW 喵，喵，喵 HA, GARY HIT 'EM WITH THE 哈，加里擊之以 MEOW, MEOW, MEOW (OOH, AHHH) 喵，喵，喵 (嗚，啊)"
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