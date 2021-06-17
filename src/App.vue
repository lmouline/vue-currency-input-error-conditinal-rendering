<template>
  <div id="app">
    <input v-if="condition" ref="inputRef" v-model="formattedValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue-demi";
import useCurrencyInput from "vue-currency-input";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { inputRef, formattedValue } = useCurrencyInput({ currency: "EUR" });

    const condition = ref(false);
    setTimeout(() => {
      condition.value = true;
    }, 0);

    return {
      condition,
      inputRef,
      formattedValue,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
