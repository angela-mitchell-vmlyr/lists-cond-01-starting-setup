const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      person: { name: 'Angela', age: 32 }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');
