// BEGINNING OF CODE TO CHANGE PROFILES
var currentProfileIndex = 0;
firstProfile = true;

// FUNCTION TO SWITCH TO NEXT PROFILE. ACTIVATED BY CLICKING LIKE/DISLIKE BUTTON
var goToProfile = function (profile) {
  if (firstProfile === false) {clearScreen()};
  firstProfile = false;

  if (profile === undefined) {
    alert('There are no more sluts in your area!');
    return;
  }

  var screen = document.createElement('div');
  screen.className = 'screen';

  var everythingButChoices = document.createElement('div');
  everythingButChoices.className = 'everything-but-choices';

  var headerElement = document.createElement('div');
  headerElement.className = 'header';

  var settingsElement = document.createElement('img');
  settingsElement.className = 'settings header-icon';
  settingsElement.src = 'iconmonstr-gear-1-240.png';

  var headerTextElement = document.createElement('span');
  headerTextElement.className = 'header-text';
  headerTextElement.innerText = 'tinder';

  var chatElement = document.createElement('img');
  chatElement.className = 'chat header-icon';
  chatElement.src = 'iconmonstr-speech-bubble-23-240.png';
  headerElement.addEventListener('click', goToMatchList);

  // nameAndAgeElement.appendChild(nameElement);
  headerElement.appendChild(settingsElement);
  headerElement.appendChild(headerTextElement);
  headerElement.appendChild(chatElement);

  var pictureFrameElement = document.createElement('div');
  pictureFrameElement.className = 'picture-frame';
  pictureFrameElement.src = profile.pictureUrls[0];

  var pictureElement = document.createElement('img');
  pictureElement.className = 'first-pic';
  pictureElement.src = profile.pictureUrls[0];

  var nameAndAgeElement = document.createElement('div');
  nameAndAgeElement.className = 'name-and-age';

  var nameElement = document.createElement('span');
  nameElement.className = 'name';
  nameElement.innerText = profile.name;

  var commaAndSpaceElement = document.createElement('span');
  commaAndSpaceElement.className = 'comma-and-space';
  commaAndSpaceElement.innerText = ', ';

  var ageElement = document.createElement('span');
  ageElement.className = 'age';
  ageElement.innerText = profile.age;

  nameAndAgeElement.appendChild(nameElement);
  nameAndAgeElement.appendChild(commaAndSpaceElement);
  nameAndAgeElement.appendChild(ageElement);

  var collegeElement = document.createElement('span');
  collegeElement.className = 'college';
  collegeElement.innerText = profile.college;

  pictureFrameElement.appendChild(pictureElement);
  pictureFrameElement.appendChild(nameAndAgeElement);
  pictureFrameElement.appendChild(collegeElement);

  var undersheetOneElement = document.createElement('div');
  undersheetOneElement.className = 'undersheet-one';

  var undersheetTwoElement = document.createElement('div');
  undersheetTwoElement.className = 'undersheet-two';

  everythingButChoices.appendChild(headerElement);
  everythingButChoices.appendChild(pictureFrameElement);
  everythingButChoices.appendChild(undersheetOneElement);
  everythingButChoices.appendChild(undersheetTwoElement);
  // document.querySelector('.screen').appendChild(everythingButChoices);

  // Choices from initial profile view
  var choiceBarElement = document.createElement('div');
  choiceBarElement.className = 'choice-bar';

  var goBackButtonElement = document.createElement('button');
  goBackButtonElement.className = 'go-back-button small-icon';

  var likeButtonElement = document.createElement('button');
  likeButtonElement.className = 'like-button large-icon';

  var dislikeButtonElement = document.createElement('button');
  dislikeButtonElement.className = 'dislike-button large-icon';

  var superLikeButtonElement = document.createElement('button');
  superLikeButtonElement.className = 'superlike-button small-icon';

  choiceBarElement.appendChild(goBackButtonElement);
  choiceBarElement.appendChild(likeButtonElement);
  choiceBarElement.appendChild(dislikeButtonElement);
  choiceBarElement.appendChild(superLikeButtonElement);
  // document.querySelector('.screen').appendChild(choiceBarElement);

  document.querySelector('.phone').appendChild(screen);
  screen.appendChild(everythingButChoices);
  screen.appendChild(choiceBarElement);

  likeButtonElement.addEventListener('click', goToNextProfile);
  dislikeButtonElement.addEventListener('click', goToNextProfile);

  pictureElement.addEventListener('click', zoomIntoProfile);
};

function goToNextProfile() {
  currentProfileIndex++;
  goToProfile(profiles[currentProfileIndex]);
}

// FUNCTION TO REMOVE HTML ON PAGE BEFORE CHANGING STATE
function clearScreen() {
  document.querySelector('.phone').removeChild(document.querySelector('.screen'));
}

var profiles = [
  {
    name: 'Dagny',
    age: 26,
    college: 'UC Santa Cruz',
    distance: '25 miles away',
    bio: 'I like anal sex, sloppy blowjobs, and multiple orgasms. In my free time, I love anal sex, sloppy blowjobs, and orgasms.  Most Friday nights involve anal sex, sloppy blowjobs, and multiple orgasms. Truly, there is nothing more important to me than anal sex, sloppy blowjobs, and multiple orgasms. I like anal sex, sloppy blowjobs, and multiple orgasms. In my free time, I love anal sex, sloppy blowjobs, and orgasms.  Most Friday nights involve anal sex, sloppy blowjobs, and multiple orgasms. Truly, there is nothing more important to me than anal sex, sloppy blowjobs, and multiple orgasms.',
    job: 'Musician',
    pictureUrls: [
      'data:image/jpeg;base64,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',
      'http://static1.squarespace.com/static/543e424ce4b0c9fc7fdce26d/t/561d3b5be4b001f1ad428ad2/1444756316891/',
      'data:image/jpeg;base64,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',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Oprah',
    age: 22,
    college: 'UC Berkeley',
    distance: '3 miles away',
    bio: 'I am worth a lot of Money.  A Lot of Money, actually.  You would not even believe how much money I have.',
    job: 'Television Star',
    pictureUrls: [
      'http://static.oprah.com/images/o2/201404/oprah-tour-bio-1-949x534.jpg',
      'http://hollywoodpsychicinsider.com/wp-content/uploads/2013/12/oprahwinfrey_2005.jpg',
      'http://d39ya49a1fwv14.cloudfront.net/wp-content/uploads/2014/03/oprah-winfrey-167024_w1000.jpg',
      'http://www.realsuccess.net/wp-content/uploads/2015/10/oprah-winfrey-top-tv-show-wallpaper-body-8ed700a6d0de777200111377efb82f53-big-21008.jpg',
      'http://img.timeinc.net/time/time100/2007/images/oprah_winfrey.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Alicia',
    age: 87,
    college: 'UC Los Angeles',
    distance: '10 miles away',
    bio: 'Send dick pics.',
    job: 'Singer/songwriter',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Lacey',
    age: 27,
    college: 'Duke University',
    distance: '10 miles away',
    bio: 'Send dick pics.',
    job: 'Hussy',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Jisu Song',
    age: 21,
    college: 'Seoul University',
    distance: '3 miles away',
    bio: 'Send dick pics.',
    job: 'Korean hottie',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Womba',
    age: 13,
    college: 'UC Berkeley',
    distance: '5 miles away',
    bio: 'Send dick pics.',
    job: 'Child Porn Star',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Amy',
    age: 98,
    college: 'UC Los Angeles',
    distance: '7 miles away',
    bio: 'Send dick pics.',
    job: 'Tart',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Taylor',
    age: 30,
    college: 'UC Berkeley',
    distance: '10 miles away',
    bio: 'Send dick pics.',
    job: 'Fellatio artist',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Jerome',
    age: 87,
    college: 'UC Santa Barbara',
    distance: '6 miles away',
    bio: 'Send dick pics.',
    job: 'Female impersonator',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  },
  {
    name: 'Shantelle',
    age: 28,
    college: 'UC San Bernadino',
    distance: '11 miles away',
    bio: 'Send more dick pics.',
    job: 'Garbageman',
    pictureUrls: [
      'http://i.huffpost.com/gen/1782331/thumbs/o-ALICIA-KEYS-GIVENCHY-570.jpg',
      'http://speakerdata.s3.amazonaws.com/photo/image/781014/alicia_keys.jpg',
    ],
    matched: false,
    messages: [
      'Hey!',
      'OMG I LOVED YOUR DICK PIC!!!',
      'Mmm, you are so dirty...',
    ]
  }
];
// END OF CODE TO CHANGE PROFILES

// BEGINNING OF CODE TO ZOOM INTO A PROFILE
var zoomIntoProfile = function() {
  clearScreen();

  // createElements
  // create, style and append each element
  var screen = document.createElement('div');
  screen.className = 'screen';

  var everythingButChoices = document.createElement('div');
  everythingButChoices.className = 'everything-but-choices';

  var pictureWindow = document.createElement('div');
  pictureWindow.className = 'window';
  screen.insertBefore(pictureWindow, document.querySelector('.choices'));

  // load each img from profile.pictureUrls to pictureWindow
  var profile = profiles[currentProfileIndex - 1];

  for (var u = 0; u < profile.pictureUrls.length; u++) {
    var pictureImg = new Image(500, 500);
    pictureImg.src = profile.pictureUrls[u];
    pictureWindow.appendChild(pictureImg);
  }

  // var nameElement = document.createElement('span');
  // nameElement.className = 'name';
  // nameElement.innerText = profile.name;

  var personData = document.createElement('div');
  personData.className = 'data under-picture ';
  screen.insertBefore(personData, document.querySelector('.choices'));

  var zoomName = document.createElement('span');
  zoomName.className = 'name-el';
  zoomName.innerText = profile.name;
  screen.insertBefore(zoomName, document.querySelector('.choices'));

  var zoomComma = document.createElement('span');
  zoomComma.className = 'comma';
  zoomComma.innerText = ',';
  screen.insertBefore(zoomComma, document.querySelector('.choices'));

  var zoomAge = document.createElement('span');
  zoomAge.className = 'age-el';
  zoomAge.innerText = profile.age;
  screen.insertBefore(zoomAge, document.querySelector('.choices'));

  personData.appendChild(zoomName);
  personData.appendChild(zoomComma);
  personData.appendChild(zoomAge);

  var job = document.createElement('span');
  job.className = 'under-picture job small-gray-text';
  job.innerText = profile.job;
  screen.insertBefore(job, document.querySelector('.choices'));

  var college = document.createElement('span');
  college.className = 'under-picture college-el small-gray-text';
  college.innerText = profile.college;
  screen.insertBefore(college, document.querySelector('.choices'));

  var distance = document.createElement('div');
  distance.className = 'under-picture distance small-gray-text';
  distance.innerText = profile.distance;
  screen.insertBefore(distance, document.querySelector('.choices'));

  var bio = document.createElement('div');
  bio.className = 'under-picture bio small-gray-text';
  bio.innerText = profile.bio;
  screen.insertBefore(bio, document.querySelector('.choices'));

  everythingButChoices.appendChild(pictureWindow);
  everythingButChoices.appendChild(personData);
  everythingButChoices.appendChild(job);
  everythingButChoices.appendChild(college);
  everythingButChoices.appendChild(distance);
  everythingButChoices.appendChild(bio);

  // Choices from zoomed profile view
  var choiceBarElement = document.createElement('div');
  choiceBarElement.className = 'choice-bar';

  var dislikeButtonElement = document.createElement('button');
  dislikeButtonElement.className = 'dislike-button large-icon';

  var superLikeButtonElement = document.createElement('button');
  superLikeButtonElement.className = 'superlike-button small-icon';

  var likeButtonElement = document.createElement('button');
  likeButtonElement.className = 'like-button large-icon';

  choiceBarElement.appendChild(dislikeButtonElement);
  choiceBarElement.appendChild(superLikeButtonElement);
  choiceBarElement.appendChild(likeButtonElement);

  document.querySelector('.phone').appendChild(screen);
  screen.appendChild(everythingButChoices);
  screen.appendChild(choiceBarElement);

  likeButtonElement.addEventListener('click', goToNextProfile);
  dislikeButtonElement.addEventListener('click', goToNextProfile);
  superLikeButtonElement.addEventListener('click', goToNextProfile);
};

// GO TO MATCH LIST
function goToMatchList() {
  clearScreen();

  var screen = document.createElement('div');
  screen.className = 'screen';

  var profileButton = document.createElement('button');
  profileButton.innerText = 'goToProfile';
  screen.appendChild(profileButton);
  profileButton.addEventListener('click', function () {goToProfile(profiles[currentProfileIndex])});

  var messagesButton = document.createElement('button');
  messagesButton.innerText = 'messagesButton';
  screen.appendChild(messagesButton);
  messagesButton.addEventListener('click', goToMessages);

  document.querySelector('.phone').appendChild(screen);
}

// GO TO MESSAGES
function goToMessages() {
  clearScreen();

  var screen = document.createElement('div');
  screen.className = 'screen';

  var matchedZoomProfileButton = document.createElement('button');
  matchedZoomProfileButton.innerText = 'matchedZoomProfileButton';
  screen.appendChild(matchedZoomProfileButton);
  matchedZoomProfileButton.addEventListener('click', goToMatchedZoomProfile);

  var matchListButton = document.createElement('button');
  matchListButton.innerText = 'matchListButton';
  screen.appendChild(matchListButton);
  matchListButton.addEventListener('click', goToMatchList);

  document.querySelector('.phone').appendChild(screen);
};

// GO TO MATCHED ZOOM
function goToMatchedZoomProfile () {
clearScreen();

var screen = document.createElement('div');
screen.className = 'screen';

var goToMessagesButton = document.createElement('button');
goToMessagesButton.innerText = 'goToMessages';
screen.appendChild(goToMessagesButton);
goToMessagesButton.addEventListener('click', goToMessages);

document.querySelector('.phone').appendChild(screen);
};

// CALL FIRST PROFILE IN ARRAY WHEN WEBSITE LOADS
goToProfile(profiles[0]);
