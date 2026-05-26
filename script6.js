class Clock6 {
    constructor(el) {
      this.clock6El = el;
      this.UI = {};
      this.initializeClock6();
    }
  
    updateClock6() {
      const now = new Date();
      const options = { timeZone: 'Africa/Cairo' };
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
  
      requestAnimationFrame(() => this.updateClock6());
    }
  
    initializeClock6() {
      this.clock6El.innerHTML = `<svg class="clock6face" width="300" height="300" viewBox="-150 -150 300 300">
        <circle class="ring ring--seconds" r="145" pathlength="60" />
        <circle class="ring ring--hours" r="145" pathlength="12" />
        <text x="20" y="-4" class="date">23</text>
        <text x="20" y="10" class="am-pm">am</text>
        <line class="hand hand--minute" x1="0" y1="2" x2="0" y2="-110" />
        <line class="hand hand--hour" x1="0" y1="2" x2="0" y2="-60" />
        <circle class="ring ring--center" r="3" />
        <line class="hand hand--second" x1="0" y1="12" x2="0" y2="-130" />
      </svg>`;
      this.UI.date = this.clock6El.querySelector('.date');
      this.UI.am_pm = this.clock6El.querySelector('.am-pm');
      this.UI.second = this.clock6El.querySelector('.hand--second');
      this.UI.minute = this.clock6El.querySelector('.hand--minute');
      this.UI.hour = this.clock6El.querySelector('.hand--hour');
  
      requestAnimationFrame(() => this.updateClock6());
    }
  }
  
  const clock6s = document.querySelectorAll('.clock6');
  clock6s.forEach(el => new Clock6(el))
    