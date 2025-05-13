document.addEventListener('DOMContentLoaded', function() {
  const avatarData = [
    { originalSrc: '/assets/images/my_avatars/20230111_181329.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20230111_181329.jpg', caption: '20230111 181329' },
    { originalSrc: '/assets/images/my_avatars/20230201_185356.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20230201_185356.jpg', caption: '20230201 185356' },
    { originalSrc: '/assets/images/my_avatars/20230420_195842.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20230420_195842.jpg', caption: '20230420 195842' },
    // { src: '/assets/images/my_avatars/20230921_134513.jpg', caption: '20230921 134513' },
    // { src: '/assets/images/my_avatars/20231030_162006.jpg', caption: '20231030 162006' },
    { originalSrc: '/assets/images/my_avatars/20240421_185551.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20240421_185551.jpg', caption: '20240421 185551' },
    // { src: '/assets/images/my_avatars/20240701_152745.jpg', caption: '20240701 152745' },
    // { src: '/assets/images/my_avatars/20241005_155428.jpg', caption: '20241005 155428' },
    // { src: '/assets/images/my_avatars/20241007_223833.jpg', caption: '20241007 223833' },
    { originalSrc: '/assets/images/my_avatars/20241119_111004.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20241119_111004.jpg', caption: '20241119 111004' },
    { originalSrc: '/assets/images/my_avatars/20241226_044556.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20241226_044556.jpg', caption: '20241226 044556' },
    { originalSrc: '/assets/images/my_avatars/20250104_204713.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250104_204713.jpg', caption: '20250104 204713' },
    // { src: '/assets/images/my_avatars/20250107_1710512.jpg', caption: '20250107 1710512' },
    { originalSrc: '/assets/images/my_avatars/20250122_130839.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250122_130839.jpg', caption: '20250122 130839' },
    // { src: '/assets/images/my_avatars/20250122_145516.jpg', caption: '20250122 145516' },
    { originalSrc: '/assets/images/my_avatars/20250219_180001.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250219_180001.jpg', caption: '20250219 180001' },
    // { src: '/assets/images/my_avatars/20250219_200352.jpg', caption: '20250219 200352' },
    { originalSrc: '/assets/images/my_avatars/20250225_120146.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250225_120146.jpg', caption: '20250225 120146' },
    // { src: '/assets/images/my_avatars/20250227_210340.jpg', caption: '20250227 210340' },
    { originalSrc: '/assets/images/my_avatars/20250305_141154-ANIMATION.gif', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250305_141154-ANIMATION.gif', caption: '20250305 141154 Animation' },
    // { src: '/assets/images/my_avatars/20250327_143251.jpg', caption: '20250327 143251' },
    // { src: '/assets/images/my_avatars/20250409_114652.jpg', caption: '20250409 114652' },
    // { src: '/assets/images/my_avatars/20250420_153011.jpg', caption: '20250420 153011' },
    // { src: '/assets/images/my_avatars/20250420_191810.jpg', caption: '20250420 191810' },
    { originalSrc: '/assets/images/my_avatars/20250429_105039.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_20250429_105039.jpg', caption: '20250429 105039' },
    // { src: '/assets/images/my_avatars/20250507_130538.jpg', caption: '20250507 130538' },
    // { src: '/assets/images/my_avatars/20250507_131734.jpg', caption: '20250507 131734' },
    { originalSrc: '/assets/images/my_avatars/arcade_20230903_013954.jpeg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_arcade_20230903_013954.jpeg', caption: 'Arcade 20230903 013954' },
    { originalSrc: '/assets/images/my_avatars/biker.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_biker.jpg', caption: 'Biker' },
    // { src: '/assets/images/my_avatars/blender_20211018_142459.jpg', caption: 'Blender 20211018 142459' },
    { originalSrc: '/assets/images/my_avatars/coffee.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_coffee.jpg', caption: 'Coffee' },
    { originalSrc: '/assets/images/my_avatars/devil on my shoulder 1.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_devil on my shoulder 1.jpg', caption: 'devil on the shoulder' },
    { originalSrc: '/assets/images/my_avatars/devil on my shoulder 2.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_devil on my shoulder 2.jpg', caption: 'devil on the shoulder' },
    { originalSrc: '/assets/images/my_avatars/devil on my shoulder 3.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_devil on my shoulder 3.jpg', caption: 'devil on the shoulder' },
    { originalSrc: '/assets/images/my_avatars/devil on my shoulder 4.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_devil on my shoulder 4.jpg', caption: 'devil on the shoulder' },
    { originalSrc: '/assets/images/my_avatars/divinity_6532.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_divinity_6532.jpg', caption: 'Divinity 6532' },
    { originalSrc: '/assets/images/my_avatars/dj.png', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_dj.png', caption: 'Dj' },
    { originalSrc: '/assets/images/my_avatars/fire walk with me_20250512_112719.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_fire walk with me_20250512_112719.jpg', caption: 'Fire Walk With Me 20250512 112719' },
    { originalSrc: '/assets/images/my_avatars/husbant_5942.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_husbant_5942.jpg', caption: 'Husbant' },
    { originalSrc: '/assets/images/my_avatars/iceskate-20190513-WA0001.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_iceskate-20190513-WA0001.jpg', caption: 'Iceskate 20190513 Wa0001' },
    // { src: '/assets/images/my_avatars/kitterchord_20241009014259015.jpg', caption: 'Kitterchord 20241009014259015' },
    { originalSrc: '/assets/images/my_avatars/liberal_20231024_162542_274-01.jpeg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_liberal_20231024_162542_274-01.jpeg', caption: 'Liberal 20231024 162542 274 01' },
    // { src: '/assets/images/my_avatars/meeper_20250507_220022.jpg', caption: 'Meeper 20250507 220022' },
    { originalSrc: '/assets/images/my_avatars/prayer_6529.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_prayer_6529.jpg', caption: 'Prayer 6529' },
    { originalSrc: '/assets/images/my_avatars/slouchy.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_slouchy.jpg', caption: 'Slouchy' },
    { originalSrc: '/assets/images/my_avatars/thesadness_20210629_074704.jpg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_thesadness_20210629_074704.jpg', caption: 'Thesadness 20210629 074704' },
    // { src: '/assets/images/my_avatars/toothbrush_20220817_025823.jpg', caption: 'Toothbrush 20220817 025823' },
    { originalSrc: '/assets/images/my_avatars/vr-20221230-WA0007-02.jpeg', ditheredSrc: '/assets/images/my_avatars/dithered/dither_it_vr-20221230-WA0007-02.jpeg', caption: 'Vr 20221230 Wa0007 02' }
  ];

  const randomIndex = Math.floor(Math.random() * avatarData.length);
  const selectedAvatar = avatarData[randomIndex];

  const avatarContainer = document.querySelector('.author__avatar');
  if (avatarContainer) {
    const avatarImgElement = avatarContainer.querySelector('img.u-photo');
    const avatarCaptionElement = avatarContainer.querySelector('.author__avatar-caption');

    if (avatarImgElement) {
      // Helper function to process avatar source paths
      function processAvatarSrc(srcPath) {
        let finalPath = srcPath;
        if (typeof site !== 'undefined' && site.baseurl && !finalPath.startsWith(site.baseurl)) {
          let base = site.baseurl;
          let path = finalPath;
          if (base.endsWith('/') && path.startsWith('/')) {
              path = path.substring(1);
          } else if (!base.endsWith('/') && !path.startsWith('/')) {
              base = base + '/';
          }
          finalPath = base + path;
        } else if (typeof site === 'undefined' || !site.baseurl) {
          // Ensure it's a root-relative path if not absolute and no baseurl
          if (!finalPath.startsWith('/') && !finalPath.startsWith('http')) {
              finalPath = '/' + finalPath;
          }
        }
        return finalPath.replace(/\/\//g, '/'); // Clean up double slashes
      }

      const ditheredSrcPath = processAvatarSrc(selectedAvatar.ditheredSrc);
      const originalSrcPath = processAvatarSrc(selectedAvatar.originalSrc);

      avatarImgElement.src = ditheredSrcPath; // Load dithered image initially

      avatarImgElement.addEventListener('mouseover', function() {
        avatarImgElement.src = originalSrcPath;
      });

      avatarImgElement.addEventListener('mouseout', function() {
        avatarImgElement.src = ditheredSrcPath;
      });
    }

    if (avatarCaptionElement) {
      avatarCaptionElement.textContent = selectedAvatar.caption;
    }
  }
});