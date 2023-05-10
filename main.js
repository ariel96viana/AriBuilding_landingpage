$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000");
  $("#email").mask("A", {
    translation: {
      A: { pattern: /[\w@\-.+]/, recursive: true },
    },
  });

  $("form").validate({
    errorClass: "my-error-class",
    rules: {
      inputName: {
        required: true,
      },
      inputPhone: {
        required: true,
      },
      inputMessage: {
        required: true,
      },
    },

    submitHandler: function (form) {
      alert("Formulário enviado. Logo entraremos em contato!");
      $("input").val("");
    },
  });
});
