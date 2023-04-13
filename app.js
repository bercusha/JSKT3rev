const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value;
  const valueOffset = (slider.value - slider.min) * 100 / (slider.max - slider.min);
  const thumb = slider.nextElementSibling;
  const thumbWidth = parseFloat(getComputedStyle(thumb).width);
  const thumbOffset = (thumbWidth / 2) - (parseFloat(getComputedStyle(sliderValue).width) / 2);
  sliderValue.style.left = `calc(${valueOffset}% + (${thumbOffset}px))`;
  sliderValue.style.transform = `translateX(-${valueOffset}%)`;
});
