new Vue({
  el: "body",
  data: {
      titulo: "Actividades",
      actividades: [
        {nombre: "Limpiar Oficina"},
        {nombre: "Comprar Hojas"}
      ],
      nuevaActividad: ''
  },
  methods: {
    guardarActividad: function(actividad) {
      this.actividades.push({nombre: actividad});
      this.nuevaActividad = "";
    }
  }
})
