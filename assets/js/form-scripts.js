$("#contactForm")
  .validator()
  .on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      formError();
      submitMSG(false, "Please fill in the form properly");
    } else {
      // everything looks good!
      event.preventDefault();
      submitForm(event.target);
    }
  });

function submitForm(form) {
  const data = new FormData(form);
  ajax(form.method, form.action, data, formSuccess, formError);
}

function formSuccess() {
  $("#contactForm")[0].reset();
  submitMSG(true, "Message Submitted!");
}

function formError() {
  $("#contactForm")
    .removeClass()
    .addClass("shake animated")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-center tada animated text-success";
  } else {
    var msgClasses = "h3 text-center text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    xhr.status === 200
      ? success(xhr.response, xhr.responseType)
      : error(xhr.status, xhr.response, xhr.responseType);
  };
  xhr.send(data);
}
