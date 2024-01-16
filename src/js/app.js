import regexCoord from './regexCoord';

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
      arr.forEach((elem) => {
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
    arr.forEach((elem) => {
      formPopup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if (regexCoord(evt.target.popup.value) === undefined) {
          e.target.enter.value = '';
          popup.classList.add('d-none');
        } else {
          output.innerHTML += `
        <div class="message_wrap">
          <span>${elem}</span>
          <div class="location">[${evt.target.popup.value}]</div>
        </div>
        `;
          e.target.enter.value = '';
          popup.classList.add('d-none');
        }
      });
      popup.addEventListener('click', (event) => {
        if (event.target.classList[1] === 'material-symbols-outlined'
              || event.target.classList.value === 'btn_close') {
          popup.classList.add('d-none');
          e.target.enter.value = '';
        }
      });
    });
  });

  e.preventDefault();
  e.target.enter.value = '';
});
