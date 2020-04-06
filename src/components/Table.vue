<template>
  <div class="table">
    <p
      v-for="item in tableData"
      :key="item.index"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array,
      require: true,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
}
</script>
