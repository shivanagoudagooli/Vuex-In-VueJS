<template>
  <div>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters([
      'getName'
      ])
  },
  mounted() {
    fetch("http://www.splashbase.co/api/v1/images/latest")
      .then(Response => {
        return Response.json();
      })
      .then(myJson => {
        this.setName(myJson);
      });

  
  },
  methods: {
    ...mapMutations([
      'setName'
      ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
