document.addEventListener("DOMContentLoaded", function () {
  // About Me Section (デモ用の表示値)
    document.querySelector(".about-me h1").innerHTML = "【氏名を入れて下さい】";
    document.querySelector(".about-me p").innerHTML = "【職業を入れて下さい】";
    document.querySelector(".about-me a").innerHTML = "【自己紹介文を入れて下さい】";

  // Contact Me Section (デモ用のプレースホルダー)
    document.querySelector(".add").innerHTML = "【住所を入れて下さい】";
    document.querySelector(".tel").innerHTML = "tel: 【電話番号を入れて下さい】";
    document.querySelector(".email").innerHTML = "email: 【メールアドレスを入れて下さい】";

  // Education Section (仮データ)
    document.querySelector(".h-school").innerHTML = "【入学年-卒業年】";
    document.querySelector(".h-name").innerHTML = "【高校名】";
    document.querySelector(".uni").innerHTML = "【入学年-卒業年】";
    document.querySelector(".u-name").innerHTML = "【大学名】";

  // Experience Section (仮データ)
    document.querySelector(".experience-1").innerHTML = "【勤務期間】";
    document.querySelector(".task-1").innerHTML = "【仕事内容】";
    document.querySelector(".ability-1").innerHTML = "【担当業務のアピールポイント】";

    document.querySelector(".experience-2").innerHTML = "【勤務期間】";
    document.querySelector(".task-2").innerHTML = "【仕事内容】";
    document.querySelector(".ability-2").innerHTML = "【担当業務のアピールポイント】";

    document.querySelector(".experience-3").innerHTML = "【勤務期間】";
    document.querySelector(".task-3").innerHTML = "【仕事内容】";
    document.querySelector(".ability-3").innerHTML = "【担当業務のアピールポイント】";
});

// Skills Section（スキルバーの簡易表示）
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const skillName = skill.getAttribute("data-skill");

    // デモ用として固定値に設定（本来は data-level を使います）
    const skillLevel = "30";

    skill.innerHTML = `
      <div class="skill-name">${skillName}</div>
      <div class="skill-bar">
        <div class="skill-level" style="width: ${skillLevel}%;"></div>
      </div>
    `;
  });
});
