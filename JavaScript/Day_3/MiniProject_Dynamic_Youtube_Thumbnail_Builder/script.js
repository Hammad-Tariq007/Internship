function createCard(title, cName, duration, viewCount, monthsOld, thumbnail) {
  let viewstr;
    viewstr = viewCount;
  if (viewCount >= 1000) {
    viewstr = viewCount / 1000 + "K";
  } 
  if (viewCount >= 1000000) {
    viewstr = viewCount / 1000000 + "M";
  } 
  let html = ` <div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            alt=""
          />
          <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewstr} views. ${monthsOld} months ago</p>
        </div>
             </div>`;
  document.querySelector(".container").innerHTML += html;
}

// createCard(
//   "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course",
//   "CodeWithHarry",
//   "30:00",
//   90000,
//   9,
//   "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
// );
// createCard(
//   "JavaScript Exercise 14 - Promises| Sigma Web Development Course",
//   "CodeWithHarry",
//   "28:00",
//   8000000,
//   9,
//   "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw"
// );

const videos = [
  {
    title: "Learn JavaScript in One Hour - Full Course for Beginners",
    cName: "Programming with Mosh",
    duration: "1:00:00",
    viewCount: 2500000,
    monthsOld: 6,
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  },
  {
    title: "Python Crash Course - Learn Python in 2 Hours",
    cName: "freeCodeCamp.org",
    duration: "2:00:00",
    viewCount: 3100000,
    monthsOld: 12,
    thumbnail: "https://i.ytimg.com/vi/eWRfhZUzrAc/hqdefault.jpg",
  },
  {
    title: "React Tutorial for Beginners (2025 Update)",
    cName: "Traversy Media",
    duration: "55:00",
    viewCount: 980000,
    monthsOld: 2,
    thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
  },
  {
    title: "C++ Object Oriented Programming - Full Course",
    cName: "CodeBeauty",
    duration: "3:30:00",
    viewCount: 870000,
    monthsOld: 10,
    thumbnail: "https://i.ytimg.com/vi/vLnPwxZdW4Y/hqdefault.jpg",
  },
  {
    title: "Node.js Tutorial for Absolute Beginners",
    cName: "Tech With Tim",
    duration: "1:20:00",
    viewCount: 450000,
    monthsOld: 5,
    thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
  },
  {
    title: "Build a REST API with Express.js",
    cName: "Web Dev Simplified",
    duration: "40:00",
    viewCount: 620000,
    monthsOld: 3,
    thumbnail: "https://i.ytimg.com/vi/pKd0Rpw7O48/hqdefault.jpg",
  },
  {
    title: "HTML & CSS Crash Course - Build a Landing Page",
    cName: "DesignCourse",
    duration: "1:10:00",
    viewCount: 1200000,
    monthsOld: 8,
    thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
  },
  {
    title: "Data Structures & Algorithms in JavaScript",
    cName: "Fireship",
    duration: "18:00",
    viewCount: 780,
    monthsOld: 4,
    thumbnail: "https://i.ytimg.com/vi/t2CEgPsws3U/hqdefault.jpg",
  },
];

videos.forEach(v=>{
    createCard(v.title,v.cName, v.duration, v.viewCount, v.monthsOld, v.thumbnail)
})