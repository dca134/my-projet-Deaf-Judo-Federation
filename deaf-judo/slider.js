// Хранение текущего индекса для каждого слайдера
const sliderIndexes = {};

// Инициализация слайдера
function initSlider(sliderId) {
    const sliderContainer = document.getElementById(sliderId);
    const slides = sliderContainer.querySelectorAll('.slider img');
    sliderIndexes[sliderId] = 0; // Устанавливаем начальный индекс слайда

    // Обновляем начальное положение
    updateSlider(sliderId, slides);
}

// Обновление слайда
function updateSlider(sliderId, slides) {
    const slider = document.querySelector(`#${sliderId} .slider`);
    const offset = -sliderIndexes[sliderId] * 100; // Сдвиг в %
    slider.style.transform = `translateX(${offset}%)`;
}

// Перелистывание вперёд
function nextSlide(sliderId) {
    const sliderContainer = document.getElementById(sliderId);
    const slides = sliderContainer.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Увеличиваем индекс
    sliderIndexes[sliderId] = (sliderIndexes[sliderId] + 1) % totalSlides;
    updateSlider(sliderId, slides);
}

// Перелистывание назад
function prevSlide(sliderId) {
    const sliderContainer = document.getElementById(sliderId);
    const slides = sliderContainer.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Уменьшаем индекс
    sliderIndexes[sliderId] =
        (sliderIndexes[sliderId] - 1 + totalSlides) % totalSlides;
    updateSlider(sliderId, slides);
}

// Инициализация всех слайдеров при загрузке
window.onload = () => {
    initSlider('slider-day1'); // Слайдер для первого дня
    initSlider('slider-day2'); // Слайдер для второго дня
};
