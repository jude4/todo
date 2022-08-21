

$(document).ready(function () {
  $("button").on("click", function () {
    var item = $(this).siblings('#todoId').text();
    $.ajax({
      type: "DELETE",
      url: "/todo/" + item,
      success: function (data) {
        console.log(data);
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
