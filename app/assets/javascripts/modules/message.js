$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Main__Chat__box" data-message-id=${message.id}>
          <div class="Main__Chat__box__data">
            <div class="Main__Chat__box__data__name">
              ${message.user_name}
            </div>
            <div class="Main__Chat__box__data__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Main__Chat__box__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Main__Chat__box__message__content" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main__Chat__box" data-message-id=${message.id}>
        <div class="Main__Chat__box__data">
          <div class="Main__Chat__box__data__name">
            ${message.user_name}
          </div>
          <div class="Main__Chat__box__data__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Main__Chat__box__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Main__Footer__form__content').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main__Chat').append(html);
      $('.Main__Chat').animate({ scrollTop: $('.Main__Chat')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    return false
  });
});
