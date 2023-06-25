export function showMessage(message, type) {
  Toastify({
    text: message,
    duration: 2100,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type == "success" ? "green" : "red",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
