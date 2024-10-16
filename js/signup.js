function validateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailformat.test(String(email).toLowerCase());
}
function checkPassword(password) {
  let pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return pwdFormat.test(String(password));
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let password = document.getElementById("password");
  let retype_password = document.getElementById("retype_password");
  if (!email.value) {
    alert("Bạn chưa nhập email");
    email.focus();
  } else if (!name.value) {
    alert("Bạn chưa nhập tên");
    name.focus();
  } else if (!password.value) {
    alert("Bạn chưa nhập mật khẩu");
    password.focus();
  } else if (!retype_password.value) {
    alert("Bạn chưa nhập lại mật khẩu");
    retype_password.focus();
  } else if (!validateEmail(email.value)) {
    alert("Nhập không đúng định dạng email");
    email.focus();
  } else if (!checkPassword(password.value)) {
    alert("Mật khẩu phải có ít nhất một chữ cái in hoa và một chữ số");
    password.focus();
  } else if (password.value.length < 8) {
    alert("Mật khẩu phải có độ dài ít nhất 8 kí tự");
    password.focus();
  } else if (password.value != retype_password.value) {
    alert("Mật khẩu nhập lại không đúng");
    retype_password.focus();
  } else {
    let user = {
      email: email.value,
      name: name.value,
      password: password.value,
    };
    let listUser = JSON.parse(localStorage.getItem("users")) || [];
    let checkEmailExist = listUser.some((item) => item.email == email.value);
    if (!checkEmailExist) {
      listUser.push(user);
      localStorage.setItem("users", JSON.stringify(listUser));
      alert("Đăng ký thành công");
    } else alert("Email đã tồn tại");
  }
});
