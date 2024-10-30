document.addEventListener("DOMContentLoaded", function () {
  const almondContainer = document.querySelector(".almond-container");

  const numberOfPetals = 15; // 앞쪽 꽃잎 개수
  const numberOfBackPetals = 10; // 뒤쪽 꽃잎 개수
  const numberOfFarPetals = 10; // 멀리 있는 꽃잎 개수
  const numberOfFrontPetals = 5; // 가장 앞쪽 꽃잎 개수

  // 꽃잎 애니메이션 생성 함수
  function createPetalAnimation(
    num,
    className,
    sizeRange,
    durationRange,
    delayRange
  ) {
    for (let i = 0; i < num; i++) {
      const petal = document.createElement("img");
      const randomPetalNumber = Math.floor(Math.random() * 15) + 1;
      petal.src = `petal/${randomPetalNumber}.png`;
      petal.classList.add(className);

      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${
        Math.random() * durationRange + durationRange / 2
      }s`;
      petal.style.animationDelay = `${Math.random() * delayRange}s`;

      // 크기 및 움직임 설정
      const randomSize =
        Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      petal.style.transform = `translateX(${
        Math.random() * 20 - 10
      }px) scale(${randomSize})`;

      almondContainer.appendChild(petal);
    }
  }

  // 각 꽃잎 애니메이션
  createPetalAnimation(numberOfPetals, "falling-petal", [0.8, 1.0], 4, 5); // 앞쪽 꽃잎
  createPetalAnimation(
    numberOfBackPetals,
    "falling-petal-back",
    [0.6, 0.8],
    6,
    7
  ); // 뒤쪽 꽃잎
  createPetalAnimation(
    numberOfFarPetals,
    "falling-petal-far",
    [0.4, 0.6],
    8,
    10
  ); // 멀리 있는 꽃잎
  createPetalAnimation(
    numberOfFrontPetals,
    "falling-petal-front",
    [1.0, 1.2],
    3,
    3
  ); // 가장 앞쪽 큰 꽃잎

  // 클릭 시 꽃 피어나는 효과
  almondContainer.addEventListener("click", (e) => {
    const rect = almondContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // almondContainer 내 상대적 x 좌표
    const clickY = e.clientY - rect.top; // almondContainer 내 상대적 y 좌표

    const flower = document.createElement("img");
    const randomFlowerNumber = Math.floor(Math.random() * 9) + 4;
    flower.src = `Flower/${randomFlowerNumber}.png`;
    flower.classList.add("flower-animation");

    // 클릭 위치에 맞게 중앙 상단에 배치
    flower.style.position = "absolute";
    flower.style.left = `${clickX}px`;
    flower.style.top = `${clickY}px`;
    flower.style.transform = "translate(-50%, -100%)"; // 중앙 상단으로 배치

    flower.addEventListener("animationend", () => {
      flower.remove();
    });

    almondContainer.appendChild(flower);
  });
});
