function showWish() {
  const name = document.getElementById("nameInput").value.trim();
  const wishBox = document.getElementById("wish");
  if (name === "") {
    alert("Hãy nhập tên của bạn nhé 💖");
    return;
  }

  const wish = `Gửi ${name} thân yêu 🌷,<br><br>
Hôm nay là ngày đặc biệt – ngày để tôn vinh một nửa thế giới tuyệt vời này 💖.<br><br>
Chúc bạn – người con gái dịu dàng, xinh đẹp và mạnh mẽ – luôn tươi cười như ánh nắng ban mai,
luôn tự tin tỏa sáng dù ở bất cứ nơi đâu. 🌞<br><br>

Mong rằng cuộc sống của bạn sẽ luôn rực rỡ như những đóa hoa mùa xuân 🌸, 
ngọt ngào như hương mật ong và bình yên như một bản nhạc lofi dịu nhẹ giữa đêm khuya 🌙.<br><br>

Dù mai này có bận rộn, có những lúc mỏi mệt, hãy nhớ rằng bạn luôn xứng đáng được yêu thương,
được trân trọng và được hạnh phúc – không chỉ hôm nay mà là mỗi ngày trong suốt cuộc đời này 💕.<br><br>

Cảm ơn bạn đã mang đến thế giới này những điều đẹp đẽ, những nụ cười và sự dịu dàng hiếm có 🌼.<br><br>

Chúc ${name} một ngày 20/10 thật trọn vẹn, 
ngập tràn yêu thương, tiếng cười và những điều kỳ diệu nhất trên thế gian này 💐💫.`;


  wishBox.innerHTML = wish;
  wishBox.classList.remove("hidden");

  playMusic();
  createFallingElements();
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    console.log("Tự động phát nhạc bị chặn, sẽ phát khi người dùng tương tác.");
  });
}

function createFallingElements() {
  for (let i = 0; i < 10; i++) {
    const el = document.createElement("div");
    el.classList.add(Math.random() > 0.5 ? "heart" : "flower");
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }
  setTimeout(createFallingElements, 2000);
}
