<template>
  <ion-app class="hello">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Ionic + Vue App
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div style="font-size:60px;">{{ timeFormat }}</div>
      <button v-if="!isTimerState" @click="start()">start</button>
      <button v-else @click="stop()">stop</button>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isTimerState: false,
      timer: null,
      hour: 1,
      minits: 0,
      seconds: 0
    }
  },
  computed: {
    timeFormat () {
      let h,m,s;
      if(this.hour < 10){
        h = `0${this.hour}`;
      }else {
        h = `${this.hour}`;
      }
      if(this.minits < 10){
        m = `0${this.minits}`;
      }else {
        m = `${this.minits}`;
      }
      if(this.seconds < 10){
        s = `0${this.seconds}`;
      }else {
        s = `${this.seconds}`;
      }
      return `${h}:${m}:${s}`;
    }
  },
  methods: {
    count() {
      if(this.seconds <= 0 && this.minits >= 0 && this.hour >= 1){
        this.hour--;
        this.minits = this.seconds = 59;
      } else if(this.seconds <= 0 && this.minits >= 1){
        this.minits--;
        this.seconds = 59;
      } else if(this.seconds <= 0 && this.minits <=0) {
        // 終了後の処理
      } else {
        this.seconds--;
      }
    },
    start() {
      this.isTimerState = true;
      this.timer = setInterval(() => {this.count()},1000);
    },
    stop() {
      clearInterval(this.timer);
      this.isTimerState = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
