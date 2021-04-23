let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },

    function: getProductsList
  });
});

// The body of this function will be executed as a content script inside the

// current page

function getProductsList() {
    let productElements = document.querySelectorAll("[data-autotest-id='product-snippet']");
    let productList = [...productElements].map(item => JSON.parse(item.getAttribute('data-zone-data')));
    document.querySelectorAll("[data-autotest-id='product-snippet']").forEach(
        function(currentValue, currentIndex, listObj) {
            currentValue.innerHTML = "<div id='eco-index'><p style='float:right;color:green;font-size:18px'>37</p>" + currentValue.innerHTML + "</div>"
        })
}

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
