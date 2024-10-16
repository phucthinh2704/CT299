let form = document.querySelector("form");
document.cookie = ""; 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (!email.value) {
    alert("Bạn chưa nhập email");
    email.focus();
  } else if (!password.value) {
    alert("Bạn chưa nhập mật khẩu");
    password.focus();
  } else {
    let listUser = JSON.parse(localStorage.getItem("users")) || [];
    let checkEmailExist = false;
    let checkPasswordExist = false;
    listUser.forEach((item) => {
      if (item.email == email.value) {
        checkEmailExist = true;
        if (item.password == password.value) {
          document.cookie = item.name;
          checkPasswordExist = true;
        }
      }
    });
    if (checkEmailExist && !checkPasswordExist) {
      alert("Mật khẩu không đúng");
    } else if (!checkEmailExist) {
      alert("Email không tồn tại");
    } else if (checkEmailExist && checkEmailExist) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    }
  }
});
