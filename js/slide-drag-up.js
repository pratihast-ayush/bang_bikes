let isDragging = false;
let dragginStartedFrom = "bottom";
let initialDragClientY = 0;
// declare yDrag as an object with getters and setters
// so we have a straight forward way of updating style
// whenever its value changes
const draggableContentElement = document.querySelector(
  ".main__draggable-content"
);
const yDrag = {
  dragValue: 0,
  startedAt: "bottom",
  set value(val) {
    this.dragValue = val;
    draggableContentElement.style.transform = `translateY(${val}px)`;
  },
  get value() {
    return this.dragValue;
  },
};

// const { height: headerHeight } = document
//   .querySelector(".main__header")
//   .getBoundingClientRect();
const { top: draggableContentTop } = document
  .querySelector(".main__draggable-content")
  .getBoundingClientRect();

const draggableArea = draggableContentTop - 50;
const startFromBottomDestination = draggableArea * -1;
const startFromTopDestination = 0;

window.startDraggingHandler = (event) => {
  event.stopPropagation();
  isDragging = true;
  dragginStartedFrom =
    yDrag.value === startFromTopDestination ? "bottom" : "top";
  initialDragClientY = event.touches[0].clientY;
};

window.draggingHandler = (event) => {
  event.stopPropagation();
  if (!isDragging) return;
  const { clientY } = event.touches[0];
  let draggingValue = clientY - initialDragClientY;
  if (dragginStartedFrom === "top") {
    draggingValue = startFromBottomDestination + draggingValue;
  }
  yDrag.value = draggingValue;
};

window.stopDraggingHandler = (event) => {
  event.stopPropagation();
  if (!isDragging) return;
  isDragging = false;
  const { clientY } = event.changedTouches[0];
  dragginStartedFrom === "bottom"
    ? handleBottomDestination(clientY)
    : handleTopDestination(clientY);
};

const handleTopDestination = (clientY) => {
  const hasPassedHalf = yDrag.value * -1 < draggableArea / 2;
  if (!hasPassedHalf) {
    yDrag.value = startFromBottomDestination;
    return;
  }
  yDrag.value = startFromTopDestination;
};
const handleBottomDestination = (clientY) => {
  const hasPassedHalf = yDrag.value * -1 > draggableArea / 2;
  if (!hasPassedHalf) {
    yDrag.value = startFromTopDestination;
    return;
  }
  yDrag.value = startFromBottomDestination;
};