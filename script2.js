class Clock2 {
    constructor(el) {
      this.clock2El = el;
      this.UI = {};
      this.initializeClock2();
    }
  
    updateClock2() {
      const now = new Date();
      const options = { timeZone: 'Asia/Tokyo' };
      const londonTime = now.toLocaleString('en-GB', options);
      const [date, time] = londonTime.split(', ');
      const [hour, minute, second] = time.split(':');
  
      const seconds = (parseInt(second) + now.getMilliseconds() / 1000) / 60 * 360;
      const minutes = (parseInt(minute) + parseInt(second) / 60) / 60 * 360;
      const hours = (parseInt(hour) + parseInt(minute) / 60) / 12 * 360;
  
      this.UI.date.textContent = now.getDate();
      this.UI.am_pm.textContent = now.getHours() > 12 ? 'PM' : 'AM';
      this.UI.second.style.transform = `rotate(${seconds}deg)`;
      this.UI.minute.style.transform = `rotate(${minutes}deg)`;
      this.UI.hour.style.transform = `rotate(${hours}deg)`;
  
      requestAnimationFrame(() => this.updateClock2());
    }
  
    initializeClock2() {
      this.clock2El.innerHTML = `<svg class="clock2face" width="300" height="300" viewBox="-150 -150 300 300">
        <circle class="ring ring--seconds" r="145" pathlength="60" />
        <circle class="ring ring--hours" r="145" pathlength="12" />
        <text x="20" y="-4" class="date">23</text>
        <text x="20" y="10" class="am-pm">am</text>
        <line class="hand hand--minute" x1="0" y1="2" x2="0" y2="-110" />
        <line class="hand hand--hour" x1="0" y1="2" x2="0" y2="-60" />
        <circle class="ring ring--center" r="3" />
        <line class="hand hand--second" x1="0" y1="12" x2="0" y2="-130" />
      </svg>`;
      this.UI.date = this.clock2El.querySelector('.date');
      this.UI.am_pm = this.clock2El.querySelector('.am-pm');
      this.UI.second = this.clock2El.querySelector('.hand--second');
      this.UI.minute = this.clock2El.querySelector('.hand--minute');
      this.UI.hour = this.clock2El.querySelector('.hand--hour');
  
      requestAnimationFrame(() => this.updateClock2());
    }
  }
  
  const clock2s = document.querySelectorAll('.clock2');
  clock2s.forEach(el => new Clock2(el))
    