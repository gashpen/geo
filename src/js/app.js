const form = document.querySelector('.footer_form');
const formPopup = document.querySelector('.form_popup');
const output = document.querySelector('.chat_view_window');
const popup = document.querySelector('.alert_popup');

form.addEventListener('submit', (e) => {
  const arr = [];
  arr.push(e.target.enter.value);
  navigator.geolocation.getCurrentPosition((data) => {
    const { latitude, longitude } = data.coords;
    if (data) {
      arr.map((elem) => {
        output.innerHTML += `
              <div class="test_box message my_message">
                <span>${elem}</span>
                <div class="location">[${latitude}, ${longitude}]</div>
              </div>
            `;
      });
    }
  }, () => {
    popup.classList.remove('d-none');
    arr.map((elem) => {
      formPopup.addEventListener('submit', (e) => {
        e.preventDefault();
        output.innerHTML += `
        <div class="message_wrap">
          <span>${elem}</span>
          <div class="location">[${e.target.popup.value}]</div>
        </div>
        `;
        popup.classList.add('d-none');
      });
      popup.addEventListener('click', (e) => {
        if (e.target.classList[1] === 'material-symbols-outlined'
              || e.target.classList.value === 'btn_close') {
          popup.classList.add('d-none');
        }
        if (e.target.classList.value === 'btn_ok') {
          formPopup.submit();
        }
      });
    });
  });

  e.preventDefault();
  e.target.enter.value = '';
});
