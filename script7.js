class Clock7 {
    constructor(el) {
      this.clock7El = el;
      this.UI = {};
      this.initializeClock7();
    }
  
    updateClock7() {
      const now = new Date();
      const options = { timeZone: 'America/New_York' };
      const Time = now.toLocaleString('en-GB', options);
      const [date, time] = Time.split(', ');
      const [hour, minute, second] = time.split(':');
  
      const seconds = (parseInt(second) + now.getMilliseconds() / 1000) / 60 * 360;
      const minutes = (parseInt(minute) + parseInt(second) / 60) / 60 * 360;
      const hours = (parseInt(hour) + parseInt(minute) / 60) / 12 * 360;
  
      this.UI.date.textContent = now.getDate();
      this.UI.am_pm.textContent = now.getHours() > 12 ? 'PM' : 'AM';
      this.UI.second.style.transform = `rotate(${seconds}deg)`;
      this.UI.minute.style.transform = `rotate(${minutes}deg)`;
      this.UI.hour.style.transform = `rotate(${hours}deg)`;
  
      requestAnimationFrame(() => this.updateClock7());
    }
  
    initializeClock7() {
      this.clock7El.innerHTML = `<svg class="clock7face" width="300" height="300" viewBox="-150 -150 300 300">
        <circle class="ring ring--seconds" r="145" pathlength="60" />
        <circle class="ring ring--hours" r="145" pathlength="12" />
        <text x="20" y="-4" class="date">23</text>
        <text x="20" y="10" class="am-pm">am</text>
        <line class="hand hand--minute" x1="0" y1="2" x2="0" y2="-110" />
        <line class="hand hand--hour" x1="0" y1="2" x2="0" y2="-60" />
        <circle class="ring ring--center" r="3" />
        <line class="hand hand--second" x1="0" y1="12" x2="0" y2="-130" />
      </svg>`;
      this.UI.date = this.clock7El.querySelector('.date');
      this.UI.am_pm = this.clock7El.querySelector('.am-pm');
      this.UI.second = this.clock7El.querySelector('.hand--second');
      this.UI.minute = this.clock7El.querySelector('.hand--minute');
      this.UI.hour = this.clock7El.querySelector('.hand--hour');
  
      requestAnimationFrame(() => this.updateClock7());
    }
  }
  
  const clock7s = document.querySelectorAll('.clock7');
  clock7s.forEach(el => new Clock7(el))
    