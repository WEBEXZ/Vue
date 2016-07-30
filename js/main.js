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
      if(actividad.trim()) {
        this.nuevaActividad = "";
        this.actividades.push({nombre: actividad});
      }else {
        alert("Introducir Texto!!");
      }
    }
  }
})
