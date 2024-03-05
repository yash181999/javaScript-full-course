let count = 0;

const updateCounter = () => {
  let counter = document.getElementById("counter");
  counter.textContent = count;
};

function incrementCount() {
  count++;
  updateCounter();
}

function decrementCount() {
  count--;
  updateCounter();
}

const resetCount = () => {
  count = 0;
  updateCounter();
};
