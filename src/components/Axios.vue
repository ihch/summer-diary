<template>
  <div>
    hoge
    {{ data }}
  </div>
</template>

<script>

export default {
  name: "Axios",
  props: {
    data: {},
  },
  mounted () {
    // let headers = {
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   'Access-Control-Allow-Origin': '*',
    // };
    this.$axios
      .get(
        "https://api.coindesk.com/v1/bpi/currentprice.json",
        // "/api/v1/bpi/currentprice.json",
        // "https://localhost:5042/hoge",
        // { headers: headers },
        )
      .then(response => {
        this.data = response
        // eslint-disable-next-line
        console.log(response.data)
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error)
      });
  }
}
</script>

<style lang="stylus">
</style>