const apiKey = "AIzaSyDPiTWCK-ITymEPkehkHobuz0EsrERzzJI";
const baseUrl = "https://www.googleapis.com/youtube/v3";
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const vedioContainer = document.getElementById("vedio-container");
const navbarDivs = document.querySelectorAll(".navbar-scroll div");
const selectedValue = document.getElementById("selectedValue");

async function getVideoStatistics(videoId) {
  const url = `${baseUrl}/videos?key=${apiKey}&part=statistics&id=${videoId}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result.items[0].statistics;
  } catch (error) {
    console.error("An error occurred:", error);
    alert("Mission failed.......");
  }
}

async function fetchChannelLogo(channelId) {
  const endpoint = `${baseUrl}/channels?key=${apiKey}&id=${channelId}&part=snippet`;

  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    return result.items[0].snippet.thumbnails.high.url;
  } catch (error) {
    console.error("An error occurred:", error);
    alert("Failed to load channel logo for " + channelId);
  }
}

// Generate the random video list on the browser when it loads
window.onload = () => {
  fetchSearchResult("All");
};

async function fetchSearchResult(searchString) {
  const url = `${baseUrl}/search?key=${apiKey}&q=${searchString}&part=snippet&maxResults=15`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    for (let i = 0; i < result.items.length; i++) {
      let videoId = result.items[i].id.videoId;
      let channelId = result.items[i].snippet.channelId;

      let statistics = await getVideoStatistics(videoId);
      let channelLogo = await fetchChannelLogo(channelId);

      result.items[i].statistics = statistics;
      result.items[i].channelLogo = channelLogo;
    }
    console.log(result);
    console.log("errrrrrrrrr");
    renderVideoOnUI(result.items);
  } catch (error) {
    console.error("An error occurred:", error);
    alert("Some error occurred. " + error);
  }
}

function calculateTheTimeGap(publishTime) {
  let publishDate = new Date(publishTime);
  let currentDate = new Date();

  let secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;

  const secondsPerDay = 24 * 60 * 60;
  const secondsPerWeek = 7 * secondsPerDay;
  const secondsPerMonth = 30 * secondsPerDay;
  const secondsPerYear = 365 * secondsPerDay;

  if (secondsGap < secondsPerDay) {
    return `${Math.ceil(secondsGap / (60 * 60))}hrs ago`;
  }
  if (secondsGap < secondsPerWeek) {
    return `${Math.ceil(secondsGap / secondsPerWeek)} weeks ago`;
  }
  if (secondsGap < secondsPerMonth) {
    return `${Math.ceil(secondsGap / secondsPerMonth)} months ago`;
  }

  return `${Math.ceil(secondsGap / secondsPerYear)} years ago`;
}

function renderVideoOnUI(videoList) {
  const cardsToRemove = vedioContainer.querySelectorAll(".card");

  // Loop through the selected elements and remove each one
  cardsToRemove.forEach((card) => {
    card.remove();
  });

  videoList.forEach((video) => {
    const cardDynamic = document.createElement("div");
    cardDynamic.className = "card";
    cardDynamic.innerHTML = `
      <img src="${video.snippet.thumbnails.high.url}" />
      <div class="card-buttom">
        <img src="${video.channelLogo}" alt="channel" />
        <div class="description">
          <h5>${video.snippet.title}</h5>
          <p>${video.snippet.channelTitle}</p>
          <p><span>${formatViewCount(
            video.statistics.viewCount
          )} views . </span><span>${calculateTheTimeGap(
      video.snippet.publishTime
    )}</span></p>
        </div>
      </div>
    `;
    vedioContainer.appendChild(cardDynamic);
  });
}

function formatViewCount(count) {
  if (count >= 1e9) {
    return (count / 1e9).toFixed(1) + "B views";
  } else if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + "M views";
  } else if (count >= 1e3) {
    return (count / 1e3).toFixed(1) + "K views";
  } else {
    return count + " views";
  }
}

// Add a click event listener to the search button
searchButton.addEventListener("click", () => {
  const inputData = searchInput.value;
  fetchSearchResult(inputData);
  searchInput.value = ""; // Clear the input field after clicking the button
});

navbarDivs.forEach((div) => {
  div.addEventListener("click", () => {
    navbarDivs.forEach((d) => d.classList.remove("selected"));
    div.classList.add("selected");
    fetchSearchResult(div.textContent);
  });
});
